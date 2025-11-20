
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TagSelector({
  value,
  onChange
}: {
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const tags = ["Parade", "Lecture", "Training", "Socials"];

  const toggle = (tag: string) => {
    if (value.includes(tag)) {
      onChange(value.filter((t) => t !== tag));
    } else {
      onChange([...value, tag]);
    }
  };

  return (
    <View style={styles.row}>
      {tags.map((tag) => (
        <TouchableOpacity
          key={tag}
          onPress={() => toggle(tag)}
          style={[styles.box, value.includes(tag) && styles.active]}
        >
          <Text>{tag}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  box: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  active: { backgroundColor: "#e0fce4", borderColor: "#16a34a" }
});
