import React from "react";
import { Text ,Touchable,TouchableHighlight,View} from 'react-native';
import colors from "../../../../utils/colors/colors";
import { gbs, sc } from "../../../../utils/import/import_options";

type Props = {
    title: string,
    isPress?: boolean
}

const ButtonDisabledComponent = ({title, isPress}: Props) => {
  return (  
    <TouchableHighlight disabled onPress={() => {}} style={{backgroundColor: "#EEEEEE", height: sc.buttonHeight, alignItems: 'center', justifyContent: 'center', borderRadius: sc.maxSpace}} >
         <Text style= {[gbs.head, {color: '#BFBFBF'}]}>{title}</Text>
    </TouchableHighlight>
  );
}

export default ButtonDisabledComponent;



