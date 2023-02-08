import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import firebase from '../../services/firebaseConnection';

import {
  Container,
  Input,
  HandleLogin,
  LoginText,
  TextFoot
} from './styles';

export default function Login({ changeStatus }) {
  const [type, setType] = useState('login');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin() {

    if (type === 'login') {
      // Aqui fazemos o login
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((err) => {
          console.log(err);
          alert('Ops parece que algo está errado!');
          return;
        })

    } else {
      // Aqui cadastramos o usuario 
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid)
        })
        .catch((err) => {
          console.log(err);
          alert('Ops parece que algo está errado!');
          return;
        })


    }

  }

  return (
    <Container>

      <Input
        placeholder="Seu email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Input
        placeholder="*********"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <HandleLogin
        style={{ backgroundColor: type === 'login' ? '#3ea6f2' : '#141414' }}
        onPress={handleLogin}
      >
        <LoginText>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </LoginText>
      </HandleLogin>

      <TouchableOpacity onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')} >
        <TextFoot>
          {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </TextFoot>
      </TouchableOpacity>



    </Container>
  );
}
