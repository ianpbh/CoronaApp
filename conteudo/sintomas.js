import React from 'react';
import { Text, View } from 'react-native';

import Image from '../assets/sintomas.jpg';

export default {
  title: `Quais são os sintomas?`,
  body: (
    <Text>
      O corona vírus possui sintomas variados, que podem ser desde uma simples gripe, até uma infecção mais grave.
      O fator principal para desconfiança de infecção, é estar em um país com elevado número de casos, ou contato com uma pessoa com infecção confirmada.
    </Text>
  ),
  image: Image,
  steps: [
    {
      id: 1,
      text: `Sentir cansaço facilmente.`,
      image: ``,
    },
    {
      id: 2,
      text: `Muita tosse, principalmente tosse seca.`,
      image: ``,
    },
    {
      id: 3,
      text: `Dificuldade para respirar ou falta de ar.`,
      image: ``,
    },
    {
      id: 4,
      text: `Dor de garganta.`,
      image: ``,
    },
    {
      id: 5,
      text: `Febre acima de 38° C.`,
      image: ``,
    },
    {
      id: 6,
      text: `Coriza, ou congestão nasal.`,
      image: ``,
    },
    {
      id: 7,
      text: `Dor de cabeça ou mal-estar.`,
      image: ``,
    },
  ]
};