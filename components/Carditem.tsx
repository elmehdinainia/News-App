import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NewsData} from '../utils/types'
import {Button, Card,useTheme} from 'react-native-paper'
import { NavigationProp, Route } from '@react-navigation/native'

type props = {
   title:string ,
   image_url:string,
   description:string,
   content:string,
   navigation:NavigationProp<Route>
   handleDelete?: (val: string) => void;


}

// props:NewsData
const Carditem = (props:props) => {
    const theme = useTheme()
    const handlePress = ()=>{
      props.navigation.navigate('NewsOverview',{
         title:props.title,
         description:props.description,
         image_url:props.image_url,
         content:props.content
      });
    }
    const split =props.description ? props.description.split("\n")[0]:""
  return (
  <Pressable onPress={handlePress}>

       <Card style={{marginVertical:10,
            backgroundColor:theme.colors.elevation.level5,
            }}
        >          
        <Card.Cover borderRadius={10} source={{uri:props.image_url}}/>
              <Card.Title title={props.title} 
              subtitle={split}
              titleNumberOfLines={1}
              >
              </Card.Title>
              {props.handleDelete && (
              <Card.Actions>
            <Button onPress={() => props.handleDelete && props.handleDelete(props.title)}>Delete</Button>
              </Card.Actions>
                )}
        </Card> 
        
  </Pressable>

  );
}

export default Carditem

const styles = StyleSheet.create({

})