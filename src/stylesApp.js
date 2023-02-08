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
    margin-left: 0.2px;
    background-color: #121212;
    width: 12%;
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

export const Settings = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    left: 90%;
    margin-bottom: 15px;
    z-index: 99;

`;

export const DropDownView = styled.View`
    z-index: 99;
    position: absolute;
    top: 40px;
    left: 186px;
    width: 50%;
    height: 100px;
    padding: 10px;
    background-color: #121212;
`;

export const Options = styled.TouchableHighlight`

`;

export const OptionsText = styled.Text`

`;