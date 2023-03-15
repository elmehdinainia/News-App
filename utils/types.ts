import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Route } from 'react-native';

export type NewsData = {
    title: string;
    //  link: string;
    //   keywords: string;
    //   creator: string; 
    //   video_url: string; 
      description: string;
       content: string; 
    //    pubDate: string;
        image_url: string; 
        // source_id: string; 
        // categor: string; 
        // country: string; 
        // language: string;
       }

export type ComponentNavigationProps = {
    navigation: NavigationProp<Route>;
    route: RouteProp<Route>
}