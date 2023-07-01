import React, {useEffect, useState} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import RadioButtonGroup from './RadioButtonGroup';

const GraphModal = ({
  visible,
  onClose,
  handleFilter,
  filterOptions,
  selectedFilter,
  xaxis,
  yaxis
}: any) => {
  console.log("xaxis inside", xaxis);
  console.log("yaxis inside", yaxis);

  const data = {
    labels: xaxis?.length > 0 ? xaxis : [0],
    datasets: [
      {
        data: yaxis?.length > 0 ? yaxis : [0],
      },
    ],
  };

  const formatYLabel = (value:any) => {
    if (isNaN(value) || !value || value === undefined) {
      return "";
    }
    return Math.floor(value).toString(); // Round down to the nearest integer
  };
  

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Pressable onPress={onClose} style={styles.closeButton}>
            <Image
              resizeMode="cover"
              source={require('../assets/group-1171275096.png')}
              style={styles.frameChild}
            />
          </Pressable>
          <RadioButtonGroup
            options={filterOptions}
            defaultValue={selectedFilter}
            onChange={handleFilter}
            count={6}
            elevation={0}
            coptionContainer={{
              height: 25,
              marginVertical: 0,
              paddingVertical: 0,
            }}
            cselectedOptionBackground={{height: 25, padding: 4}}
          />
          <View style={styles.lineStyle} />
          <View style={styles.chartContainer}>
            <LineChart
              data={data}
              width={300}
              height={200}
              chartConfig={chartConfig}
              formatYLabel={formatYLabel}
              bezier
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  fillShadowGradientFromOpacity: 0,
  fillShadowGradientToOpacity: 0,
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(251,177,66, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#fff',
  },
};

const styles = StyleSheet.create({
  frameChild: {
    width: 83,
    height: 92,
    zIndex: 10000,
  },
  lineStyle: {
    marginVertical: 10,
    height: 1,
    width: Dimensions.get('window').width - 100,
    alignSelf: 'center',
    borderColor: '#F3F1EE',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterButton: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#EEEEEE',
  },
  selectedFilterButton: {
    backgroundColor: '#007AFF',
  },
  filterButtonText: {
    color: '#555555',
  },
  selectedFilterButtonText: {
    color: '#FFFFFF',
  },
  chartContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    right: -35,
    top: -35,
    position: 'absolute',
    zIndex: 1000000
  },
  closeButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default GraphModal;
