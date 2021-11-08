import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import axios from "axios";
import Header from './components/Header';
import Form from './components/Form';
import Quote from './components/Quote';


const App = () => {

  const [money, setMoney] = useState('');
  const [cryptocurrency, setCryptocurrency] = useState('');
  const [quoteApi, setQuoteApi] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    const quoteCryptocurrency = async () => {
      if (quoteApi) {
        const url = `https://criptoya.com/api/sesocio/${cryptocurrency}/${money}`;
        const resultado = await axios.get(url)
        setResult(resultado.data);
        setQuoteApi(false);
      }
    }

    quoteCryptocurrency();
  }, [quoteApi]);

  return (
    <ScrollView>
      <Header />

      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.content}>
        <Form
          money={money}
          cryptocurrency={cryptocurrency}
          setMoney={setMoney}
          setCryptocurrency={setCryptocurrency}
          setQuoteApi={setQuoteApi}
        />
      </View>

      <Quote
        result={result}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%'
  },

  content: {
    marginHorizontal: '2.5%'
  }
});

export default App;
