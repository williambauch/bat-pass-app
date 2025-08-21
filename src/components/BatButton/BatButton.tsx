import React, {useState} from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';

import generatePass from '../../services/passwordService';

export function BatButton() {
   
    const [pass, setPass] = React.useState('');

    function handleGeneratePass() {
        const newPass = generatePass(12); // Example length of 12 characters
        console.log('Generated Password:', newPass);
        setPass(newPass);   
    }

    function copyToClipboard() {
        Clipboard.setStringAsync(pass);
        alert('Senha ' + pass + ' copiada para a área de transferência!');

    }

    return (
        <>
            <BatTextInput pass={pass} />

            <Pressable
                style={styles.button}
                onPress={() => { handleGeneratePass() }}>
                <Text
                    style={styles.text} >
                    ⚡ GERAR SENHA
                </Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => { copyToClipboard() }}>
                <Text
                    style={styles.text} >
                    📋COPIAR SENHA
                </Text>
            </Pressable>
        </>
    );
}