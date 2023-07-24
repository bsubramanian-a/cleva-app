import * as React from 'react';
import {Pressable, Image, StyleSheet, Text} from 'react-native';
import {
  Margin,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from '../GlobalStyles';
import {
  appleAuth,
  AppleButton,
} from '@invertase/react-native-apple-authentication';
// import {showMessage} from 'react-native-flash-message';

const AppleLogin = ({onVerifyEmail, showRMessage, setLoginError}: any) => {
  const handleAppleLogin = async () => {
    try {
      setLoginError('');
      // Start the Apple authentication request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // Get the user's credential details
      const {user, email, fullName} = appleAuthRequestResponse;

      // Use the received credential details for further processing
      onVerifyEmail(email, user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Pressable
      style={[styles.appleLogin, {marginTop: 30}]}
      onPress={handleAppleLogin}>
      <Image
        style={styles.iconmarketsLogoappstore}
        resizeMode="cover"
        source={require('../assets/iconmarkets-logoappstore.png')}
      />
      <Text style={[styles.loginWithApple, styles.ml66]}>Login with Apple</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  appleLogin: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Color.black,
    borderRadius: Border.br_md,
    color: Color.dark1,
    elevation: 20,
    flexDirection: 'row',
    height: 70,
    overflow: 'hidden',
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_2xs,
    shadowColor: '#e1a698',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
  iconmarketsLogoappstore: {
    height: 28,
    width: 28,
  },
  loginWithApple: {
    color: Color.white1,
    flex: 1,
    fontFamily: FontFamily.textMediumBoldText1,
    fontSize: FontSize.textMediumBoldText1_size,
    fontWeight: '600',
    lineHeight: 22,
    textAlign: 'left',
  },
  ml66: {
    marginLeft: Margin.m_lg,
  },
});

export default AppleLogin;
