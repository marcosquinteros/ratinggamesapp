import { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, Animated } from "react-native";

export function GameCard({game}) {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.score}>{game.score}</Text>
      <Text style={styles.description}>{game.description}</Text>
    </View>
  );
}
export function AnimatedGameCard({game, index}) {
    const opacity = useRef(new Animated.Value(0)).current
    useEffect(()=>{
        Animated.timing(opacity, {
            toValue: 1,
            duration: 250,
            delay: index * 500,
            useNativeDriver: true
        }).start()
    }, [opacity, index])
    return (
        <Animated.View style={{opacity}}>
            <GameCard game={game}/>
        </Animated.View>
    )
}



const styles = StyleSheet.create({
    card: {
      marginBottom: 10,
      backgroundColor: "#1e1e1e",
      padding: 15,
      borderRadius: 10,
      alignItems: "",
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    title: {
      color: "white",
      fontSize: 20,
      marginTop: 10,
    },
    description: {
      color: "gray",
      fontSize: 14,
      marginTop: 5,
      textAlign: "center",
    },
    score: {
      color: "lightgreen",
      fontSize: 20,
      marginTop: 10,
      fontWeight: "bold",
    },
  });
  