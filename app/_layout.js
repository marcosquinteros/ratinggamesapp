import { Link, Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Logo } from "../components/Logo";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Layout() {
    return (
        <View className="flex-1">
            <Stack
            screenOptions={{
                headerStyle:{backgroundColor: "black"},
                headerTintColor: "yellow",
                headerTitle: "",
                headerLeft: () => <Logo />,
                headerRight: () => (<Link asChild href="/about">
                    <Pressable>
                      <FontAwesome6 name="circle-info" size={24} color="white" />
                    </Pressable>
                  </Link>)
            }}/>
        </View>
    )
}