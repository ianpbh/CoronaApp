import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../../presets/colors';

import ImageLogo from '../../assets/logo.png';

export default function ItensMenu({ click }) {
  return (
    <View style={styles.menu}>
      <View style={styles.logoMenu}>
        <Image source={ImageLogo} style={styles.logo} />
        <Text style={styles.textLogo}>Guia Corona Vírus</Text>
      </View>
      <TouchableOpacity onPress={() => click('mapa')} style={styles.button}>
        <Text style={styles.text}>Mapa em tempo real</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => click('sobre')} style={styles.button}>
        <Text style={styles.text}>O que é o Corona Virus?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => click('prevencao')} style={styles.button}>
        <Text style={styles.text}>Como se prevenir?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => click('sintomas')} style={styles.button}>
        <Text style={styles.text}>Quais são os sintomas?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => click('riscos')} style={styles.button}>
        <Text style={styles.text}>Quais são os riscos?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => click('medidas')} style={styles.button}>
        <Text style={styles.text}>O que fazer em caso de sintomas?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => click('sobreapp')} style={styles.button}>
        <Text style={styles.text}>Créditos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff'
  },
  logoMenu: {
    alignItems: 'center',
    marginBottom: 25,
  },
  textLogo: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase'
  },
  logo: {
    marginBottom: 20,
    width: 64,
    height: 64
  },
  imgMenu: {
    width: 15,
    height: 15
  },
})