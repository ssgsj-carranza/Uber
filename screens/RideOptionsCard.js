import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const data = [
    {
        id: 'Uber-X-123',
        title: 'HM Fly',
        multiplier: 1,
        image: 'https://images.gameinfo.io/pokemon/256/p6f102.png',
    },
    {
        id: 'Uber-XL-456',
        title: 'Nimbus 2000',
        multiplier: 1.2,
        image: 'https://static.wikia.nocookie.net/harrypotter/images/0/0f/Nimbus_2000_1.jpg/revision/latest?cb=20150530185551',
    },
    {
        id: 'Uber-LUX-789',
        title: 'Flying Nimbus cloud',
        multiplier: 1.75,
        image: 'https://i.redd.it/8kvyrz0t1q651.jpg',
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
                renderItem={({item: {id, title, multiplier, image}}) => (
                    <TouchableOpacity style={tw`flex-row items-center justify-between`}>
                        <Image 
                            style={{
                                width: 100,
                                height: 100,
                                resizeMode: 'contain',
                            }}
                            source={{ uri: image }}
                        />
                        <View>
                            <Text>{title}</Text>
                            <Text>Travel time...</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
