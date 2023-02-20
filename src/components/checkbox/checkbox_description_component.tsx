import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { CheckIcon } from "../../utils/import/import_icons";
import {  gbs, sc } from "../../utils/import/import_options";

type Props = {
    title: string,
    onPress(): void,
    isCheck: boolean
}

const CheckboxDescriptionComponent = ({title, onPress, isCheck}: Props) => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.checkbox, {backgroundColor: 'red'}]}>
                <TouchableHighlight underlayColor={'transparent'} onPress={() => onPress()} style={[{flex: 1, justifyContent: "center"}]}>
                   {isCheck ?  <CheckIcon height={'70%'} stroke={'white'} /> : <></>}
                </TouchableHighlight>
            </View>
            <Text style={[gbs.body]}>{title}</Text>
        </View>
    );
}

export default CheckboxDescriptionComponent;


const styles = StyleSheet.create({
    container: {
        height: sc.checkboxHeight,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: sc.padMax
    },
    checkbox: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: sc.midSpace,
        marginRight: sc.padMid,
    }
});
