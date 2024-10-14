import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import HeaderBack from "../../components/HeaderBack";
import EditBtn from "../../components/EditBtn";
import {
  Margin,
  Padding,
  Border,
  Color,
  FontSize,
  FontFamily,
} from "../../GlobalStyles";
import CustomHeader from "../../components/CustomHeader";
import ChapterTab from "../../components/ChapterTab";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import actions from "../../../actions";
import Loader from "../../components/Loader";
import VideoPlayer from "../../components/VideoPlayer";
import { useNavigation, useRoute } from "@react-navigation/native";
import AccordionContainer from "../../components/AccordionContainer";


const MoneyAutoDrive = () => {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const data = route.params?.item;
  console.log("data", data)
  const [loading, setLoading] = useState(false);
  const moneyOnAutoDrive = useSelector((state: any) => state.data.moneyOnAutoDrive);
  const notes = useSelector((state: any) => state.data.notes);
  const coachnotes = useSelector((state: any) => state.data.coachnotes);
  const houseHoldExpenses = useSelector((state: any) => state.data.householdExpenses);
  const [accordionHouseHold, setHouseHoldAccordion] = useState<any>([]);
  const [accordionLoan, setLoanAccordion] = useState<any>([]);

  console.log("houseHoldExpenses", houseHoldExpenses);
  console.log("notes", notes);
  console.log("coachnotes", coachnotes);
  console.log("moneyOnAutoDrive", moneyOnAutoDrive);
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0);

  const handleTabPress = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const handleSubTabPress = (tabNumber: number) => {
    setActiveSubTab(tabNumber);
  };

  useEffect(() => {

    // Trigger the fetch when the navigation state changes
    navigation.addListener('focus', getDatas);

    // Cleanup the listener when the component unmounts
    return () => {
      navigation.removeListener('focus', getDatas);
    };

  }, [navigation])

  useEffect(() => {
    setAccordions();
  }, [houseHoldExpenses])


  const getDatas = async () => {
    setLoading(true);
    try {
      await actions.getMoneyOnAutoDrive();
      await actions.getNotes();
      await actions.getCoachNotes();
      await actions.getHouseHoldExpenses();
    } catch (err) {
      console.log("err", err);
    }
    setLoading(false);
  }

  const imageMap: any = {
    'Yes': require('../../assets/yes.png'),
    'Maybe/Work to Do': require('../../assets/maybe.png'),
    'No/Not Sure': require('../../assets/no.png'),
    'No': require('../../assets/no.png'),
  };

  const editHouseHold = (houseHoldExpenses: any) => {
    navigation.navigate('EditMoneyAutoDrive', { houseHoldExpenses });
  };

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

  const setAccordions = () => {
    setHouseHoldAccordion([
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Gas</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Gas_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Gas_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Gas",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Gas_p_a ? "$"+(houseHoldExpenses[0]?.Gas_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Gas_Pay_Frequency ? houseHoldExpenses[0].Gas_Pay_Frequency:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Gas_p_a ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Gas_p_a, houseHoldExpenses[0]?.Gas_Pay_Frequency):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Electricity</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Electricity_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Electricity_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Electricity",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Electricity_p_a ? "$"+(houseHoldExpenses[0].Electricity_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Electricity_Pay_Frequency ? houseHoldExpenses[0].Electricity_Pay_Frequency:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Electricity_p_a ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Electricity_p_a, houseHoldExpenses[0]?.Electricity_Pay_Frequency):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Water</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Water_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Water_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Water",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Water_p_a ? "$"+(houseHoldExpenses[0].Water_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Water_Pay_Frequency ? houseHoldExpenses[0].Water_Pay_Frequency:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Water_p_a ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Water_p_a, houseHoldExpenses[0]?.Water_Pay_Frequency):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Home/Contents Insurance</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Home_Contents_Insurance_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Home_Contents_Insurance_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Home/Contents Insurance",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Home_Contents_Insurance_p_a ? "$"+(houseHoldExpenses[0]?.Home_Contents_Insurance_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Home_Contents_Pay_Frequency ? houseHoldExpenses[0]?.Home_Contents_Pay_Frequency:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Home_Contents_Insurance_p_a ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Home_Contents_Insurance_p_a, houseHoldExpenses[0]?.Home_Contents_Pay_Frequency):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Car Insurance</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Car_Insurance_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Car_Insurance_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Car Insurance",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Car_Insurance_p_a ? "$"+(houseHoldExpenses[0]?.Car_Insurance_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Car_Insurance_Pay_Frequency ? houseHoldExpenses[0]?.Car_Insurance_Pay_Frequency:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Car_Insurance_p_a ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Car_Insurance_p_a, houseHoldExpenses[0]?.Car_Insurance_Pay_Frequency):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Private Health Insurance</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Private_Health_Insurance_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Private_Health_Insurance_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Private Health Insurance",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Private_Health_Insurance_p_a ? "$"+(houseHoldExpenses[0]?.Private_Health_Insurance_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Private_Health_Pay_Frequency ? houseHoldExpenses[0]?.Private_Health_Pay_Frequency:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Private_Health_Insurance_p_a ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Private_Health_Insurance_p_a, houseHoldExpenses[0]?.Private_Health_Pay_Frequency):"N/A"  
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={[{ flexWrap: 'wrap', display: 'flex' }]}>
          <View style={styles.listContent}>
            <Text style={styles.listName}>General Non-Utilities</Text>
          </View>
          <View style={styles.listContent}>
            {houseHoldExpenses && houseHoldExpenses[0]?.General_Non_Utilities_Household ? (
              <Text style={styles.listValue}>${(houseHoldExpenses[0]?.General_Non_Utilities_Household).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            ) : (
              <Text style={styles.listValue}>N/A</Text>
            )}
          </View>
        </View>                       
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "General Non-Utilities",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.General_Non_Utilities_Household ? "$"+(houseHoldExpenses[0]?.General_Non_Utilities_Household).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.General_Non_Utilities_Payment_Frequency ? houseHoldExpenses[0]?.General_Non_Utilities_Payment_Frequency:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.General_Non_Utilities_Household ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.General_Non_Utilities_Household, houseHoldExpenses[0]?.General_Non_Utilities_Payment_Frequency):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      }
    ])

    setLoanAccordion([
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Home </Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Home_Loan ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Home_Loan).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Home",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Home_Loan ? "$"+(houseHoldExpenses[0].Home_Loan).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Home_Loan_Repayment_Frequency ? houseHoldExpenses[0].Home_Loan_Repayment_Frequency:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Home_Loan ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Home_Loan, houseHoldExpenses[0]?.Home_Loan_Repayment_Frequency):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Investment Property </Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Investment_Property_Loan_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Investment_Property_Loan_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Investment Property ",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Electricity_p_a ? "$"+(houseHoldExpenses[0].Investment_Property_Loan_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Invest_Property_Pay_Frequency ? houseHoldExpenses[0].Invest_Property_Pay_Frequency:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Investment_Property_Loan_p_a ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Investment_Property_Loan_p_a, houseHoldExpenses[0]?.Invest_Property_Pay_Frequency):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Other Investments</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Other_Investment_Loan_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Other_Investment_Loan_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Water",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Other_Investment_Loan_p_a ? "$"+(houseHoldExpenses[0].Other_Investment_Loan_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Other_Investment_Loan_Pay_Freq ? houseHoldExpenses[0].Other_Investment_Loan_Pay_Freq:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Other_Investment_Loan_p_a ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Other_Investment_Loan_p_a, houseHoldExpenses[0]?.Other_Investment_Loan_Pay_Freq):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Personal</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Personal_Loan_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Personal_Loan_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Personal",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Personal_Loan_p_a ? "$"+(houseHoldExpenses[0]?.Personal_Loan_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Frequency', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Personal_Laon_Pay_Freq ? houseHoldExpenses[0]?.Personal_Laon_Pay_Freq:"N/A" 
              },
              { 
                icon: "", 
                name: 'Payment Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Personal_Loan_p_a ? "$" + calculatePaymentAmount(houseHoldExpenses[0]?.Personal_Loan_p_a, houseHoldExpenses[0]?.Personal_Laon_Pay_Freq):"N/A" 
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Credit Cards</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Credit_Cards_per_month ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Credit_Cards_per_month).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Credit Cards",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Credit_Cards_per_month ? "$"+(houseHoldExpenses[0]?.Credit_Cards_per_month).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: <>
        <View style={styles.listContent}>
          <Text style={styles.listName}>Other Expenses</Text>  
          {
          houseHoldExpenses && houseHoldExpenses[0]?.Other_Expenses_p_a ?
            <Text style={styles.listValue}>${(houseHoldExpenses[0]?.Other_Expenses_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} p.a.</Text>
            :
            <Text style={styles.listValue}>N/A</Text>
          }                  
        </View>         
      </>,
        icon: require("../../assets/money-send.png"),
        link: 'EditProfile',
        editable: true,
        items: [
          {
            subHeading: "Other Expenses",
            item: [
              { 
                icon: "", 
                name: 'Amount', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Other_Expenses_p_a ? "$"+(houseHoldExpenses[0]?.Other_Expenses_p_a).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" p.a.":"N/A"
              },              
              { 
                icon: "", 
                name: 'Paid by', 
                value: houseHoldExpenses && houseHoldExpenses[0]?.Household?.name ? houseHoldExpenses[0]?.Household?.name:"N/A" 
              }
            ]
          }
        ].filter(obj => obj),
      }
    ])
  }

  return (
    <>
      {(moneyOnAutoDrive.length > 0) ?
        <View
          style={styles.moneyOnAutoDrive}
        >
          <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
          <CustomHeader name={moneyOnAutoDrive[0]?.Name} type={2} />

          <ScrollView
            style={styles.videoSectionParent}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.moneyOnAutoDriveScrollViewContent}
          >
            <Text style={styles.goaltitle}>My Goal</Text>
            <Text style={styles.goaltext}>{moneyOnAutoDrive[0].MOAD_Goal_Statement}</Text>
            {/* <ImageBackground
            style={[styles.videoSectionInner, styles.bottomFlexBox]}
            resizeMode="cover"
            source={require("../../assets/frame526.png")}
          >
            <View style={styles.polygonWrapper}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../../assets/polygon-2.png")}
              />
            </View>
          </ImageBackground> */}
            {/* <View style={styles.videoSection}>
          <VideoPlayer sourceUri={'https://download.samplelib.com/mp4/sample-5s.mp4'} />
        </View> */}

            <ChapterTab
              tabs={['Summary', 'Dashboard', 'Journal', 'Resources']}
              activeTab={activeTab}
              onTabPress={handleTabPress}
              type="tab"
            />
            {activeTab == 0 &&
              <>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Have a list of Sav & exp?
                  </Text>
                  <Image
                    style={[styles.frameChild]}
                    resizeMode="cover"
                    source={imageMap[moneyOnAutoDrive[0].Have_a_list_of_Sav_exp]}
                  />

                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Create your MOAD Plan?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[moneyOnAutoDrive[0].Create_your_MOAD_Plan]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Turn On & Maintain MOAD?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[moneyOnAutoDrive[0].Turn_On_Maintain_MOAD]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Review Every 12 months?
                  </Text>
                  <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={imageMap[moneyOnAutoDrive[0].Review_Every_12_months]}
                  />
                </View>
                <View style={[styles.summary1]}>
                  <Text
                    style={[
                      styles.loremIpsumIs,
                      styles.myExercisesTypo,
                    ]}
                  >
                    Date last reviewed : {moneyOnAutoDrive[0].Last_Reviewed}
                  </Text>
                </View>
              </>
            }
            {activeTab == 1 &&
              <>
                <View style={styles.editRow}>
                  <Text style={styles.subHeading}>Household : {houseHoldExpenses[0]?.Name}</Text>
                  <Pressable onPress={() => editHouseHold(houseHoldExpenses)} style={{ marginTop: 5 }}>
                    <Image
                      style={styles.vuesaxlinearedit}
                      resizeMode="cover"
                      source={require('../../assets/edit.png')}
                    />
                  </Pressable>
                </View> 
                <AccordionContainer accordions={accordionHouseHold} />
                <View style={styles.editRow}>
                  <Text style={styles.subHeading}>Loan Repayments : {houseHoldExpenses[0]?.Name}</Text>
                </View> 
                <AccordionContainer accordions={accordionLoan} />
              </>
            }
            {activeTab == 2 &&
              <View>
                <ChapterTab
                  tabs={['My Notes', 'Coach Notes', 'To do']}
                  activeTab={activeSubTab}
                  onTabPress={handleSubTabPress}
                  type="subtab"
                />
                {activeSubTab == 0 &&
                  <>
                    <View style={[styles.advicecontainer]}>
                      <Text style={[styles.adviceAssignedBy, styles.summaryTypo]}>
                        My Notes
                      </Text>
                      <View
                        style={[styles.advice2, styles.advice2Layout, styles.adviceBg]}
                      >
                        <View style={[styles.advice1Parent, styles.mt10]}>
                          {notes?.length > 0 && <>
                            {notes?.map((note: any) => {
                              if (note?.Current == "Yes" && note?.Module == "Money on Autodrive") {
                                return (
                                  <>
                                    <View style={styles.advice11}>
                                      <View style={styles.dot1Wrapper}>
                                        <View style={styles.dot1} />
                                      </View>
                                      <Text style={[styles.loremIpsumIs, styles.ml5, { marginBottom: 14 }]}>
                                        {note?.My_Notes}
                                      </Text>
                                    </View>
                                  </>
                                )
                              }
                            })}
                          </>}
                        </View>
                      </View>
                    </View>
                  </>
                }
                {activeSubTab == 1 &&
                  <>
                    <View style={[styles.advicecontainer]}>
                      <Text style={[styles.adviceAssignedBy, styles.summaryTypo]}>
                        Coach Notes
                      </Text>
                      <View
                        style={[styles.advice2, styles.advice2Layout, styles.adviceBg]}
                      >
                        <View style={[styles.advice1Parent, styles.mt10]}>
                          {coachnotes?.length > 0 && <>
                            {coachnotes?.map((note: any) => {
                              if (note?.Current == "Yes" && note?.Module == "Money on Autodrive") {
                                return (
                                  <>
                                    <View style={styles.advice11}>
                                      <View style={styles.dot1Wrapper}>
                                        <View style={styles.dot1} />
                                      </View>
                                      <Text style={[styles.loremIpsumIs, styles.ml5, { marginBottom: 14 }]}>
                                        {note?.Coaches_Notes}
                                      </Text>
                                    </View>
                                  </>
                                )
                              }
                            })}
                          </>}
                        </View>
                      </View>
                    </View>
                  </>
                }
                {activeSubTab == 2 &&
                  <><Text style={styles.notodos}>No Todo's</Text></>
                }
              </View>
            }
          </ScrollView>
        </View>
        : <View style={styles.moneyOnAutoDrive}>
          <Loader visible={loading} />
        </View>}
    </>
  );
};

