import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ProfileHeader from "../components/ProfileHeader";
import {
  Margin,
  Padding,
  Border,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";
import actions from "../../actions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import AccordionContainer from "../components/AccordionContainer";

const Profile = () => {
  const [accordion, setAccordion] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const profile = useSelector((state:any) => state.data.profile);
  const assets = useSelector((state:any) => state.data.assets);
  const liabilities = useSelector((state:any) => state.data.liabilities);
  const [totalNetWorth, setTotalNetWorth] = useState<number>(0);

  const getProfile = async() => {
    setLoading(true);
    await actions.getProfile();
    setLoading(false);
  }

  useEffect(() => {
    setAccordions();
  }, [profile])

  const formatMobileNumber = (mobileNumber:any) => {
    if(mobileNumber){
      // Remove all non-digit characters from the mobile number except for the plus sign
      const digitsOnly = mobileNumber.replace(/[^+\d]/g, '');
    
     // Check if the mobile number has a valid length
      if (digitsOnly.length > 3) {
        // Format the mobile number in the Australian format
        let formattedNumber = digitsOnly.replace(/^(\+\d{1,2})/, '$1 ');
        formattedNumber = formattedNumber.replace(/(\d{3})(?!$)/g, '$1 ');
        formattedNumber = formattedNumber.trim();
        formattedNumber = formattedNumber.replace(/ /g, '-');
        return formattedNumber;
      }
    }
    
    // Return the original mobile number if it doesn't match the expected format
    return mobileNumber;
  };
  
  const setAccordions = () => {
    setAccordion([
      {
        title: 'About You',
        icon: require("../assets/vuesaxlinearprofilecircle.png"),
        items: [
          {
            subHeading: profile[0]?.Preferred_1st_Name,
            item: [
              { icon: require("../assets/profile.png"), name: 'First Name', value: profile[0]?.First_Name },
              { icon: require("../assets/profile.png"), name: 'Last Name', value: profile[0]?.Last_Name },
              { icon: require("../assets/profile.png"), name: 'Preferred Name', value: profile[0]?.Preferred_1st_Name },
              { icon: require("../assets/sex.png"), name: 'Sex', value: profile[0]?.Sex_Description },
              { icon: require("../assets/dob.png"), name: 'Date of Birth', value: profile[0]?.Date_of_Birth ? formatDate(profile[0]?.Date_of_Birth) : null },
              { icon: require("../assets/mstatus.png"), name: 'Marital Status', value: profile[0]?.Marital_Status },
              { icon: require("../assets/contact.png"), name: 'Mobile Phone', value: profile[0]?.Mobile ? formatMobileNumber(profile[0]?.Mobile) : null },
              { icon: require("../assets/vuesaxlinearsms.png"), name: 'Email', value: profile[0]?.Email },
              { icon: require("../assets/shealth.png"), name: 'Status of Health', value: '' },
              { icon: require("../assets/smoker.png"), name: 'Smoker', value: '' },
            ]
          },
          profile[0]?.accounts?.length > 0 && profile[0]?.accounts[0]?.Email && {
            subHeading: profile[0]?.accounts[0]?.Preferred_1st_Name,
            item: [
              { icon: require("../assets/profile.png"), name: 'First Name', value: profile[0]?.accounts[0]?.First_Name },
              { icon: require("../assets/profile.png"), name: 'Last Name', value: profile[0]?.accounts[0]?.Last_Name },
              { icon: require("../assets/profile.png"), name: 'Preferred Name', value: profile[0]?.accounts[0]?.Preferred_1st_Name },
              { icon: require("../assets/sex.png"), name: 'Sex', value: profile[0]?.accounts[0]?.Sex_Description },
              { icon: require("../assets/dob.png"), name: 'Date of Birth', value: profile[0]?.accounts[0]?.Date_of_Birth ? formatDate(profile[0]?.accounts[0]?.Date_of_Birth) : null },
              { icon: require("../assets/mstatus.png"), name: 'Marital Status', value: profile[0]?.accounts[0]?.Marital_Status },
              { icon: require("../assets/contact.png"), name: 'Mobile Phone', value: profile[0]?.accounts[0]?.Mobile ? formatMobileNumber(profile[0]?.accounts[0]?.Mobile) : null},
              { icon: require("../assets/vuesaxlinearsms.png"), name: 'Email', value: profile[0]?.accounts[0]?.Email },
              { icon: require("../assets/shealth.png"), name: 'Status of Health', value: '' },
              { icon: require("../assets/smoker.png"), name: 'Smoker', value: '' },
            ]
          }
        ].filter(obj => obj),
      }
    ])
  }

  useEffect(() => {
    getProfile();
  }, [])

  useEffect(() => {
    let totalAssets = 0;
    let totalLiabilities = 0;

    if(assets?.length > 0){
      totalAssets = parseFloat(assets.reduce((sum:number, item:any) => sum + item.Current_Value, 0)?.toFixed(2));
    }

    if(liabilities?.length > 0){
      totalLiabilities = parseFloat(liabilities.reduce((sum:number, item:any) => sum + item.Current_Value, 0)?.toFixed(2));
    }

    setTotalNetWorth(parseFloat((totalAssets - totalLiabilities)?.toFixed(1)));
  }, [assets, liabilities])

  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const formattedDate = `${date.getDate()}/${month}/${date.getFullYear()}`;
    return formattedDate;
  }  

  return (
    <View
      style={styles.profile}
    >
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Profile" type={3}/>
      <Loader visible={loading} />
      <ScrollView
        style={styles.userdetailsParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        {/* <Pressable onPress={getProfile}><Text>get profile</Text></Pressable> */}
        <View style={[styles.userdetails, styles.optionsSpaceBlock]}>
          <View style={[styles.advice, styles.adviceShadowBox]}>
            <View style={styles.users}>
              <View style={styles.loginuser}>
                <View
                  style={[styles.frWrapper, styles.wrapperLayout, profile[0]?.accounts?.length > 0 && {marginRight: -5}]}
                >
                  <Text style={styles.dr}>
                    {profile?.length > 0 && (
                      (profile[0]?.First_Name && profile[0]?.Last_Name)
                        ? (profile[0]?.First_Name.charAt(0) + profile[0]?.Last_Name.charAt(0))
                        : ((profile[0]?.First_Name || profile[0]?.Last_Name) || '').slice(0, 2)
                    )}
                  </Text>
                </View>
                {
                  profile[0]?.accounts?.length > 0 &&
                    <View style={[styles.drWrapper, styles.wrapperLayout, profile[0]?.accounts?.length > 0 && {marginLeft: -5}]}>
                      <Text style={styles.dr}>
                        {profile[0]?.accounts?.length > 0 && (
                          (profile[0]?.accounts[0]?.First_Name && profile[0]?.accounts[0]?.Last_Name)
                            ? (profile[0]?.accounts[0]?.First_Name.charAt(0) + profile[0]?.accounts[0]?.Last_Name.charAt(0))
                            : ((profile[0]?.accounts[0]?.First_Name || profile[0]?.accounts[0]?.Last_Name) || '').slice(0, 2)
                        )}
                      </Text>
                    </View>
                }
              </View>
              <Text
                style={[
                  styles.danFleur,
                  styles.mt26,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >{profile[0]?.Account_Name?.name}</Text>
            </View>
            <View style={[styles.assetsview, styles.mt25]}>
              <View style={[styles.assetsviewChild, styles.childBorder]} />
              <View
                style={[
                  styles.frameParent,
                  styles.mt15,
                  styles.frameParentFlexBox,
                ]}
              >
                <View style={styles.vuesaxlinearsmsParent}>
                  <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearsms.png")}
                  />
                  <Text style={[styles.email, styles.ml6]}>Email</Text>
                </View>
                <Text style={[styles.stKildaRdTypo, {width: '80%'}]}>{profile?.length > 0 && profile[0]?.Email}</Text>
              </View>
              <View
                style={[
                  styles.assetsviewChild,
                  styles.mt15,
                  styles.childBorder,
                ]}
              />
              <View
                style={[
                  styles.frameParent,
                  styles.mt15,
                  styles.frameParentFlexBox,
                ]}
              >
                <View style={styles.vuesaxlinearsmsParent}>
                  <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearcall.png")}
                  />
                  <Text style={[styles.email, styles.ml6]}>Phone</Text>
                </View>
                <Text style={styles.stKildaRdTypo}>{profile?.length > 0 && profile[0]?.Phone}</Text>
              </View>
              <View
                style={[
                  styles.assetsviewChild,
                  styles.mt15,
                  styles.childBorder,
                ]}
              />
              <View
                style={[
                  styles.frameParent,
                  styles.mt15,
                  styles.frameParentFlexBox,
                ]}
              >
                <View style={styles.vuesaxlinearsmsParent}>
                  <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearprofile.png")}
                  />
                  <Text style={[styles.email, styles.ml6]}>Member Since</Text>
                </View>
                
                <Text style={styles.stKildaRdTypo}>
                  {profile?.length > 0 && formatDate(profile[0]?.Created_Time)}
                </Text>
              </View>
              <View
                style={[
                  styles.assetsviewChild,
                  styles.mt15,
                  styles.childBorder,
                ]}
              />
              <View
                style={[
                  styles.frameParent,
                  styles.mt15,
                  styles.frameParentFlexBox,
                ]}
              >
                <View style={styles.vuesaxlinearsmsParent}>
                  <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearlocation.png")}
                  />
                  <Text style={[styles.email, styles.ml6]}>Address</Text>
                </View>
                <Text style={[styles.stKildaRd, styles.stKildaRdTypo]}>
                  {profile?.length > 0 && (
                    <>
                      {profile[0]?.Mailing_Street && (
                        <>
                          {profile[0]?.Mailing_Street}
                          {profile[0]?.Mailing_City && ","}
                        </>
                      )}
                      {profile[0]?.Mailing_City && (
                        <>
                          {profile[0]?.Mailing_City}
                          {profile[0]?.Mailing_State && ","}
                        </>
                      )}
                      {profile[0]?.Mailing_State && (
                        <>
                          {profile[0]?.Mailing_State}
                          {profile[0]?.Mailing_Zip && ","}
                        </>
                      )}
                      {profile[0]?.Mailing_Zip && (
                        <>
                          {profile[0]?.Mailing_Zip}
                          {profile[0]?.Mailing_Country && ","}
                        </>
                      )}
                      {profile[0]?.Mailing_Country && profile[0]?.Mailing_Country}
                    </>
                  )}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.advice1, styles.mt15, styles.adviceShadowBox]}>
            <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
              <View style={styles.mParent}>
                <Text style={[styles.m, styles.mTypo]}>${totalNetWorth?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                <Text style={[styles.email, styles.mt5]}>
                  Current Net Wealth
                </Text>
              </View>
              <View style={[styles.frameChild, styles.childBorder]} />
              <View style={styles.mParent}>
                <Text style={[styles.m, styles.mTypo]}>22%</Text>
                <Text style={[styles.email, styles.mt5]}>Profile Complete</Text>
              </View>
            </View>
          </View>
        </View>
        <AccordionContainer accordions={accordion} />
        <View style={[styles.options, styles.optionsSpaceBlock]}>
          {/* <View style={[styles.excercise1, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearprofilecircle.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.ml10,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >
                About You
              </Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View> */}
          <View style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlineardata.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >
                Dependants
              </Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View>
          <View style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlineartaguser.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >
                Employment Details
              </Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View>
          <View style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearmoneyrecive.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >
                Income
              </Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View>
          <View style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearreceiptitem.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >
                Expenses
              </Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View>
          <View style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearpeople.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >
                Employment Choice/Retirement
              </Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View>
          <View style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlineartask.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >
                Estate Plan
              </Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View>
          <View style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearshieldtick.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >
                Insurance Needs Analysis
              </Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View>
          <View style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlineardanger.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >{`Risk Profile & Preferences`}</Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View>
          <View style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}>
            <View style={styles.vuesaxlinearsmsParent}>
              <View style={styles.vuesaxlinearprofileCircleWrapper}>
                <Image
                  style={styles.vuesaxlinearprofileCircleIcon}
                  resizeMode="cover"
                  source={require("../assets/vuesaxlinearreceiptedit.png")}
                />
              </View>
              <Text
                style={[
                  styles.aboutYou,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >{`Pricing & Service Agreement`}</Text>
            </View>
            <Image
              style={styles.vuesaxlinearsmsIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlineararrowcircledown.png")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutCard:{
    padding: 10,
    borderRadius: 16,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.5)",
    alignItems: "center",
    paddingHorizontal: 10,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  mt_12: {
    marginTop: 12,
  },
  mt26: {
    marginTop: 26,
  },
  ml6: {
    marginLeft: 6,
  },
  mt15: {
    marginTop: 15,
  },
  mt25: {
    marginTop: 25,
  },
  mt5: {
    marginTop: 5,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  profileScrollViewContent: {
    flexDirection: "column",
  },
  optionsSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
  },
  adviceShadowBox: {
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.5)",
    borderRadius: 16,
    alignItems: "center",
    paddingHorizontal: Padding.p_sm,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
    marginTop: 20
  },
  wrapperLayout: {
    justifyContent: "center",
    height: 104,
    width: 104,
    borderRadius: 52,
    padding: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  mTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "500",
    color: '#FBB142',
  },
  danFleurClr: {
    color: Color.black,
    textAlign: "left",
  },
  childBorder: {
    borderColor: "#f3f1ee",
    borderStyle: "solid",
    paddingHorizontal: 8,
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: '100%'
  },
  stKildaRdTypo: {
    textAlign: "right",
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    fontSize: 13,
    color: Color.black,
    lineHeight: 22,
  },
  mainvector1Icon: {
    width: 164,
    height: 63,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },
  dr: {
    fontSize: FontSize.size_6xl,
    color: Color.white1,
    textAlign: "center",
    fontFamily: FontFamily.sourceSerifProSemibold,
    fontWeight: "600",
    lineHeight: 22,
  },
  drWrapper: {
    backgroundColor: '#EF9F27',
  },
  frWrapper: {
    backgroundColor: "#9755b6",
  },
  loginuser: {
    flexDirection: "row",
  },
  danFleur: {
    fontSize: 18,
    fontFamily: FontFamily.sourceSerifPro
  },
  users: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  assetsviewChild: {
    borderTopWidth: 1,
    width: "100%",
    height: 1,
  },
  vuesaxlinearsmsIcon: {
    width: 18,
    height: 18,
  },
  email: {
    fontWeight: "300",
    fontFamily: FontFamily.outfitLight,
    color: '#4b4b4b',
    fontSize: 12,
    textAlign: "left",
    lineHeight: 22,
  },
  vuesaxlinearsmsParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: 'flex-start'
  },
  stKildaRd: {
    width: 170,
  },
  assetsview: {
    alignSelf: "stretch",
  },
  advice: {
    borderWidth: 1,
    borderColor: "#eaeaea",
    paddingTop: 28,
    paddingBottom: Padding.p_lg,
    alignItems: "center",
  },
  m: {
    color: Color.goldenrod_100,
    fontSize: 20
  },
  mParent: {
    alignItems: "center",
    width: "46%"
  },
  frameChild: {
    borderRightWidth: 1,
    width: 1,
    height: 51,
  },
  frameParent1: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  advice1: {
    borderWidth: 1,
    borderColor: "#eaeaea",
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
  },
  userdetails: {
    paddingVertical: 0,
  },
  vuesaxlinearprofileCircleIcon: {
    width: 20,
    height: 20,
  },
  vuesaxlinearprofileCircleWrapper: {
    borderRadius: 10,
    backgroundColor: Color.floralwhite,
    borderColor: "#ffeccf",
    borderWidth: 1,
    width: 40,
    height: 40,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  aboutYou: {
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 24,
    width: "75%",
    flexWrap: "wrap",
  },
  excercise1: {
    borderWidth: 1,
    borderColor: "#eaeaea",
    padding: Padding.p_5xs,
    justifyContent: "space-between",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.08)",
    borderRadius: Border.br_sm,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  options: {
    paddingBottom: 20,
  },
  userdetailsParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  profile: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
});

export default Profile;
