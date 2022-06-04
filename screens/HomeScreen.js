import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: '1 A11 : 83545', id: '1' },
    { name: '2 A12 : 012015', id: '2' },
    { name: '3 B11 : 26656580', id: '3' },
    { name: '4 A14 : RB198174669SG Picked UP', id: '4' },
    { name: '5 A13 : RB198174779SG Picked UP', id: '5' },
    { name: '6 A15 : RB158174879SG Picked UP', id: '6' },


  ]);

  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={1}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => ( 
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 24,
  },
});
