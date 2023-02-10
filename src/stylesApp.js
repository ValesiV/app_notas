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
    padding: 10px;
    background-color: #1c1c1e;
    border-radius: 4px;
`;

export const Options = styled.TouchableHighlight`
    margin-top: 5px;
`;

export const OptionsText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

/*
#000000 - Black
#1c1c1e - Dark Gray
#333333 - Gray
#4d4d4f - Light Gray
#666666 - Lighter Gray
#b3b3b3 - Lightest Gray
#e6e6e6 - Off White
#f2f2f2 - White Smoke
#ffffff - White
*/