const styles = StyleSheet.create({
  subListContainer: {
    display: 'flex'
  },
  subListContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subListName: {
    marginLeft:10,
    marginTop:3,
    marginRight:10
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'row',    
    alignItems: 'center',    
    borderColor: '#ddd',
  },
  listContent: {   
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  listName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  listValue: {
    fontSize: 14,
    marginRight: 10
  },
  editButton: {
    padding: 5
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vuesaxlinearprofileCircle: {
    width: 20,
    height: 20,
    marginRight: 9
  },
  name: {
    marginRight: 10,
    color: '#4B4B4B'
  },
  value: {
    fontWeight: 'bold',
    color: '#000',
  },
  vuesaxlinearedit: {
    width: 20,
    height: 20,
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 5,
  },
  subHeading: {
    color: "#FBB142",
    fontSize: 14,
    fontWeight: "600"
  },
  performance: {
    color: Color.black,
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10
  },
  balanceNextLine: {
    fontSize: 12,
    color: Color.black
  },
  balanceText: {
    fontSize: 26,
    color: Color.black
  },
  balance: {
    backgroundColor: "#FFF9F1",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: Padding.p_md,
    paddingVertical: Padding.p_sm,
    borderRadius: 8,
    marginLeft: 30,
    marginRight: 30,
    alignItems: "center",
  },
  adviceShadowBox: {
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(32, 34, 36, 0.5)",
    borderRadius: 16,
    alignItems: "center",
    paddingHorizontal: Padding.p_sm,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
    marginTop: 20
  },
  advice: {
    borderWidth: 0,
    borderColor: "#eaeaea",
    paddingTop: 28,
    paddingBottom: Padding.p_lg,
    alignItems: "center",
  },
  mt26: {
    marginTop: 26,
  },
  mTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "500",
    color: '#FBB142',
  },
  danFleurClr: {
    color: Color.black,
    textAlign: "left",
  },
  dr: {
    fontSize: FontSize.size_sm,
    color: Color.white1,
    textAlign: "center",
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "600",
    lineHeight: 22,
  },
  danFleur: {
    fontSize: 18,
    fontFamily: FontFamily.sourceSerifPro
  },
  drWrapper: {
    backgroundColor: '#EF9F27',
  },
  frWrapper: {
    backgroundColor: "#9755b6",
  },
  loginuser: {
    flexDirection: "row",
  },
  users: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  notodos: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  frameChild: {
    right: 0,
    height: 20,
    width: 20,
  },
  myExercisesTypo: {
    // fontSize: FontSize.size_sm
  },
  loremIpsumIs: {
    lineHeight: 22,
    fontWeight: "300",
    fontFamily: FontFamily.openSansRegular,
    fontSize: 12,
    color: '#4B4B4B'
  },
  summary1: {
    borderTopWidth: 1,
    borderColor: "#dedede",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.white1,
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    justifyContent: "space-between"
  },

  goaltitle: {
    padding: 30,
    paddingBottom: 10,
    paddingTop: 20,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.outfitMedium,
    color: Color.black
  },
  goaltext: {
    padding: 30,
    paddingTop: 0,
    fontSize: 14,
    fontFamily: FontFamily.outfitRegular,
    color: Color.grey_text
  },
  ml5: {
    marginLeft: 5,
  },
  mt14: {
    marginTop: Margin.m_sm,
  },
  dot1: {
    borderRadius: Border.br_md,
    height: 8,
    width: 8,
    justifyContent: "space-between",
    backgroundColor: Color.goldenrod,
    overflow: "hidden",
    marginTop: 6
  },
  dot1Wrapper: {
    paddingHorizontal: 0,
    paddingVertical: 1,
    flexDirection: "row",
  },
  mt10: {
    marginTop: 10,
  },
  summaryTypo: {
    color: Color.black,
    textAlign: "left",
    fontFamily: FontFamily.openSansRegular,
    marginLeft: 24
  },
  adviceAssignedBy: {
    fontSize: FontSize.textMediumBoldText1_size,
    textAlign: "left",
  },
  adviceBg: {
    backgroundColor: Color.white1,
  },
  advice2Layout: {
    borderRadius: Border.br_md,
    alignSelf: "stretch",
  },
  advice11: {
    // width: 324,
    flexDirection: "row",
    marginLeft: 20
  },
  advice1Parent: {
    paddingBottom: Padding.p_2xs,
  },
  advice2: {
    shadowColor: "rgba(32, 34, 36, 0.08)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    paddingLeft: 4,
    paddingTop: 2,
    paddingRight: 4,
    paddingBottom: Padding.p_2xs,
    justifyContent: "center",
    // overflow: "hidden",
  },
  advicecontainer: {
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
  advicetab: {
    alignSelf: "stretch",
  },


  mt_12: {
    marginTop: Margin.m_2xs,
  },
  ml40: {
    marginLeft: Margin.m_sm,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  mt15: {
    marginTop: Margin.m_md,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  moneyOnAutoDriveScrollViewContent: {
    flexDirection: "column",
  },
  bottomFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  wrapperLayout: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_2xs,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 100,
    height: 100
  },
  textClr: {
    color: Color.black,
    fontSize: 14,
    fontWeight: '600'
  },
  text2Typo: {
    fontFamily: FontFamily.openSansRegular,
    fontWeight: "600",
  },
  mainvector1Icon: {
    width: 164,
    height: 63,
    overflow: "hidden",
  },
  header: {
    backgroundColor: "transparent",
    alignSelf: "stretch",
  },

  polygonWrapper: {
    borderRadius: 12,
    backgroundColor: Color.gray_200,
    padding: Padding.p_2xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  videoSectionInner: {
    height: 200,
    padding: Padding.p_lg,
    flexDirection: "row",
    borderRadius: 12,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  videoSection: {
    paddingTop: Padding.p_lg,
    paddingBottom: Padding.p_2xs,
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
    justifyContent: 'center',
    borderRadius: 16,
    overflow: 'hidden'
  },
  summary: {
    display: "none",
  },
  startedTab: {
    paddingHorizontal: Padding.p_md,
    paddingTop: Padding.p_md,
    flexDirection: "row",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  text1: {
    fontWeight: "500",
    fontSize: 14,
    fontFamily: FontFamily.textMediumBoldText1,
  },
  text: {
    textAlign: "center",
  },
  wrapper: {
    backgroundColor: '#FFF9F1',
    borderColor: "#ffeccf",
  },
  earlyHappyMemory: {
    lineHeight: 24,
    textAlign: "left",
  },
  frameParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    height: 10,
    width: 15,
  },
  vectorWrapper: {
    width: 26,
    height: 26,
    padding: Padding.p_2xs,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
  excercise1: {
    shadowColor: "rgba(32, 34, 36, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 12,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
    height: 60
  },

  groupIcon: {
    height: 16,
    width: 15,
  },
  wrapper2: {
    borderColor: "#fff",
    backgroundColor: Color.white1,
  },
  vuesaxboldlockIcon: {
    height: 14,
    width: 14,
  },
  excercise5: {
    backgroundColor: Color.whitesmoke,
    borderColor: "#f0f0f0",
    borderWidth: 1,
    borderStyle: "solid",
    justifyContent: "space-between",
    padding: Padding.p_2xs,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 12,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  excercises: {
    paddingVertical: Padding.p_sm,
    width: 390,
    paddingHorizontal: Padding.p_lg,
  },
  bottom: {
    paddingHorizontal: Padding.p_2xs,
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_2xs,
    width: 180,
    borderRadius: 60,
    backgroundColor: "transparent",
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20
  },
  excercisesParent: {
    alignSelf: "stretch",
  },
  videoSectionParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  moneyOnAutoDrive: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
  dataNotAvailable: {
    alignItems: "center",
    textAlign: "center",
    color: Color.warning_red,
    marginTop: 50,
    fontSize: 20,
  }
});

export default MoneyAutoDrive;
