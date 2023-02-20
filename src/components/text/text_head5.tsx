import React from "react";
import { StyleProp, Text, TextStyle } from 'react-native';
import { gbs } from "../../utils/import/import_options";

interface Props {
  title: string;
  style?: StyleProp<TextStyle>;
}

const TextHeadline5: React.FC<Props> = ({ title, style}) => {
  return (
    <Text style={[style, gbs.head5]}>{title}</Text>
  );
}

export default TextHeadline5;



