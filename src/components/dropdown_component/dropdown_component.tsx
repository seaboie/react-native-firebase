import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { UserState } from "../../redux_toolkit/features/users/user_slice";
import { CaretDown } from "../../utils/import/import_icons";
import { gbs, sc } from "../../utils/import/import_options";
import SpacerBody from "../spacer/spacer_body";

type DropDownProps = {
    datas: UserState[],
    sendUserId(userId: string): void
}

const DropdownComponent = ({ datas, sendUserId }: DropDownProps) => {

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState('');
    const onSelectedItem = (item: UserState) => {
        setIsShow(false);
        setTitle(item.name);
        sendUserId(item.id);
    }
    return (
        <View style={[{ alignItems: 'stretch', width: '100%' }]} >
            <TouchableHighlight underlayColor={'rgba(0,0,0,0.4)'} onPress={() => setIsShow(!isShow)} style={{ borderRadius: 12, overflow: 'hidden' }} >
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, styles.textTouch,]}>

                    <Text style={[gbs.head, { color: 'white' }]}>{title != "" ? title : `Choose an options`}</Text>
                    <CaretDown
                        height={'100%'}
                        width={'10%'}
                        fill={'white'}
                        style={
                            {
                                transform: [
                                    { rotate: isShow ? '180deg' : '0deg' }
                                ], alignSelf: 'flex-end'
                            }
                        }
                    />
                </View>
            </TouchableHighlight>
            <SpacerBody />
            {isShow
                ? <View style={[styles.dropdown, {maxHeight: sc.cardListHeight * 2.2}]}>
                    <ScrollView >
                    {datas.map((item, index) =>
                        <TouchableHighlight key={item.id} underlayColor={'rgba(0, 0, 0, 0.1)'} onPress={() => onSelectedItem(item)} >
                            <Text key={item.id} style={[styles.textDropDown, gbs.body, {backgroundColor: item.name === title ? 'aqua' : 'darkseagreen'}]}>{`${item.name}`}</Text>
                        </TouchableHighlight>
                    )}
                    </ScrollView>

                </View>
                :
                <></>
            }
        </View>
    );
}

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        width: '100%',
        alignSelf: 'stretch',
        position: 'absolute',
        zIndex: 20,
        marginTop: sc.padMid + sc.buttonHeight,
        overflow: 'hidden',
        borderRadius: sc.maxSpace,
        backgroundColor: 'white',
    },
    textTouch: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: sc.padMax,
    },
    textDropDown: {
        color: 'darkgreen',
        // backgroundColor: 'darkseagreen',
        padding: sc.padMax,
        fontWeight: '500',
        marginBottom: sc.minSpace
    }
});


