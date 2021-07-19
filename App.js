import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function App() {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.canvas}>
      <View style={styles.header}>
        <Image
          style={styles.logoImage}
          source={require("./src/assets/logo/logodonaPutih.png")}
        />
      </View>
      <View style={styles.contain}>
        <View style={styles.sectionImage}>
          <Ionicons style={styles.loginImage} name="wallet" size={200} />
        </View>

        <View style={styles.sectionText}>
          <Text style={styles.loginTitle}>Dompet digital untuk kamu!</Text>
          <Text style={[styles.loginText, { width: 300 }]}>
            Simpan uang serta kartu debit/kredit dengan praktis di DONA
          </Text>
        </View>

        <View style={styles.sectionInput}>
          <Text style={styles.loginText}>
            Masukan nomor HP kamu untuk lanjut
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="+62 881-1234-5678"
            keyboardType="numeric"
          ></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "#118eea",
    paddingBottom: 20,
  },

  header: {
    // backgroundColor: "coral",
    height: 80,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  logo: {
    height: "100%",
    width: 50,
    backgroundColor: "#aaa",
  },

  logoImage: {
    width: 100,
    height: 30,
  },

  contain: {
    alignItems: "center",
    flex: 1,
    // backgroundColor: "coral",
  },

  sectionImage: {
    // backgroundColor: "yellow",
    flex: 2,
    justifyContent: "center",
  },

  sectionText: {
    flex: 1,
    justifyContent: "center",
  },

  loginImage: {
    elevation: 5,
    color: "#fff",
  },

  loginText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },

  loginTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  sectionInput: {
    width: "100%",
    // backgroundColor: "orange",
    alignItems: "center",
  },

  input: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 300,
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});
