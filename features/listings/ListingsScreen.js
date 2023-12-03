import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from './listingsSlice';
import Listing from './Listing';

const ListingsScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const listings = useSelector((state) => state.listings.entities);

    useEffect(() => {
        dispatch(fetchListings());
    }, [])

    return (
        <View>
            <Text>Listings Screen</Text>
            <ScrollView>
                {listings?.map((l) => {
                    <Listing key={l.id} listing={l} />
                })}
            </ScrollView>
            <Button
                title="Go back to Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
};

export default ListingsScreen;