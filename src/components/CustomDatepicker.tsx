import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Platform, Modal, Button, StyleSheet, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { format } from 'date-fns';

const CustomDatePicker = ({ defaultValue, onValueChange }: any) => {
  const [selectedDate, setSelectedDate] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    onValueChange(format(date, 'yyyy-MM-dd'));
  };

  useEffect(() =>{
    setSelectedDate(defaultValue);
  }, [defaultValue])

  const openDatePicker = () => {
    setOpen(!open);
  };

  const closeDatePicker = () => {
    setOpen(false);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const formattedDate = selectedDate ? format(selectedDate, 'dd-MM-yyyy') : null;

  return (
    <View>
      <TouchableOpacity onPress={openDatePicker}>
         <View style={styles.dtpStyle}>
          <Text style={{ fontSize: 14, color: '#000', fontWeight: '600' }}>{formattedDate}</Text>
        </View>
      </TouchableOpacity>
      {/* {Platform.OS === 'ios' && ( */}
        <Modal visible={open} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
              <DatePicker
                date={selectedDate || new Date()}
                onDateChange={handleDateChange}
                mode="date"
                maximumDate={today}
                textColor='#000'
              />
              <Button title="Close" onPress={closeDatePicker} />
            </View>
          </View>
        </Modal>
      {/* )} */}
      {/* {Platform.OS === 'android' && open && ( */}
        {/* <DatePicker
          date={selectedDate}
          onDateChange={handleDateChange}
          mode="date"
          onConfirm={(date) => {
            setOpen(false)
            handleDateChange(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
          maximumDate={today}
        /> */}
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  dtpStyle: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 4,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
  },
});

export default CustomDatePicker;