import React from "react";
import ReactDOM from "react-dom";
import store from "./variables/store.js";
//import { BrowserRouter } from "react-router-dom";
//in thise case we use hashroute. should switch if encounter problems
import { HashRouter, Route, Switch } from "react-router-dom";
import firebase from "firebase";
import indexRoutes from "routes/index.jsx";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

//firebase stuff
var config = {
    apiKey: "AIzaSyAQ_-MlxzLz3-e2L8VYcsY6FjSRw-jLoXc",
    authDomain: "dashboard-10955.firebaseapp.com", //testing phase
    databaseURL: "https://dashboard-10955.firebaseio.com",
    projectId: "dashboard-10955",
    storageBucket: "dashboard-10955.appspot.com",
    messagingSenderId: "578302428749"
};

try {
  firebase.initializeApp(config);
} catch (error) {}

var db = firebase.database();
db.ref("/").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_VAL", payload: data.val() });
    console.log('dispatched & displaying getstate:')
    console.log(store.getState());
  }
});

db.ref("/questionanswer").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_ANS_VAL", payload: data.val() });
    console.log("QnA dispatched & displaying getstate:");
    console.log(store.getState());
  }
});

db.ref("/newCharts").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_VAL", payload: data.val() });
    console.log("dispatched & displaying getstate:");
    console.log(store.getState());
  }
});

db.ref("/adminCharts").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_ADMIN_VAL", payload: data.val() });
    console.log("admin dispatched & displaying getstate:");
    console.log(store.getState());
  }
});

db.ref("/stuCharts").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_STU_VAL", payload: data.val() });
    console.log("student dispatched & displaying getstate:");
    console.log(store.getState());
  }
});

db.ref("/insCharts").on("value", data => {
  if (data.val()) {
    store.dispatch({ type: "SET_INST_VAL", payload: data.val() });
    console.log("instructor dispatched & displaying getstate:");
    console.log(store.getState());
  }
});

ReactDOM.render(
  <HashRouter>
  	<Provider store={store}>      
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route to={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
