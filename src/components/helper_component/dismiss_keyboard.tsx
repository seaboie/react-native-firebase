import React, { ReactElement } from "react";
import { Keyboard,TouchableWithoutFeedback} from 'react-native';

export type KeyboardDismissProps = {
    children: ReactElement
};

const DismissKeyboard = ({children}: KeyboardDismissProps) => {
  return (  
     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
     </TouchableWithoutFeedback>
  );
}

export default DismissKeyboard;



