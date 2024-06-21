import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";

function RecommendedPlaylist({ image, title }: any) {
  return(
    <>
      <View style={styles.container}>
        <Image source={image} style={styles.image} contentFit="cover"/>
        <Text style={styles.text} numberOfLines={2}> {title} </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 200,
  },

  image: {
    width: '100%',
    height: '80%'
  },

  text: {
    marginTop: 8,
    fontSize: 12.6,
    color: 'rgba(158,158,158,255)',
    fontFamily: 'sans-serif',
    fontWeight: '600'
  }

});


export default RecommendedPlaylist;