import React from "react";
import { StyleProp, Text, TextStyle } from 'react-native';
import { gbs } from "../../utils/import/import_options";

interface Props {
  title: string;
  style?: StyleProp<TextStyle>;
}
const TextHead2: React.FC<Props> = ({ title, style}) => {
  return (
    <Text style={[style, gbs.head2]}>{title}</Text>
  );
}

export default TextHead2;



