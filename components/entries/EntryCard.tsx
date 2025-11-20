
import { View, Text, StyleSheet } from "react-native";

export default function EntryCard({ title, date }: { title: string; date: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    marginBottom: 12
  },
  title: { fontSize: 16, fontWeight: "bold" },
  date: { fontSize: 12, color: "#555" }
});
