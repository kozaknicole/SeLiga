import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Titulo() {
  return <Text style={styles.titulo}>Minha Rede de Contatos</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 55,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});