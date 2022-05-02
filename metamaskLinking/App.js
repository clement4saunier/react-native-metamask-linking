/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Linking,
  Button
} from 'react-native';

const App = () => {
  const handlePress = async () => {
    const supported = await Linking.canOpenURL('https://metamask.app.link/dapp/web3-proof-of-conceptst.herokuapp.com/');
    if (supported)
      Linking.openURL('https://metamask.app.link/dapp/web3-proof-of-conceptst.herokuapp.com/');
    else
      Linking.openURL('dapp://web3-proof-of-conceptst.herokuapp.com/');
}
  return (
    <SafeAreaView>
      <Button onPress={() => {handlePress()}} title="connect to metamask"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
