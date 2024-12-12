import { ActivityIndicator, Image, StyleSheet, View, Text } from 'react-native';

const Label = ({ icon, label, style, containerStyle={} }: any) => {
    // console.log("label", label)
    return (
        <View style={[styles.container, containerStyle]}>
            {icon &&
                <Image
                    style={[styles.vuesaxlinearprofileCircleIcon, style]}
                    resizeMode="contain"
                    source={icon}
                />
            }
            <Text style={styles.labelText}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 8,
        alignItems: 'center',
        flexDirection: "row",
    },
    vuesaxlinearprofileCircleIcon: {
        width: 16,
        height: 16,
        marginRight: 6
    },
    labelText: {
        color: "#4B4B4B",
        fontSize: 14,
    }
});

export default Label;
