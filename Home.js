import React from 'react';
import { Text, ImageBackground, View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("./assets/backgroundimage.png")} 
        resizeMode="cover" 
        style={styles.image}
      >
      <TouchableOpacity style={styles.back}
      onPress={() => navigation.navigate('Login')}
      >
        <Ionicons style={styles.backText} name="arrow-back-outline" size={50} color="#2DB4E9" />
        </TouchableOpacity>
        <Text style={styles.text}>Home Screen!</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  back: {
    justifyContent: "center",
    alignItems: "flex-start",
    bottom: 320,
    margin: 20,
  },
  backText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Home;