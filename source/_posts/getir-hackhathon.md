---
title: Hackhathon Getir 2018
tags:
  - hackhathon
  - getir
  - angularjs
  - nodejs
  - route
  - google map api
categories:
  -  Coding
date: 2018-04-16 18:10:04
---

> It is a project developed for BiTaksi Getir Hackathon 2018. Detailed information can be found from below.

# Team Paketci!

![image](/images/1523149456799.jpg)

[Check our app from here](https://hackhathon-getir-2018.herokuapp.com/) which is deployed using heroku.

[Check github repo of app from here](https://github.com/mozanunal/paketci-backend)


![Timeline of our little project!](https://github.com/mozanunal/paketci-backend/blob/master/doc/images/timeLine.PNG?raw=true)

Getir Hackhathon 2018
Team Members: 
Sertan Sezgin Kutlu 
Ertuğrul Çınar
Mehmet Ozan Ünal

# Paketci App

Its a work on pack collection and delivery for courier and observer.

### Features:
By Backend:
1.Assign routes for couries by relate most efficent path.
2.Update states of packets.
3.Update states of couriers.

By Frontend
1.Courier see waypoints and pack to collect.
2.Observers see all couriers and pack states.
3.Adding new packs

### Used Libraries and API in frontend
1.Android Libraries
2.Java
3.Volley
4.Google Maps Directions API
5.Google Maps Javascript API
6.AngularJS

### Compleated Part of Frontend
Application is designed for used by cariers. It gave users to see which way courier should go and where to take packs.

In order to make it more stable, decions of disturbution made at backend in order to keep system stable for all users, this app communacte with backend by using asyncrounous http requests.

For async HTTPS requess, it been used Volley library in JSON Object and String responsed GET and POST requests.

App takes missions from backend and by communicating with Google Direcitons API, get caluclations of every shorth path waypoints which collect and carry pointed packs in missions and drawing them on a Map View.

In angular web app we see all packs and couriers with their missions and routes. Its allows users to add new packs to environment.

## BACKEND
![enter image description here](https://github.com/mozanunal/paketci-backend/blob/master/doc/images/backEndContainer.png?raw=true)
Data structure and Crud Outputs
Sample JSON files, it can be enchance according to packet number and courier number

/api/courier
```js
 [   {
     "_id": 0,
     "initLocation": {
       "lat": 40.73726833204571,
       "long": -111.86816435821093
     },
     "curLocation": {
       "lat": 40.73726833204571,
       "long": -111.86816435821093
     },
     "weightCapacity": 20,
     "remainingWeightCapacity": 18.2923904630732,
     "pieceCapacity": 8,
     "remainingPieceCapacity": 7,
     "routes": [
       {
         "_id": 1,
         "routeFromGoogle": "",
         "distance": 0.02248501759660298,
         "startLoc": {
           "lat": 40.73726833204571,
           "long": -111.86816435821093
         },
         "endLoc": {
           "lat": 40.73287234594392,
           "long": -111.84611325115227
         },
         "nearPacketsDistance": [
           -1
         ],
         "state": 1
       },
       {
         "_id": 3,
         "routeFromGoogle": "",
         "distance": 0.01372524844602735,
         "startLoc": {
           "lat": 40.73287234594392,
           "long": -111.84611325115227
         },
         "endLoc": {
           "lat": 40.745843583374935,
           "long": -111.84162666621344
         },
         "nearPacketsDistance": [
           -1
         ],
         "state": 1
       }
     ],
     "packets": [
       {
         "_id": 0,
         "initLocation": {
           "lat": 40.73287234594392,
           "long": -111.84611325115227
         },
         "destLocation": {
           "lat": 40.745843583374935,
           "long": -111.84162666621344
         },
         "weight": 1.707609536926801,
         "state": 1,
         "courier": {}
       }
     ]   } ]
```

/api/packet
```js
    [
      {
        "_id": 0,
        "initLocation": {
          "lat": 40.73287234594392,
          "long": -111.84611325115227
        },
        "destLocation": {
          "lat": 40.745843583374935,
          "long": -111.84162666621344
        },
        "weight": 1.707609536926801,
        "state": 1,
        "courier": {}
      }
    ]
```


/api/route
```js
 [   {
     "_id": 0,
     "routeFromGoogle": "",
     "distance": 0.027888779677731172,
     "startLoc": {
       "lat": 40.73726833204571,
       "long": -111.86816435821093
     },
     "endLoc": {
       "lat": 40.745843583374935,
       "long": -111.84162666621344
     },
     "nearPacketsDistance": [
       -1
     ],
     "state": 0   },   {
     "_id": 1,
     "routeFromGoogle": "",
     "distance": 0.02248501759660298,
     "startLoc": {
       "lat": 40.73726833204571,
       "long": -111.86816435821093
     },
     "endLoc": {
       "lat": 40.73287234594392,
       "long": -111.84611325115227
     },
     "nearPacketsDistance": [
       -1
     ],
     "state": 1   },   {
     "_id": 2,
     "routeFromGoogle": "",
     "distance": 0,
     "startLoc": {
       "lat": 40.73287234594392,
       "long": -111.84611325115227
     },
     "endLoc": {
       "lat": 40.73287234594392,
       "long": -111.84611325115227
     },
     "nearPacketsDistance": [
       -1
     ],
     "state": 0   },   {
     "_id": 3,
     "routeFromGoogle": "",
     "distance": 0.01372524844602735,
     "startLoc": {
       "lat": 40.73287234594392,
       "long": -111.84611325115227
     },
     "endLoc": {
       "lat": 40.745843583374935,
       "long": -111.84162666621344
     },
     "nearPacketsDistance": [
       -1
     ],
     "state": 1   } ]
```
## Route Optimization
![enter image description here](https://github.com/mozanunal/paketci-backend/blob/master/doc/images/routeOptimizeAlgrotihmVisualize.gif?raw=true)
Firstly, every courier has a route to common destination point. Then most efficient package route change apply. It's calculated with change of route distance according to package location. It will iterate until no package will left. But according to courier capacities, some of package can be over couriers' capacities; so you need to go second round.


```js
    "dependencies": {
        "body-parser": "~1.18.2",
        "cookie-parser": "~1.4.3",
        "debug": "~2.6.9",
        "express": "~4.15.5",
        "mathjs": "^3.20.2",
        "point-line-distance": "^1.0.0",
        "google_directions": "^0.6.0",
        "polyline": "^0.2.0",
        "request": "^2.83.0"
      }
```
