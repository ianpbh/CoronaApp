/**
 * @format
 */

import {AppRegistry,BackHandler,Alert} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

BackHandler.addEventListener('hardwareBackPress', function() {
    Alert.alert(
      'Sair do app',
      'Você deseja realmente sair do app?',
      [
        {text: 'Não', onPress: () => console.log('Botão de cancelar clicado'), style: 'cancel'},
        {text: 'Sim', onPress: () => BackHandler.exitApp()},
      ],
      { cancelable: false });
      return true;
  }
);

AppRegistry.registerComponent(appName, () => App);

