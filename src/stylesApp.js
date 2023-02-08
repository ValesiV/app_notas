import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-top: 25px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #F2f6fc;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    flex: 1;
    background-color: #FFF;
    width: 87%;
    height: 50px;
    border-width: 0.8px;
    border-color: #121212;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 18px;
`;


export const ButtonAdd = styled.TouchableOpacity`
    margin-left: 0.5px;
    background-color: #121212;
    width: 13%;
    height: 50px;
    border-width: 0.8px;
    border-color: #121212;
    align-items: center;
    justify-content: center;
`;

export const TextAdd = styled.Text`
    font-size: 30px;
    color: #fff;
`;


