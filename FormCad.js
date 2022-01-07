import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FormCad = ({ navigation }) => {
  function navergarProdutos() {
    navigation.navigate('Produtos');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <ScrollView>
        <TextInput style={styles.input} placeholder="Nome Completo" />
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="E-mail"
        />
        <TextInput style={styles.input} placeholder="Endereço" />
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Telefone"
        />
        <TextInput style={styles.input} placeholder="Genero" />
        <TextInput style={styles.input} placeholder="Data de Nascimento" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
        />

        <TouchableOpacity style={styles.button} onPress={navergarProdutos}>
          <Text>Finalizar Cadastro</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormCad;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
  },
  titulo: {
    fontSize: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    padding: 16,
    width: 150,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
