import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Modal, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const BeatPreview = forwardRef((props, ref) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        open() {
            setModalVisible(true);
        },
        close() {
            setModalVisible(false);
        }
    }));

    return (
        <Modal
            visible={modalVisible}
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
        >
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Ionicons name="close" size={30} color="black" />
                    </TouchableOpacity>

                    <Image
                        source={{
                            uri: props?.image
                        }}
                        style={styles.image}
                    />
                    <View style={styles.sectionContainer}>
                        <Text style={styles.titleText}>Title</Text>
                        <Text style={styles.valueText}>{
                            props?.title
                        }</Text>
                    </View>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.titleText}>Description</Text>
                        <Text style={styles.valueText}>{
                            props?.description
                        }</Text>
                    </View>
                </View>
            </View>
        </Modal >
    );
});

export default BeatPreview;
