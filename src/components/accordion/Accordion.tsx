import * as React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Color, Margin} from '../../GlobalStyles';
import AccordionHeading from './AccordionHeading';
import AccordionItem from './AccordionItem';


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

    const goEdit = (link: string, editData: any) => {
        navigation.navigate(link, { editData });
    };

    return (
        <View style={[styles.aboutCard]}>
            <AccordionHeading icon={icon} toggleAccordion={toggleAccordion} title={title} value={value} showEdit={showEdit} editable={editable} link={link} element={element} navigation={navigation}></AccordionHeading>
            {isActive && editable && (
                <View>
                    {items.map((section: any, index: any) => (
                        <View key={index.toString()}>
                            {index == 0 && <View style={styles.lineStyle} />}
                            <View style={styles.itemContainerNew} key={index.toString()}>
                                {section.item.length == 0 && <Text>No Accounts Found</Text>}
                                {section.item.map((item: any, itemIndex: any) => {
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
                                {section.enableSubHeading && <Text style={styles.subHeading}>{section.subHeading} </Text>}
                                {section.enableEdit && <Pressable onPress={() => goEdit(link, element)} style={{ marginTop: 5 }}>
                                    <Image
                                        style={styles.vuesaxlinearedit}
                                        resizeMode="cover"
                                        source={require('../assets/edit.png')}
                                    />
                                </Pressable>}
                            </View>}

                            {section.item.map((item: any, itemIndex: any) => {
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
                                        isRetirement={section.isRetirement}
                                        isExpense={section.isExpense}
                                        type={item.type}
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

export default Accordion;

const styles = StyleSheet.create({
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
    vuesaxlinearedit: {
      width: 20,
      height: 20,
    },
    itemContainerNew: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: "flex-start",
      justifyContent: "space-between",
      marginLeft: 12
    },
  });