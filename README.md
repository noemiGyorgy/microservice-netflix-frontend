# Netflix Reviews

Netflix Reviews is a software that is a network of loosely coupled web services for writting reviews about Netflix movies and series. The different services communicate over REST Apis.

Technical goal of Netflix Reviews was practicing how to create microservices. The backend is written in Java, using Spring, and the frontend is a React app. 

Before you start this app, follow the steps of the [backend configuration](https://github.com/noemiGyorgy/microservices-netflix)

## Usage

The app will be deployed later, so these steps are necessary to start the application.

Clone this repository:

```
git clone git@github.com:noemiGyorgy/microservices-netflix-frontend.git
```

Install packages:
```
npm i react
npm i react-dom
npm i react-router-dom
npm i react-scripts
npm i react-bootstrap
npm i axios
```

Create an .env file with these environment variables:
```
REACT_APP_SERVER=http://localhost:8762/video/videos
REACT_APP_VIDEO_DETAILS=/details
REACT_APP_ADD_REVIEW=/addReview
```

Start the application:
```
npm start
```
