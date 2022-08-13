import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function App() {

  const [textState, setTextState] = useState(false)
  const [text, setText] = useState(``)

  const handleChange = () => {
    setTextState(!textState)
  }

  const colors = ['orange', 'lightblue', 'grey', 'lightgreen']
  const [current, setCurrent] = useState(0)
  const [colorState, setColorState] = useState(colors[current])
   
  const changeBg = () => {
    if (current < colors.length - 1){
      setCurrent(current + 1)
      setColorState(colors[current])
    }else if(current === colors.length - 1) {
      setCurrent(0)
      setColorState(colors[current])
    }
  }

  return (
    <View style={styles.container} backgroundColor={colorState}>
      <View style={styles.close}>
        <Icon 
          name='close' 
          size={40} 
          type='material'
          color='#fff'
        />
      </View>
      <View style={styles.absolute}>
        <Icon 
          name='palette' size={40} 
          type='material'
          onPress={() => changeBg()}
          color='#fff'
        />
      </View>
      <SafeAreaView>
        <TextInput 
          style={styles.input}
          placeholder='type here'
          onChangeText={(e) => setText(e)}
          textAlign='center'
          // multiline={true}
        />
      </SafeAreaView>
      
      {/* <Button style={styles.button} title={textState ? 'Undo!' : 'Build'} onPress={() => handleChange()} /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top:65,
    right: 20
  },
  close: {
    position: 'absolute',
    top:65,
    left:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 70
  },
  button: {
    backgroundColor: '#111c32',
    color: 'red'
  },
  input: {
    padding: 10,
    margin: 5,
    fontSize: 45,
    fontWeight: 'bold',
    color:'#fff'
  }
});
