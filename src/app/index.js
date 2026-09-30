import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../components/AppButton";
import { StudentCard } from "../components/StudentCard";
import { student } from "../config/student";
import { colors } from "../theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <View style={styles.container}>
        <View style={styles.top}><Text style={styles.appName}>EXPLORADOR</Text><Text style={styles.period}>MÓDULO 5 · 2026</Text></View>
        <View style={styles.hero}><Text style={styles.kicker}>ACTIVIDAD EVALUADA</Text><Text style={styles.title}>Perfil y{ "\n" }personajes.</Text><Text style={styles.subtitle}>Una vista personal y un catálogo conectado a una API pública.</Text></View>
        <StudentCard student={student} />
        <AppButton label="Explorar personajes  →" onPress={() => router.push("/explorar")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { backgroundColor: colors.surface, flex: 1 },
  container: { flex: 1, justifyContent: "space-between", padding: 24 },
  top: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" },
  appName: { color: colors.navy, fontSize: 16, fontWeight: "900", letterSpacing: 1.1 },
  period: { color: colors.muted, fontSize: 10, fontWeight: "800", letterSpacing: 1 },
  hero: { marginTop: 28 },
  kicker: { color: colors.ocean, fontSize: 11, fontWeight: "800", letterSpacing: 1.5 },
  title: { color: colors.ink, fontSize: 39, fontWeight: "900", letterSpacing: -1.6, lineHeight: 44, marginTop: 9 },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 22, marginTop: 11, maxWidth: 310 },
});
