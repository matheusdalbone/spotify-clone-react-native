import Btn from "../../components/Button";
import { StatusBar, StyleSheet, View, ScrollView, Text, FlatList } from "react-native";
import { Image } from "expo-image";
import PlaylistCards from "../../components/PlaylistCards";
import playlistPhotos from "./playlistPhotos.json"
import recommendedPlaylist from "./recommendedPlaylist.json";
import RecommendedPlaylist from "../../components/RecommendedPlaylist";
import Footer from "../../components/Footer";

function Home() {
  const ItemPlaylist = ({title, image}: any) => (
    <PlaylistCards title={title} image={image}/>
  )

  const ItemRecommended = ({title, image}: any) => (
    <RecommendedPlaylist title={title} image={image}/>
  )

  return(<>

  <View style={styles.container}>
  <StatusBar backgroundColor={'rgba(11,11,11,255)'}></StatusBar>
    <View style={styles.headerContainer}>
      <View style={styles.header}>
          <Image
          source='https://th.bing.com/th/id/OIP.yUUmQNLVwi1SvrxnGQvvqwAAAA?rs=1&pid=ImgDetMain'
          style={styles.image}
          />
          <Btn title={"Tudo"} btnStyle={{backgroundColor: 'rgba(30,215,96,255)'}} textStyle={{color: 'black'}}></Btn>
          <Btn title={"Músicas"}></Btn>
          <Btn title={"Podcasts"}></Btn>
        </View>
    </View>
    <ScrollView>
      <View style={styles.playlists}>
        <FlatList
          data={playlistPhotos}
          renderItem={({item}) => <ItemPlaylist title={item.title} image={item.url}></ItemPlaylist>}
          numColumns={2}
          horizontal={false}
          contentContainerStyle={{ gap: 8 }}
          columnWrapperStyle={{ gap: 8 }}
        />
      </View>
      <View style={styles.main}>
        <Text style={styles.text}> O melhor de cada artista</Text>
        <FlatList
          data={recommendedPlaylist.bestArtists}
          renderItem={({item}) => <ItemRecommended title={item.title} image={item.url}></ItemRecommended>}
          horizontal={true}
          contentContainerStyle={{ gap: 14}}
          style={{marginLeft: 8, marginTop: 20, marginRight: 12}}
        />
        <Text style={[styles.text, {marginTop: 36, marginLeft: 8}]}>Estações recomendadas</Text>
        <FlatList
          data={recommendedPlaylist.stations}
          renderItem={({item}) => <ItemRecommended title={item.title} image={item.url}></ItemRecommended>}
          horizontal={true}
          contentContainerStyle={{ gap: 14}}
          style={{marginLeft: 8, marginTop: 20, marginRight: 12, marginBottom: 100}}
        />
      </View>
    </ScrollView>
    <Footer></Footer>
  </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(18,18,18,255)',
  },

  headerContainer: {
    backgroundColor: 'rgba(18,18,18,255)',
  },

  header: {
    height: 34,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    marginLeft: 12,
    gap: 8,
  },

  image: {
    height: '100%',
    width: 36,
    borderRadius: 30
  },

  playlists: {
    flex: 1,
    marginLeft: 12,
    marginRight: 10,
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: 30,
  },

  main: {
    flex: 30,
    marginLeft: 7
  },

  text: {
    fontFamily: 'sans-serif',
    fontWeight: '900',
    color: 'white',
    fontSize: 22
  },

})

export default Home;