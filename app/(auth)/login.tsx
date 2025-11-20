
// ⬇️ MUST be first
import "../../firebase"
import { auth } from "../../firebase"

// Then your other imports
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";


export default function Login() {
  const router = useRouter();
  const { setAuthFromLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { promptGoogleSignIn } = useGoogleSignIn((firebaseUser, idToken) => {
    setAuthFromLogin(idToken, {
      id: (firebaseUser as any).uid,
      fullName: (firebaseUser as any).displayName || "",
      email: (firebaseUser as any).email || ""
    });
    router.replace("/(tabs)/home");
  });

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Missing fields", "Enter email and password");
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (!result.user) {
        Alert.alert("Login failed", "No user returned from authentication.");
        return;
      }

      const idToken = await result.user.getIdToken();

      setAuthFromLogin(idToken, {
        id: result.user.uid,
        fullName: result.user.displayName || "",
        email: result.user.email || ""
      });

      router.replace("/(tabs)/home");
    } catch (err: any) {
      Alert.alert("Login failed", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={promptGoogleSignIn}
      >
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={styles.or}>or</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:24, justifyContent:"center" },
  title:{ fontSize:24, fontWeight:"bold", marginBottom:20 },
  googleButton:{
    borderWidth:1,
    borderColor:"#ccc",
    padding:12,
    borderRadius:8,
    alignItems:"center",
    marginBottom:16
  },
  googleText:{ fontSize:15 },
  or:{ textAlign:"center", marginBottom:16, color:"#666" },
  input:{ borderWidth:1, borderColor:"#ddd", padding:12, borderRadius:8, marginBottom:14 },
  button:{ backgroundColor:"#16a34a", padding:14, borderRadius:8, alignItems:"center" },
  buttonText:{ color:"#fff", fontSize:16 }
});
