import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    background-color: #000000;
    border-radius: 10px;
    margin-top: 10px;
    height: 50px;
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