import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  content: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 70,
    height: '100%'
  },

  image: {
    width: 28,
    height: 28
  },

  text: {
    color: "white",
    alignSelf: "center",
    fontSize: 10,
    marginTop: 5,
    marginBottom: 6
  },

  background: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
