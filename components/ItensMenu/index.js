import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../../presets/colors';

import ImageLogo from '../../assets/logo.png';

export default function ItensMenu({ click }) {
  return (
    <View style={styles.menu}>
      <View style={styles.logoMenu}>
        <Image source={ImageLogo} style={styles.logo} />
      </View>
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
      <TouchableOpacity onPress={() => click('noticias')} style={styles.button}>
        <Text style={styles.text}>Notícias</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => click('medidas')} style={styles.button}>
        <Text style={styles.text}>O que fazer em caso de sintomas?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 30,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: '#222'
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