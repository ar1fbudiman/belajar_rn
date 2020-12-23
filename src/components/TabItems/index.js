import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Icon } from 'react-native'
import { Beranda, BerandaActive, Pesanan, PesananActive, Akun, AkunActive } from '../../assets'
import { WARNA_ACTIVE, WARNA_DISABLE } from '../../utils'

const TabItems = ({ key, onPress, onLongPress, label, isFocused }) => {
    const Icon = () => {
        if(label === "Home") return isFocused ? <BerandaActive /> : <Beranda />;
        if(label === "Pesanan") return isFocused ? <PesananActive /> : <Pesanan />;
        if(label === "Akun") return isFocused ? <AkunActive /> : <Akun />;
        return <Beranda />;
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItems

const styles = StyleSheet.create({
    text: (isFocused) => ({
        color: isFocused ? WARNA_ACTIVE : WARNA_DISABLE,
        marginTop: 5
        
    }),
    container: {
        alignItems: 'center'
    }
})
