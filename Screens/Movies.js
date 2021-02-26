import React, { useEffect, useState} from 'react';
import { Text, View, FlatList, StyleSheet, Pressable} from "react-native";
import axios from 'axios';
import MovieShow from "./MovieShow";

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

    function goToMovie(item){
        navigation.navigate("MovieShow", { item: item})
    }

    return <View style={styles.movieContainer}>
            <Text style={styles.movieTitle}>Movies:</Text>

            <FlatList
                data={movies}
                renderItem={({ item }) => {
                    return<Pressable onPress={() => goToMovie(item)}>
                        <Text style={styles.listItem}>
                        {item.title}
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
    movieContainer: {
        alignItems: 'center',
        backgroundColor: 'black',
    },
    itemSeparator:{
        borderBottomColor: 'red',
        borderWidth: 2
    },
    listItem:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 5,
        fontSize: 15,
        fontFamily: 'serif',
        color: 'white'
    },
    movieTitle:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'serif'
    }
})
