import { StyleSheet } from 'react-native';
import { windowWidth } from '../../utils/Dimentions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#FFFFFF"
    },
    sectionContainer: {
        width: windowWidth - 40,
        marginVertical: 10
    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    titleInput: {
        width: windowWidth - 60,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#000000",
        padding: 10,
        marginTop: 10
    },
    rowContainer: {
        width: windowWidth * 0.9,
        flexDirection: "row",
        width: windowWidth - 20,
        marginVertical: 10,
    },
    pdf: {
        width: windowWidth,
        height: 100
    },

    input: {
        width: windowWidth - 60,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#000000",
        padding: 10,
        marginBottom: 10,
        textAlignVertical: "top",
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: "row",
        width: windowWidth - 20,
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: windowWidth - 20,

    }
});

export default styles;