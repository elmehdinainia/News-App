import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
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
const storeData = async (value:string) => {
  const data: NewsData[] = (await getData()) || [];
  const filtered = data.filter((news)=>news.title!==value)
  try {
    const jsonValue = JSON.stringify(filtered)
    await AsyncStorage.setItem('@newsData', jsonValue)
  } catch (e) {
    // saving error
    return alert("Somehting went wrong with storing data")
  }
}

const Saved = (props:ComponentNavigationProps) => {
  const focuses = useIsFocused()
  const [savedNews, setSavedNews] = useState<NewsData[]>([]);
  useEffect(()=>{
    getData().then((data)=>setSavedNews(data))
             .catch(()=>alert("Error"))

  },[focuses])

  const deleteHandler = async(val:string)=>{
    await storeData(val)
  }
  return (
    <View style={styles.countainer}>
       <Appbar.Header>
        <Appbar.Content title="saved"></Appbar.Content>
      </Appbar.Header>
      <FlatList
        style={styles.flatList}
        data={savedNews}
        renderItem={({item}) => (
          <Carditem 
          handleDelete={deleteHandler}
          navigation={props.navigation}
          description={item.description}
          image_url={item.image_url }
          title={item.title}
          content={item.content}
         
           />
        )}
      />
      {/* {savedNews && savedNews.length >0 && savedNews.map((data:NewsData)=> 
      <Carditem
       title={data.title} 
       image_url={data.image_url}
        description={data.description} 
        content={data.description}
         navigation={props.navigation}
         key={data.title}
         />
         )} */}
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({
  countainer:{
    flex:1 
  },
  flatList:{
    display:'flex',
    flex:1,
    height:'auto'
  } 
})