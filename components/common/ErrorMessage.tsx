
import { Text, StyleSheet } from "react-native";

export default function ErrorMessage({ text }: { text: string }) {
  if (!text) return null;
  return <Text style={styles.error}>{text}</Text>;
}

const styles = StyleSheet.create({
  error: { color: "red", marginBottom: 10, textAlign: "center" }
});
