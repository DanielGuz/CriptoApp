import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

const Header = () => (
  <Text style={styles.header}>Criptomonedas</Text>
);

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#ad280a',
    paddingBottom: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#FFF',
    marginBottom: 30
  }
})

export default Header;