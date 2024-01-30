import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert, TouchableOpacity, } from 'react-native';
import styles from './styles';
import { Picker } from '@react-native-picker/picker';
import * as DocumentPicker from 'expo-document-picker';
import { auth, db } from '../../../firebase';
import uploadFile from '../../services/uploadFile';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import CheckButton from '../../components/CheckButton';
import Ionicon from 'react-native-vector-icons/Ionicons';


const DocumentUpload = () => {
    const navgation = useNavigation();
    const [title, setTitle] = useState('');
    const [documentType, setDocumentType] = useState('pdf');
    const [description, setDescription] = useState('');
    const [documentPreview, setDocumentPreview] = useState(null);



    const handleUpload = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                return Alert.alert("Login to upload document");
            } else if (!title) {
                return Alert.alert("Please enter title");
            } else if (!documentPreview) {
                return Alert.alert("Please select a document");
            } else if (!description) {
                return Alert.alert("Please enter description");
            }


            const response = await uploadFile(documentPreview, "trainerEvents");

            await addDoc(collection(db, "trainerEvents"), {
                type: documentType,
                description,
                url: response,
                title: title,
                uid: user.uid,
                createdAt: new Date().toISOString(),
            });

            setDocumentPreview(null);
            setDocumentType('');
            setDescription('');
            setTitle('');

            Alert.alert("Document uploaded successfully");
            navgation.navigate("Beat");
        } catch (error) {
            alert(error?.message)
        }
    };

    const handleOnSelectFile = async () => {
        try {
            if (documentType === "pdf") {
                const response = await DocumentPicker.getDocumentAsync({
                    type: "application/pdf",
                });

                if (response.type === "cancel") return;
                setDocumentPreview(response);
            }
            
            else {
                const response = await DocumentPicker.getDocumentAsync({
                    type: "image/*",
                });

                if (response.type === "cancel") return;
                setDocumentPreview(response);
            }
        } catch (error) {
            Alert.alert(error?.message)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.sectionContainer}>
                <Text style={styles.titleText}>Title</Text>
                <TextInput
                    style={styles.titleInput}
                    value={title}
                    onChangeText={setTitle}
                />
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.titleText}>Document Type:</Text>
                <View style={styles.rowContainer}>
                    <CheckButton
                        lable="PDF"
                        check={documentType === "pdf"}
                        onPress={() => setDocumentType("pdf")}
                    />
                    <CheckButton
                        lable="Image"
                        check={documentType === "img"}
                        onPress={() => setDocumentType("img")}
                    />
                   </View>
            </View>

            <View style={styles.sectionContainer}>
                <Text style={styles.titleText}>Description:</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={setDescription}
                />
            </View>

            {documentPreview && (
                <View style={styles.sectionContainer}>
                    <Text style={styles.titleText}>Selected Document:</Text>
                    <View style={styles.rowContainer}>
                        <Text style={{ marginTop: 10 }}>{documentPreview.name}</Text>
                        <TouchableOpacity
                            onPress={() => setDocumentPreview(null)}
                            style={{ marginLeft: 10 }}
                        >
                            <Ionicon
                                name="close-circle"
                                size={35}
                                color={"red"}
                                onPress={() => setDocumentPreview(null)}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    title={documentPreview ? "Upload" : "Select Document"}
                    onPress={documentPreview ? handleUpload : handleOnSelectFile}
                />
            </View>
        </View>
    );
};

export default DocumentUpload