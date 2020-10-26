import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAV-vLdO_f7XHoA7mah62JuJD7LsvO8hrU",
  authDomain: "my-project-a6bef.firebaseapp.com",
  databaseURL: "https://my-project-a6bef.firebaseapp.com",
  projectId: "my-project-a6bef",
  storageBucket: "react-luke.appspot.com",
  messagingSenderId: "1047339689596",
};
firebase.initializeApp(config);
export default firebase;
