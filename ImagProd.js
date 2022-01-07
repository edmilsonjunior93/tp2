import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { produtos } from '../data/produtos';

const ImagProd = ({ navigation }) => {
  function navergarHome() {
    navigation.navigate('Home');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns="2"
        data={produtos}
        renderItem={({ item }) => (
          <Image
            resizeMode="contain"
            style={styles.imagem}
            source={{ uri: item.imgUrl }}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={navergarHome}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ImagProd;

const styles = StyleSheet.create({
  titulo: {
    fontSize: 40,
    textAlign: 'center',
  },
  container: {
    padding: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  imagem: {
    backgroundColor: 'white',
    width: 170,
    height: 218,
    marginRight: 5,
    marginBottom: 5,
  },
  button: {
    padding: 16,
    width: 150,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
});
