/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import WeAccept from 'react-native-we-accept';

const App: () => React$Node = () => {
  useEffect(() => {
    console.log(WeAccept);
    WeAccept.initWeAccept({
      paymentKey:
        'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnVZVzFsSWpvaWFXNXBkR2xoYkNJc0luQnliMlpwYkdWZmNHc2lPakUxTWpZeUxDSmpiR0Z6Y3lJNklrMWxjbU5vWVc1MEluMC55TWN5LUZ6cnFIVC1JeG5QRHZJQjNlNFhyekpLOFpsODkwbDRoSmVOaHRSRl9BNlY0NmJmT3d4aTdyMmkwMFVyQ2wxSlZhVmhvTXlHdng3ZVlwS25jdw==',
    });

    WeAccept.payWithToken(
      {
        token: '12345',
        maskedPanNumber: 'XXXXXXXXXXXXXX1234',
      },
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
    );
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                React Native We Accept Sample project
              </Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    flexDirection: 'column',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
