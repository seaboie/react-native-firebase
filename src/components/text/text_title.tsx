import React from "react";
import { TextStyle, Text, StyleProp } from 'react-native';
import { gbs } from "../../utils/import/import_options";

interface Props {
  title: string;
  style?: StyleProp<TextStyle>;
}

const TextTitle: React.FC<Props> = ({ title, style }) => {
  return (
    <Text style={[style, gbs.title]}>{title}</Text>
  );
}

export default TextTitle;



