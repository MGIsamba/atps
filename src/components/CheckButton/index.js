import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const CheckButton = ({ lable, check, onPress }) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={onPress}
        >
            <View style={styles.circle}>
                {check && <View style={styles.check} />}
            </View>
            <Text style={styles.text}>{lable}</Text>
        </TouchableOpacity>
    )
}

export default CheckButton