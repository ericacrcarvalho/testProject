import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Secundario = () => {
    return (
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={{uri:'https://thumbs.dreamstime.com/b/crian%C3%A7a-que-guarda-o-sinal-com-o-ola-portugu%C3%AAs-da-palavra-ol%C3%A1-48500488.jpg'}}
            />
        <Text style={styles.text}>
            Se você está lendo esse texto, {'\n'} significa que funcionou!! {'\n\n'} Bom trabalho 😉
        </Text>
        </View>
    );
}

export default Secundario;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 100,
      height: 100,
    }, 
    text: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 20,
    }
  });
  