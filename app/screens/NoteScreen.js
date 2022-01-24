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
    
});

export default Intro;