import {FlatList, Text, View} from "react-native";
import {SIZES} from "../../../constants";
import {ProductCardView} from "../ProductCardView";
import {styles} from "./productRow.style";


export const ProductRow = () => {
    const products = [1, 2, 3, 4];
    return(
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({item}) => (<ProductCardView />)}
                horizontal
                contentContainerStyle={{columnGap: SIZES.medium}}
            />
        </View>
    )
}