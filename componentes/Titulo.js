import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Titulo({ texto }) {
  return <Text style={styles.titulo}>{texto}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 55,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});