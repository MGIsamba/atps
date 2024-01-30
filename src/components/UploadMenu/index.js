import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Text, Modal, Button, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const UploadMenu = forwardRef((props, ref) => {
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

    const handleOnNavigateToUploadDoc = () => {
        setModalVisible(false);
        navigation.navigate("DocumentUpload")
    }

    const handleOnNavigateToUploadTimeTable = () => {
        setModalVisible(false);
        navigation.navigate("TimeTableUpload")
    }
    const handleOnNavigateToUploadNews = () => {
        setModalVisible(false);
        navigation.navigate("NewsUpload")
    }

    const handleOnNavigateToUploadOrder = () => {
        setModalVisible(false);
        navigation.navigate("OrdersUpload")
    }
    return (
        <Modal
            visible={modalVisible}
            style={styles.container}
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
        >
            <View style={styles.contentContainer}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Ionicons name="close" size={30} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.chooseText}>Choose an option:</Text>
                    <View style={styles.textButton}>
                        <Button
                            title="News"
                            onPress={handleOnNavigateToUploadNews}
                        />
                    </View>
                    <View style={styles.textButton}>
                        <Button
                            title="Beats,Patrols & DailyState"
                            onPress={handleOnNavigateToUploadDoc}
                        />

                    </View>
                    <View style={styles.textButton}>
                        <Button
                            title="Trainers TimeTable"
                            onPress={handleOnNavigateToUploadTimeTable}
                        />
                        
                    </View>

                    <View style={styles.textButton}>
                        <Button
                            title="Orders"
                            onPress={handleOnNavigateToUploadOrder}
                        />
                        
                    </View>

                </View>
            </View>
        </Modal>
    );
});

export default UploadMenu;
