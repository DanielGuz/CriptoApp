import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Quote = ({ result }) => {

  if (Object.keys(result).length === 0) return null;

  return (
    <View style={styles.result}>
      <Text style={styles.price}> Resultado de la Cotización</Text>
      <Text style={styles.text}> Valor de compra: {' '}
        <Text style={styles.span}>{result.ask}</Text>
      </Text>
      <Text style={styles.text}> Valor de venta: {' '}
        <Text style={styles.span}>{result.bid}</Text>
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  result: {
    backgroundColor: '#781b06',
    padding: 20,
    marginTop: 20
  },

  text: {
    color: '#FFF',
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    marginBottom: 10
  },

  price: {
    fontFamily: 'Lato-Black',
    color: '#FFF',
    fontSize: 18,
    marginBottom: 10
  },

  span: {
    fontFamily: 'Lato-Black',
  }
})

export default Quote;