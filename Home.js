import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  function navergarCadastro() {
    navigation.navigate('Cadastro');
  }

  function navergarProdutos() {
    navigation.navigate('Produtos');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="center"
        style={styles.imagem}
        source={{
          uri: 'https://blog.betrybe.com/wp-content/uploads/2020/12/Amazon_PNG13.png',
        }}
      >
        <TouchableOpacity style={styles.botao} onPress={navergarCadastro}>
          <Text style={styles.textoBotao}>Cadastrar-me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2} onPress={navergarProdutos}>
          <Text style={styles.textoBotao}>Já possuo Cadastro</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botao: {
    position: 'absolute',
    bottom: 160,
    padding: 16,
    width: 150,
    alignSelf: 'center',
  },
  botao2: {
    position: 'absolute',
    bottom: 140,
    width: 150,
    alignSelf: 'center',
  },
  textoBotao: {
    fontSize: 16,
    textAlign: 'center',
  },
  imagem: {
    flex: 1,
  },
});
