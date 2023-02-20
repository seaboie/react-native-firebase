import React from "react";
import { ColorValue, FlexAlignType, StyleProp, StyleSheet, Text, TextStyle, TouchableHighlight, View } from 'react-native';
import { gbs, sc } from "../../utils/import/import_options";

type Props = {
  title: string,
  style?: StyleProp<TextStyle>,
  width?: number | string,
  color?: string,
  backgroundColor?: string,
  underlayColor?: ColorValue | string,
  onPress(): void
}

const FilledButtonComponent = ({ title, style, width, color, backgroundColor, underlayColor, onPress }: Props) => {
  return (
    <TouchableHighlight underlayColor={underlayColor ?? 'transparent'} onPress={() => onPress()} style={[styles.button, { height: sc.buttonHeight, width: width ?? '100%', backgroundColor: backgroundColor ?? "red" }]}>
      <Text style={[style, gbs.head2, {color: color ?? "white" }]}>{title}</Text>
    </TouchableHighlight>
  );
}

export default FilledButtonComponent;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sc.padMin
  }
});



