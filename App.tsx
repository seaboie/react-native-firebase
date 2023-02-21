import React, { Fragment, useEffect, useState } from "react";
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, gbs, sc } from "./src/utils/import/import_options";
import { firebase } from "@react-native-firebase/database";
import SpacerBody from "./src/components/spacer/spacer_body";

type DataProps = {
  firstName: string,
  lastName: string
}

const App = () => {

  const [user, setUser] = useState<DataProps[] | null>(null);

  

  const [inputNameValue, setInputNameValue] = useState<string>("");
  const [inputLastName, setInputLastName] = useState<string>("");

  const [list, setList] = useState(null);

  const database = firebase.app().database('https://rnfirebase-bc2f6-default-rtdb.asia-southeast1.firebasedatabase.app/').ref('users/');
  const addDatabase = (index: number) => {
    const res = firebase.app().database('https://rnfirebase-bc2f6-default-rtdb.asia-southeast1.firebasedatabase.app/').ref('users/' + index);
    return res;
  }

  const handleData = async () => {

    let index = user?.length;
    await database
      .on('value', snapshot => {
        const u = snapshot.val() as DataProps[];

        setUser(u);
        

      })
  }

  const addData = async () => {
    let index = user?.length ?? 0;
    const res = await addDatabase(index)
      .set({
        firstName: inputNameValue,
        lastName: inputLastName
      })
      .then(() => {
        Alert.alert('Success added...');
      })

    setInputNameValue("");
    setInputLastName("");
  }

  useEffect(() => {
    handleData()

    return () => {

    }
  }, [])


  return (
    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: '' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '' }}>
        <StatusBar barStyle="dark-content" />
        <View style={[{ flex: 1, paddingHorizontal: sc.padMid }]} >

          <Text style={[gbs.head5]}>Todo App</Text>

          <TextInput
            style={{ height: sc.buttonHeight, borderRadius: sc.maxSpace, borderWidth: sc.minSpace, borderColor: colors.thirdBlue, paddingHorizontal: sc.padMid, backgroundColor: colors.primaryBackground, fontSize: sc.title, marginVertical: sc.caption }}
            placeholder="First name"
            defaultValue={inputNameValue ?? ""}
            onChangeText={(value) => { setInputNameValue(value) }}
          />

          <TextInput
            style={{ height: sc.buttonHeight, borderRadius: sc.maxSpace, borderWidth: sc.minSpace, borderColor: colors.thirdBlue, paddingHorizontal: sc.padMid, backgroundColor: colors.primaryBackground, fontSize: sc.title, marginVertical: sc.caption }}
            placeholder="Last name"
            defaultValue={inputLastName ?? ""}
            onChangeText={(value) => { setInputLastName(value) }}
          />

          <TouchableOpacity
            onPress={() => { addData() }}
            style={{ height: sc.buttonHeight, width: "100%", backgroundColor: colors.primaryBlue, borderWidth: sc.midSpace, borderColor: colors.backgroundAuth, alignItems: 'center', justifyContent: 'center', borderRadius: 300, marginVertical: sc.body }}
          >
            <Text style={[{ color: colors.white, fontSize: sc.body }]}>Add</Text>
          </TouchableOpacity>

          <Text style={[{ fontSize: sc.head4 }]}>Todo Lists</Text>

          <View style={[styles.container]}>

            

            <FlatList 
              data={user}
              style={{flexGrow: 1}}
              renderItem={(item) => {
                
                  if (item.item !== null) {
                    return (
                      <View style={[ { height: sc.buttonAuthHeight, elevation: sc.body, shadowColor: 'black', shadowOpacity: 0.1, shadowOffset: {width: 0, height: 0} , shadowRadius: sc.maxSpace, backgroundColor: 'white', padding: sc.padMid, margin: sc.caption }]} >
                            <Text style= {[]}>{item.item.firstName} {item.item.lastName}</Text>
                      </View>
                    )
                  }
                  return (<></>)
                
              }}
            />



          </View>

        </View>
      </SafeAreaView>
    </Fragment>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: sc.body
  },



});



