import React from "react";
import { Text, TextStyle, StyleProp } from 'react-native';
import { gbs } from "../../utils/import/import_options";

interface Props {
    title: string;
    style?: StyleProp<TextStyle>;
}

const TextBody: React.FC<Props> = ({ title, style}) => {
    return (
        <Text style={[style, gbs.body]}>{title}</Text>
    );
}

export default TextBody;
