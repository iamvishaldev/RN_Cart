import React from 'react'
import { Text, View } from 'react-native'
// styles
import { styles } from './SplashStyle'

const Splash = () => {
    return (
        <View style={styles.parentView}>
            <Text style={[styles.childText, styles.commonStyle]}>Box 1</Text>
            <Text style={[styles.childText2, styles.commonStyle]}>Box 2</Text>
            <Text style={[styles.childText3, styles.commonStyle]}>Box 3</Text>
            <Text style={[styles.childText4, styles.commonStyle]}>Box 4</Text>
            <Text style={[styles.childText5, styles.commonStyle]}>Box 5</Text>
        </View>
    )
}

export default Splash
