import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

const ThreeDotMenu = ({ options }:any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (clickFunction:any) => {
    setIsOpen(false);
    clickFunction();
  };

  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <Text>...</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={{ position: 'absolute', top: 20, right: 0, backgroundColor: '#FFF', padding: 10, width: 100, borderRadius: 7, zIndex: 1000000 , elevation: 5}}>
          {options.map((option:any, index:any) => (
            <TouchableOpacity
              key={index}
              style={{ paddingVertical: 5, flexDirection: 'row', alignItems: 'center' }}
              onPress={() => handleOptionClick(option.onClick)}
            >
                <Image
                    style={{width: 12, height: 12, marginEnd: 5}}
                    resizeMode="cover"
                    source={require("../assets/calendar.png")}
                />
                <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default ThreeDotMenu;
