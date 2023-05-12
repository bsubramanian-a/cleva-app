import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar } from "react-native";
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

const Profile = () => {
  return (
    <View
      style={styles.profile}
    >
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content"/>
      <CustomHeader name="Profile" type={3}/>
      <ScrollView
        style={styles.userdetailsParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={[styles.userdetails, styles.optionsSpaceBlock]}>
          <View style={[styles.advice, styles.adviceShadowBox]}>
            <View style={styles.users}>
              <View style={styles.loginuser}>
                <View style={[styles.drWrapper, styles.wrapperLayout]}>
                  <Text style={styles.dr}>DR</Text>
                </View>
                <View
                  style={[styles.frWrapper, styles.ml_11, styles.wrapperLayout]}
                >
                  <Text style={styles.dr}>FR</Text>
                </View>
              </View>
              <Text
                style={[
                  styles.danFleur,
                  styles.mt26,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >{`Dan & Fleur Rake Household`}</Text>
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
                <Text style={styles.stKildaRdTypo}>member@test.com.au</Text>
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
                <Text style={styles.stKildaRdTypo}>+1 0404123456</Text>
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
                <Text style={styles.stKildaRdTypo}>01/01/2012</Text>
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
                  623 St Kilda Rd Melbourne Vic 3004
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.advice1, styles.mt15, styles.adviceShadowBox]}>
            <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
              <View style={styles.mParent}>
                <Text style={[styles.m, styles.mTypo]}>$1.8 M</Text>
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
        <View style={[styles.options, styles.optionsSpaceBlock]}>
          <View style={[styles.excercise1, styles.frameParentFlexBox, styles.aboutCard]}>
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
          </View>
          <View
            style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}
          >
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
                  styles.ml10,
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
          <View
            style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}
          >
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
                  styles.ml10,
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
          <View
            style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}
          >
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
                  styles.ml10,
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
          <View
            style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}
          >
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
                  styles.ml10,
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
          <View
            style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}
          >
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
                  styles.ml10,
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
          <View
            style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}
          >
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
                  styles.ml10,
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
          <View
            style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}
          >
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
                  styles.ml10,
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
          <View
            style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}
          >
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
                  styles.ml10,
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
          <View
            style={[styles.excercise1, styles.mt15, styles.frameParentFlexBox, styles.aboutCard]}
          >
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
                  styles.ml10,
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
  ml_11: {
    marginLeft: -11,
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
    paddingHorizontal: Padding.p_lg,
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
    // fontFamily: FontFamily.textMediumBoldText1,
    fontWeight: "500",
    color: '#FBB142',
  },
  danFleurClr: {
    color: Color.black,
    fontWeight: '500',
    textAlign: "left",
  },
  childBorder: {
    borderColor: "#f3f1ee",
    borderStyle: "solid",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: '100%'
  },
  stKildaRdTypo: {
    textAlign: "right",
    // fontFamily: FontFamily.outfitMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
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
    // fontFamily: FontFamily.sourceSerifProSemibold,
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
  },
  users: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  assetsviewChild: {
    borderTopWidth: 1,
    width: 306,
    height: 1,
  },
  vuesaxlinearsmsIcon: {
    width: 18,
    height: 18,
  },
  email: {
    fontWeight: "300",
    // fontFamily: FontFamily.openSansRegular,
    color: '#4B4B4B',
    fontSize: 14,
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
    paddingTop: 28,
    paddingBottom: Padding.p_lg,
    alignItems: "center",
  },
  m: {
    color: Color.goldenrod_100,
    fontSize: 22
  },
  mParent: {
    alignItems: "center",
  },
  frameChild: {
    borderRightWidth: 1,
    width: 1,
    height: 51,
  },
  frameParent1: {
    width: 318,
    alignItems: "center",
    justifyContent: 'space-between'
  },
  advice1: {
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
    fontSize: FontSize.textMediumBoldText_size,
    lineHeight: 24,
  },
  excercise1: {
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
    paddingTop: Padding.p_sm,
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
