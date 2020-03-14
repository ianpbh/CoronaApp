import React from 'react';
import { Text } from 'react-native';

import Image from '../assets/virus1.jpg';

export default {
  title: `O que é o Corona Vírus? (CoVid-19)`,
  body: (
    <Text>
      As pessoas idosas correm mais riscos durante a infecção, por exemplo:
      a taxa de mortalidade geral é de 2,3%, porém, para idosos esse índice pode chegar a 8,8%,
      acima de 80 anos pode chegar a 14,8%.
      Por esse motivo deve-se evitar de expor pessoas idosas com infectados ou casos suspeitos,
      principalmente se estes possuem alguma outra doença.
      Por outro lado, as crianças são as menos afetadas, podem ser infectadas, porém não desenvolvem a doença
      ou apresentam apenas sintomas leves.
    </Text>
  ),
  steps: [],
  image: Image,
};