
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function AppButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#16a34a",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
    width: "100%"
  },
  text: { color: "#fff", fontSize: 16 }
});
