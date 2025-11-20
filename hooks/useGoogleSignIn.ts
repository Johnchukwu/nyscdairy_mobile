import "../firebase";

import { auth } from "../firebase";


import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import {
  GoogleAuthProvider,
  signInWithCredential,
  type User as FirebaseUser
} from "firebase/auth";


WebBrowser.maybeCompleteAuthSession();

export function useGoogleSignIn(
  onSuccess: (user: FirebaseUser, idToken: string) => void
) {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com"
  });

  async function promptGoogleSignIn() {
    const result = await promptAsync();

    if (result?.type === "success" && result.authentication?.idToken) {
      const credential = GoogleAuthProvider.credential(
        result.authentication.idToken
      );

      const firebaseResult = await signInWithCredential(auth, credential);
      const idToken = await firebaseResult.user.getIdToken();

      onSuccess(firebaseResult.user, idToken);
    }
  }

  return { promptGoogleSignIn };
}
