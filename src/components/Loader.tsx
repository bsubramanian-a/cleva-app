import { ActivityIndicator, StyleSheet, View } from 'react-native';

const Loader = ({ visible }:any) => {
    if (!visible) {
      return null;
    }
  
    return (
      <View style={styles.container}>
        <View style={styles.backdrop} />
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Ensure the loader is on top of other elements
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
  