import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Icon from 'react-native-vector-icons/AntDesign'
import { ComponentNavigationProps, NewsData } from '../utils/types'
import DetailsCard from '../components/DetailsCard'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper'

  
const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@newsData')
      if(value !== null) {
        // value previously stored
        return JSON.parse(value)
      }
    } catch(e) {
      // error reading value
      alert("something went wrong")
    }
  }
  const storeData = async (value:NewsData) => {
    const data: NewsData[] = (await getData()) || [];
    !data.find((d)=>d.title===value.title)? data.push(value):data
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('@newsData', jsonValue)
    } catch (e) {
      // saving error
      return alert("Somehting went wrong with storing data")
    }
  }
  
const NewsOverview = (props:ComponentNavigationProps) => {
  const { title, content, image_url, description } = props?.route?.params as NewsData;

  props.navigation.setOptions({
      headerRight: () => (
      <Button onPress={() => storeData( {title, content, image_url, description })}>
          Save
      </Button>
      ),
  });
           
              return <DetailsCard content={content} image_url={image_url} title={title}/>
    
}

export default NewsOverview

const styles = StyleSheet.create({})