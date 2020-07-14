import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "646a758db959afac11f8b5a237b42e58";

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({
        isLoading: false,
        condition: data.weather[0].main, 
        temp: data.main.temp
      });
    }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      //Send to API and get weather
      this.getWeather(latitude, longitude);
    } catch (error) {
       Alert.alert("Can't find you");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, condition ,temp } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
  } 
}
