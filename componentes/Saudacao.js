import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Saudacao({ nome }) {
  return <Text style={styles.saudacao}>Olá, {nome}! 👋</Text>;
}

const styles = StyleSheet.create({
  saudacao: {
    fontSize: 18,
    marginVertical: 12,
    textAlign: 'center',
    color: '#333',
  },
});