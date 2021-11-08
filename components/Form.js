import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from "axios";

const Form = ({ money, cryptocurrency, setMoney, setCryptocurrency, setQuoteApi }) => {

  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const queryApi = async () => {
      const url = 'https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd';
      const resultado = await axios.get(url);
      setCryptocurrencies(resultado.data.data);
    }
    queryApi();
  }, []);

  const getMoney = money => {
    setMoney(money);
  }

  const getCryptocurrency = cryptocurrency => {
    setCryptocurrency(cryptocurrency);
  }

  const quotePrice = () => {
    if (money.trim() === '' || cryptocurrency.trim() === '') {
      showAlert();
      return;
    }

    setQuoteApi(true)
  }

  const showAlert = () => {
    Alert.alert(
      'Error...',
      'Ambos campos son obligatorios',
      [
        { text: 'OK' }
      ]
    )
  }

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>

      <Picker
        selectedValue={money}
        onValueChange={money => getMoney(money)}
      >
        <Picker.Item label="- Selecione -" value="" />
        <Picker.Item label="Dolar USD" value="USD" />
        <Picker.Item label="Peso COP" value="COP" />
      </Picker>

      <Text style={styles.label}>Criptomoneda</Text>

      <Picker
        selectedValue={cryptocurrency}
        onValueChange={cryptocurrency => getCryptocurrency(cryptocurrency)}
      >
        <Picker.Item label="- Selecione -" value="" />
        {cryptocurrencies.map(crypto => (
          <Picker.Item key={crypto.id} label={crypto.slug} value={crypto.symbol} />
        ))}
      </Picker>

      <TouchableHighlight
        style={styles.btnQuote}
        onPress={() => quotePrice()}
      >
        <Text style={styles.textQuote}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20
  },

  btnQuote: {
    backgroundColor: '#781b06',
    padding: 10,
    marginTop: 20
  },

  textQuote: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
})

export default Form;