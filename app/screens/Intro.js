import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import colors from '../misc/colors'
import RoundIconBtn from '../components/RoundIconBtn'

const Intro = () => {
    const [name, setName] = useState('');

    const handleOnChangeText = (text) => {
        setName(text);
    }

    const handleSubmit = async () => {
        const user = { name: name };
        await AsyncStorage.setItem('user', JSON.stringify(user));
    }
    console.log(name)

    return (
        <>
            <StatusBar hidden />
            <View style={styles.container}>
                <Text style={styles.inputTitle}>Enter your name to continue</Text>
                <TextInput
                    value={name}
                    onChangeText={handleOnChangeText}
                    placeholder='Enter name'
                    style={styles.textInput}
                />

                {name.trim().length >= 3 ? (
                    <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
                ) : null}
            </View>
        </>
    );
}
const width = Dimensions.get('window').width - 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        marginTop: 3,
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        width,
        height: 40,
        borderRadius: 15,
        paddingLeft: 15,
        fontSize: 25
    },
    textTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 25,
        marginBottom: 5,
        opacity: 0.5
    }
});

export default Intro;