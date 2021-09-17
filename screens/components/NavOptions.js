import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {selectOrigin} from '../../slices/navSlice';

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'MapScreen',
    },
    {
        id: '456',
        title: 'Order Food',
        image: 'https://links.papareact.com/28w',
        screen: 'EatScreen', //FUTURE ADD ON
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

    return (
        <FlatList 
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                    disabled={!origin}>
                    <View style={tw`${!origin && 'opacity-20'}`}>
                        <Image
                            style={{width: 120, height: 120, resizeMode: 'contain'}} 
                            source={{uri: item.image}}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`} 
                            type='antdesign'
                            name='arrowright'
                            color='white'
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
};

export default NavOptions


//npm install
//npm install tailwind-react-native-classnames
//npm install react-native-elements
//npm install react-native-vector-icons
//npm install react-native-safe-area-context (uninstalled)
//npm install @react-navigation/native
//expo install react-native-gesture-handler react-native-reanimated react-native-screens @react-native-community/masked-view
//npm install @react-navigation/stack
//npm install react-native-google-places-autocomplete --save
//npm install react-native-dotenv
//Ran npm dedupe to remove duplicate packages
// npm install react-native-maps
// npm install react-native-maps-directions
// npm install intl
// npm i -S react-intl (maybe)