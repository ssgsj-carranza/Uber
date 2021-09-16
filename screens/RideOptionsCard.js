import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const data = [
    {
        id: 'Uber-X-123',
        title: 'Piggy back',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn',
    },
    {
        id: 'Uber-XL-456',
        title: 'Portkey',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8',
    },
    {
        id: 'Uber-LUX-789',
        title: 'Flying Nimbus cloud',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf',
    },
];

const RideOptionsCard = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity style={tw`absolute top-3 left-5 p-3 z-50 rounded-full`} onPress={() => navigation.navigate('NavigateCard')}>
                    <Icon 
                        name='chevron-left'
                        type='fontawesome'
                    />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity>
                        <Text>Car</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
