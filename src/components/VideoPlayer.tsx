import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = ({ sourceUri }: any) => {
    const navigation = useNavigation();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleBuffer = (event: any) => {
        setIsLoading(event.isBuffering);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // Cleanup function to stop the video and reset the state
            setIsPlaying(false);
            setIsLoading(true);
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Video
                source={{ uri: sourceUri }}
                style={styles.video}
                paused={!isPlaying}
                resizeMode="contain"
                controls={isPlaying}
                onBuffer={handleBuffer}
                onLoad={() => setIsLoading(false)}
            />
            {!isPlaying && !isLoading && (
                <TouchableOpacity style={styles.playButton} onPress={handlePlay}>
                    <Image source={require('../assets/polygon-2.png')} style={styles.playButtonImage} />
                </TouchableOpacity>
            )}
            {isLoading && (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#fbb142" />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: Dimensions.get('window').width - 65,
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -18 }, { translateY: -18 }],
  },
  playButtonImage: {
    borderRadius: 12,
    height: 25,
    width: 25,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 16,
    overflow: 'hidden',
  },
});

export default VideoPlayer;
