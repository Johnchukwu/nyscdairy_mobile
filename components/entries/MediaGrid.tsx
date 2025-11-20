
import { View, Image, StyleSheet } from "react-native";

export default function MediaGrid({ media }: { media: string[] }) {
  return (
    <View style={styles.grid}>
      {media.map((m, i) => (
        <Image key={i} source={{ uri: m }} style={styles.img} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  img: { width: 100, height: 100, borderRadius: 10 }
});
