import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Appbar } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import { ComponentNavigationProps, NewsData } from '../utils/types'
import Carditem from '../components/Carditem'

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

const Saved = (props:ComponentNavigationProps) => {
  const focuses = useIsFocused()
  const [savedNews,setsavedNews] = useState([])
  useEffect(()=>{
    getData().then((data)=>setsavedNews(data))
             .catch(()=>alert("Error"))

  },[focuses])
  return (
    <ScrollView>
       <Appbar.Header>
        <Appbar.Content title="saved"></Appbar.Content>
      </Appbar.Header>
      {savedNews && savedNews.length >0 && savedNews.map((data:NewsData)=> 
      <Carditem
       title={data.title} 
       image_url={data.image_url}
        description={data.description} 
        content={data.description}
         navigation={props.navigation}
         key={data.title}
         />
         )}
    </ScrollView>
  )
}

export default Saved

const styles = StyleSheet.create({})