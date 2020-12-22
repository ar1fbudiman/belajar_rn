import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Icon } from 'react-native'
import { Beranda, BerandaActive, Pesanan, PesananActive, Akun, AkunActive } from '../../assets'

const TabItems = ({ key, onPress, onLongPress, label, isFocused }) => {
    const Icon = () => {
        if(label === "Home") return isFocused ? <BerandaActive /> : <Beranda />;
        if(label === "Pesanan") return isFocused ? <PesananActive /> : <Pesanan />;
        if(label === "Akun") return isFocused ? <AkunActive /> : <Akun />;
        return <Akun />;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            {/* <Icon /> */}
            <Text style={styles.text}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({
    text: {
        color: '#C8C8C8'
    },
    container: {
        flex: 1
    }
})
