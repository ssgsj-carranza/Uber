import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import {selectOrigin} from '../../slices/navSlice';
import {selectDestination} from '../../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_KEY} from "@env";

const Map = () => {
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);

    useEffect(() => {
        if (!origin || !destination) return;

        //ZOOM AND FIT TO MARKER
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding: {top: 50, left: 50, bottom: 50, right: 50},
        });
    }, [origin, destination]); //RE RUNS WHEN ORIGIN OR DESTINATION CHANGES

    return (
        <MapView
            ref={mapRef}
            style={tw`flex-1`}
            mapType='mutedStandard' 
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
        >
            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_MAPS_KEY}
                    strokeWidth={3}
                    strokeColor='black'
                    lineDashPattern={[0]}
                />
            )}

            {origin?.location && (
                <Marker 
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title='Origin'
                    description={origin.description}
                    identifier='origin'
                />
            )}

            {destination?.location && (
                <Marker 
                    coordinate={{
                        latitude: destination.location.lat,
                        longitude: destination.location.lng,
                    }}
                    title='Destination'
                    description={destination.description}
                    identifier='destination'
                />
            )}
        </MapView>
    );
};

export default Map

const styles = StyleSheet.create({})
