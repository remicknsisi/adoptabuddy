import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

const Listing = ({ listing }) => {
    const dispatch = useDispatch();

    const { id, name, image, species, sex, age } = listing

    return (
        <View>
            {listing.name}
        </View>
    );
};

export default Listing;