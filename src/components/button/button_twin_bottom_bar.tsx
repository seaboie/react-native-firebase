import React from "react";
import {  View } from 'react-native';
import { colors, sc } from "../../utils/import/import_options";
import ButtonDisabledComponent from "./components/button_disabled_component";
import ButtonSingleComponent from "./components/button_single_component";

type Props = {
    titleLeft: string,
    titleRight: string,
    onPressLeft(): void,
    onPressRight(): void,
    disabled?: boolean
}

const ButtonTwinBottomBar = ({ titleLeft, titleRight, onPressLeft, onPressRight, disabled }: Props) => {
    return (
        <View style={[{ backgroundColor: colors.white, paddingHorizontal: sc.padMid }]}>
            <View style={[{ height: sc.head }]}></View>
            <View style={[{ height: sc.buttonHeight, flexDirection: 'row' }]}>
                <View style={[{ flex: 1 }]}>
                    <ButtonSingleComponent
                        title={titleLeft}
                        hasBorder={true}
                        onPress={() => onPressLeft()}
                    />
                </View>
                <View style={[{ width: sc.head }]}></View>
                <View style={[{ flex: 1 }]}>

                    {disabled
                        ? <ButtonDisabledComponent title="ต่อไป" />
                        : <ButtonSingleComponent
                            title={titleRight}
                            onPress={() => onPressRight()}
                        />
                    }
                </View>

            </View>
            <View style={[{ height: sc.head4 }]}></View>
        </View>
    );
}

export default ButtonTwinBottomBar;



