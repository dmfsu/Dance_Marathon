import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBi9kzXlehm5kXZPBBrFoRYNudv3YEGfnc",
  authDomain: "dance-marathon.firebaseapp.com",
  databaseURL: "https://dance-marathon.firebaseio.com",
  storageBucket: "dance-marathon.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
