import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { CharacterCard } from "../components/CharacterCard";
import { ErrorState, LoadingState } from "../components/ScreenState";
import { useCharacters } from "../hooks/useCharacters";
import { colors } from "../theme";

export default function ExploreScreen() {
  const { characters, loading, error, refresh } = useCharacters();
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <View style={styles.header}>
        <Pressable accessibilityRole="button" accessibilityLabel="Volver al perfil" onPress={() => router.back()} style={styles.back}><Text style={styles.backText}>←</Text></Pressable>
        <View><Text style={styles.eyebrow}>RICK AND MORTY API</Text><Text style={styles.title}>Personajes</Text></View>
      </View>
      {loading ? <LoadingState /> : error ? <ErrorState message={error} onRetry={refresh} /> : <FlatList data={characters} keyExtractor={(item) => String(item.id)} renderItem={({ item }) => <CharacterCard character={item} />} contentContainerStyle={styles.list} showsVerticalScrollIndicator={false} ListHeaderComponent={<Text style={styles.intro}>Resultados obtenidos con fetch y async/await desde la API pública.</Text>} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { backgroundColor: colors.surface, flex: 1 },
  header: { alignItems: "center", borderBottomColor: colors.mist, borderBottomWidth: 1, flexDirection: "row", gap: 13, padding: 20 },
  back: { alignItems: "center", backgroundColor: colors.mist, borderRadius: 12, height: 42, justifyContent: "center", width: 42 },
  backText: { color: colors.navy, fontSize: 22, fontWeight: "700" },
  eyebrow: { color: colors.ocean, fontSize: 10, fontWeight: "800", letterSpacing: 1.2 },
  title: { color: colors.ink, fontSize: 26, fontWeight: "900", letterSpacing: -0.7, marginTop: 2 },
  list: { padding: 20, paddingBottom: 28 },
  intro: { color: colors.muted, fontSize: 13, lineHeight: 19, marginBottom: 17 },
});
