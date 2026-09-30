import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

export function StudentCard({ student }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.badge}><Text style={styles.badgeText}>P3</Text></View>
        <Text style={styles.eyebrow}>PERFIL DEL ESTUDIANTE</Text>
      </View>
      <Text style={styles.name}>{student.name}</Text>
      <View style={styles.divider} />
      <Detail label="CARNET" value={student.carnet} />
      <Detail label="SECCIÓN Y GRUPO" value={student.sectionAndGroup} />
    </View>
  );
}

function Detail({ label, value }) {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.navy, borderRadius: 28, overflow: "hidden", padding: 24 },
  header: { alignItems: "center", flexDirection: "row", gap: 12 },
  badge: { alignItems: "center", backgroundColor: colors.sky, borderRadius: 12, height: 42, justifyContent: "center", width: 42 },
  badgeText: { color: colors.ink, fontSize: 14, fontWeight: "900" },
  eyebrow: { color: colors.mist, fontSize: 11, fontWeight: "800", letterSpacing: 1.5 },
  name: { color: colors.surface, fontSize: 32, fontWeight: "800", letterSpacing: -1, lineHeight: 38, marginTop: 28 },
  divider: { backgroundColor: "rgba(252,255,255,0.26)", height: 1, marginVertical: 21 },
  detail: { marginBottom: 18 },
  detailLabel: { color: colors.sky, fontSize: 10, fontWeight: "800", letterSpacing: 1.2, marginBottom: 6 },
  detailValue: { color: colors.surface, fontSize: 16, lineHeight: 23 },
});
