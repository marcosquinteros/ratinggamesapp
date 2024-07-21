import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Screen } from "../components/Screen";
export default function About() {
  return (
    <Screen>

    <ScrollView >
      <Link asChild href="/">
        <Pressable>
          <FontAwesome name="home" size={24} color="white" />
        </Pressable>
      </Link>

      <Text className="text-white font-bold mb-8 text-2xl">
        Sobre el proyecto
      </Text>
      <Text className="text-white text-white/90 mb-4 text-xl">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </Text>
      <Text className="text-white text-white/90 mb-4 text-xl">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </Text>
      <Text className="text-white text-white/90 mb-4 text-xl">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      </Text>
    </ScrollView>
    </Screen>
  );
}
