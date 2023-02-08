import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #F2f6fc;
`;

export const Input = styled.TextInput`
    margin-bottom: 10px;
    background-color: #FFF;
    border-radius: 4px;
    border-width: 1px;
    border-color: #141414;
    height: 45px;
    padding: 10px;
`;

export const HandleLogin = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 45px;
    margin-bottom: 10px;
`;

export const LoginText = styled.Text`
    color: #fff;
    font-size: 17px;

`;

export const TextFoot = styled.Text`
    text-align: center;
`;