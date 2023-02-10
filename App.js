import React, { useState, useEffect, useRef } from 'react';
import {FlatList, Keyboard, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {
  Container,
  AreaInput,
  Input,
  ButtonAdd,
  TextAdd,
  AreaList,
  Settings,
  DropDownView,
  Options,
  OptionsText,
} from './src/stylesApp';

import Login from './src/components/Login';
import TaskList from './src/TaskList';
import firebase from './src/services/firebaseConnection';


export default function App() {
  const [user, setUser] = useState(null);
  const [newTask, setNewTask] = useState('');
  const [task, setTask] = useState([]);
  const [key, setKey] = useState('');
  const inputRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');


    useEffect(() => {
      function getUser() {
        if (!user) {
          return;
        }

        firebase.database().ref('tarefas').child(user).once('value', (snapshot) => {
          setTask([]);

          snapshot?.forEach((childItem) => {
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


    function insertTask() {
      if (newTask === '') {
        return;
      }

      if (key !== '') {
        firebase.database().ref('tarefas').child(user).child(key).update({
          nome: newTask
        })
          .then(() => {
            alert('Nota Atualizada!')
            const taskIndex = task.findIndex((item => item.key === key));
            const taskClone = task;
            taskClone[taskIndex].nome = newTask
            setTask([...taskClone]);
          });

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

          setTask(oldtasks => [...oldtasks, data]);
        });

      Keyboard.dismiss();
      setNewTask('');
    }

    function deleteTask(key) {
      firebase.database().ref('tarefas').child(user).child(key).remove()
        .then(() => {
          const findTasks = task.filter(item => item.key !== key)
          setTask(findTasks);
        })
    }

    function editTask(data) {
      setKey(data.key)
      setNewTask(data.nome)
      inputRef.current.focus();
    }

    if (!user) {
      return <Login changeStatus={(user) => setUser(user)} />
    }

    return (
      <Container>

        <View>
          <Settings onPress={() => setShowDropdown(!showDropdown)}>
            <Feather name='settings' size={30} color='#4F4F4F' />
          </Settings>

          {showDropdown && (
            <DropDownView>

              <Options onPress={() => setSelectedOption('DarkMode')}>
                <OptionsText>Dark Mode</OptionsText>
              </Options>

              <Options onPress={() => setSelectedOption('Outros')}>
                <OptionsText>Outros</OptionsText>
              </Options>

              <Options onPress={() => setSelectedOption('Logout')}>
                <OptionsText>Logout</OptionsText>
              </Options>

            </DropDownView>
          )}
        </View>

        <AreaInput>
          <Input
            placeholder='Informe sua nova tarefa'
            value={newTask}
            onChangeText={(text) => setNewTask(text)}
            ref={inputRef}>
          </Input>

          <ButtonAdd
            onPress={insertTask}>
            <TextAdd>+</TextAdd>
          </ButtonAdd>
        </AreaInput>

        <FlatList
          data={task}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <TaskList
              data={item}
              deleteItem={deleteTask}
              editItem={editTask} />
          )}
        />

      </Container>
    );
  }
