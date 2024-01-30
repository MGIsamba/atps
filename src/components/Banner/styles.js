import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../../utils/Dimentions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    contentContainer: {
        width: windowWidth,
        height: windowHeight * 0.9,
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
    },
    closeButton: {
        position: "absolute",
        top: 10,
        right: 10,
    },
    image: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.4,
        resizeMode: "contain",
    },
    sectionContainer: {
        width: windowWidth * 0.9,
        padding: 10,
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Roboto-Medium",

    },
    valueText: {
        fontSize: 14,
        fontFamily: "Roboto-Regular",
    },
});

export default styles;