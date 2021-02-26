import React from 'react';
import {StyleSheet, Text, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function Homepage({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={styles.homeTitle}>Netflix</Text>
            <Text style={styles.homeText}>Welcome to the Netflix Movie app. If you will click on the button below, you'll find a list of movies. Whenever u click on one of the movies, you'll see a overview of the movie with all sorts of information!</Text>
            <Button
                title="View Movies"
                onPress={() => navigation.navigate('Movies')}
            />
            <StatusBar backgroundColor="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeTitle: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'serif',
        color: 'red',
    },
    homeText: {
        color: 'white'
    }
});

