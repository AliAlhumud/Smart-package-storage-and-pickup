import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: '1 : RB162174239SG Waiting for pick up', id: '1' },
    { name: '2 : RB162174879SG Waiting for pick up', id: '2' },
    { name: '3 : RB198174879SG Waiting for pick up', id: '3' },
    { name: '4 : RB198174669SG Delivered', id: '4' },
    { name: '5 : RB198174779SG Delivered', id: '5' },
    { name: '6 : RB158174879SG Delivered', id: '6' },


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
