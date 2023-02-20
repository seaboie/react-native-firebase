import React from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';
import { sc } from "../../utils/import/import_options";

type Props = {
    placeholder: string,
    onChangeText(value: string): void,
    keyboardType?: KeyboardTypeOptions,
    isSecure?: boolean,
    multiline?: boolean,
    maxLength?: number,
    editable?: boolean
}

const TodoForm = ({ placeholder, onChangeText, keyboardType, isSecure, multiline, maxLength, editable }: Props) => {
    return (
        <View style={[{ height: sc.buttonHeight }]}>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={isSecure ?? false}
                style={[styles.input]}
                multiline={multiline ?? false}
                maxLength={maxLength}
                editable={editable}
                onChangeText={(value: string) => onChangeText(value)}
            />
        </View>
    );
}

export default TodoForm;

const styles = StyleSheet.create({
    input: {
        borderWidth: sc.minSpace,
        borderColor: "lightgrey",
        borderRadius: sc.padMin,
        padding: sc.padMid
    }
});



