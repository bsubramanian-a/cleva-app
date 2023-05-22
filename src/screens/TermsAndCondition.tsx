import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import LoginButton from "../components/LoginButton";
import { Margin, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TermsAndCondition = () => {

  
  return (
    <View style={styles.termsAndCondition}>
      <View style={styles.heading}>
        <Text style={styles.aQuickCheckContainer}>
          <Text style={styles.aQuickCheck}>A quick check in</Text>
          <Text style={styles.fromTheLawyers}>from the lawyers</Text>
        </Text>
      </View>
      <Text style={[styles.beforeYouGetContainer, styles.mt24]}>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}>
            Before you get started, we wanted to be totally open and help you
            know the details you need to understand, if you have any questions,
            drop us an email to hello@cleva.co.
          </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}> </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.whatToKnow}>What to know about advice</Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}> </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}>
            Any financial product advice contained is general in nature and has
            been prepared without taking into account your objectives, financial
            situation or needs – even if these may have been provided to us. You
            should consider if the information is appropriate and whether you
            need to speak to an accredited professional. We have accredited
            professionals available or you may seek out your own. Where we
            provide personalised financial advice taking into account your
            objectives, financial situation or needs this will be clearly
            labelled as Personal Financial Advice
          </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}> </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.whatToKnow}>What about documentation?</Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}> </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text
            style={styles.beforeYouGet}
          >{`Personalised financial advice is provided to you in a document labelled Statement of Advice. For the sake of eliminating confusion if advice is not documented in a Statement of Advice it is intended to be general in nature. `}</Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}> </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.whatToKnow}>Financial Services Guide (FSG)</Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}> </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}>
            Once you are registered we will save a copy of our Financial
            Services Guide (FSG) in your Coach tab under Advice. You can also
            find our FSG on our website at www.cleva.co.
          </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}> </Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.whatToKnow}>Cleva licences</Text>
        </Text>
        <Text style={styles.aQuickCheck}>
          <Text style={styles.beforeYouGet}> </Text>
        </Text>
        <Text style={styles.fromTheLawyers}>
          <Text
            style={styles.beforeYouGet}
          >{`Cleva & The Cleva Co Pty Ltd (ABN 77 630 503 285) is a Corporate Authorised Representative (CAR No. 123456) of Wealth Trail Pty Ltd (ACN 634 620 956) (Please refer to our website for the AFSL number). `}</Text>
        </Text>
      </Text>
      <LoginButton acceptToContinue={"Accept to continue"} />
    </View>
  );
};

const styles = StyleSheet.create({
  mt24: {
    marginTop: Margin.m_2xs,
  },
  aQuickCheck: {
    marginStart: 0,
    marginBlockEnd: 0,
  },
  fromTheLawyers: {
    margin: Margin.m_3xs,
  },
  aQuickCheckContainer: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.sourceSerifPro,
    color: Color.dark1,
    textAlign: "left",
  },
  heading: {
    alignSelf: "stretch",
  },
  beforeYouGet: {
    fontFamily: FontFamily.openSansRegular,
  },
  whatToKnow: {
    fontWeight: "700",
    fontFamily: FontFamily.openSansBold,
  },
  beforeYouGetContainer: {
    fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    color: Color.black,
    textAlign: "left",
    alignSelf: "stretch",
  },
  termsAndCondition: {
    backgroundColor: Color.whitesmoke,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    paddingHorizontal: Padding.p_lg,
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_lg,
  },
});

export default TermsAndCondition;
