import React from 'react';
import { Text } from 'react-native';

import Image from '../assets/medidas.jpg';

export default {
  title: `O que fazer se você estiver com os sintomas?`,
  body: (
    <Text>
      Se você é o paciente, como em toda virose, é recomendável seguir uma conduta
      ética para evitar a transmissão de possíveis vírus.
    </Text>
  ),
  image: Image,
  steps: [
    {
      id: 1,
      text: `Opte pelo cuidado e tratamento domiciliar.`,
      image: ``,
    },
    {
      id: 2,
      text: `Se possível não frequente locais públicos.`,
      image: ``,
    },
    {
      id: 3,
      text: `Não frequente aulas, trabalho, eventos e locais públicos.`,
      image: ``,
    },
    {
      id: 4,
      text: `Utilize máscaras cirúrgicas e reduza contato com familiares.`,
      image: ``,
    },
    {
      id: 5,
      text: `Em caso de febre, tosse, ou dificuldade em respirar, procure assistência médica em serviços de saúde.`,
      image: ``,
    },
    {
      id: 6,
      text: `E manter os ambientes bem ventilados.`,
      image: ``,
    },
  ]
};