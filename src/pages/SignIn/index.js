import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
export default function SignIn(){
    return (
        <View style={styles.container}>
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}> Bem-Vindo(a)</Text>
          </Animatable.View>

        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}> Email</Text>
        <TextInput placeholder="Digite um Email Válido" style={styles.input} />
        <Text style={styles.title}> Senha</Text>
        <TextInput placeholder="Digite sua senha" style={styles.input} />

      </Animatable.View>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}> Não possui uma conta ? Cadastre-se</Text>
        </TouchableOpacity>
      
        </View>
      );
}
 
const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor: '#38a69d'
   },
   containerHeader:{
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%'
   }
   
})
