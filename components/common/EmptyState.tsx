
import { View, Text, StyleSheet } from "react-native";

export default function EmptyState({ message }: { message: string }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 20, alignItems: "center" },
  text: { color: "#666" }
});
