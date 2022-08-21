import React from 'react'
import { Text, View, Image } from 'react-native'
// styles
import { styles } from './DashboardStyle'
// components
import TextComponent from '../../components/TextComponent/TextComponent'
import { Colors, MyIcons } from '../../global'

const Dashboard = () => {

    const profile_url = "https://images.unsplash.com/photo-1574108233269-86d1199d28de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"

    const ICON_SIZE = 20

    return (
        <View style={styles.container}>
            <View style={{
                height: 70,
                backgroundColor: 'pink',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: profile_url }}
                        style={{ width: 40, height: 40, borderRadius: 100 }}
                    />
                    <View>
                        <TextComponent text="Hello!" textColor={Colors.THEME_COLOR} />
                        <TextComponent text="Emily Hales" textColor={Colors.BLACK} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <MyIcons.AntDesign name="search1" size={ICON_SIZE} />
                    <MyIcons.FetherIcon name="shopping-cart" size={ICON_SIZE} />
                </View>
            </View>
        </View>
    )
}

export default Dashboard

