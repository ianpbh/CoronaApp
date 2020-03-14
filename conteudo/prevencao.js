import React from 'react';
import { Text, View } from 'react-native';

import Image from '../assets/prevencao.jpg';

export default {
  title: `Como se prevenir?`,
  body: (
    <Text>
      O corona vírus é transmitido por meio de partículas de secreções respiratórias,
      então alguns cuidados básicos de higiene podem ajudar:
    </Text>
  ),
  image: Image,
  steps: [
    {
      id: 1,
      text: `Lavar adequadamente as mãos. evitando levá-las aos olhos, nariz e boa.`,
      image: ``,
    },
    {
      id: 2,
      text: `Utilizar álcool em gel com frequência ao longo do dia.`,
      image: ``,
    },
    {
      id: 3,
      text: `Não compartilhar objetos pessoais, como talheres, toalhas, pratos e copos.`,
      image: ``,
    },
    {
      id: 4,
      text: `Manter distância de pelo menos 1 metro de qualquer pessoa com problemas respiratórios, como tosse e espirros.`,
      image: ``,
    },
    {
      id: 5,
      text: `Evitar aglomerações e frequência a espaços fechados e muito cheios.`,
      image: ``,
    },
    {
      id: 6,
      text: `E manter os ambientes bem ventilados.`,
      image: ``,
    },
  ]
};