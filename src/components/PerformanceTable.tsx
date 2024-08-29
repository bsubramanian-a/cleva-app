import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



const PerformanceTable = ({ performanceData }:any) => {
  const renderRow = ({ item, index }:any) => {
    return (
      <View style={styles.row}>
        <Text style={styles.rowTitle}>{item[0]}</Text>
        {item.slice(1).map((cellData:any, cellIndex:any) => (
          <Text key={cellIndex} style={styles.cell}>
            {cellData}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.rowTitle}> </Text>
        {performanceData[0] && performanceData[0].slice(1).map((header:any, index:any) => (
          <Text key={index} style={styles.columnHeader}>
            {header}
          </Text>
        ))}
      </View>
      {Array.isArray(performanceData) && performanceData.length > 0 ? (
        <FlatList
          data={performanceData.slice(1)}
          renderItem={renderRow}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>No data to display</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableHeader: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  rowTitle: {
    width: 100, // Adjust width as needed
    padding: 10,
    borderWidth: 0,
    borderColor: 'black',
    fontWeight: 'bold',
  },
  columnHeader: {
    flex: 1,
    padding: 10,
    borderWidth: 0,
    borderColor: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 0,
    borderColor: 'black',
  },
});

export default PerformanceTable;
