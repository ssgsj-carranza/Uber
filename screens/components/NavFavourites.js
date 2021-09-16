import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Oak Creek, WI',
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'Milwaukee, WI',
    },
];

const NavFavourites = () => {
    return (
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
                <TouchableOpacity>
                    <Text>Testing....</Text>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavFavourites

const styles = StyleSheet.create({})
