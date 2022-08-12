import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View ,TextInput} from 'react-native';
import ListItem from './components/ListItem';
import TodoList from './components/TodoList';

export default function App() {

  const [text,setText] = useState('Hi Santosh!')
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Shopping Cart</Text>

      <TodoList/>

      <Text style={styles.text}>{text}</Text>
      <Button style={styles.textButton} title="changeText" onPress=
        {()=>setText('Hi Santosh, This is your first react native project')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:30
  },
  mainHeading:{
    marginTop:20,
    fontWeight:'bold',
    fontSize:30,
    color:'blue',
  },
  text:{
    fontFamily:'monospace',
    fontSize:15,
    marginTop:20,
  },
  textButton:{
    marginBottom:50,
    marginTop:50
  }
});
