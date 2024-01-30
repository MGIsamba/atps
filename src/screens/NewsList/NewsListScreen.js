import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import CustomSwitch from '../../components/CustomSwitch/CustomSwitch';
import BannerSlider from '../../components/Banner/BannerSlider';
import { windowWidth } from '../../utils/Dimentions';
import { recruitsEvents, trainerEvents, sliderDataEvent, news } from '../../data/dataArrays';
import ListItem from '../../components/ListItem/ListItem';
import MenuImage from "../../components/MenuImage/MenuImage";
import Ionicons from "react-native-vector-icons/Ionicons";
import UploadMenu from '../../components/UploadMenu';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';
import pdfIcon from '../../../assets/pdf.png';
import NewPreview from '../../components/NewPreview';
import BeatPreview from '../../components/BeatPreview';
import TrainerPreview from '../../components/TrainerPreview';


export default function NewsListScreen({navigation}) {

  const uploadMenuRef = React.createRef(null);
  const newPreviewRef = React.createRef(null);
  const orderPreviewRef = React.createRef(null);
  const trainertimetablePreviewRef = React.createRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const [gamesTab, setGamesTab] = useState(1);
  const [news,setNews] = useState([]);
  const [orders,setTopEvents] = useState([]);
  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "news"), (snapshot) => {
      const news = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNews(news);

      

    });
    return unsubscribe;
  }, []);


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db,"orders"), (snapshot) => {
      

      const orders= snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTopEvents(orders);

    });
    return unsubscribe;
  }, []);


  
  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  const handleOnOpenUploadMenu = () => {
    uploadMenuRef?.current?.open();
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          marginRight: 10,
        }}
        onPress={handleOnOpenUploadMenu}
      >
        <Ionicons name="add" size={30} color="black" />
      </TouchableOpacity >
    });
  }, [navigation, uploadMenuRef, newPreviewRef,orderPreviewRef,trainertimetablePreviewRef]);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}> 
      <UploadMenu
        ref={uploadMenuRef}
      />
      <NewPreview
        ref={newPreviewRef}
        title={selectedItem?.title}
        description={selectedItem?.description}
        image={selectedItem?.url}
      />
      <BeatPreview
        ref={orderPreviewRef}
        title={selectedItem?.title}
        description={selectedItem?.description}
        image={selectedItem?.url}
      />
      <TrainerPreview
        ref={trainertimetablePreviewRef}
        title={selectedItem?.title}
        description={selectedItem?.description}
        image={selectedItem?.url}
      />
      <ScrollView style={{ padding: 20 }}>

        
      <View
          style={{
            flexDirection: 'row',
            borderColor: '#C6C6C6',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingVertical: 8,
          }}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>

        

<View style={{marginVertical: 20}}>
          <CustomSwitch
            selectionMode={1}
            option1="Orders & Instruction"
            option2="News & Events "
            onSelectSwitch={onSelectSwitch}
          />
        </View>

        {gamesTab == 1 &&
          orders.map(item => (
            <ListItem
              key={item.id}
              photo={item?.type === "pdf" ? pdfIcon : { uri: item?.url }}
              title={item.title}
              // subTitle={item.subtitle}
              // isFree={item.isFree}
              isFree={"Yes"}
              onPress={() => {
                if (item?.type === "pdf") {
                  Linking.openURL(item?.url);
                } else {
                  setSelectedItem(item);
                  orderPreviewRef?.current?.open();
                }
              }}
            />
          ))}
          {gamesTab == 2 &&
            news.map(item => (
            <ListItem
              key={item.id}
              photo={item?.type === "pdf" ? pdfIcon : { uri: item?.url }}
              title={item.title}
              subTitle={item.description}
              //isFree={item.isFree}
              isFree={"Yes"}
             
              onPress={() => {
                if (item?.type === "pdf") {
                  Linking.openURL(item?.url);
                } else {
                  setSelectedItem(item);
                  trainertimetablePreviewRef?.current?.open();
                }
              }}
            />
          ))}
        

      </ScrollView>
    </SafeAreaView>




  )


}