import React from 'react';
import { View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {
    Container,
    ContainerChild,
    TextName,
    ButtonIcons
} from './styles';


export default function TaskList({ data, deleteItem, editItem }) {
    return (
        <Container>
            <View>
                <TextName>
                    {data.nome}
                </TextName>
            </View>

            <ContainerChild>
                <ButtonIcons
                    onPress={() => editItem(data)}>
                    <Feather name='edit' color='#FFF' size={20} />
                </ButtonIcons>

                <ButtonIcons
                    onPress={() => deleteItem(data.key)}>
                    <Feather name='trash' color='#FFF' size={20} />
                </ButtonIcons>
            </ContainerChild>

        </Container>
    )
}
