import React from 'react';
import { View, Text, StyleSheet, Image} from "react-native";


export default function MovieShow(props){

    let image = {uri:props.route.params.item.img}

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.route.params.item.title}</Text>
            <Text style={styles.synopsis}>{props.route.params.item.synopsis}</Text>
            <Text style={styles.imdbrating}>IMDB Rating: ({props.route.params.item.imdbrating})</Text>
            <Image style={styles.image} source={image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: 'black',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    title: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'serif'
    },
    synopsis: {
        color: 'white',
        fontSize: 15,
        padding: 50,
        fontFamily: 'serif'
    },
    image: {
        width: 250,
        height: 300,
        padding: 16
    },
    imdbrating:{
        color: 'white'
    }
})
