

import { View, TextInput, StyleSheet } from "react-native";

export default function EntryForm({
  title,
  setTitle,
  note,
  setNote
}: {
  title: string;
  setTitle: (v: string) => void;
  note: string;
  setNote: (v: string) => void;
}) {
  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Write your memory..."
        value={note}
        onChangeText={setNote}
        style={[styles.input, styles.textArea]}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12
  },
  textArea: { height: 120 }
});
