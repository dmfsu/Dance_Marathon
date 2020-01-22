import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import {
  Platform,
  StatusBar,
  AsyncStorage,
  StyleSheet,
  View
} from "react-native";
port { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./navigation/AppNavigator";

/** @return {app} */
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

/** loads fonts */
async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/robot-dev.png"),
      require("./assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
      SavoyeLetPlain: require("./assets/fonts/SavoyeLetPlain.ttf"),
      ChalkboardSELight: require("./assets/fonts/chalkboard-se-light.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyBi9kzXlehm5kXZPBBrFoRYNudv3YEGfnc",
  authDomain: "dance-marathon.firebaseapp.com",
  databaseURL: "https://dance-marathon.firebaseio.com",
  storageBucket: "dance-marathon.appspot.com"
};

firebase.initializeApp(firebaseConfig);

/*
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBi9kzXlehm5kXZPBBrFoRYNudv3YEGfnc",
    authDomain: "dance-marathon.firebaseapp.com",
    databaseURL: "https://dance-marathon.firebaseio.com",
    projectId: "dance-marathon",
    storageBucket: "dance-marathon.appspot.com",
    messagingSenderId: "653052436337",
    appId: "1:653052436337:web:bb9f3b7c547b7a21e320d0",
    measurementId: "G-QVCM511Y2H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

*/