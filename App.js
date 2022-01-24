import Intro from './app/screens/Intro'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    console.log("result :" +  result) 
  }
  useEffect(() => {
    findUser();
  }, []);

  return (
    <NoteScreen />
  );
}
