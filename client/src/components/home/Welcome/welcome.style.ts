import { StyleSheet } from "react-native";
import {COLORS, SIZES} from "../../../constants";

export const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    // ts-ignore
welcomeText: {
        fontFamily: "boldFont",
        fontSize: SIZES.xxLarge - 10,
        marginTop: 10 ,
        color: COLORS.black,
        marginHorizontal: 12
    },
    secondaryWelcomeText: {
        color: COLORS.primary,
        fontSize: SIZES.xxLarge - 20,
        marginTop: 0
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    }
})