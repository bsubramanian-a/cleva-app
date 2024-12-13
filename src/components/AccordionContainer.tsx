import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Pressable } from 'react-native';
import { Border, Color, FontSize, Margin, Padding } from '../GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
import { FontFamily } from '../GlobalStyles';
import { useNavigation } from '@react-navigation/native';
import AccordionHeading from './AccordionHeading';
import { wrapTitle } from '../utils/wrapTitle';
import InsuranceBox from './InsuranceBox';

const calculatePaymentAmount = (pAMount: number, paymentFrequency: string) => {
  switch (paymentFrequency) {
    case "Weekly":
      return (pAMount / 52).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    case "Fortnightly":
      return (pAMount / 26).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    case "Monthly":
      return (pAMount / 12).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    case "Quarterly":
      return (pAMount / 4).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    case "Twice Yearly":
      return (pAMount / 2).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    case "Annual":
      return pAMount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    default:
      return 0;
  }
};

const ExpenseComponent = ({ icon, wrappedName, wrappedValue, type }: { icon: React.ReactNode, wrappedName: string, wrappedValue: any, type: string }) => {

  const completeString = (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.itemContent}>
          {icon}
          <Text style={styles.name}>{wrappedName}</Text>
        </View>
        <Text style={styles.value}>
          {type == 'gas' && `$${wrappedValue?.Gas_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'electricity' && `$${wrappedValue?.Electricity_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'water' && `$${wrappedValue?.Water_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'insurance' && `$${wrappedValue?.Home_Contents_Insurance_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'car' && `$${wrappedValue?.Car_Insurance_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'health' && `$${wrappedValue?.Private_Health_Insurance_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'home' && `$${wrappedValue?.Home_Loan?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'investment' && `$${wrappedValue?.Investment_Property_Loan_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'other' && `$${wrappedValue?.Other_Expenses_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'personal' && `$${wrappedValue?.Personal_Loan_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'credit' && `$${wrappedValue?.Credit_Cards_per_month?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
          {type == 'otherinvestment' && `$${wrappedValue?.Other_Investment_Loan_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`}
        </Text>
      </View>
      {type != 'credit' && type != 'other' && <View style={[styles.itemContainer, styles.innerText]}>
        <View style={[styles.itemContent]}>
          <Text style={[styles.name, styles.innerNameText]}>
            Frequency :
          </Text>
          <Text style={[styles.value, styles.innerNameText]}>
            {type == 'gas' && wrappedValue?.Gas_Pay_Frequency}  
            {type == 'electricity' && wrappedValue?.Electricity_Pay_Frequency}
            {type == 'water' && wrappedValue?.Water_Pay_Frequency}
            {type == 'insurance' && wrappedValue?.Home_Contents_Pay_Frequency}
            {type == 'car' && wrappedValue?.Car_Insurance_Pay_Frequency}
            {type == 'health' && wrappedValue?.Private_Health_Pay_Frequency}
            {type == 'home' && wrappedValue?.Home_Loan_Repayment_Frequency}
            {type == 'investment' && wrappedValue?.Invest_Property_Pay_Frequency}            
            {type == 'personal' && wrappedValue?.Personal_Laon_Pay_Freq}
            {type == 'otherinvestment' && wrappedValue?.Other_Investment_Loan_Pay_Freq}
          </Text>
        </View>
      </View>}
      
      <View style={[styles.itemContainer, styles.innerText]}>
        <View style={[styles.itemContent]}>
          <Text style={[styles.name, styles.innerNameText]}>Payment Amount :</Text>
          <Text style={[styles.value, styles.innerNameText]}>
            {type == 'gas' && "$"+calculatePaymentAmount(wrappedValue?.Gas_p_a, wrappedValue?.Gas_Pay_Frequency)}  
            {type == 'electricity' && "$"+calculatePaymentAmount(wrappedValue?.Electricity_p_a, wrappedValue?.Electricity_Pay_Frequency)}
            {type == 'water' && "$"+calculatePaymentAmount(wrappedValue?.Water_p_a, wrappedValue?.Water_Pay_Frequency)}
            {type == 'insurance' && "$"+calculatePaymentAmount(wrappedValue?.Home_Contents_Insurance_p_a, wrappedValue?.Home_Contents_Pay_Frequency)}
            {type == 'car' && "$"+calculatePaymentAmount(wrappedValue?.Car_Insurance_p_a, wrappedValue?.Car_Insurance_Pay_Frequency)}
            {type == 'health' && "$"+calculatePaymentAmount(wrappedValue?.Private_Health_Insurance_p_a, wrappedValue?.Private_Health_Pay_Frequency)}
            {type == 'home' && "$"+calculatePaymentAmount(wrappedValue?.Home_Loan, wrappedValue?.Home_Loan_Repayment_Frequency)}
            {type == 'investment' && "$"+calculatePaymentAmount(wrappedValue?.Investment_Property_Loan_p_a, wrappedValue?.Invest_Property_Pay_Frequency)}            
            {type == 'personal' && "$"+calculatePaymentAmount(wrappedValue?.Personal_Loan_p_a, wrappedValue?.Personal_Laon_Pay_Freq)}
            {type == 'credit' && "$"+wrappedValue?.Credit_Cards_per_month?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {type == 'otherinvestment' && "$"+calculatePaymentAmount(wrappedValue?.Other_Investment_Loan_p_a, wrappedValue?.Other_Investment_Loan_Pay_Freq)}
            {type == 'other' && "$"+wrappedValue?.Other_Expenses_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
        </View>
      </View>
      <View style={[styles.itemContainer, styles.innerText, styles.innerBottomBorder]}>
        <View style={[styles.itemContent]}>
          <Text style={[styles.name, styles.innerNameText]}>Paid by :</Text>
          <Text style={[styles.value, styles.innerNameText]}>
            {type == 'gas' && wrappedValue?.Household?.name}  
            {type == 'electricity' && wrappedValue?.Household?.name}
            {type == 'water' && wrappedValue?.Household?.name}
            {type == 'insurance' && wrappedValue?.Household?.name}
            {type == 'car' && wrappedValue?.Household?.name}
            {type == 'health' && wrappedValue?.Household?.name}
            {type == 'home' && wrappedValue?.Household?.name}
            {type == 'investment' && wrappedValue?.Household?.name}
            {type == 'other' && wrappedValue?.Household?.name}
            {type == 'personal' && wrappedValue?.Household?.name}
            {type == 'credit' && wrappedValue?.Household?.name}
            {type == 'otherinvestment' && wrappedValue?.Household?.name}
          </Text>
        </View>
      </View>
    </>
  );

  return (
    <>
      {completeString}
    </>
  );
};

const AccordionItem = ({ icon, name, value = "", editable, index, finAccount, element, comments, isRetirement, isExpense, type }: any) => {
  const wrappedName = name ? wrapTitle(name, 22) : "N/A";
  let wrappedValue = value;
  if (!isRetirement && !isExpense) {
    wrappedValue = value ? wrapTitle(value, 20) : "N/A";
  }
  return (
    <>
      {isExpense &&
        <ExpenseComponent icon={icon} wrappedName={wrappedName} wrappedValue={wrappedValue} type={type} />
      }
      {isRetirement && <View style={styles.itemContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>}
      {!editable && (comments != "yes") && !isRetirement && !isExpense && (
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            {/* <Image
              style={styles.vuesaxlinearprofileCircle}
              resizeMode="contain"
              source={currentIcon}
            />  */}
            {icon}
            <Text style={styles.name}>{wrappedName}</Text>
          </View>
          <Text style={styles.value}>{wrappedValue}</Text>
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
    console.log("editlink", link)
    console.log("editData", editData)
    navigation.navigate(link, { editData });
  };

  console.log("edit title", title);
  console.log("edit link", link);
  console.log("edit element", element);

  console.log("isActive", isActive);
  console.log("editable", editable);



  return (
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
                {section.enableSubHeading && <Text style={styles.subHeading}>{section.subHeading} </Text>}
                {/* <Pressable onPress={() => editProfile(index == 0 ? 'user1' : 'user2')} style={{ marginTop: 5 }}>
                  <Image
                    style={styles.vuesaxlinearedit}
                    resizeMode="cover"
                    source={require('../assets/edit.png')}
                  />
                </Pressable> */}
                {section.enableEdit && <Pressable onPress={() => goEdit(link, element)} style={{ marginTop: 5 }}>
                  <Image
                    style={styles.vuesaxlinearedit}
                    resizeMode="cover"
                    source={require('../assets/edit.png')}
                  />
                </Pressable>}
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
                    isRetirement={section.isRetirement}
                    isExpense={section.isExpense}
                    type={item.type}
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
  innerText: {
    borderWidth: 0,
    borderColor: "red",
    borderStyle: "solid",
    padding:0,
    paddingLeft: 38,
    marginTop: 0,
    marginBottom: 0,
  },
  innerBottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#F3F1EE",
    borderBottomStyle: "solid",
    paddingBottom: 10,
  },
  innerNameText: {
    fontSize: 14,
    color: "#4B4B4B",
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
  commentscontainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  }
});