"use strict"

const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      cors = require('cors'),
      port = process.env.PORT || 3000,
      fetch = require('node-fetch'),
      urls = [
        'https://api.spacexdata.com/v3/launches',
        'https://api.spacexdata.com/v3/rockets'
      ],
      db = require('./firebase/index')

app.use(cors({
  origin: 'http://localhost:8000'
}))
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies
 
app.get('/', (req, res) =>  {

  Promise.all(urls.map(url =>
    fetch(url)
      .then(parseJSON)
      .catch(error => console.log('There was a problem! :(', error))
  ))
  .then(data => {
    const launches = data[0],
          rockets = data[1]
    let merged
    
    try {
      merged = mergeArrays(launches,rockets)
    } catch (e) {
      throw new Error(e)
    }

    return res.send(merged)
  })
  .catch(e => {
    console.log(e);
    res.status(500).send(new Error(e));
  })
    
})

app.post('/fav-launch', (req,res) => {
  
  const userId = req.body.userId,
        launchId = req.body.launchId,
        status = req.body.status

  db.collection('users').doc(userId).update({
    [launchId]: status
  }, {merge: true}).then(() => {
    res.send('saved in firestore :D')
  }).catch(err => {
    res.status(500).send(err.message)
  })
  
})

app.listen(port)
console.log(`Server listening on port ${port}!`)

const parseJSON = (response) => {
  return response.json()
}

const mergeArrays = (l,r) => {
  return l.map(launch => {

    let rocket = r.find(el => el.rocket_id === launch.rocket.rocket_id)

    delete launch.rocket.rocket_type
    delete launch.rocket.first_stage
    delete launch.rocket.second_stage
    delete launch.rocket.fairings

    launch.rocket.description = rocket.description
    launch.rocket.country = rocket.country
    launch.rocket.company = rocket.company
    launch.rocket.cost_per_launch = rocket.cost_per_launch
    launch.rocket.images = rocket.flickr_images

    return launch
  })
}
