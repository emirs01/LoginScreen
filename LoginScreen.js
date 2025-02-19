import { useEffect } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const headerAnim = new Animated.Value(0);
  const inputAnim = new Animated.Value(0);
  const buttonAnim = new Animated.Value(0);
  const signUpTextAnim = new Animated.Value(0); 

  useEffect(() => {
    Animated.timing(headerAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(inputAnim, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(buttonAnim, {
      toValue: 1,
      duration: 1000,
      delay: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(signUpTextAnim, {
      toValue: 1,
      duration: 1000,
      delay: 900,
      useNativeDriver: true,
    }).start();
  }, [headerAnim, inputAnim, buttonAnim, signUpTextAnim]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ImageBackground source={require("./assets/backgroundimage.png")} resizeMode="cover" style={styles.image}>
            <Animated.View style={[styles.headerText, { 
              opacity: headerAnim, 
              transform: [{ translateY: headerAnim.interpolate({ inputRange: [0, 1], outputRange: [-100, 0] }) }] 
            }]}>
              <Text style={styles.text}>Login</Text>
            </Animated.View>
            <Animated.View style={[styles.inputview, { 
              opacity: inputAnim, 
              transform: [{ translateY: inputAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }] 
            }]}>
              <TextInput 
                placeholder="Username"
                style={styles.textInput1}
              /> 
            </Animated.View>
            <Animated.View style={[styles.inputview2, { 
              opacity: inputAnim, 
              transform: [{ translateY: inputAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }] 
            }]}>
              <TextInput 
                placeholder="Password"
                style={styles.textInput1}
                keyboardType="default"
              /> 
            </Animated.View>
            <Animated.View style={[styles.text2, { 
              opacity: signUpTextAnim, 
              transform: [{ translateY: signUpTextAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }] 
            }]}>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.textdont}>Don't have an account? <Text style={{ color: '#2DB4E9' }}>SignUp</Text></Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.button, { 
              opacity: buttonAnim, 
              transform: [{ translateY: buttonAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }] 
            }]}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </Animated.View>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </SafeAreaProvider>
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
    color: '#2DB4E9',
    fontSize: 60,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: 'center',
  },
  headerText: {
    bottom: 180,
  },
  inputview: {
    alignItems: "center",
    bottom: 40,
  },
  inputview2: {
    alignItems: "center",
    bottom: 10,
  },
  textInput1: {
    width: "80%",
    height: 50,
    borderRadius: 20,
    backgroundColor: "#FCFCFC",
    padding: 15,
  },
  text2: {
    alignItems: "flex-end",
    right: 50,
  },
  textdont: {
    fontSize: 10,
    fontWeight: "semibold",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    top: 220,
    left: 95,
    width: 230,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#2DB4E9",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "900",
    color: "white",
  },
});

export default LoginScreen;
