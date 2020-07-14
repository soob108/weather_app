import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'haze',
        subtitle: 'Just don\'t go outside.'
    },
    Thunderstorm:{
        iconName: 'weather-lightning',
        gradient: ['#373b44', '#4286f4'],
        title: 'Thunderstorm in the house',
        subtitle: 'Actually, outside of the house'
    }, 
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'haze',
        subtitle: 'Just don\'t go outside.'
    },
    Rain:{ 
        iconName: 'weather-rainy',
        gradient: ['#00C6FB', '#005BEA'],
        title: 'Raining like a MF',
        subtitle: 'For more info look outside'
    },
    Snow:{ 
        iconName: 'weather-snowy',
        gradient: ['#7DE2FC', '#B9B6E5'],
        title: 'Snow',
        subtitle: 'Do you want to build a snowman?'
    },
    Atmosphere:{
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#66A6FF'],
        title: 'Atmosphere',
        subtitle: ' Atmosphere'
    },
    Clear:{
        iconName: 'weather-sunny',
        gradient: ['#FEF253', '#FF7300'],
        title: 'Sunny',
        subtitle: 'Strong sun'
    },
    Clouds:{
        iconName: 'weather-cloudy',
        gradient: ['#D7D2CC', '#304352'],
        title: 'Clouds',
        subtitle: 'Clouds'
    },
    Mist:{
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Mist',
        subtitle: 'Mist'
    },
    Dust:{
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Dust',
        subtitle: 'Dust'
    }
}

export default function Weather({temp, condition}){
return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContaier}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={80} color="white" />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContaier, ...styles.textContainer}}> 
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
        );
}

Weather.porpTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm', 
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Dust'
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    halfContaier: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        marginTop: 5,
        fontSize: 32,
        color: 'white'
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle: {
        fontWeight: '600',
        color: 'white'
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
});