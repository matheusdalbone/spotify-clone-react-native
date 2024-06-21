import { Pressable, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";

function Btn( { title, btnStyle, textStyle }: any ){
  const [fontsLoaded] = useFonts({
    'Gotham': require('../../../assets/font/GothamMedium.ttf'),
  });

  return(
    <>
     <Pressable style={[styles.btn, btnStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
     </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 'auto',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    backgroundColor: 'rgba(42,42,42,255)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: 'white',
    fontFamily: 'Gotham',
    fontSize: 12
  },
}
)

export default Btn;