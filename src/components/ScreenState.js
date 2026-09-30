import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { AppButton } from "./AppButton";
import { colors } from "../theme";

export function LoadingState() {
  return <View style={styles.container}><ActivityIndicator color={colors.navy} size="large" /><Text style={styles.text}>Consultando personajes…</Text></View>;
}

export function ErrorState({ message, onRetry }) {
  return <View style={styles.container}><Text style={styles.title}>No se pudieron cargar los datos</Text><Text style={styles.text}>{message}</Text><AppButton label="Intentar de nuevo" onPress={onRetry} variant="secondary" /></View>;
}

const styles = StyleSheet.create({
  container: { alignItems: "center", gap: 14, paddingHorizontal: 28, paddingTop: 56 },
  title: { color: colors.ink, fontSize: 18, fontWeight: "800", textAlign: "center" },
  text: { color: colors.muted, lineHeight: 21, textAlign: "center" },
});
