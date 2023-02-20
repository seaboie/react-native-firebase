import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { gbs} from '../utils/import/import_options';

const RootScreen = () => {
  return (
    <View style={[gbs.center, styles.container, { flex: 1 }]} >

     
    </View>
  );
}

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50"
  }
});



