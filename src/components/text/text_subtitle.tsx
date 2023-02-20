import React from "react";
import { StyleProp, Text, TextStyle } from 'react-native';
import { gbs } from "../../utils/import/import_options";

interface Props {
  title: string;
  style?: StyleProp<TextStyle>;
}

const TextSubtitle: React.FC<Props> = ({ title, style}) => {
  return (
    <Text style={[style, gbs.subtitle]}>{title}</Text>
  );
}

export default TextSubtitle;



