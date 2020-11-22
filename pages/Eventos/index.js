import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView, StatusBar, Text, Button } from 'react-native';

const Eventos = () => {
    const [evetos, setEventos] = useState([]);
    

    const listareventos = () => {
        fetch('http://192.168.15.13:5000/api/Eventos',{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setEventos(data.data);
                console.log(evetos);
            })
            .catch(err => console.error(err))
    }
    useEffect(() => 
    { listareventos });

    return (
        <View>

            <Text>Eventos</Text>

            <FlatList
                data={[
                    {key : evetos}
                ]}
                renderItem={({ item }) => <Text>{item.key}</Text>}
            />

          




        </View>
    )

}

export default Eventos;
