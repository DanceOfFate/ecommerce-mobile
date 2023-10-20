import {Image, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./productDetails.style";
import React, {useState} from "react";
import {Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import {COLORS, SIZES} from "../../constants";

export const ProductDetails = ({navigation}) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                }}>
                    <Ionicons name="heart" size={30}/>
                </TouchableOpacity>
            </View>
            <Image
                source={{uri: "https://media.architecturaldigest.com/photos/5f594415423605eb5d414865/16:9/w_2560%2Cc_limit/MB_DEC19-58.jpg"}}
                style={styles.image}
            />
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Lorem ipsum</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>$1999</Text>
                    </View>
                </View>
                <View style={styles.titleRow}>
                    <View style={styles.rating}>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <Ionicons
                                key={index}
                                name="star"
                                size={24}
                                color="gold"
                            />
                        ))}
                        <Text style={styles.ratingText}>(5.0)</Text>
                    </View>
                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => increment()}>
                            <SimpleLineIcons name="plus" size={20}/>
                        </TouchableOpacity>
                        <Text style={styles.ratingText}>{count}</Text>
                        <TouchableOpacity onPress={() => {
                        }}>
                            <SimpleLineIcons name="minus" size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                        Lorem Ipsum
                    </Text>
                    <Text style={styles.descText}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Assumenda, blanditiis consectetur culpa delectus dolores
                        eaque, ex impedit laudantium libero magni molestias nemo
                        nisi odio officiSis quo ut voluptas! Commodi, quia!
                    </Text>
                </View>
                <View style={{ marginBottom: SIZES.small }}>
                    <View style={styles.location}>
                            <View style={{ flexDirection: "row" }}>
                                <Ionicons name="location-outline" size={20}/>
                                <Text>Dallas</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <MaterialCommunityIcons name="truck-delivery-outline"  size={20}/>
                                <Ionicons name="location-outline" size={20}/>
                                <Text>Free delivery</Text>
                            </View>
                    </View>
                </View>
                <View style={styles.cartRow}>
                    <TouchableOpacity style={styles.cartBtn} onPress={() => {}}>
                        <Text style={styles.cartBtnText}>Buy now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addCart} onPress={() => {}}>
                        <Fontisto name="shopping-bag" size={22} color={COLORS.lightwhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}