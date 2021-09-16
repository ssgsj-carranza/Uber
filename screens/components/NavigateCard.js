import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_KEY} from "@env";
import { useDispatch } from 'react-redux';
import {setDestination} from '../../slices/navSlice';
import {useNavigation} from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Greetings and Welcome</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        styles={{
                            container: {
                                flex: 0,
                                backgroundColor: 'white',
                                paddingTop: 20,
                            },
                            textInput: {
                                fontSize: 18,
                                borderRadius: 0,
                                backgroundColor: '#DDDDDF',
                            },
                            textInputContainer: {
                                paddingHorizontal: 20,
                                paddingBottom: 0,
                            },
                        }}
                        placeholder='Where to?'
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_MAPS_KEY,
                            language: 'en',
                        }}
                        returnKeyType={'search'}
                        minLength={2}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                                })
                            );
                            navigation.navigate('RideOptionsCard')
                        }}
                    />
                </View>
                <NavFavourites />
            </View>
            <View>
                <TouchableOpacity style={tw`flex flex-row w-24 px-4 py-3 rounded-full bg-black`}>
                    <Icon 
                        name='car'
                        type='font-awesome'
                        color='white'
                        size={16}
                    />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
