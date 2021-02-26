import React, { useEffect, useState} from 'react';
import { Text, View, FlatList, StyleSheet, Pressable} from "react-native";
import axios from 'axios';


export default function Movies({ navigation }){
    const [ movies, setMovies] = useState([]);

    const options1 = {
        method: 'GET',
        url: 'https://unogsng.p.rapidapi.com/search',
        params: {
            orderby: 'date',
            limit: '100',
            start_year: '2000',
            end_year: '2020',
        },
        headers: {
            'x-rapidapi-key': '144c35bfc8msh6ad5c07734e15a7p15c7acjsn85ca2090551c',
            'x-rapidapi-host': 'unogsng.p.rapidapi.com'
        }
    };

    //Using the useEffect to get the data from the API the moment the user presses 'enter', by using
    //the searchTerm state in the dependency.
    useEffect(() => {
        async function getMovie() {
            try {
                const response = await axios(options1)
                console.log(response)
                setMovies(response.data.results)
            }catch(e) {
                console.error(e);
            }
        }
        getMovie()
    }, [])
    console.log(movies);

    function goToMovie(id){
        navigation.navigate("MovieShow", { id: id})
    }

    return <View>
            <Text>Movies</Text>

            <FlatList
                data={movies}
                renderItem={({ item }) => {
                    return<Pressable style={styles.listItem} onPress={() => goToMovie(item.synopsis)}>
                        <Text>
                        {item.title}
                        ({item.imdbrating})
                     </Text>
                    </Pressable>
            }}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => {
                    return <View style={styles.itemSeparator} />
                } }
            />
        </View>
}

const styles = StyleSheet.create({
    itemSeparator:{
        borderBottomColor: 'blue',
        borderWidth: 2
    },
    listItem:{

    }
})
