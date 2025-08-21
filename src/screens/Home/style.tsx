import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333",
        width: '100%'
    },
    text: {
        fontSize: 24,
        color: "#333",
        fontWeight: "bold"
    },
    logoContainer: {
        flexDirection: "column",
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        paddingTop: 20,
        backgroundColor: '#4D4D4D',
    },
    inputContainer: {
        flexDirection: "column",
        justifyContent: "center",
        borderWidth: 1,
        width: '80%'
    }
})

export default styles;