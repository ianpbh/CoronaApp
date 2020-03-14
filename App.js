import React, { useState } from 'react';

import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import ItensMenu from './components/ItensMenu';

import Sobre from './conteudo/sobre';
import Prevencao from './conteudo/prevencao';
import Medidas from './conteudo/medidas';
// // import Noticias from './conteudo/noticias';

import ImageMenu from './assets/menu.png';
import ImageLogo from './assets/logo.png';

const App = () => {
  const [conteudo, setConteudo] = useState('');
  const [showMenu, setShowMenu] = useState(true);

  const setContent = item => {
    setShowMenu(false);

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
      // case 'noticias':
      //   setConteudo(Noticias);
      //   break;
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
        <View style={styles.container}>
          <View style={styles.menu}>
            <View style={styles.logoMenu}>
              <Image source={ImageLogo} style={styles.logo} />
              <Text style={styles.titleMenu}>Corona Virus</Text>
            </View>
            <TouchableOpacity onPress={() => setShowMenu(true)} style={styles.btnMenu}>
              <Image style={styles.imgMenu} source={ImageMenu} />
              <Text style={styles.labelBtnMenu}>Menu</Text>
            </TouchableOpacity>
          </View>
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
        </View>
      )}

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    paddingVertical: 20,
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
    marginBottom: 20
  }
});

export default App;
