import {Button, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';


const GetStarted = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Image source={require('../assets/pexels-cottonbro-studio-3951350.jpg')} style={styles.image} />
      <View style={styles.wrapperSlogan}>
        <Text style={styles.txtSlogan}>Shop Your Daily</Text>
        <Text style={styles.txtSlogan}>Necessary</Text>
      </View>
      <View style={{  width:'50%', marginLeft:100, padding:10}}>
      <Button title='getstarted' onPress={()=> navigation.navigate('HomeScreen') } />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  screen: {flex: 1, justifyContent: 'center'},
  image: {height:'70%', width:'100%'},
  wrapperSlogan: {marginTop: 20},
  txtSlogan: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15
  },
});