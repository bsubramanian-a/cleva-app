import React, {useRef, useState} from 'react';
import {View, Text, Pressable, Linking} from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   interpolate,
//   Extrapolate,
// } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const MeetingDetails = ({link}: {link: string}) => {
  // const [expanded, setExpanded] = useState(false);
  // const animationController = useSharedValue(0);

  // const animatedStyle = useAnimatedStyle(() => {
  //   const rotation = interpolate(
  //     animationController.value,
  //     [0, 1],
  //     [0, 180], // Output range in degrees
  //     Extrapolate.CLAMP,
  //   );

  //   // Convert the rotation to a string with 'deg' suffix
  //   const rotationString = `${rotation}deg`;

  //   return {
  //     transform: [{rotate: rotationString}], // Ensure this is an array
  //   };
  // });

  // const toggleExpanded = () => {
  //   animationController.value = withTiming(expanded ? 0 : 1, {duration: 300});
  //   setExpanded(!expanded);
  // };

  // if (link)
  //   return (
  //     <View
  //       style={{
  //         flexDirection: 'column',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         maxWidth: '85%',
  //         marginHorizontal: 10,
  //       }}>
  //       <Pressable
  //         style={{
  //           flexDirection: 'row',
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}
  //         onPress={toggleExpanded}>
  //         <Text>View Details</Text>
  //         <Animated.View style={animatedStyle}>
  //           <Icon name="chevron-down" size={24} />
  //         </Animated.View>
  //       </Pressable>
  //       {expanded && (
  //         <Text
  //           style={{color: 'blue', width: '100%', paddingHorizontal: 5}}
  //           onPress={() => Linking.openURL(link)}>
  //           {link}
  //         </Text>
  //       )}
  //     </View>
  //   );

    return <></>;
};
