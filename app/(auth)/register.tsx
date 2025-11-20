
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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useAuth } from "../../hooks/useAuth";
import { useGoogleSignIn } from "../../hooks/useGoogleSignIn";


export default function Register() {
  const router = useRouter();
  const { setAuthFromLogin } = useAuth();

  const [fullName, setFullName] = useState("");
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

  const handleRegister = async () => {
    if (!fullName || !email || !password) {
      Alert.alert("Missing fields", "Fill all fields");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(result.user, { displayName: fullName });
      const user = result.user;
      if (!user) {
        Alert.alert("Error", "Failed to create user");
        return;
      }

      await updateProfile(user, { displayName: fullName });
      const idToken = await user.getIdToken();

      setAuthFromLogin(idToken, {
        id: user.uid,
        fullName,
        email
      });

      router.replace("/(tabs)/home");
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={promptGoogleSignIn}
      >
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={styles.or}>or</Text>

      <TextInput
        placeholder="Full name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.link}>Already registered? Log in</Text>
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
  buttonText:{ color:"#fff", fontSize:16 },
  link:{ textAlign:"center", marginTop:16, color:"#16a34a" }
});
