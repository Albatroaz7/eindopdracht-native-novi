import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground} from "react-native";
import {StatusBar} from "expo-status-bar";

const image = { uri: "https://1.bp.blogspot.com/-yeSWKghDRWQ/Xqs81nJtWXI/AAAAAAAAH2Y/a9eRefLq3VUAWxriZD0XZ98UgpDaWRm-gCLcBGAsYHQ/w1200-h630-p-k-no-nu/Unblock%2BNetflix%2BUS%2BLibrary%2B%2526%2BStream%2BGlobal%2BNetflix%2BMovies%2B%2526%2BTV%2BShows.jpg" }

export default function Homepage({ navigation }){
    return(
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.backgroundImage}>
            <Text style={styles.homeTitle}>Netflix</Text>
            <Text style={styles.homeText}>Welcome to the Netflix Movie app. If you click on the button below, you'll find a search option and a list of movies. With the
                search option you can look up every movie that is available on Netflix. Whenever you click on one of the movies,
                you'll see an overview of the movie with all sorts of information!</Text>
            <TouchableOpacity
                style={styles.button}
                title="View Movies"
                onPress={() => navigation.navigate('Movies')}
            >
                <Text style={styles.buttonText}>Go to Movies</Text>
            </TouchableOpacity>
            <StatusBar backgroundColor="red" />
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    homeTitle: {
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 'serif',
        color: 'red',
        alignSelf: 'center',
        justifyContent: 'flex-start',
    },
    homeText: {
        fontSize: 18,
        color: 'white',
        flex: 0.4,
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: '#990000',
        alignSelf: 'center',
        paddingHorizontal: 40,
        textAlign: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 20,
        padding: 10,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center'
    }
});

