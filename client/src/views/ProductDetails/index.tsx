import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {styles} from "./productDetails.style";

export const ProductDetails = () => {
  return(
      <SafeAreaView style={styles.container}>
          <Text>ProductDetails</Text>
      </SafeAreaView>
  )
}