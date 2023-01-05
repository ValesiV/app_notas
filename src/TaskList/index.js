import React from 'react';
import { View, 
  Text, 
  StyleSheet,
  TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

export default function TaskList({data, deleteItem, editItem}){
    return(
        <View style={styles.container}>
            <View>
                <Text style={{color: '#FFF', fontSize: 18}}>
                    {data.nome}
                </Text>
            </View>

            <View style={styles.containerChild}>
                <TouchableOpacity
                style={{marginHorizontal: 3}}
                onPress={() => editItem(data)}>
                    <Feather name='edit' color='#FFF' size={20} />
                </TouchableOpacity>

                <TouchableOpacity
                style={{marginHorizontal: 3}}
                onPress={() => deleteItem(data.key)}>
                    <Feather name='trash' color='#FFF' size={20} />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#000',
        borderRadius: 10,
        marginTop: 10,
    },
    containerChild: {
        flexDirection: 'row',
    },
})

