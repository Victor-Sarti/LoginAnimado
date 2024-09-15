import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Welcome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../../assets/logo.Login.png')}
                style={{width:  '100%'}}
                resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}> Monitore, organize seus gastos de qualquer lugar !</Text>
                <Text style={styles.text}>Faça seu Login</Text>
               
               
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>

        </View>
      );
}
 
export default Welcome;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38A69D'
      },
    containerLogo:{
        flex: 2,
        backgroundColor: '#38A69D',
        justifyContent: 'center',
        alignItems: 'center'

    },
    
    containerForm: {
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: '28',
        marginBottom: '12',
    },
    text:{
        color: '#A1A1A1',
        paddingTop: '5%'
    },

    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: 'bold'

    }
})