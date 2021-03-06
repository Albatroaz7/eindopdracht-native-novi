import React from 'react';
import {StyleSheet, Text, View, Button} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function Homepage({ navigation }){
    return(
        <View style={styles.container}>
            <Text>Netflix</Text>

            <Button
                title="View Movies"
                onPress={() => navigation.navigate('Movies')}
            />
            {/*<StatusBar style="auto" />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

