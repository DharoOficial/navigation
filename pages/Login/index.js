import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Logar = () => {

        const corpo = {
            email: email,
            senha: senha
        }

        fetch('http://192.168.15.13:5000/api/Account/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(corpo)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status != 404) {
                    alert('Seja bem vindo');
                    console.log(data.token);
                    navigation.push('Autenticado');
                } else {
                    alert('Email ou senha invalido');
                }
            })
    }

    return (
        <View >
            <Text>
                Login
                </Text>
            <TextInput
                style={styles.input}
                onChangeText={a => setEmail(a)}
                value={email}
                placeholder="digite seu email aqui"
            />
            <TextInput
                style={styles.input}
                onChangeText={a => setSenha(a)}
                value={senha}
                placeholder="digite sua senha aqui"
            />
            <Button
                style={styles.input}
                onPress={Logar}
                title="Logar"
                accessibilityLabel="Logar-se"
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#f7f7f7',
        width: 80,
        borderColor: 'gray',
        borderWidth: 1,

    }
});

export default Login;