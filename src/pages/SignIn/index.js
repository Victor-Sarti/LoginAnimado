import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from 'react-native-animatable'
export default function SignIn(){
    return (
        <View styles={styles.container}>
          <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
            <Text style={styles.message}> Bem-Vindo(a)</Text>
          </Animatable.View>

        </View>
      );
}
 
const styles = StyleSheet.create({
    container:{

    }
}
    
)
