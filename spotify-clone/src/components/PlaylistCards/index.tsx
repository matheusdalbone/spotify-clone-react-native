import { View, StyleSheet, Text} from "react-native";
import { Image } from "expo-image";

function PlaylistCards({ image, title }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.photoView}>
        <Image source={image} style={styles.image} contentFit="cover"/>
      </View>
      <View style={styles.playlistName}>
        <Text style={styles.name}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 189.1,
    height: 52,
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: 'rgba(42,42,42,255)',
  },

  photoView: {
    flex: 1,
  },

  image: {
    flex: 1,
    width: "100%",
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },

  playlistName: {
    flex: 2.4,
    justifyContent: 'center'
  },

  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 6
  }
});


export default PlaylistCards;