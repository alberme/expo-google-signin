import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button, StatusBar, View, SafeAreaView, StyleSheet, Text } from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '333095080730-rjn9raov9spbb45v4h2s7cdoffgg6dv9.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: '333095080730-n4m5e5bmvmoqrfqnf16k7ccf9egrd0r9.apps.googleusercontent.com',
  });
  const [loggedIn, setLoggedIn] = React.useState("");

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication, type } = response;
      console.log(type);
      setLoggedIn(type);
      }
  }, [response]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={styles.buttonContainer}
      >
        <Button
          disabled={!request}
          title="Login With Google"
          onPress={() => {
            promptAsync();
          }}
        />
        <Text>
          {loggedIn === "success" ? "Logged In" : "Logged Out"}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: '100%',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  }
})