import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./productCardView.style";
import {Ionicons} from "@expo/vector-icons";
import {ParamListBase, useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";


export const ProductCardView = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return(
      <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
          <View style={styles.container}>
              <View style={styles.imageContainer}>
                  <Image
                      source={{uri: "https://media.biletomat.pl/media/galleries/galleries_file/163/5162/98c19a8317044049a559ca80b7a119ae.jpg"}}
                      style={styles.image}
                  />
              </View>
              <View style={styles.details}>
                   <Text style={styles.title} numberOfLines={1}>Product</Text>
                   <Text style={styles.supplier}>Product</Text>
                   <Text style={styles.price}>$1999</Text>
              </View>
              <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-circle" size={35} />
              </TouchableOpacity>
          </View>
      </TouchableOpacity>
  )
}