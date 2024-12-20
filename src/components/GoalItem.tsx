import * as React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Color, FontFamily, FontSize, Padding } from "../GlobalStyles";
import { newFormatDate } from "../utils/format-date";

const GoalItem = ({data, onPress, openModal}:any) => {
    const getInitials = (name="") => {
        const initials = name
            ? name.split(' ').length === 1
                ? name.substring(0, 2)
                : name
                    .split(' ')
                    .map((word:string) => word.charAt(0))
                    .join('')
            : '';

        return initials;
    }

    return (
        <TouchableOpacity onPress={() => onPress(data)} style={styles.frameParentShadowBox}>
            <View
                style={[
                    styles.save5000ForItalyHolidayParent,
                    styles.parentFlexBox,
                ]}
            >
                <Text style={[styles.save5000For, styles.goals1Typo]}>
                    {data?.Name}
                </Text>
                <View style={styles.status}>
                    <Text style={[styles.doing, styles.doingTypo]}>{data?.Status}</Text>
                </View>
            </View>
            <View style={[styles.frameItem, styles.frameItemSpaceBlock]} />
            <View
                style={[styles.goalOwnerDrParent, styles.frameItemSpaceBlock]}
            >
                <Text style={styles.goalOwnerDrContainer}>
                    <Text style={styles.goalOwner}>
                        <Text style={styles.goalOwner1}>Goal Owner:</Text>
                        <Text style={styles.text}>{data?.owners?.length > 0 ? (data?.owners?.length > 1 ? 'Joint' : getInitials(data?.owners[0]?.Goal_Owner_s?.name)) : ""}</Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={styles.dr1}>{data?.owner}</Text>
                    </Text>
                </Text>
                <View style={styles.dueDate762023Parent}>
                    <Text style={styles.goalOwnerDrContainer}>
                        <Text style={styles.goalOwner}>
                            <Text style={styles.goalOwner1}>Due Date:</Text>
                            <Text style={styles.text}> {newFormatDate(data?.Target_Date)}</Text>
                        </Text>
                        <Text style={styles.text}>
                            <Text style={styles.dr1}>{data?.dueDate}</Text>
                        </Text>
                    </Text>
                    <Pressable onPress={() => openModal(data)}>
                        <Image
                            style={styles.vuesaxlinearactivityIcon}
                            resizeMode="cover"
                            source={require("../assets/vuesaxlinearactivity.png")}
                        />
                    </Pressable>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    parentFlexBox: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    save5000For: {
        fontSize: FontSize.size_sm,
        textAlign: "left",
        color: Color.black,
    },
    goals1Typo: {
        fontFamily: FontFamily.sourceSerifPro,
        fontWeight: "600",
        color: Color.black,
    },
    status: {
        borderRadius: 20,
        backgroundColor: '#EF9F2720',
        paddingVertical: 10,
        paddingHorizontal: 18,
        flexDirection: "row",
        overflow: "hidden",
    },
    doingTypo: {
        fontFamily: FontFamily.outfitMedium,
        fontWeight: "500",
        flexWrap: 'wrap',
    },
    doing: {
        color: "#EF9F27",
        fontSize: FontSize.size_sm,
        textAlign: "center",
    },
    frameItem: {
        borderStyle: "solid",
        borderColor: "#dedede",
        borderTopWidth: 1,
        height: 1,
    },
    frameItemSpaceBlock: {
        marginTop: 9,
        alignSelf: "stretch",
    },
    goalOwnerDrParent: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    goalOwnerDrContainer: {
        fontSize: FontSize.size_sm,
        textAlign: "left",
    },
    goalOwner1: {
        fontWeight: "300",
        fontFamily: FontFamily.outfitLight,
        color: '#4b4b4b'
    },
    text: {
        fontFamily: FontFamily.outfitRegular,
        color: '#000'
    },
    goalOwner: {
        color: Color.textGrey2,
    },
    dr1: {
        color: Color.black,
    },
    vuesaxlinearactivityIcon: {
        width: 20,
        height: 20,
        marginLeft: 19,
    },
    dueDate762023Parent: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    frameParentShadowBox: {
        marginTop: 15,
        paddingVertical: 10,
        elevation: 40,
        shadowRadius: 40,
        shadowColor: "rgba(32, 34, 36, 0.08)",
        borderRadius: 12,
        paddingHorizontal: Padding.p_xs,
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        overflow: "hidden",
        backgroundColor: Color.white1,
    },
    save5000ForItalyHolidayParent: {
        alignSelf: "stretch",
    },
});

export default GoalItem;