import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import AccordionHeading from './AccordionHeading';

const AccordionItem = ({ icon, name, value, editable,index }: any) => {
  return (
    <>
      {!editable && (
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            <Image
              style={styles.vuesaxlinearprofileCircle}
              resizeMode="contain"
              source={icon}
            />
            <Text style={styles.name}>{name}</Text>
          </View>
          <Text style={styles.value}>{value}</Text>
        </View>
      )}
      {editable && (index % 2 === 1) && (
        <View>
          <Text style={[styles.newName, styles.titleRight]}>{name}</Text>
          <Text style={[styles.newValue, styles.titleRight]}>{value}</Text>
        </View>
      )}    
      {editable && (index % 2 === 0) && (
        <View>
          <Text style={[styles.name]}>{name}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      )}  
    </>
  );
};

const Accordion = ({
  title,
  items,
  icon,
  activeAccordion,
  setActiveAccordion,
  navigation,
  editable = false,
  value = ""
}: any) => {
  const isActive = activeAccordion === title;

  const toggleAccordion = () => {
    if (isActive) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(title);
    }
  };

  const editProfile = (type: string) => {
    navigation.navigate('EditProfile', { type: type });
  };

  return (
    //{editable && (
    <View style={[styles.container, !editable ? styles.aboutCard : styles.normalCard]}>
      <TouchableOpacity
        style={[styles.excercise1, styles.frameParentFlexBox]}
        onPress={toggleAccordion}
      >
        <View style={styles.vuesaxlinearsmsParent}>
          {!editable && (
            <View style={styles.vuesaxlinearprofileCircleWrapper}>
              <Image
                style={styles.vuesaxlinearprofileCircleIcon}
                resizeMode="cover"
                source={icon}
              />
            </View>
          )}
          {editable && (
            <View>
              <Image
                resizeMode="cover"
                source={icon}
              />
            </View>
          )}
          {editable && <View>
            <AccordionHeading title={title} value={value}></AccordionHeading>            
          </View>}
          {!editable && <View>
            <Text
            style={[
              styles.aboutYou,
              styles.mTypo,
              styles.danFleurClr,
            ]}
          >
            {title}
          </Text>
          </View>}

          
        </View>
        <Image
          style={styles.vuesaxlinearsmsIcon}
          resizeMode="cover"
          source={require('../assets/vuesaxlineararrowcircledown.png')}
        />
      </TouchableOpacity>
      {isActive && editable && (
        <View>
          {items.map((section: any, index: any) => (
            <View key={index.toString()}>
              {index == 0 && <View style={styles.lineStyle} />}
              <View style={styles.itemContainerNew}>
              {section.item.map((item: any, itemIndex: any) => {
                //const isEven = itemIndex % 2 === 0;
                const currentIcon = "../assets/profile.png";
                const currentLabel = item.name;
                return ((itemIndex == 0 || itemIndex == 1) && <React.Fragment key={itemIndex.toString()}>                  
                    <AccordionItem
                      icon={require(currentIcon)}
                      name={currentLabel}
                      value={item.value}
                      editable={editable}
                      index={itemIndex}
                    />                                    
                </React.Fragment>)
              })}
              </View>  
              <View style={styles.itemContainerNew}>
              {section.item.map((item: any, itemIndex: any) => {
                //const isOdd = itemIndex % 2 === 1;
                const currentIcon = "../assets/profile.png";
                const currentLabel = item.name;
                return ((itemIndex == 2 || itemIndex == 3) && <React.Fragment key={itemIndex.toString()}>                  
                    <AccordionItem
                      icon={require(currentIcon)}
                      name={currentLabel}
                      value={item.value}
                      editable={editable}
                      index={itemIndex}
                    />                                    
                </React.Fragment>)
              })}
              </View>     
            </View>
          ))}
        </View>
      )}
      {isActive && !editable && (
        <View>
          {items.map((section: any, index: any) => (
            <View key={index.toString()}>
              {index == 0 && <View style={styles.lineStyle} />}
              {!editable && <View style={styles.editRow}>
                <Text style={styles.subHeading}>{section.subHeading} Editable : {editable}</Text>
                <Pressable onPress={() => editProfile(index == 0 ? 'user1' : 'user2')} style={{ marginTop: 5 }}>
                  <Image
                    style={styles.vuesaxlinearedit}
                    resizeMode="cover"
                    source={require('../assets/edit.png')}
                  />
                </Pressable>
              </View>}

              {section.item.map((item: any, itemIndex: any) => {
                const currentIcon = "../assets/profile.png";
                const currentLabel = item.name;
                return (<React.Fragment key={itemIndex.toString()}>
                  <AccordionItem
                    icon={require(currentIcon)}
                    name={currentLabel}
                    value={item.value}
                    editable={editable}
                  />
                  <View
                    style={[
                      styles.assetsviewChild,
                      styles.mt15,
                      styles.childBorder,
                    ]}
                  />
                </React.Fragment>)
              })}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const AccordionContainer = ({ accordions }: any) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={styles.accordionContainer}>
      {accordions.map((accordion: any, index: any) => (
        <Accordion
          key={index.toString()}
          title={accordion.title}
          items={accordion.items}
          icon={accordion.icon}
          activeAccordion={activeAccordion}
          setActiveAccordion={setActiveAccordion}
          navigation={navigation}
          editable={accordion.editable}
          value={accordion.value}
        />
      ))}
    </View>
  );
};

export default AccordionContainer;

const styles = StyleSheet.create({
  assetsviewChild: {
    borderTopWidth: 1,
    width: "100%",
    height: 1,
  },
  mt15: {
    marginTop: 15,
  },
  childBorder: {
    borderColor: "#f3f1ee",
    borderStyle: "solid",
  },
  lineStyle: {
    marginVertical: 10,
    height: 1,
    width: "100%",
    borderColor: "#F3F1EE",
    borderWidth: 1,
    borderStyle: "solid"
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  subHeading: {
    color: "#FBB142",
    fontSize: 14,
    fontWeight: "600"
  },
  accordionContainer: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#eaeaea",
    marginHorizontal: 30,
    marginTop: 20,
    paddingBottom: 20
  },
  excercise1: {
    justifyContent: "space-between",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.08)",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    // width: '100%'
  },
  aboutCard: {
    padding: 10,
    borderRadius: 16,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.5)",
    paddingHorizontal: 10,
    overflow: "hidden",
    backgroundColor: Color.white1,
    marginBottom: 10,
  },
  normalCard: {
    padding: 10
  },
  vuesaxlinearsmsParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  vuesaxlinearprofileCircleWrapper: {
    borderRadius: 10,
    backgroundColor: "#FFF9F1",
    borderColor: "#ffeccf",
    borderWidth: 1,
    width: 40,
    height: 40,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  vuesaxlinearprofileCircleIcon: {
    width: 20,
    height: 20,
  },
  vuesaxlinearprofileCircle: {
    width: 20,
    height: 20,
    marginRight: 9
  },
  vuesaxlinearedit: {
    width: 20,
    height: 20,
  },
  aboutYou: {
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 24,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "600",
    color: '#FBB142',
  },
  danFleurClr: {
    color: Color.black,
    textAlign: "left",
  },
  vuesaxlinearsmsIcon: {
    width: 18,
    height: 18,
  },
  container: {
    // marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: 5,
    width: '100%',
    padding: 10
  },
  itemContainerNew:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:"flex-start",
    justifyContent: "space-between",
    marginLeft:12
  },
  itemContainerNewSecond:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems:"flex-start",
    justifyContent: "space-between",
  },
  titleRight:{
    alignSelf:"flex-end",
  },
  icon: {
    fontSize: 20,
    marginRight: 10,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginRight: 10,
    color: '#4B4B4B'
  },
  newName: {
    marginRight: 10,
    color: '#4B4B4B'
  },
  newValue: {
    marginRight: 10,
    fontWeight: 'bold',
    color: '#000'
  },
  value: {
    fontWeight: 'bold',
    color: '#000'
  },
});