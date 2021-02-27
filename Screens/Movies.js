import React, { useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet, Pressable, TextInput, Image, ImageBackground} from "react-native";
import axios from 'axios';
import MovieShow from "./MovieShow";

export default function Movies({ navigation }){
    const [ movies, setMovies] = useState([]);
    const [ searchTerm, setSearchTerm] = useState('')


    const options1 = {
        method: 'GET',
        url: 'https://unogsng.p.rapidapi.com/search',
        params: {
            query: searchTerm,
            orderby: 'date',
            limit: '50',
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
    }, [searchTerm])
    console.log(movies);

    function goToMovie(item){
        navigation.navigate("MovieShow", { item: item})
    }

    return <View style={styles.movieContainer}>
            <Text style={styles.movieTitle}>Movies:</Text>
            <TextInput
                style={styles.searchbox}
                onChangeText={setSearchTerm}
            />

            <FlatList styles={styles.results}
                data={movies}
                renderItem={({ item }) => {
                    return<View key={item.id} style={styles.result}>
                    <Pressable onPress={() => goToMovie(item)}>
                        <Image style={styles.images} source={{uri: item.img}}/>
                        <Text style={styles.heading}>
                        {item.title}
                     </Text>
                    </Pressable>
                    </View>
            }}
                keyExtractor={item => item.id.toString()}
            />
        </View>
}

const styles = StyleSheet.create({
    movieContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    results: {
        flex: 1,
        width: '100%',
        padding: 50
    },
    result: {
        flex: 1,
        width: '100%',
        marginBottom: 20,
        padding: 75
    },
    heading: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
        padding: 10,
        backgroundColor: '#990000'
    },
    movieTitle:{
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'serif'
    },
    searchbox: {
        fontSize: 20,
        fontWeight: '300',
        padding: 10,
        width: '50%',
        backgroundColor: '#4d4d4d',
        borderRadius: 8,
        marginBottom: 40,
        color: 'red'
    },
    images: {
        width: '100%',
        height: '100%',
        padding: 100
    }
})
