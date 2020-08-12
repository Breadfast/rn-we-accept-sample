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

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const App: () => React$Node = () => {
  useEffect(() => {
    fetch('https://mywebsite.com/mydata.json')
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
    console.log(WeAccept);
    WeAccept.initWeAccept({
      paymentKey:
        'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmlhV3hzYVc1blgyUmhkR0VpT25zaVptbHljM1JmYm1GdFpTSTZJa05zYVdabWIzSmtJaXdpYkdGemRGOXVZVzFsSWpvaVRtbGpiMnhoY3lJc0luTjBjbVZsZENJNklrVjBhR0Z1SUV4aGJtUWlMQ0ppZFdsc1pHbHVaeUk2SWpnd01qZ2lMQ0ptYkc5dmNpSTZJalF5SWl3aVlYQmhjblJ0Wlc1MElqb2lPREF6SWl3aVkybDBlU0k2SWtwaGMydHZiSE5yYVdKMWNtZG9JaXdpYzNSaGRHVWlPaUpWZEdGb0lpd2lZMjkxYm5SeWVTSTZJa05TSWl3aVpXMWhhV3dpT2lKamJHRjFaR1YwZEdVd09VQmxlR0V1WTI5dElpd2ljR2h2Ym1WZmJuVnRZbVZ5SWpvaUt6ZzJLRGdwT1RFek5USXhNRFE0TnlJc0luQnZjM1JoYkY5amIyUmxJam9pTURFNE9UZ2lMQ0psZUhSeVlWOWtaWE5qY21sd2RHbHZiaUk2SWs1QkluMHNJbVY0Y0NJNk1UVTJPVEkwTWpneU1Dd2ljRzFyWDJsd0lqb2lOREV1TkRJdU1UUTVMakUwT1NJc0ltRnRiM1Z1ZEY5alpXNTBjeUk2TVRBd0xDSnZjbVJsY2w5cFpDSTZNell3TVRneE55d2lhVzUwWldkeVlYUnBiMjVmYVdRaU9qWTNOREVzSW5WelpYSmZhV1FpT2pRM01EVXNJbU4xY25KbGJtTjVJam9pUlVkUUlpd2liRzlqYTE5dmNtUmxjbDkzYUdWdVgzQmhhV1FpT21aaGJITmxmUS5YamNQSGpsSmlsbzZXbW1sNlZxZzNuNDdPVE5FV2RDQlZfVFZxR1l4d21BcGRXVkNsajBjeU1fSTlGNUdPREd1d0htMHZzOTd5MmJ3S3BybENrbWRidw==',
    });

    // WeAccept.payWithToken(
    //   {
    //     token: '12345',
    //     maskedPanNumber: 'XXXXXXXXXXXXXX1234',
    //   },
    //   (response) => {
    //     console.log('response', response);
    //   },
    //   (error) => {
    //     console.log('error', error);
    //   },
    // );

    WeAccept.payWithNoToken(
      {
        showSaveCard: true,
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
