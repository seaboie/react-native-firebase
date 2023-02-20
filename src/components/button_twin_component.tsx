import React from "react";
import { Text, View } from 'react-native';
import FilledButtonComponent from "./buttons/filled_button_component";
import OutlineButtonComponent from "./buttons/outline_button_component";
import { sc } from '../../utils/import/import_options';

type Props = {
    titleOutline?: string,
    titleFilled?: string,
    onPressFilled(): void,
    onPressOutline(): void
}

const ButtonTwinComponent = ({titleFilled, titleOutline, onPressFilled, onPressOutline}: Props) => {
    return (
        <View style={[{ flexDirection: 'row', height: sc.buttonHeight, paddingHorizontal: sc.maxPad }]}>

            <OutlineButtonComponent title= {titleOutline ?? "ย้อนกลับ"} onPress={() => onPressOutline()} width={'95%'} style={{alignSelf: 'flex-start'}} />
            <FilledButtonComponent title={titleFilled ?? "ต่อไป"} onPress={() => onPressFilled()} width={'95%'} style={{alignSelf: 'flex-end'}} />

        </View>
    );
}

export default ButtonTwinComponent;



