
import { View, Text, StyleSheet } from "react-native";

export default function AuthHeader({ title }: { title: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { marginBottom: 20 },
  text: { fontSize: 24, fontWeight: "bold" }
});
