import { Tabs } from "expo-router";
import { View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <FontAwesome name="home" size={24} color="white" />
        ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: () => (
            <FontAwesome6 name="circle-info" size={24} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
