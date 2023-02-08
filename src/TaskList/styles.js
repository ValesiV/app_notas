import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    background-color: #121212;
    border-radius: 10px;
    margin-top: 10px;
`;

export const ContainerChild = styled.View`
    flex-direction: row;
`;

export const TextName = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const ButtonIcons = styled.TouchableOpacity`
    margin-left: 3px;
    margin-right: 3px;
`;
