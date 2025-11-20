
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default function SocialLoginButtons({ onGoogle }: { onGoogle: () => void }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onGoogle}>
        <Image
          source={require("../../assets/icons/google.png")}
          style={styles.icon}
        />
        <Text style={styles.text}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", marginBottom: 20 },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  icon: { width: 20, height: 20, marginRight: 10 },
  text: { fontSize: 15 }
});
