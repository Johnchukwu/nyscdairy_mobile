
import { Tabs } from "expo-router";
import React from "react";
import { Text } from "react-native";

type TabBarIconProps = {
  name: string;
  color?: string;
  size?: number;
};

const iconEmoji = (name: string) => {
  switch (name) {
    case "home":
      return "🏠";
    case "calendar":
      return "📅";
    case "star":
      return "⭐️";
    case "image":
      return "🖼️";
    case "user":
      return "👤";
    default:
      return "❓";
  }
};

const TabBarIcon = ({ name, color = "#000", size = 20 }: TabBarIconProps) => {
  return (
    <Text
      style={{
        color,
        fontSize: size,
        lineHeight: size,
      }}
      accessibilityRole="image"
      aria-label={name}
    >
      {iconEmoji(name)}
    </Text>
  );
};

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="highlights"
        options={{
          title: "Highlights",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="star" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="gallery"
        options={{
          title: "Gallery",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="image" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <TabBarIcon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
