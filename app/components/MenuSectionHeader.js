//section header for SideMenu:

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import configs from '../config/configs';
var {width, height} = require('Dimensions').get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#12046c',
  },
  text: {
    fontSize: configs.LETTER_SIZE * 0.55,
    color: '#fbf70e',
  },
});

const SectionHeader = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.sectionTitle}</Text>
  </View>
);

export default SectionHeader;