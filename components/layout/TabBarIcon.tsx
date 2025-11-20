

import { Feather } from "@expo/vector-icons";

export default function TabBarIcon({
  name,
  color,
  size
}: {
  name: any;
  color: string;
  size: number;
}) {
  return <Feather name={name} size={size} color={color} />;
}
