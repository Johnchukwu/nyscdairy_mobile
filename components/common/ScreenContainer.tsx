
import { View, StyleSheet } from "react-native";

export default function ScreenContainer({ children }: { children: any }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  }
});
