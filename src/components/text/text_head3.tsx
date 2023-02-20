import React from "react";
import { StyleProp, Text ,TextStyle,View} from 'react-native';
import { gbs } from "../../utils/import/import_options";

interface Props {
    title: string;
    style?: StyleProp<TextStyle>;
}

const TextHead3 = ({title, style}: Props) => {
  return (  
      <Text style= {[style, gbs.head3]}>{title}</Text>
  );
}

export default TextHead3;



