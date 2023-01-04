import React, { useState, useEffect, useRef } from 'react';
import { View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  TouchableOpacity,
  FlatList,
  Keyboard} from 'react-native';

import Login from './src/components/Login';
import TaskList from './src/TaskList';
import firebase from './src/services/firebaseConnection';

// let tasks = [
//   {key: '1', nome: 'primeira tarefa'},
//   {key: '2', nome: 'segunda tarefa'}
// ]

export default function App() {
  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [task, setTask] = useState([]);
  const [key, setKey] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    function getUser(){
      if(!user){
        return;
      }

      firebase.database().ref('tarefas').child(user).once('value', (snapshot) =>{
        setTask([]);

        snapshot?.forEach((childItem) =>{
          let data = {
            key: childItem.key,
            nome: childItem.val().nome
          }

          setTask(oldtasks => [...oldtasks, data])
        })
      })
    }

    getUser();
  }, [user])


  function insertTask(){
    if(newTask === ''){
      return;
    }

    if(key !== ''){
      firebase.database().ref('tarefas').child(user).child(key).update({
        nome: newTask
      })
      .then(() => {
        alert('Nota Atualizada!')
        const taskIndex = task.findIndex( (item => item.key === key))
        const taskClone = task;
        taskClone[taskIndex].nome = newTask
        setTask([...taskClone])
      })

      Keyboard.dismiss();
      setNewTask('');
      setKey('');
      return;
    }

    let tarefas = firebase.database().ref('tarefas').child(user);
    let chave = tarefas.push().key;

    tarefas.child(chave).set({
      nome: newTask
    })
    .then(() => {
      const data = {
        key: chave,
        nome: newTask,
      };

      setTask(oldtasks => [...oldtasks, data])
    })

    Keyboard.dismiss();
    setNewTask('');
  }

  function deleteTask(key){
    firebase.database().ref('tarefas').child(user).child(key).remove()
    .then(() => {
      const findTasks = task.filter( item => item.key !== key)
      setTask(findTasks);
    })
  }

  function editTask(data){
    setKey(data.key)
    setNewTask(data.nome)
    inputRef.current.focus();
  }

  if(!user){
  return <Login changeStatus={ (user) => setUser(user) }/>
  }

 return (
   <SafeAreaView style={styles.container}>

    <View style={styles.areaInput}>
      <TextInput
      style={styles.input}
      placeholder='Informe sua nova tarefa'
      value={newTask}
      onChangeText={(text) => setNewTask (text)}
      ref={inputRef}>
      </TextInput>

      <TouchableOpacity
      style={styles.buttonAdd}
      onPress={insertTask}>
        <Text
        style={styles.textAdd}>+</Text>
      </TouchableOpacity>
    </View>

    <FlatList
      data={task}
      keyExtractor={item => item.key}
      renderItem={({item}) => (
        <TaskList
        data={item}
        deleteItem={deleteTask}
        editItem={editTask} />
      )}
    />

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#F2f6fc'
  },
  areaInput:{
    flexDirection: 'row',
  },
  input:{
    flex: 1,
    backgroundColor: '#FFF',
    width: '87%',
    height: 50,
    borderWidth: 0.8,
    borderColor: 'black',
    paddingHorizontal: 8,
    fontSize: 18,
  },
  buttonAdd:{
    marginLeft: 0.5,
    backgroundColor: 'black',
    width: '13%',
    height: 50,
    borderWidth: 0.8,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAdd:{
    fontSize: 30,
    color: '#FFF',
  },
})