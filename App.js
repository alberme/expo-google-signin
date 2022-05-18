import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { discovery } from 'expo-auth-session/providers/google';
import { Button, View, SafeAreaView, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={styles.buttonContainer}
      >
        <Button
          title="Open Popup Window"
          onPress={() => {
            WebBrowser.openAuthSessionAsync(discovery.authorizationEndpoint, "https://expo.dev");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: '100%',
    paddingTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
})