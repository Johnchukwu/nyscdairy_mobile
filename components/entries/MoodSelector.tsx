

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function MoodSelector({
  value,
  onSelect
}: {
  value: string;
  onSelect: (m: string) => void;
}) {
  const moods = ["Happy", "Tired", "Excited", "Neutral"];

  return (
    <View style={styles.row}>
      {moods.map((m) => (
        <TouchableOpacity
          key={m}
          onPress={() => onSelect(m)}
          style={[styles.box, value === m && styles.active]}
        >
          <Text>{m}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", marginBottom: 12, gap: 8 },
  box: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  active: { backgroundColor: "#dcfce7", borderColor: "#16a34a" }
});
