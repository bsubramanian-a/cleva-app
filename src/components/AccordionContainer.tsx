import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import AccordionHeading from './AccordionHeading';
import { wrapTitle } from '../utils/wrapTitle';
import InsuranceBox from './InsuranceBox';

const AccordionItem = ({ icon, name, value="", editable, index, finAccount, element, comments }: any) => {
  const wrappedName = name ? wrapTitle(name, 22) : "N/A";
  let wrappedValue  = value;
  if (comments == "yes") {
    wrappedValue = value ? wrapTitle(value, 40) : "N/A";
  }
  return (
    <>
      {!editable && (comments != "yes") && (
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            {/* <Image
              style={styles.vuesaxlinearprofileCircle}
              resizeMode="contain"
              source={currentIcon}
            /> */}
            {icon}
            <Text style={styles.name}>{wrappedName}</Text>
          </View>
          <Text style={styles.value}>{value}</Text>
        </View>
      )}
      {editable && finAccount && (
        <>
          <InsuranceBox element={element} name={wrappedName} value={value} />
        </>
      )}
      {!editable && (comments == "yes") && (
        <View style={[styles.commentscontainer]}>
          <Text style={[styles.commentName]}>{wrappedName}</Text>
          <Text style={styles.commentValue}>{wrappedValue}</Text>
        </View>
      )}
      {editable && !finAccount && !comments && (index % 2 === 1) && (
        <View>
          <Text style={[styles.newName, styles.titleRight]}>{wrappedName}</Text>
          <Text style={[styles.newValue, styles.titleRight]}>{value}</Text>
        </View>
      )}
      {editable && !finAccount && !comments && (index % 2 === 0) && (
        <View>
          <Text style={[styles.name]}>{wrappedName}</Text>
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
  value = "",
  finAccount,
  link,
  element, 
  showEdit
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

  const goEdit = (link: string, editData: any) => {
    console.log("editlink",link)
    console.log("editData",editData)
    navigation.navigate(link, { editData });
  };

  console.log("edit title", title);
  console.log("edit link", link);
  console.log("edit element", element);

  

  return (
    //{editable && (
    // <View style={[styles.container, !editable ? styles.aboutCard : styles.normalCard]}>
    <View style={[styles.container, styles.aboutCard]}>
      <AccordionHeading icon={icon} toggleAccordion={toggleAccordion} title={title} value={value} showEdit={showEdit} editable={editable} link={link} element={element} navigation={navigation}></AccordionHeading>
      {isActive && editable && (
        <View>
          {items.map((section: any, index: any) => (
            <View key={index.toString()}>
              {index == 0 && <View style={styles.lineStyle} />}
              <View style={styles.itemContainerNew} key={index.toString()}>
                {section.item.length == 0 && <Text>No Accounts Found</Text>}
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
                      finAccount={finAccount}
                      element={item.element}
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
                      finAccount={finAccount}
                      element={item.element}
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
                {/* <Pressable onPress={() => editProfile(index == 0 ? 'user1' : 'user2')} style={{ marginTop: 5 }}>
                  <Image
                    style={styles.vuesaxlinearedit}
                    resizeMode="cover"
                    source={require('../assets/edit.png')}
                  />
                </Pressable> */}
                <Pressable onPress={() => goEdit(link, element)} style={{ marginTop: 5 }}>
                  <Image
                    style={styles.vuesaxlinearedit}
                    resizeMode="cover"
                    source={require('../assets/edit.png')}
                  />
                </Pressable>
              </View>}

              {section.item.map((item: any, itemIndex: any) => {
                //const currentIcon = "../assets/profile.png";
                const currentIcon = item.icon;
                const currentLabel = item.name;
                return (<React.Fragment key={itemIndex.toString()}>                  
                  <AccordionItem
                    icon={currentIcon}
                    name={currentLabel}
                    value={item.value}
                    editable={editable}
                    finAccount={finAccount}
                    element={item.element}
                    comments={item?.comments}
                  />
                  {/* <View
                    style={[
                      styles.assetsviewChild,
                      styles.mt15,
                      styles.childBorder,
                    ]}
                  /> */}
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

  console.log("accordions", accordions)

  return (
    <View style={[styles.accordionContainer]}>
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
          finAccount={accordion.finAccount}
          link={accordion.link}
          element={accordion.element}
          showEdit={accordion.showEdit}
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
    borderWidth: 0,
    borderRadius: 16,
    borderColor: "#eaeaea",
    marginHorizontal: 30,
    marginTop: 3,
    paddingBottom: 0
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
  vuesaxlinearprofileCircle: {
    width: 20,
    height: 20,
    marginRight: 9
  },
  vuesaxlinearedit: {
    width: 20,
    height: 20,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
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
  itemContainerNew: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: 12
  },
  itemContainerNewSecond: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  titleRight: {
    alignSelf: "flex-end",
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
  commentName: {
    marginRight: 10,
    color: '#4B4B4B'
  },
  commentValue: {
    marginRight: 10,
    fontWeight: 'bold',
    color: '#000'
  },
  commentscontainer : {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft:10,
    paddingRight:10,
    paddingTop:10,
    paddingBottom:10
  }
});