import React, { ReactNode } from "react";
import { StyleSheet,  View } from 'react-native';
import { colors, sc } from "../../utils/import/import_options";
import ButtonSingleComponent from "./components/button_single_component";

type Props = {
    title: string,
    onPress(): void,
    icon?: ReactNode,
    hasIcon?: boolean
}

const ButtonBottomBar = ({title, onPress, hasIcon, icon}: Props) => {
    return (
        <View style={[styles.container]} >
            <View style={[{ height: sc.head, borderTopColor: 'lavenderblush', borderTopWidth: sc.minSpace, shadowOpacity: 0.05 }]}></View>
            <ButtonSingleComponent
                onPress={() => onPress()}
                title={title}
                icon={icon}
                hasIcon={hasIcon}
            />
            <View style={[{ height: sc.head4 }]}></View>
        </View>
    );
}

export default ButtonBottomBar;

const styles = StyleSheet.create({
    container: {
        height: sc.buttonBottomBarHeight,
        backgroundColor: colors.white,
    },
    button: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: sc.maxSpace,
    },
    textButton: {
        color: colors.white,
    }
});

