import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./welcome.style";
import {Feather, Ionicons} from "@expo/vector-icons";
import {COLORS, SIZES} from "../../../constants";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";


export const Welcome = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeText}>Find The Most</Text>
                <Text style={[styles.welcomeText, styles.secondaryWelcomeText]}>Luxurious Furniture</Text>
            </View>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather
                        name="search"
                        size={24} style={styles.searchIcon}
                    />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => navigation.navigate("Search")}
                        placeholder="What are you looking for?"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons
                            name="camera-outline"
                            size={SIZES.xLarge}
                            color={COLORS.offwhite}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}