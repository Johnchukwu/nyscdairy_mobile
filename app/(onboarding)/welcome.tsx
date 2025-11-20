import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import { setOnboardingDone } from "../../services/storage/tokenStorage";

export default function Welcome() {
  const router = useRouter();

  const handleStart = async () => {
    await setOnboardingDone(true);
    router.push("/(auth)/register");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg.jpg")}   // background image here
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/images2.jpeg")}
          style={styles.logo}
        />

        <Text style={styles.title}>NYSC Camp Diary</Text>

        <Text style={styles.subtitle}>
          Save your daily camp memories, photos and videos.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleStart}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text style={styles.link}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "rgba(255,255,255,0.6)" // optional blur effect
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 6
  },
  subtitle: {
    textAlign: "center",
    color: "#201f1f",
    marginBottom: 30
  },
  button: {
    width: "100%",
    backgroundColor: "#16a34a",
    padding: 14,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 14
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  },
  link: {
    color: "#191d1b",
    fontSize: 14
  }
});
