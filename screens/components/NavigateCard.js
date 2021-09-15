import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Greetings and Welcome</Text>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
