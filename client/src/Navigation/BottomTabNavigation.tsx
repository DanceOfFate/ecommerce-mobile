import {View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../constants";
import { Home, Search, Profile } from "../views";

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBar: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}


export const BottomTabNavigation = () => {
    return(
        // @ts-ignore
       <Tab.Navigator screenOptions={screenOptions}>
           <Tab.Screen
               name="Home"
               component={Home}
               options={{
                   tabBarIcon: ({focused}: {focused: boolean}) => (
                       <Ionicons
                           name={focused ? "home" : "home-outline"}
                           size={24}
                           color={focused ? COLORS.primary : COLORS.gray2}
                       />
                   )
               }}
           />
           <Tab.Screen
               name="Search"
               component={Search}
               options={{
                   tabBarIcon: ({focused}: {focused: boolean}) => (
                       <Ionicons
                           name={"search-sharp"}
                           size={24}
                           color={focused ? COLORS.primary : COLORS.gray2}
                       />
                   )
               }}
           />
           <Tab.Screen
               name="Profile"
               component={Profile}
               options={{
                   tabBarIcon: ({focused}: {focused: boolean}) => (
                       <Ionicons
                           name={focused ? "person" : "person-outline"}
                           size={24}
                           color={focused ? COLORS.primary : COLORS.gray2}
                       />
                   )
               }}
           />
       </Tab.Navigator>
    )
}