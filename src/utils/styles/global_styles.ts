import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { colors } from "../colors/colors";
import sc from "../size_configs/size_config";

const globalStyles = StyleSheet.create({
    font: {
        fontFamily: 'Trirong-Medium'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    head5: {
        fontSize: sc.head5,
        fontFamily: 'Mitr-Medium',
    },
    head4: {
        fontSize: sc.head4,
        fontFamily: 'Mitr-Medium',
    },
    head3: {
        fontSize: sc.head3,
        fontFamily: 'Mitr-Medium',
    },
    head2: {
        fontSize: sc.head2,
        fontFamily: 'Mitr-Medium',
    },
    head1: {
        fontSize: sc.head1,
        fontFamily: 'Mitr-Medium',
    },
    head: {
        fontSize: sc.head,
        fontFamily: 'Mitr-Medium',
    },
    body: {
        fontSize: sc.body,
        fontFamily: 'Mitr-Medium',
    },
    title: {
        fontSize: sc.title,
        fontFamily: 'Mitr-Medium',
    },
    subtitle: {
        fontSize: sc.subtitle,
        fontFamily: 'Mitr-Medium',
    },
    caption: {
        fontSize: sc.caption,
        fontFamily: 'Prompt-Light',
    },
    head5Trirong: {
        fontSize: sc.head5,
        fontFamily: 'Trirong-Medium',
    },
    head4Trirong: {
        fontSize: sc.head4,
        fontFamily: 'Trirong-Medium',
    },
    head3Trirong: {
        fontSize: sc.head3,
        fontFamily: 'Trirong-Medium',
    },
    head2Trirong: {
        fontSize: sc.head2,
        fontFamily: 'Trirong-Medium',
    },
    head1Trirong: {
        fontSize: sc.head1,
        fontFamily: 'Trirong-Medium',
    },
    headTrirong: {
        fontSize: sc.head,
        fontFamily: 'Trirong-Medium',
    },
    bodyTrirong: {
        fontSize: sc.body,
        fontFamily: 'Trirong-Medium',
    },
    titleTrirong: {
        fontSize: sc.title,
        fontFamily: 'Trirong-Medium',
    },
    subtitleTrirong: {
        fontSize: sc.subtitle,
        fontFamily: 'Trirong-Medium',
    },
    captionTrirong: {
        fontSize: sc.caption,
        fontFamily: 'Trirong-Medium',
    },
    textfieldBorder: {
        borderRadius: sc.midSpace,
        borderWidth: sc.minSpace * 0.5,
        borderColor: colors.thirdBlue,
        paddingVertical: sc.midSpace,
        paddingHorizontal: sc.padMid,
        backgroundColor: colors.primaryBackground
    }
    
});

export default globalStyles;