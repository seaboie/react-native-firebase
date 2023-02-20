import React, { useEffect, useState } from "react";
import { Text ,View} from 'react-native';

import firestore from '@react-native-firebase/firestore';

type MyDataProps = {
  firstName: string,
  lastName: string,
  age: number,
  hobby: HobbyProps
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

  useEffect(() => {

    getData();
    
    return () => {
      
    }
  }, [])
  
  return (  
     <View style={[{flex: 1, alignItems: 'center', justifyContent: 'center'}]} > 
       <Text style= {[{fontSize: 24}]}>{myData?.firstName } {myData?.lastName} อายุ  {myData?.age}</Text>
        <Text style= {[]}>{myData?.hobby.map((e) => e + " \n")}</Text>
    </View>
  );
}

export default App;



