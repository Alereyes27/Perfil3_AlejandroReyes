import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../theme";

export function AppButton({ label, onPress, variant = "primary" }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        variant === "secondary" && styles.secondary,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.label, variant === "secondary" && styles.secondaryLabel]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.sky,
    borderRadius: 16,
    justifyContent: "center",
    minHeight: 56,
    paddingHorizontal: 20,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderColor: colors.mist,
    borderWidth: 1,
  },
  label: { color: colors.ink, fontSize: 16, fontWeight: "800" },
  secondaryLabel: { color: colors.navy },
  pressed: { opacity: 0.78, transform: [{ scale: 0.99 }] },
});
