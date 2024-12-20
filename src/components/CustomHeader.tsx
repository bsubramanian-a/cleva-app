import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import CHumbergur from "./CHumbergur";
import { useNavigation, CommonActions } from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import TopHeader from "./TopHeader";
import HeaderBack from "./HeaderBack";
import ProfileHeader from "./ProfileHeader";
import { wrapTitle } from "../utils/wrapTitle";

const CustomHeader = ({name, type, back = '', subject="", deleteChat=null}: any) => {
    const navigation = useNavigation();
    // console.log("custom header name", name);

    let wrappedName = wrapTitle(name, 22);

    const goBack = () => {
      if (back) {
        navigation.dispatch(
          CommonActions.navigate(back)
        );
      } else {
        navigation.goBack();
      }
    }

    switch (type) {
        case 1:
          return (
            <LinearGradient
              style={styles.mainvector1Parent}
              locations={[0, 1]}
              colors={["rgba(239, 159, 39, 0.08)", "rgba(255, 255, 255, 0)"]}
              useAngle={true}
              angle={180}
            >
              <Image
                style={styles.mainvector1Icon}
                resizeMode="cover"
                source={require("../assets/mainvector-1.png")}
              />
              <TopHeader title={wrappedName} />
            </LinearGradient>
          );
        case 2:
          wrappedName = wrapTitle(name, 50);
          return (
            <LinearGradient
                style={styles.header}
                locations={[0, 1]}
                colors={["rgba(239, 159, 39, 0.08)", "rgba(255, 255, 255, 0)"]}
                useAngle={true}
                angle={180}
            >
                <Image
                style={styles.mainvector1Icon}
                resizeMode="cover"
                source={require("../assets/mainvector-1.png")}
                />
                <HeaderBack
                  goBack={goBack}
                  vuesaxlineararrowLeft={require("../assets/vuesaxlineararrowleft.png")}
                  getStarted={wrappedName}
                  subject={subject}
                  deleteChat={deleteChat}
                />
            </LinearGradient>
          );
        case 3:
          return (
            <LinearGradient
              style={styles.header}
              locations={[0, 1]}
              colors={["rgba(239, 159, 39, 0.08)", "rgba(255, 255, 255, 0)"]}
              useAngle={true}
              angle={180}
            >
              <Image
                style={styles.mainvector1Icon}
                resizeMode="cover"
                source={require("../assets/mainvector-1.png")}
              />
              <ProfileHeader name={wrappedName} goBack={goBack}/>
            </LinearGradient>
          );
        default:
          return null;
    }
      
}

const styles = StyleSheet.create({
    mainvector1Icon: {
        width: 164,
        height: 63,
        overflow: "hidden",
        borderWidth: 0,
        borderColor: "red",
    },
    mainvector1Parent: {
        backgroundColor: "transparent",
        alignSelf: "stretch",
    },
    header: {
        backgroundColor: "transparent",
        alignSelf: "stretch",
    },
});

  
export default CustomHeader;