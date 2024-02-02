import auth from "@react-native-firebase/auth";
import { appleAuth } from "@invertase/react-native-apple-authentication";

async function onAppleButtonPress() {
  // Start the sign-in request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    // As per the FAQ of react-native-apple-authentication, the name should come first in the following array.
    // See: https://github.com/invertase/react-native-apple-authentication#faqs
    requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
  });

  // Ensure Apple returned a user identityToken
  if (!appleAuthRequestResponse.identityToken) {
    throw new Error("Apple Sign-In failed - no identify token returned");
  }

  // Create a Firebase credential from the response
  const { identityToken, nonce } = appleAuthRequestResponse;
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce
  );

  // Sign the user in with the credential
  return auth().signInWithCredential(appleCredential);
}

export default onAppleButtonPress;
