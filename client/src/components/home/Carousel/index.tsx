import {Text, View} from "react-native";
import {styles} from "./carousel.style";
import {COLORS} from "../../../constants";
import {SliderBox} from "react-native-image-slider-box"


export const Carousel = () => {
    const slides: any[] = [
        "https://media.architecturaldigest.com/photos/5f594415423605eb5d414865/16:9/w_2560%2Cc_limit/MB_DEC19-58.jpg",
        "https://hips.hearstapps.com/hmg-prod/images/index-online-64e648a46cf5e.jpg",
        "https://coolmaterial.com/wp-content/uploads/2017/05/12-Online-Furniture-Stores-2-1000x600.jpg"
    ]
    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{borderRadius: 15, width: "93%", marginTop: 15}}
                autoplay
                circleLoop
            />
        </View>
    )
}