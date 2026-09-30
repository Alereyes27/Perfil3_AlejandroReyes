import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

export function CharacterCard({ character }) {
  const description = `${character.name} es un personaje ${character.status?.toLowerCase() || "sin estado"}, de especie ${character.species || "desconocida"}. Su origen es ${character.origin?.name || "desconocido"}.`;
  return (
    <View style={styles.card}>
      <Image accessibilityLabel={`Imagen de ${character.name}`} source={{ uri: character.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.statusRow}>
          <View style={[styles.dot, character.status === "Alive" ? styles.alive : styles.other]} />
          <Text style={styles.status}>{character.status || "Unknown"}</Text>
        </View>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderColor: colors.mist, borderRadius: 20, borderWidth: 1, flexDirection: "row", marginBottom: 14, overflow: "hidden" },
  image: { backgroundColor: colors.mist, height: 136, width: 116 },
  content: { flex: 1, padding: 14 },
  statusRow: { alignItems: "center", flexDirection: "row", gap: 6 },
  dot: { borderRadius: 5, height: 9, width: 9 },
  alive: { backgroundColor: "#259A63" },
  other: { backgroundColor: colors.muted },
  status: { color: colors.muted, fontSize: 11, fontWeight: "700" },
  name: { color: colors.ink, fontSize: 18, fontWeight: "800", lineHeight: 23, marginTop: 7 },
  description: { color: colors.muted, fontSize: 12, lineHeight: 17, marginTop: 6 },
});
