import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { Ionicons } from "@expo/vector-icons";

export default function CardPixPagamento({ valor }) {
  const pixKey = "00020126456789";

  const [copiado, setCopiado] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const qrCodeImage = {
    uri: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PIX123",
  };

  const handleCopy = async () => {
    await Clipboard.setStringAsync(pixKey);

    setCopiado(true);

    // animação aparecer
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();

    // desaparecer depois
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();

      setCopiado(false);
    }, 1800);
  };

  const handleConfirm = () => {
    console.log("Pagamento confirmado");
  };

  return (
    <View style={styles.card}>
      {/* QR CODE */}
      <View style={styles.qrContainer}>
        <Image source={qrCodeImage} style={styles.qrImage} />
      </View>

      {/* VALOR */}
      <Text style={styles.labelCenter}>Valor a pagar</Text>
      <Text style={styles.valor}>R$ {valor}</Text>

      {/* CHAVE PIX */}
      <Text style={styles.copyLabel}>Copie o código PIX</Text>

      <View style={styles.copyContainer}>
        <Text style={styles.pixKey} numberOfLines={1}>
          {pixKey}
        </Text>

        <TouchableOpacity
          style={[
            styles.copyButton,
            copiado && styles.copyButtonActive,
          ]}
          onPress={handleCopy}
          activeOpacity={0.7}
        >
          <Ionicons
            name={copiado ? "checkmark" : "copy-outline"}
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* FEEDBACK ANIMADO */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.copiadoText}>Código copiado</Text>
      </Animated.View>

      {/* BOTÃO CONFIRMAR */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirm}
        activeOpacity={0.8}
      >
        <Text style={styles.confirmText}>Confirmar Pagamento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#080e1a",
    borderRadius: 16,
    margin: 5,
    padding: 20,
    borderWidth: 1,
    borderColor: "#1f2a37",
  },

  qrContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    padding: 16,
    marginBottom: 20,
  },

  qrImage: {
    width: 180,
    height: 180,
  },

  labelCenter: {
    color: "#9ca3af",
    textAlign: "center",
    fontSize: 14,
  },

  valor: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 4,
  },

  copyLabel: {
    color: "#e5e7eb",
    marginBottom: 8,
    fontSize: 14,
  },

  copyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0f1d2a",
    borderRadius: 10,
    padding: 12,
  },

  pixKey: {
    flex: 1,
    color: "#fff",
    fontSize: 13,
  },

  copyButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: "#1f2937",
    borderRadius: 8,
  },

  copyButtonActive: {
    backgroundColor: "#22c55e",
  },

  copiadoText: {
    color: "#22c55e",
    marginTop: 10,
    fontSize: 13,
    textAlign: "center",
  },

  confirmButton: {
    backgroundColor: "#facc15",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },

  confirmText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});