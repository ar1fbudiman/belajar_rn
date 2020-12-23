import React from 'react'
import { StyleSheet, ImageBackground, Image, View, Text, Dimensions } from 'react-native'
import { header, logo } from '../../assets'

const Home = () => {
    return (
        <View style={styles.page}>
            <ImageBackground
                style={styles.header}
                source={header}
            >
                <Image source={logo} style={styles.logo} />
                <View style={styles.blockText}>
                    <Text style={styles.textWelcome}>Selamat Datang,</Text>
                    <Text style={styles.textUsername}>ar1fbudiman</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    header: {
        width: windowWidth,
        height: windowWidth * 0.60,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    logo: {
        width: windowWidth * 0.3,
        height: windowWidth * 0.13
    },
    blockText: {
        marginTop: 20
    },
    textWelcome: {
        fontSize: 24,
        fontFamily: 'TitilliumWeb-Regular'
    },
    textUsername: {
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'TitilliumWeb-Bold'
    }
})
