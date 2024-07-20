import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Pressable,
} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { Link } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard, GameCard } from "./GameCard";
import { Logo } from "./Logo";
import { FontAwesome6 } from "@expo/vector-icons";
export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View className="bg-zinc-900" >

      {games.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={"#fff"} />
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </View>
  );
}
