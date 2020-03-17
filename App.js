import React, { useState, useEffect } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Alert
} from 'react-native';

import { WebView } from 'react-native-webview';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

import ItensMenu from './components/ItensMenu';

import Sobre from './conteudo/sobre';
import Prevencao from './conteudo/prevencao';
import Medidas from './conteudo/medidas';
import Sintomas from './conteudo/sintomas';
import Riscos from './conteudo/riscos';
// // import Noticias from './conteudo/noticias';

import ImageMenu from './assets/menu.png';
import ImageLogo from './assets/logo.png';

const App = () => {
  const [conteudo, setConteudo] = useState('');
  const [showMenu, setShowMenu] = useState(true);
  const [showMapa, setShowMapa] = useState(false);


  const setContent = item => {
    setShowMenu(false);
    setShowMapa(false);

    switch (item) {
      case 'sobre':
        setConteudo(Sobre);
        break;
      case 'prevencao':
        setConteudo(Prevencao);
        break;
      case 'sintomas':
        setConteudo(Sintomas);
        break;
      case 'riscos':
        setConteudo(Riscos);
        break;
      case 'mapa':
        setShowMapa(true);
        break;
      case 'medidas':
        setConteudo(Medidas);
        break;
      default:
        setShowMenu(true);
        break;
    }
  };

  return (
    <>
      {(showMenu) ? <ItensMenu click={(item) => setContent(item)} /> : (
  
          <View style={styles.containerTexto}>
            <View style={styles.menu}>
              <TouchableOpacity onPress={() => setShowMenu(true)} style={styles.btnMenu}>
                <Image style={styles.imgMenu} source={ImageMenu} />
                <Text style={styles.labelBtnMenu}>Menu</Text>
              </TouchableOpacity>
              <View style={styles.logoMenu}>
                <Image source={ImageLogo} style={styles.logo} />
                <Text style={styles.titleMenu}>Corona Virus</Text>
              </View>
            </View>

            {(showMapa) ? 
            (
              <WebView source={{ uri: 'https://bing.com/covid?ref=producthunt' }} style={{ flex: 1 }} />
            ) 
            : 
            (
              <ScrollView style={styles.content}>
                <View style={styles.wrapTitleContent}>
                  <Text style={styles.titleContent}>{conteudo.title}</Text>
                </View>
                <View style={styles.wrapImageContent}>
                  <Image source={conteudo.image} style={styles.imageContent} />
                </View>
                <View style={styles.bodyContent}>
                  <Text style={styles.bodyText}>{conteudo.body}</Text>
                </View>
                {(conteudo.steps.length > 0) &&
                  conteudo.steps.map(v => (
                    <View key={v.id} style={styles.bodyContent}>
                      <Text style={styles.textSteps}>{v.text}</Text>
                    </View>
                  ))}
              </ScrollView>
            )}
            <AdMobBanner
              adSize="fullBanner"
              // adUnitID="ca-app-pub-3816051452703802/5871014175" // Esse é o id do Banner real
              adUnitID="ca-app-pub-3940256099942544/6300978111" // Esse é o id do banner de teste da google
              testDevices={[AdMobBanner.simulatorId]}
              onAdFailedToLoad={error => console.error(error)}
            />
          </View>
      )}

    </>
  );
};

const styles = StyleSheet.create({

  containerTexto: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // backgroundColor: '#197332',
  },

  // MENU
  menu: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: '#ff6600',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoMenu: {
    flexDirection: 'row'
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 5
  },
  titleMenu: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  imgMenu: {
    width: 15,
    height: 15
  },
  btnMenu: {
    width: '20%',
    backgroundColor: 'rgba(255,255, 255, 0.2)',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  labelBtnMenu: {
    color: '#fff'
  },

  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingBottom: 20
  },
  titleContent: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  wrapImageContent: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  imageContent: {
    width: '80%',
    height: 200,
    marginVertical: 0,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#d0d0d0',
    marginHorizontal: 'auto',
  },
  wrapTitleContent: {
    width: '80%',
    height: 'auto',
    paddingVertical: 10,
    backgroundColor: '#ff6600',
    paddingHorizontal: 8,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  bodyContent: {
    backgroundColor: '#fff',
    width: '100%',
    minHeight: 40,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  bodyText: {
    textAlign: 'justify',
    fontSize: 18,
    lineHeight: 27,
  },
  imageStep: {
    width: 325,
    height: 325,
    marginVertical: 0,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#d0d0d0',
    marginHorizontal: 'auto',
  },
  textSteps: {
    textAlign: 'justify',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 27,
    width: '100%',
    padding: 15,
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
  }
});

export default App;
