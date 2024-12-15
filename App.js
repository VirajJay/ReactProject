import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{}, [count]);

  console.log("App Executed!");

  return (
    <View style={styles.container}>
      <Button 
        title="Click Me!"
        onPress={()=>setCount((count)=>count+1)} 
        >
      </Button>
      <Text>I have rendered {count} times!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
