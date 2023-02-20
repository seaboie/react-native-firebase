import React from "react";
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableHighlight, View } from 'react-native';
import SizeConfig from "../../../utils/size_configs/size_config";
import { colors } from '../../../utils/colors/colors'
import { gbs } from "../../../utils/import/import_options";

interface Props {
  title: string;
  style?: StyleProp<TextStyle>,
  onpressed(): void;
}

const TextButton: React.FC<Props> = ({ title, style, onpressed }) => {
  return (
    <TouchableHighlight underlayColor={'transparent'} onPress={() => onpressed()}>
      <Text style={[style, gbs.head2]}>{title}</Text>
    </TouchableHighlight>
  );
}

export default TextButton;



