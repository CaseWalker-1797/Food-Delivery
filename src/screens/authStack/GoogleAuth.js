import auth from "@react-native-firebase/auth";
import { useEffect } from "react";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";


const onGoogleButtonPress = async () => {
  try {
  //   await GoogleSignin.hasPlayServices()
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  console.log("---------");

  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  console.log("idToken : " + JSON.stringify(idToken));
  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  console.log("googleCredential : " + JSON.stringify(googleCredential));

  const user = auth().signInWithCredential(googleCredential);
  console.log("auth : " + JSON.stringify(user));

  // Sign-in the user with the credential
 return user;
  } catch (error) {
    console.log("error : " + JSON.stringify(error));
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log("User Cancelled the login flow");
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log("operation (e.g. sign in) is in progress already");
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log("play services not available or outdated");
    } else {
      // some other error happened
      console.log("error ++++++++ : " + JSON.stringify(error));
    }
    return (error);
  }
};
export default onGoogleButtonPress;
