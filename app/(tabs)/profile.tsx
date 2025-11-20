
import { View, Text } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text>{user?.fullName}</Text>
      <Text>{user?.email}</Text>
      <Text style={{ marginTop:20 }} onPress={logout}>Logout</Text>
    </View>
  );
}
