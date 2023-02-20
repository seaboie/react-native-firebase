import React from "react";
import { ColorValue, FlexAlignType, StyleProp, StyleSheet, Text, TextStyle, TouchableHighlight, View } from 'react-native';
import { colors, gbs, sc } from "../../utils/import/import_options";

type Props = {
    title: string,
    style?: StyleProp<TextStyle>,
    width?: number | string,
    color?: string,
    backgroundColor?: string,
    underlayColor?: ColorValue | string,
    onPress(): void
}

const OutlineButtonComponent = ({ title, style, width, color, backgroundColor, underlayColor, onPress }: Props) => {
    return (
        <TouchableHighlight underlayColor={underlayColor ?? 'lightgrey'} onPress={() => onPress()} style={[styles.button, { height: sc.buttonHeight, width: width ?? '100%', backgroundColor: backgroundColor ?? 'white' }]}>
            <Text style={[style, gbs.head2, { color: color ?? 'red' }]}>{title}</Text>
        </TouchableHighlight>
    );
}

export default OutlineButtonComponent;

const styles = StyleSheet.create({
    button: {
        borderWidth: sc.minSpace,
        borderColor: colors.backgroundNavbar,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: sc.padMin
    }
});

