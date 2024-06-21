import { View, Text} from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles"
import { LinearGradient } from "expo-linear-gradient";

const Footer = () => {
  return(
    <>
    <LinearGradient
          colors={['transparent','rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)']}
          style={styles.background}
      >
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source='https://img.icons8.com/?size=100&id=2797&format=png&color=FFFFFF' style={styles.image}></Image>
          <Text style={styles.text}> Início </Text>
        </View>
        <View style={styles.content}>
          <Image source='https://img.icons8.com/?size=100&id=7695&format=png&color=FFFFFF' style={styles.image}></Image>
          <Text style={styles.text}> Buscar </Text>
        </View>
        <View style={styles.content}>
          <Image source='https://img.icons8.com/?size=100&id=nNPJDqRml3ji&format=png&color=FFFFFF' style={styles.image}></Image>
          <Text style={styles.text}> Sua Biblioteca </Text>
        </View>
      </View>
      </LinearGradient>
    </>
  );
}

export default Footer;