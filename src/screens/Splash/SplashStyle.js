import { StyleSheet } from 'react-native'
import { Colors } from '../../global'

export const styles = StyleSheet.create({
    parentView: {
        width: '95%',
        height: 500,
        borderWidth: 3,
        borderColor: '#101820FF',
        marginTop: 100,
        marginHorizontal: 10,
        backgroundColor: 'aliceblue',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    childText: {
        backgroundColor: "#97BC62FF",
        borderColor: "#2C5F2D",
        color: '#2C5F2D'
    },
    childText2: {
        backgroundColor: Colors.OFFLINE,
        borderColor: Colors.LITE_GRAY,
        color: Colors.OFFLINE
    },
    childText3: {
        backgroundColor: Colors.RED_CHERRY,
        borderColor: Colors.LITE_GRAY,
        color: Colors.RED_CHERRY
    },
    childText4: {
        backgroundColor: Colors.ORANGE,
        borderColor: Colors.LITE_GRAY,
        color: Colors.ORANGE
    },
    childText5: {
        backgroundColor: Colors.YELLOW,
        borderColor: Colors.LITE_GRAY,
        color: Colors.YELLOW
    },
    commonStyle: {
        width: 65,
        height: 65,
        color: 'black'
    }
})
