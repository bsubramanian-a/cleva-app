import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { FontFamily } from '../GlobalStyles';

const ThreeDotMenu = ({ options, icon=null, account=null }:any) => {
  console.log("icon", icon);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (clickFunction:any) => {
    setIsOpen(false);
    clickFunction(account);
  };

  return (
    <View style={{ position: 'relative', zIndex: 1000000 }}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        {icon ? (
          <Image
            style={{ width: 22, height: 22 }}
            resizeMode="cover"
            source={icon}
          />
        ) : (
          <Image
            style={{ width: 22, height: 22 }}
            resizeMode="cover"
            source={require('../assets/more.png')}
          />
        )}
      </TouchableOpacity>
      {isOpen && (
        <View style={{ position: 'absolute', top: -7, right: 20, backgroundColor: '#FFF', borderWidth: 1, borderColor:  "#DEDEDE", padding: 10, width: 100, borderRadius: 14, zIndex: 1000000 , elevation: 5}}>
          {options.map((option:any, index:any) => (
            <TouchableOpacity
              key={index}
              style={{ paddingVertical: 5, flexDirection: 'row', alignItems: 'center' }}
              onPress={() => handleOptionClick(option.onClick)}
            >
                <Image
                    style={{width: 16, height: 16, marginEnd: 6}}
                    resizeMode="cover"
                    source={option?.icon}
                />
                <Text style={{ fontSize: 14, fontWeight: "300", fontFamily: FontFamily.outfitLight, color: '#000'}}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default ThreeDotMenu;
