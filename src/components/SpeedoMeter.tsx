import React, { useState } from 'react';
import {
    View,
    Image,
    Animated,
    Easing,
    StyleSheet,
    Dimensions,
    ImageSourcePropType
} from 'react-native';

import calculateDegreeFromLabels from '../utils/calculate-degree-from-labels';
import calculateLabelFromValue from '../utils/calculate-label-from-value';
import limitValue from '../utils/limit-value';
import validateSize from '../utils/validate-size';

export const { width } = Dimensions.get('window');

type SpeedoMeterProps = {
    value: number;
    originalValue: number;
    size: number;
    defaultValue?: number;
    minValue?: number;
    maxValue?: number;
    easeDuration?: number;
    allowedDecimals?: number;
    labels?: Array<any>;
    needleImage?: ImageSourcePropType;
    smallNeedleImage?: ImageSourcePropType;
    wrapperStyle?: Object;
    outerCircleStyle?: Object;
    halfCircleStyle?: Object;
    imageWrapperStyle?: Object;
    imageStyle?: Object;
    innerCircleStyle?: Object;
    labelWrapperStyle?: Object;
    labelStyle?: Object;
    labelNoteStyle?: Object;
    useNativeDriver?: Boolean;
};

const SpeedoMeter = ({
    value,
    originalValue,
    minValue = 0,
    maxValue = 100,
    size,
    defaultValue = 50,
    easeDuration = 500,
    allowedDecimals = 0,
    labels = [
        {
            name: 'Pathetically weak',
            labelColor: '#f43b0d',
            activeBarColor: '#f43b0d',
        },
        {
            name: 'Very weak',
            labelColor: '#ff7903',
            activeBarColor: '#ff7903',
        },
        {
            name: 'So-so',
            labelColor: '#ffd016',
            activeBarColor: '#ffd016',
        },
        {
            name: 'Fair',
            labelColor: '#86cd03',
            activeBarColor: '#86cd03',
        },
        {
            name: 'Strong',
            labelColor: '#01bd11',
            activeBarColor: '#01bd11',
        }
    ],
    needleImage = require('../assets/bigneedle.png'),
    smallNeedleImage = require('../assets/smallneedle.png'),
    wrapperStyle = {},
    outerCircleStyle = {},
    halfCircleStyle = {},
    imageWrapperStyle = {},
    imageStyle = {},
    innerCircleStyle = {},
    labelWrapperStyle = {},
    labelStyle = {},
    labelNoteStyle = {},
    useNativeDriver = true
}: SpeedoMeterProps) => {
    const [speedometerValue, setSpeedometerValue] = useState(new Animated.Value(defaultValue as number));
    const [speedometerOriginalValue, setSpeedometerOriginalValue] = useState(new Animated.Value(originalValue as number));
    const degree = 180;
    console.log('defaultValue', defaultValue);
    console.log('originalValue', originalValue);

    const perLevelDegree = calculateDegreeFromLabels(degree, labels);
    const label = calculateLabelFromValue(
        limitValue(value, minValue, maxValue, allowedDecimals), labels, minValue, maxValue,
    );
    Animated.timing(
        speedometerValue,
        {
            toValue: limitValue(value, minValue, maxValue, allowedDecimals),
            duration: easeDuration,
            easing: Easing.linear,
            useNativeDriver: useNativeDriver as boolean,
        },
    ).start();

    const rotate = speedometerValue.interpolate({
        inputRange: [minValue, maxValue],
        outputRange: ['-90deg', '90deg'],
    });

    const originalRotate = speedometerOriginalValue.interpolate({
        inputRange: [minValue, maxValue],
        outputRange: ['-90deg', '90deg'],
    });

    const currentSize = validateSize(size, width - 20);

    return (
        <View style={[style.wrapper, {
            width: currentSize,
            height: currentSize / 2,
        }, wrapperStyle]}
        >
            <View style={[style.outerCircle, {
                width: currentSize,
                height: currentSize / 2,
                borderTopLeftRadius: currentSize / 2,
                borderTopRightRadius: currentSize / 2,
            }, outerCircleStyle]}
            >
                {labels.map((level, index) => {
                    const circleDegree = 90 + (index * perLevelDegree);
                    return (
                        <View
                            key={index}
                            style={[style.halfCircle, {
                                backgroundColor: level.activeBarColor,
                                width: currentSize / 2,
                                height: currentSize,
                                borderRadius: currentSize / 2,
                                transform: [
                                    { translateX: currentSize / 4 },
                                    { rotate: `${circleDegree}deg` },
                                    { translateX: (currentSize / 4 * -1) },
                                ],
                            }, halfCircleStyle]}
                        />
                    );
                })}
                <Animated.View style={[style.imageWrapper,
                {
                    top: -(currentSize / 15),
                    transform: [{ rotate }],
                },
                    imageWrapperStyle]}
                >
                    <Image
                        style={[style.image,
                        {
                            width: currentSize,
                            height: currentSize,
                        }, imageStyle]}
                        source={needleImage}
                    />
                </Animated.View>
                <Animated.View style={[style.imageWrapper,
                {
                    top: -(currentSize / 15),
                    transform: [{ rotate: originalRotate }],
                },
                    imageWrapperStyle]}
                >
                    <Image
                        style={[style.image,
                        {
                            width: currentSize,
                            height: currentSize,
                        }, imageStyle]}
                        source={smallNeedleImage}
                    />                    
                </Animated.View>
                
                <View style={[style.innerCircle, {
                    width: currentSize * 0.6,
                    height: (currentSize / 2) * 0.6,
                    borderTopLeftRadius: currentSize / 2,
                    borderTopRightRadius: currentSize / 2,
                }, innerCircleStyle]}
                />
            </View>
            {/* <View style={[style.labelWrapper, labelWrapperStyle]}>
                <Text style={
                    [style.label, labelStyle]}
                >
                    {limitValue(value, minValue, maxValue, allowedDecimals)}
                </Text>
                <Text style={
                    [style.labelNote, { color: 'red' }, labelNoteStyle]}
                >
                    {label.name}
                </Text>
            </View> */}
        </View>
    );
};

const style = StyleSheet.create({
    wrapper: {
        marginVertical: 5,
        alignSelf: 'center',
    },
    // Circular Container
    circleWrapper: {
        overflow: 'hidden',
    },
    outerCircle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: '#ffffff',
        backgroundColor: '#e6e6e6',
    },
    halfCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    imageWrapper: {
        position: 'absolute',
        left: 0,
        zIndex: 10,
    },
    image: {
        resizeMode: 'stretch',
        height: width - 20,
        width: width - 20,
    },
    innerCircle: {
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: width * 0.6,
        height: (width / 2) * 0.6,
        borderTopLeftRadius: width / 2 - 10,
        borderTopRightRadius: width / 2 - 10,
    },
    labelWrapper: {
        marginVertical: 5,
        alignItems: 'center',
    },
    label: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    labelNote: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SpeedoMeter;