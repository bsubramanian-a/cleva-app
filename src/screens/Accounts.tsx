import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Pressable, BackHandler } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderBack from "../components/HeaderBack";
import AssetsWealth from "../components/AssetsWealth";
import IconEditBtn from "../components/IconEditBtn";
import {
  Margin,
  Padding,
  Border,
  FontFamily,
  Color,
  FontSize,
} from "../GlobalStyles";
import WealthTab from "../components/WealthTab";
import { useCallback, useEffect, useState } from "react";
import CustomHeader from "../components/CustomHeader";
import { useSelector } from "react-redux";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";
import AccountCard from "../components/AccountCard";
import { getAccounts } from "../../actions/data";
import actions from "../../actions";
import { showMessage } from "react-native-flash-message";
import DeletePopup from "../components/DeletePopup";
import AccountModal from "../components/AccountModal";
import { useCustomFlashMessage } from "../components/CustomFlashMessage";

const Accounts = () => {
  const { showFlashMessage } = useCustomFlashMessage();
  const navigation: any = useNavigation();
  const account = useSelector((state: any) => state.data.accounts);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isAccountModalVisible, setIsAccountModalVisible] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);

  useFocusEffect(
    useCallback(() => {
      console.log("useFocusEffect getAccounts");
      getAccounts();

      // Return a cleanup function if needed
      return () => {
        // Cleanup logic if needed
      };
    }, [])
  );

  const handleBackButton = () => {
    // Replace 'ScreenName' with the name of the screen you want to redirect to
    navigation.navigate('Home');
    return true; // Return true to indicate that the event has been handled
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      // Cleanup the event listener when the component unmounts
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  useEffect(() => {
    setAccounts(account);
  }, [account])

  const getAccounts = async () => {
    setLoading(true);
    await actions.getAccounts();
    setLoading(false);
  }

  const handleDelete = async (id: any) => {
    setDeleteModalVisible(false);
    setLoading(true);
    let deletedRes: any = await actions.deleteLiability(id);

    if (
      deletedRes?.data?.length > 0 &&
      deletedRes?.data[0]?.code == 'SUCCESS'
    ) {
      await actions.getAccounts();

      await actions.getLiabilities();

      await actions.getAssets();

      // showMessage({
      //   message: 'Success',
      //   description: 'Account deleted successfully',
      //   type: 'success',
      // });

      showFlashMessage("Account deleted successfully", 'success');
    } else {
      // showMessage({
      //   message: 'Failed',
      //   description: 'Account delete failed',
      //   type: 'danger',
      // });

      showFlashMessage("Account delete failed", 'failure');
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setDeleteModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      <CustomHeader name="Accounts" type={2} back="Home" />

      <AccountModal visible={isAccountModalVisible} onClose={() => setIsAccountModalVisible(false)} acc={currentAccount} />

      <DeletePopup
        isVisible={isDeleteModalVisible}
        onDelete={handleDelete}
        onCancel={handleCancel}
        id={deleteId}
      />

      <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginRight: 12 }} onPress={() => navigation.navigate('AddAccount')}>
        <LinearGradient
          style={[styles.bottom, styles.bottomFlexBox]}
          locations={[0, 1]}
          colors={["#fbb142", "#f6a326"]}
          useAngle={true}
          angle={180}
        >
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
        </LinearGradient>
      </Pressable>

      {accounts?.length > 0 ? <ScrollView>
        <View style={styles.cardWrapper}>
          {accounts?.map((acc: any, index: number) => <AccountCard index={index} count={accounts?.length} setIsAccountModalVisible={setIsAccountModalVisible} setCurrentAccount={setCurrentAccount} color={index % 2 === 0 ? 'red' : 'green'} setDeleteModalVisible={setDeleteModalVisible} setDeleteId={setDeleteId} key={acc?.id} acc={acc} />)}
        </View>
      </ScrollView> : <Text style={styles.textStyle}>No accounts found</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  edit: {
    color: Color.white1,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.textMediumBoldText1_size,
    fontWeight: '600',
    lineHeight: 20,
    textAlign: 'center',
  },
  ml4: {
    marginLeft: 4,
  },
  bottom: {
    alignSelf: 'flex-end',
    borderRadius: 50,
    width: 42,
    height: 42,
  },
  bottomFlexBox: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  container: {
    flex: 1,
  },
  textStyle: {
    textAlign: "center",
    marginTop: 20
  },
  cardWrapper: {
    paddingHorizontal: 10
  }
});

export default Accounts;
