import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { GameEngine } from 'react-native-game-engine';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1}}>
      <GameEngine
        style={{position: 'absolute',top:0,left:0,right:0,bottom:0}}>
      </GameEngine>
      <StatusBar style="auto" hidden={true} />
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
