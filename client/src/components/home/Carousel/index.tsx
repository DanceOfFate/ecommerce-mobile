import {Text, View} from "react-native";
import {styles} from "./carousel.style";
import {COLORS} from "../../../constants";
import {SliderBox} from "react-native-image-slider-box"


export const Carousel = () => {
    const slides: any[] = [
        "https://m.media-amazon.com/images/M/MV5BNDk5YjkxYWYtNjRkMi00YWMwLWE0NjQtZGFiZjEzYTBjZGQ5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg",
        "https://media.biletomat.pl/media/galleries/galleries_file/163/5162/98c19a8317044049a559ca80b7a119ae.jpg",
        "https://global-uploads.webflow.com/62158cc7e1cd8f0ec3729390/63ed1b316aaba66004686e94_epica-JVYeP.jpeg"
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