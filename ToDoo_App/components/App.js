/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import AddToDo from './addToDo/AddTodo.js';
import ToDoListCarts from './toDoListCarts/ToDoListCarts.js';


const App = () => {
  const data = [
    { id: 1, name: 'araba', time: '15-jun, 18:02', isCompleted: false },
    { id: 2, name: 'ev', time: '1-jun, 12.56', isCompleted: false },
  ];

  const [toDoData, setToDoData] = useState(JSON.stringify(data));
  var value = { id: JSON.parse(toDoData).length + 1, name: '', time: '', isCompleted: false };

  function addToDo(item) {
    let a = JSON.parse(toDoData);
    a.push(item);
    a.forEach(element => {
      console.log(element);
    });
    setToDoData(JSON.stringify(a));
  }
  function completeToDo(id) {
    let parsed = JSON.parse(toDoData);
    let a = id;
    // console.log(a);
    JSON.parse(toDoData)[0].isCompleted = true;
    // console.log(parsed[a - 1]);
    // console.log(parsed[a - 1].isCompleted);
    parsed[a - 1].isCompleted = !parsed[a - 1].isCompleted;
    // console.log(parsed[a - 1].isCompleted);
    setToDoData(JSON.stringify(parsed));
  }
  // completeToDo();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}> To Do </Text>
        <Text style={styles.headerNumber}> {JSON.parse(toDoData).length} </Text>
      </View>
      <View style={{ flex: 20, paddingTop: 10 }}>
        <FlatList
          data={JSON.parse(toDoData)}
          renderItem={item => <ToDoListCarts dataa={item} completeToDo={completeToDo} />}
          keyExtractor={item => item.id}
        />
      </View>

      <View style={{ height: 120 }}>
        <AddToDo
          addtodo={addToDo}
          addNewValue={value}

        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#102027',
  },
  headerView: {
    backgroundColor: '#fb6025',
    flexDirection: 'row',
    padding: 10,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    left: Dimensions.get('window').width / 1.6,
  },
});

export default App;
