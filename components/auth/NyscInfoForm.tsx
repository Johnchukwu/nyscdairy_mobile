
import { View, TextInput, StyleSheet } from "react-native";

export default function NyscInfoForm({
  state,
  setState,
  batch,
  setBatch,
  stream,
  setStream
}: any) {
  return (
    <View>
      <TextInput
        placeholder="State of deployment"
        value={state}
        onChangeText={setState}
        style={styles.input}
      />

      <TextInput
        placeholder="Batch (e.g. Batch C)"
        value={batch}
        onChangeText={setBatch}
        style={styles.input}
      />

      <TextInput
        placeholder="Stream (e.g. Stream 2)"
        value={stream}
        onChangeText={setStream}
        style={styles.input}
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
  }
});
