import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { colors, gbs, sc } from "../../../../utils/import/import_options";

type Props = {
    title: string,
    onPress(): void,
    hasIcon?: boolean,
    hasBorder?: boolean
    icon?: ReactNode,
    color?: string,
    backgroundColor?: string,
    borderColor?: string
}

const ButtonSingleComponent = ({ title, onPress, hasIcon, icon, color, backgroundColor, borderColor, hasBorder = false }: Props) => {
    return (

        <View style={[{ height: sc.buttonHeight, flexDirection: 'row' }]}>
            <View style={[styles.button, { borderWidth: hasBorder ? sc.minSpace : 0, borderColor: hasBorder ? borderColor ?? "red" : "", backgroundColor: hasBorder ? colors.white : colors.white }]}>
                <TouchableHighlight

                    underlayColor={'lavender'}
                    onPress={() => onPress()}
                    style={{ flex: 1, backgroundColor: "", alignItems: 'center', justifyContent: 'center' }}
                >
                    {!hasBorder
                        ? <LinearGradient
                            style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}
                            colors={['#EE0979', '#FF6A00']}
                            useAngle={true}
                            locations={[0, 1]}
                            angle={172.77}
                        >
                            {hasIcon
                                ? <View style={[{ flex: 1, flexDirection: 'row' }]}>
                                    <View style={[{ flex: 1 }]}></View>
                                    <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                        {icon}
                                        <Text adjustsFontSizeToFit numberOfLines={1} style={[gbs.head, { color: color ?? colors.white }]}>{title}</Text>
                                    </View>
                                    <View style={[{ flex: 1 }]}></View>
                                </View>
                                : <Text style={[gbs.head, { color: color ?? colors.white }]}>{title}</Text>
                            }
                        </LinearGradient>
                        :  <View style={[{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: backgroundColor ?? 'white'}]}>
                            {hasIcon
                                ? <View style={[{ flex: 1, flexDirection: 'row' }]}>
                                    <View style={[{ flex: 1 }]}></View>
                                    <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                                        {icon}
                                        <Text adjustsFontSizeToFit numberOfLines={1} style={[gbs.head, { color: color ?? hasIcon ? 'red' : colors.white }]}>{title}</Text>
                                    </View>
                                    <View style={[{ flex: 1 }]}></View>
                                </View>
                                : <Text style={[gbs.head, { color: color ?? "red" }]}>{title}</Text>
                            }
                        </View>
                        
                    }

                </TouchableHighlight>

            </View>
        </View>

    );
}

export default ButtonSingleComponent;

const styles = StyleSheet.create({
    button: {
        flex: 1,
        overflow: 'hidden',
        borderRadius: sc.maxSpace,
    },
});





