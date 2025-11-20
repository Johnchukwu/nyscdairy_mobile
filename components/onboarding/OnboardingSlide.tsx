
import { View, Text, Image, StyleSheet } from "react-native";

export default function OnboardingSlide({
  image,
  title,
  subtitle
}: {
  image: any;
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", paddingHorizontal: 24 },
  img: { width: 250, height: 250, marginBottom: 24, resizeMode: "contain" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 8 },
  sub: { textAlign: "center", color: "#666" }
});
