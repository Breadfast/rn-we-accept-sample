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
    /**************** Payment with Token example *********************/
    // WeAccept.payWithToken(
    //   {
    //     paymentKey:
    //       'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb3pOVFUxTENKamRYSnlaVzVqZVNJNklrVkhVQ0lzSW1KcGJHeHBibWRmWkdGMFlTSTZleUptYVhKemRGOXVZVzFsSWpvaVEyeHBabVp2Y21RaUxDSnNZWE4wWDI1aGJXVWlPaUpPYVdOdmJHRnpJaXdpYzNSeVpXVjBJam9pUlhSb1lXNGdUR0Z1WkNJc0ltSjFhV3hrYVc1bklqb2lPREF5T0NJc0ltWnNiMjl5SWpvaU5ESWlMQ0poY0dGeWRHMWxiblFpT2lJNE1ETWlMQ0pqYVhSNUlqb2lTbUZ6YTI5c2MydHBZblZ5WjJnaUxDSnpkR0YwWlNJNklsVjBZV2dpTENKamIzVnVkSEo1SWpvaVExSWlMQ0psYldGcGJDSTZJbU5zWVhWa1pYUjBaVEE1UUdWNFlTNWpiMjBpTENKd2FHOXVaVjl1ZFcxaVpYSWlPaUlyT0RZb09DazVNVE0xTWpFd05EZzNJaXdpY0c5emRHRnNYMk52WkdVaU9pSXdNVGc1T0NJc0ltVjRkSEpoWDJSbGMyTnlhWEIwYVc5dUlqb2lUa0VpZlN3aWFXNTBaV2R5WVhScGIyNWZhV1FpT2pZNU56RXNJbUZ0YjNWdWRGOWpaVzUwY3lJNk5UQXdNREF3TENKd2JXdGZhWEFpT2lJeE1ESXVORFF1T0M0Mk1TSXNJbVY0Y0NJNk16WXdNREF3TURBd01EQXdNVFU1TnpNeE16TTNPQ3dpYkc5amExOXZjbVJsY2w5M2FHVnVYM0JoYVdRaU9tWmhiSE5sTENKdmNtUmxjbDlwWkNJNk5UWXpNelkwTW4wLkNNcGVCNW1fSmJxdC13T1Y0SHJYRXV4OFhlVTJIdm9ySDM2eWoyVFdWQ05lWE1jWkJvZWVqWnM2WGNIYzJZYTUxaXFsNnlTYnlQNU1wdmx4ODY1cDFB',
    //     token: '12345',
    //     maskedPanNumber: 'XXXXXXXXXXXXXX1234',
    //     themeColor: '0x80970073',
    //   },
    //   (response) => {
    //     console.log('response', response);
    //   },
    //   (error) => {
    //     console.log('error', error);
    //   },
    // );
    console.log(WeAccept);
    const paymentKey =
      'ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SmxlSEFpT2pFMU9UZzBOamszTVRJc0ltOXlaR1Z5WDJsa0lqbzFOelEyTmpreUxDSmlhV3hzYVc1blgyUmhkR0VpT25zaVptbHljM1JmYm1GdFpTSTZJa0ZpWkdGc2JHRm9jMmg2ZW5wa0lpd2liR0Z6ZEY5dVlXMWxJam9pVG05bVlXeGhZWE5oWVhwMmMzTjJJaXdpYzNSeVpXVjBJam9pUld3Z1UyaHZjbTkxYXlCRGFYUjVJQzBnWVhOa1lYTmtJaXdpWW5WcGJHUnBibWNpT2lKT1FTSXNJbVpzYjI5eUlqb2lUa0VpTENKaGNHRnlkRzFsYm5RaU9pSk9RU0lzSW1OcGRIa2lPaUpEWVdseWJ5SXNJbk4wWVhSbElqb2lUa0VpTENKamIzVnVkSEo1SWpvaVJXZDVjSFFpTENKbGJXRnBiQ0k2SW1GaVpHRnNiR0ZvTG01dlptRnNRRzF6Ymk1amIyMGlMQ0p3YUc5dVpWOXVkVzFpWlhJaU9pSXdNVEF3T0RBME5qQTVPQ0lzSW5CdmMzUmhiRjlqYjJSbElqb2lUa0VpTENKbGVIUnlZVjlrWlhOamNtbHdkR2x2YmlJNklrNUJJbjBzSW1OMWNuSmxibU41SWpvaVJVZFFJaXdpYVc1MFpXZHlZWFJwYjI1ZmFXUWlPakkyT1RVekxDSjFjMlZ5WDJsa0lqb3hPRFkyTkN3aWJHOWphMTl2Y21SbGNsOTNhR1Z1WDNCaGFXUWlPblJ5ZFdVc0ltRnRiM1Z1ZEY5alpXNTBjeUk2TWpBd01Dd2ljRzFyWDJsd0lqb2lNVGsyTGpFMU15NHhNell1TVRFaWZRLk5pZ2JZaloyeFAzWkpFQjVNWlJjb3Y1cjVYVV9ydGJxUmlUdWduRHVKbHlvOUJMQUVlWHVDb3JkdWtNbVVHSVNKMDFPNnlCTExaV2w3ZFlKWjRwbFBB';
    console.log(paymentKey);
    /**************** Payment with No Token example *********************/
    WeAccept.payWithNoToken(
      {
        paymentKey,
        showSaveCard: true,
        saveCardDefault: false,
      },
      (status, code, message, token) => {
        debugger;
        console.log('Response success status', status);
        if (status === true) {
          console.log('Response token: ', token);
        }
        console.log('Response code: ', code);
        console.log('Response message: ', message);
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
