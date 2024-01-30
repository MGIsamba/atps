import React from 'react';
import {View, Image} from 'react-native';

export default function BannerSlider({data}) {
  return (
    <View>
      <Image
        source={data.image}
        style={{height: 150, width: 300, borderRadius: 10}}
      />
    </View>
  );
}





{/** 



import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Modal, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const BannerSlider = forwardRef((props, ref) => {
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
    <View>
    <Image
      source={{ uri: props?.image
                      }}
      style={{height: 150, width: 300, borderRadius: 10}}
    />
  </View>

  )
});               
export default BannerSlider;






*/}



