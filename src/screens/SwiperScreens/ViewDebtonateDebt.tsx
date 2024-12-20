import * as React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    Pressable,
    Modal,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    TouchableOpacity,
} from 'react-native';
import { Color, FontFamily, Padding, Border, FontSize } from '../../GlobalStyles';
import CustomHeader from "../../components/CustomHeader";
import { wrapTitle } from "../../utils/wrapTitle";

const ViewDebtonateDebt = ({
    visible,
    onClose,
    account,
    navigation,
    setScheduleVisible
}: any) => {

    console.log("selected account in view debtonate debt", account);

    const editAccount = (account: any) => {
        setScheduleVisible(false);
        navigation.navigate('EditDebtonateDebt', { account });
    };

    return (
        <Modal visible={visible} onRequestClose={onClose} transparent>

            <View style={styles.backdrop}></View>
            <View style={[styles.modalWrapper]}>
                <View style={[styles.initialWrapper]}>
                    <Text style={styles.initialTextHeader}>Account Details</Text>
                    <View style={styles.editRow}>
                        <Text style={styles.initialText}>{account?.Plan_Name || "N/A"}</Text>
                        <Pressable onPress={() => editAccount(account)} style={{ marginTop: 5 }}>
                            <Image
                                style={styles.vuesaxlinearedit}
                                resizeMode="cover"
                                source={require('../../assets/edit.png')}
                            />
                        </Pressable>
                    </View>

                </View>
                <Pressable onPress={onClose} style={styles.closeButton}>
                    <Image
                        resizeMode="cover"
                        source={require('../../assets/group-1171275096.png')}
                        style={styles.frameChild}
                    />
                </Pressable>
                <ScrollView
                    style={styles.videoSectionParent}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.debtonateDebtScrollViewContent}
                >
                    <View style={[styles.summaryWrapper]}>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Product Provider", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {wrapTitle(account?.Product_Provider.toString() || "N/A", 15)}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Last 4 Digits", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {account?.Last_4_Digits || "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Interest Rate", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {account?.Interest_Rate + "%" || "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Term (months)", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {account?.Term_Months || "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Term Remaining", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {account?.Term_Remaining_Months || "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Goal Date", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {account?.Goal_Date || "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Current Repayment Amount (Monthly)", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {Number(account?.Current_Repayment_Amount) ? '$' + Number(account?.Current_Repayment_Amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Required Repayment (goal)", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {Number(account?.Repayment_Amount) ? '$' + Number(account?.Repayment_Amount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Actual Repayment Frequency", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {account?.Repayment_Type || "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Deductible", 22)}

                            </Text>
                            <Text style={[styles.valueText]}>
                                {account?.Deductible || "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Good/Bad", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {account?.Good_Debt_Bad_Debt || "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Linked Asset", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {wrapTitle(account?.Related_Assets.name.toString() || "N/A", 15)}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Asset Value", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {Number(account?.Linked_Asset_Value) ? '$' + Number(account?.Linked_Asset_Value).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("LVR", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {account?.LVR || "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary1]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Current Equity", 22)}
                            </Text>
                            <Text style={[styles.valueText]}>
                                {Number(account?.Equity) ? '$' + Number(account?.Equity).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "N/A"}
                            </Text>
                        </View>
                        <View style={[styles.summary3]}>
                            <Text
                                style={[
                                    styles.loremIpsumIs,
                                    styles.myExercisesTypo,
                                ]}
                            >
                                {wrapTitle("Purpose of the Debt Loan", 22)}
                            </Text>
                        </View>
                        <View style={[styles.summary2]}>
                            <Text style={[styles.valueText]}>
                                {account?.Purpose_of_the_Debt_Loan || "N/A"}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    vuesaxlinearedit: {
        width: 20,
        height: 20,
    },
    editRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingTop: 5,
    },
    valueText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    modalWrapper: {
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: 12,
        alignSelf: 'center',
        marginTop: 60,
        padding: 10,
    },
    initialWrapper: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    initialTextHeader: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 10,
        color: '#000'
    },
    initialText: {
        color: '#fbb142',
        marginRight: 10
    },
    myExercisesTypo: {
        // fontSize: FontSize.size_sm
    },
    loremIpsumIs: {
        lineHeight: 22,
        fontWeight: "300",
        fontFamily: FontFamily.openSansRegular,
        fontSize: 14,
        color: '#4B4B4B'
    },
    summary1: {
        borderTopWidth: 0,
        borderColor: "#dedede",
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: Color.white1,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        justifyContent: "space-between"
    },
    summary2: {
        borderColor: "#dedede",
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: Color.white1,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 0,
        paddingBottom: 10,
        flex: 1,
    },
    summary3: {
        borderTopWidth: 1,
        borderColor: "#dedede",
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: Color.white1,
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        justifyContent: "space-between"
    },
    summaryWrapper: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    buttonTime: {
        fontSize: 12,
        color: '#fff',
    },
    buttonConfirm: {
        fontSize: 15,
        color: '#fff',
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 35,
    },
    customArrow: {
        width: 20,
        height: 20,
    },
    subheading: {
        fontFamily: FontFamily.sourceSerifPro,
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 10,
        marginTop: 20,
    },
    coptionView: {
        borderRadius: 12,
        height: 50,
        justifyContent: 'center',
        overflow: 'hidden',
        paddingHorizontal: 10,
    },
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
        alignSelf: 'center',
        borderRadius: 12,
        marginVertical: 28,
        paddingHorizontal: 10,
        paddingVertical: 14,
        width: '100%',
    },
    bottomFlexBox: {
        // alignItems: 'center',
        // justifyContent: 'center',
        // overflow: 'hidden',
    },
    save200PerTypo: {
        color: Color.gray_200,
        fontFamily: FontFamily.outfitLight,
        fontWeight: '300',
    },
    save20000For: {
        fontSize: 20,
        textAlign: 'center',
        color: Color.black,
        fontFamily: FontFamily.outfitMedium,
        fontWeight: '500',
    },
    save200Per: {
        marginLeft: -152,
        top: 37,
        width: 304,
        // lineHeight: 20,
        color: Color.gray_200,
        fontFamily: FontFamily.outfitLight,
        fontWeight: '300',
        fontSize: FontSize.size_sm,
        textAlign: 'center',
        left: '50%',
        // position: "absolute",
    },
    save20000ForNewCarParent: {
        // height: 97,
        // marginTop: 30,
        alignSelf: 'stretch',
    },
    groupParentShadowBox: {
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        overflow: 'hidden',
    },
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
    },
    keyboardAvoidingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalDialog: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    goalsEditGoalsPopup: {
        position: 'relative',
        backgroundColor: '#fff',
        width: Dimensions.get('window').width - 30,
        height: Dimensions.get('window').height - 220,
        borderRadius: 12,
        alignSelf: 'center',
        padding: 0,
        zIndex: 1000,
    },
    closeButton: {
        alignSelf: 'flex-end',
        right: -15,
        top: -14,
        position: 'absolute',
        zIndex: 1000000,
    },
    frameChild: {
        width: 83,
        height: 92,
        zIndex: 10000,
    },
    groupParent: {
        borderRadius: Border.br_md,
        shadowColor: 'rgba(32, 34, 36, 0.08)',
        shadowRadius: 40,
        elevation: 40,
        paddingVertical: Padding.p_xl,
        // alignItems: "flex-end",
        backgroundColor: Color.white1,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        padding: 14,
        overflow: 'scroll',
    },
    videoSectionParent: {
        alignSelf: "stretch",
        flex: 1,
    },
    debtonateDebtScrollViewContent: {
        flexDirection: "column",
    },
});

export default ViewDebtonateDebt;
