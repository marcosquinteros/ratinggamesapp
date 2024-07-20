import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
export default function Detail() {
    const {id} = useLocalSearchParams()
    return (
        <View className="flex-1 bg-zinc-900 justify-center items-center">
            <View>
                <Text className="text-white">Detalle del juego {id}</Text>
                <Link className="text-blue-500" href='/'>Volver atras</Link>
            </View>
        </View>
    )
}