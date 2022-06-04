import React, { useState, useEffect } from "react";
import { Button, View, StyleSheet,Text } from "react-native";
import TextBox from "../components/TextBox"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { BarCodeScanner } from 'expo-barcode-scanner';
const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A Time and date saved: ", date);
    hideDatePicker();
  };
  const [values, setValues] = useState({
    Name:"",
    Moblie:"",
    Loc:""
})

function handleChange(text, eventName) {
    setValues(prev => {
        return {
            ...prev,
            [eventName]: text
        }
    })
}
const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  const [text1, setText1] = useState("")


  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data,r }) => {
    setScanned(true);
    setText(data,)
    console.log('Type: ' + type + '\nData: ' + data)
    const Read = () => {
    // MARK: Reading Doc
    // You can read what ever document by changing the collection and document path here
    const myDoc = doc(firestore, "Users", "4tarkLNvoSRg3vvyT7XyhjROxEC3")

    getDoc(myDoc)
      // Handling Promises
      .then((snapshot) => {
        // MARK: Success
        if (snapshot.exists) {
          setUserDoc(snapshot.data())
        }
        else {
          alert("No Doc Found")
        }
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message)
      })

  }
   
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }



  return (
      
    <View style={styles.view}>
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 600, width: 600  }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button style={{borderRadius: 10, borderWidth: 1, width: "10%"}}color="black" title={'Scan again?'}  onPress={() => setScanned(false)} />}
    </View>
    <View>
    <TextBox placeholder=" Owner Name" onChangeText={text => handleChange(text, "Name")} />
<TextBox placeholder="  +966 Phone Number" onChangeText={text => handleChange(text, "Mobile")} />
<TextBox placeholder="  Location" onChangeText={text => handleChange(text, "Loc")} />
    </View>
    
    <View style={{  flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", width: "99%",}}>
      <Button color="black" title="Date And Time" onPress={showDatePicker} />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
    <View style={styles.container}>
    <Button color="black" title="Add to database" onPress={ () => console.warn("Data is saved: ")} />
    </View>
    
    </View>
  );
};
const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        alignContent:"center",
        justifyContent: "center",

  
  },
  container: {
    flex: -6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',

  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 350,
    overflow: 'hidden',
    backgroundColor: 'white',

   
  },
  
})


export default Example;