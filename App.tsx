import React, { useEffect, useState } from "react";
import { Alert, Text ,Touchable,TouchableOpacity,View} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

type MyDataProps = {
  firstName: string,
  lastName: string,
}

type HobbyProps = {

}

const App = () => {

  const [myData, setMyData] = useState<MyDataProps | null>(null);

  const getData = async() => {
    const d = await firestore()
      .collection("test")
      .doc("2IM1FdLK5LaMiM46hFyQ")
      .get();

      const res = d.data() as MyDataProps | null;
      setMyData(res);
      console.log("$$$$$ App ::: Line : 15 ::: " +  JSON.stringify(res)); 
      
    
  }

  const getDatabase = async() => {
     const d = await database()
      .ref('/users/1')
      .on('value', snapshot => {
        const res = snapshot.val() as MyDataProps;
        console.log("$$$$$ App ::: Line : 40 ::: " +  res.firstName); 
        
        return res;
      })

      
      
  }

  useEffect(() => {

    getDatabase();
    
    return () => {}
  }, [getDatabase()])
  
  return (  
     <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]} > 
       <Text style= {[{fontSize: 24}]}>{myData?.firstName ?? "aa"} {myData?.lastName ?? "bb"} </Text>
        <Text style= {[]}>Hey</Text>

        <TouchableOpacity onPress={() => {getDatabase()}}>
           <Text style= {[]}>Click me</Text>
        </TouchableOpacity>
    </View>
  );
}

export default App;



