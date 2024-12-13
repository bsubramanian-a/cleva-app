import * as React from "react";
import { ScrollView, Image, StyleSheet, View, Text, StatusBar, Pressable, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ProfileHeader from "../components/ProfileHeader";
import {
  Margin,
  Padding,
  Border,
  Color,
  FontFamily,
  FontSize,
} from "../GlobalStyles";
import CustomHeader from "../components/CustomHeader";
import actions from "../../actions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import AccordionContainer from "../components/AccordionContainer";
import { wrapTitle } from "../utils/wrapTitle";

const screenWidth = Dimensions.get('window').width;

const Profile = () => {
  const [accordion, setAccordion] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const profile = useSelector((state: any) => state.data.profile);
  const assets = useSelector((state: any) => state.data.assets);
  const liabilities = useSelector((state: any) => state.data.liabilities);
  const [totalNetWorth, setTotalNetWorth] = useState<number>(0);

  console.log("profile", profile);
  console.log("profile[0]?.expenses", profile[0]?.expenses);

  const getProfile = async () => {
    setLoading(true);
    await actions.getProfile();
    setLoading(false);
  }

  useEffect(() => {
    setAccordions();
  }, [profile])

  const formatMobileNumber = (mobileNumber: any) => {
    if (mobileNumber) {
      // Remove all non-digit characters from the mobile number except for the plus sign
      const digitsOnly = mobileNumber.replace(/[^+\d]/g, '');

      // Check if the mobile number has a valid length
      if (digitsOnly.length > 3) {
        // Format the mobile number in the Australian format
        let formattedNumber = digitsOnly.replace(/^(\+\d{1,2})/, '$1 ');
        formattedNumber = formattedNumber.replace(/(\d{3})(?!$)/g, '$1 ');
        formattedNumber = formattedNumber.trim();
        formattedNumber = formattedNumber.replace(/ /g, '-');
        return formattedNumber;
      }
    }

    // Return the original mobile number if it doesn't match the expected format
    return mobileNumber;
  };

  const EmployChoiceComponent = ({ age, price, firstname }: { age: any, price: any, firstname: string }) => {
    let hasData: any = age != null && price != null && firstname != null && price != undefined && price != "undefined" && price != "" && firstname != "";

    const completeString = hasData ? (
      <>
        {firstname}, you'd like to retire or have the choice of whether you work by
        <Text style={styles.boldText}>{age}</Text> (approx.).
        You'd like to have approx.
        <Text style={styles.boldText}>${price?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Text>
        (in today's dollars).
      </>
    ) : (
      "No Data Available"
    );

    //const wrappedString = hasData ? wrapTitle(completeString.toString(), 50) : completeString;

    return (
      <View>
        <Text style={styles.textEmployChoiceComponent} ellipsizeMode="tail">
          {completeString}
        </Text>
      </View>
    );
  };

  const setAccordions = () => {
    setAccordion([
      {
        title: 'About You',
        icon: require("../assets/vuesaxlinearprofilecircle.png"),
        link: 'EditProfile',
        items: [
          !profile[0] && {
            enableEdit: false,
            enableSubHeading: false,
            item: [
              { icon: "", name: 'No About You Details', value: '' },
            ]
          },
          profile[0] && {
            subHeading: profile[0]?.Preferred_1st_Name,
            enableSubHeading: true,
            enableEdit: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/profile.png")}
                />,
                name: 'First Name',
                value: profile[0]?.First_Name
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/profile.png")}
                />, name: 'Last Name', value: profile[0]?.Last_Name
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/profile.png")}
                />, name: 'Preferred Name', value: profile[0]?.Preferred_1st_Name
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/sex.png")}
                />, name: 'Sex', value: profile[0]?.Sex_Description
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dob.png")}
                />, name: 'Date of Birth', value: profile[0]?.Date_of_Birth ? formatDate(profile[0]?.Date_of_Birth) : null
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/mstatus.png")}
                />, name: 'Marital Status', value: profile[0]?.Marital_Status
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/contact.png")}
                />, name: 'Mobile Phone', value: profile[0]?.Mobile ? formatMobileNumber(profile[0]?.Mobile) : null
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/vuesaxlinearsms.png")}
                />, name: 'Email', value: profile[0]?.Email
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/shealth.png")}
                />, name: 'Status of Health', value: ''
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/smoker.png")}
                />, name: 'Smoker', value: ''
              },
            ]
          },
          profile[0]?.accounts?.length > 0 && profile[0]?.accounts[0]?.Email && {
            subHeading: profile[0]?.accounts[0]?.Preferred_1st_Name,
            enableSubHeading: true,
            enableEdit: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/profile.png")}
                />, name: 'First Name', value: profile[0]?.accounts[0]?.First_Name
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/profile.png")}
                />, name: 'Last Name', value: profile[0]?.accounts[0]?.Last_Name
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/profile.png")}
                />, name: 'Preferred Name', value: profile[0]?.accounts[0]?.Preferred_1st_Name
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/sex.png")}
                />, name: 'Sex', value: profile[0]?.accounts[0]?.Sex_Description
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dob.png")}
                />, name: 'Date of Birth', value: profile[0]?.accounts[0]?.Date_of_Birth ? formatDate(profile[0]?.accounts[0]?.Date_of_Birth) : null
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/mstatus.png")}
                />, name: 'Marital Status', value: profile[0]?.accounts[0]?.Marital_Status
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/contact.png")}
                />, name: 'Mobile Phone', value: profile[0]?.accounts[0]?.Mobile ? formatMobileNumber(profile[0]?.accounts[0]?.Mobile) : null
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/vuesaxlinearsms.png")}
                />, name: 'Email', value: profile[0]?.accounts[0]?.Email
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/shealth.png")}
                />, name: 'Status of Health', value: ''
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/smoker.png")}
                />, name: 'Smoker', value: ''
              },
            ]
          }
        ].filter(obj => obj),
      },
      {
        title: 'Dependants',
        icon: require("../assets/vuesaxlineardata.png"),
        link: 'EditDependants',
        items: [
          !profile[0]?.dependants && {
            enableEdit: false,
            enableSubHeading: false,
            item: [
              { icon: "", name: 'No Dependants Details', value: '' },
            ]
          },
          profile[0]?.dependants && profile[0]?.dependants?.length > 0 && profile[0]?.dependants?.map((dependant: any) => {
            return {
              subHeading: dependant?.Name,
              id: dependant?.id,
              enableSubHeading: true,
              enableEdit: true,
              item: [
                {
                  icon: <Image
                    style={styles.vuesaxlinearprofileCircle}
                    resizeMode="contain"
                    source={require("../assets/profile.png")}
                  />, name: 'First Name', value: dependant?.Name
                },
                {
                  icon: <Image
                    style={styles.vuesaxlinearprofileCircle}
                    resizeMode="contain"
                    source={require("../assets/dob.png")}
                  />, name: 'Age', value: dependant?.Age + " Years"
                },
                {
                  icon: <Image
                    style={styles.vuesaxlinearprofileCircle}
                    resizeMode="contain"
                    source={require("../assets/hierarchy.png")}
                  />, name: 'Dependant Until', value: dependant?.Dependant_Until2 + " Years old"
                },
                {
                  icon: <Image
                    style={styles.vuesaxlinearprofileCircle}
                    resizeMode="contain"
                    source={require("../assets/hierarchy.png")}
                  />, name: 'Dependant Of', value: dependant?.Dependant_of_Person?.name
                },
              ]
            }
          }),
        ].filter((obj: any) => obj)
      },
      {
        title: 'Employment Details',
        icon: require("../assets/tag-user.png"),
        link: 'EditEmployment',
        items: [
          !profile[0]?.employmentDetails && {
            enableEdit: false,
            enableSubHeading: false,
            item: [
              { icon: "", name: 'No Employment Details', value: '' },
            ]
          },
          profile[0]?.employmentDetails?.length >= 1 && {
            subHeading: profile[0]?.employmentDetails[0]?.Client_Name?.name,
            id: profile[0]?.employmentDetails[0]?.id,
            enableEdit: true,
            enableSubHeading: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/briefcase.png")}
                />, name: 'Occupation', value: profile[0]?.employmentDetails[0]?.Occupation
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/personalcard.png")}
                />, name: 'Job Title', value: profile[0]?.employmentDetails[0]?.Job_Title
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/tag-user.png")}
                />, name: 'Employer', value: profile[0]?.employmentDetails[0]?.Name
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/cd.png")}
                />, name: 'Status', value: profile[0]?.employmentDetails[0]?.Status
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/wallet.png")}
                />, name: 'Salary', value: "$" + profile[0]?.employmentDetails[0]?.Salary_ex_Super?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/discount-circle.png")}
                />, name: 'Super', value: (profile[0]?.employmentDetails[0]?.Super || 0) + "%"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/calendar.png")}
                />, name: 'Employment Start Date', value: profile[0]?.employmentDetails[0]?.Employment_Start_Date ? formatDate(profile[0]?.employmentDetails[0]?.Employment_Start_Date) : null
              },
              { name: 'Leave Entitlements', value: "" },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/calendar.png")}
                />, name: 'Annual Leave', value: (profile[0]?.employmentDetails[0]?.Annual) + " Days"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/sick.png")}
                />, name: 'Sick Leave', value: (profile[0]?.employmentDetails[0]?.Sick) + " Days"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/calendar.png")}
                />, name: 'Long Service Leave', value: (profile[0]?.employmentDetails[0]?.Long_Service) + " Days"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/document-text.png")}
                />, name: 'Is there likely any changes in the next 6-12 months?', value: (profile[0]?.employmentDetails[0]?.Any_changes_planned_next_6_12mths ? "Yes" : "No") + ", " + profile[0]?.employmentDetails[0]?.Multi_Line_1
              },
            ]
          },
          profile[0]?.employmentDetails?.length >= 2 && {
            subHeading: profile[0]?.employmentDetails[1]?.Client_Name?.name,
            id: profile[0]?.employmentDetails[1]?.id,
            enableSubHeading: true,
            enableEdit: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/briefcase.png")}
                />, name: 'Occupation', value: profile[0]?.employmentDetails[1]?.Occupation
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/personalcard.png")}
                />, name: 'Job Title', value: profile[0]?.employmentDetails[1]?.Job_Title
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/tag-user.png")}
                />, name: 'Employer', value: profile[0]?.employmentDetails[1]?.Name
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/cd.png")}
                />, name: 'Status', value: profile[0]?.employmentDetails[1]?.Status
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/wallet.png")}
                />, name: 'Salary', value: "$" + profile[0]?.employmentDetails[1]?.Salary_ex_Super?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/discount-circle.png")}
                />, name: 'Super', value: (profile[0]?.employmentDetails[1]?.Super || 0) + "%"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/calendar.png")}
                />, name: 'Employment Start Date', value: profile[0]?.employmentDetails[1]?.Employment_Start_Date ? formatDate(profile[0]?.employmentDetails[1]?.Employment_Start_Date) : null
              },
              { name: 'Leave Entitlements', value: "" },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/calendar.png")}
                />, name: 'Annual Leave', value: (profile[0]?.employmentDetails[1]?.Annual) + " Days"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/sick.png")}
                />, name: 'Sick Leave', value: (profile[0]?.employmentDetails[1]?.Sick) + " Days"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/calendar.png")}
                />, name: 'Long Service Leave', value: (profile[0]?.employmentDetails[1]?.Long_Service) + " Days"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/document-text.png")}
                />, name: 'Is there likely any changes in the next 6-12 months?', value: profile[0]?.employmentDetails[1]?.Multi_Line_1
              },
            ]
          }
        ].filter(obj => obj)
      },
      {
        title: 'Income',
        icon: require("../assets/money-recieve.png"),
        link: 'EditIncome',
        items: [
          !profile[0]?.income && {
            enableEdit: false,
            enableSubHeading: false,
            item: [
              { icon: "", name: 'No Income Details', value: '' },
            ]
          },
          profile[0]?.income?.length >= 1 && {
            subHeading: profile[0]?.income[0]?.Person_Account?.name,
            id: profile[0]?.income[0]?.id,
            enableSubHeading: true,
            enableEdit: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Centrelink/DVA', value: "$" + `${profile[0]?.income[0]?.Centrelink_DVA_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Interest Income', value: "$" + `${profile[0]?.income[0]?.Interest_Income_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Rental Income', value: "$" + `${profile[0]?.income[0]?.Rental_Income_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Dividends', value: "$" + `${profile[0]?.income[0]?.Dividends_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Pension/Annuity', value: "$" + `${profile[0]?.income[0]?.Pension_Annuity_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Other Income', value: "$" + `${profile[0]?.income[0]?.Other_Income_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || 0}${profile[0]?.income[0]?.Details_Other_Income ? '\n' + profile[0]?.income[0]?.Details_Other_Income : ""}`
              }
            ]
          },
          profile[0]?.income?.length >= 2 && {
            subHeading: profile[0]?.income[1]?.Person_Account?.name,
            id: profile[0]?.income[1]?.id,
            enableSubHeading: true,
            enableEdit: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Centrelink/DVA', value: "$" + `${profile[0]?.income[1]?.Centrelink_DVA_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Interest Income', value: "$" + `${profile[0]?.income[1]?.Interest_Income_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Rental Income', value: "$" + `${profile[0]?.income[1]?.Rental_Income_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Dividends', value: "$" + `${profile[0]?.income[1]?.Dividends_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Pension/Annuity', value: "$" + `${profile[0]?.income[1]?.Pension_Annuity_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Other Income', value: "$" + `${profile[0]?.income[1]?.Other_Income_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || 0}${profile[0]?.income[1]?.Details_Other_Income ? '\n' + profile[0]?.income[1]?.Details_Other_Income : ""}`
              }
            ]
          },
        ].filter(obj => obj)
      },
      {
        title: 'Expenses',
        icon: require("../assets/receipt-item.png"),
        link: 'EditExpenses',
        items: [
          !profile[0]?.expenses && {
            enableEdit: false,
            enableSubHeading: false,
            item: [
              { icon: "", name: 'No Expense Details', value: '' },
            ]
          },
          profile[0]?.expenses?.length > 0 && {
            subHeading: profile[0]?.expenses[0]?.Household?.name,
            id: profile[0]?.expenses[0]?.id,
            enableSubHeading: true,
            enableEdit: true,
            isExpense: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                name: 'Gas', 
                type: 'gas',
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                name: 'Electricity', 
                type: 'electricity',
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                name: 'Water', 
                type: 'water',
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                type: 'insurance',
                name: 'Home/Contents Insurance', 
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                type: 'car',
                name: 'Car Insurance', 
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                type: 'health',
                name: 'Private Health Insurance', 
                value: profile[0]?.expenses[0]
              },
            ]
          },
          profile[0]?.expenses?.length > 0 && {
            subHeading: "Loan Repayments",
            id: profile[0]?.expenses?.length > 0 && profile[0]?.expenses[0]?.id,
            isLink: false,
            enableSubHeading: true,
            enableEdit: true,
            isExpense: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                name: 'Home', 
                type: 'home',
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                name: 'Investment Property', 
                type: 'investment',
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                name: 'Other Investment', 
                type: 'otherinvestment',
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                name: 'Personal', 
                type: 'personal',
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                name: 'Credit Cards', 
                type: 'credit',
                value: profile[0]?.expenses[0]
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/money-recieve.png")}
                />, 
                name: 'Other Expenses', 
                type: 'other',
                value: profile[0]?.expenses[0]
              },
            ]
          }
        ].filter(obj => obj)
      },
      {
        title: 'Employment Choice/Retirement',
        icon: require("../assets/people.png"),
        link: 'EditRetirement',
        items: [
          {
            subHeading: profile[0]?.Preferred_1st_Name,
            id: profile[0]?.id,
            enableSubHeading: true,
            enableEdit: false,
            isRetirement: true,
            item: [
              { icon: "", name: '', value: <EmployChoiceComponent firstname={profile[0]?.First_Name} age={profile[0]?.Choice_Retirement_Target_Age} price={profile[0]?.Choice_Retirement_Target_Income_p_a} /> },
            ]
          },
          profile[0]?.accounts?.length > 0 && profile[0]?.accounts[0]?.Email && {
            subHeading: profile[0]?.accounts[0]?.Preferred_1st_Name,
            id: profile[0]?.accounts[0]?.id,
            enableSubHeading: true,
            enableEdit: false,
            isRetirement: true,
            item: [
              { icon: "", name: '', value: <EmployChoiceComponent firstname={profile[0]?.accounts[0]?.First_Name} age={profile[0]?.accounts[0]?.Choice_Retirement_Target_Age} price={profile[0]?.accounts[0]?.Choice_Retirement_Target_Income_p_a} /> },
            ]
          }
        ].filter(obj => obj)
      },
      {
        title: 'Estate Plan',
        icon: require("../assets/task.png"),
        link: 'EditPlanBEstatePlanWill',
        element: profile[0],
        items: [
          !profile[0] && {
            enableEdit: false,
            enableSubHeading: false,
            item: [
              { icon: "", name: 'No Estate Plan Details', value: '' },
            ]
          },
          profile?.length > 0 && {
            subHeading: profile[0]?.Preferred_1st_Name,
            id: profile[0]?.id,
            enableSubHeading: true,
            enableEdit: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Do you have a beneficiary for your super fund?', value: profile[0]?.Super_Fund_Beneficiary?.includes('Yes') ? "Yes, " + profile[0]?.If_Yes_Beneficiary_Name_s : "No"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/document-text.png")}
                />, name: 'Do you have a Will?\nIs it current?', value: `${profile[0]?.Do_you_have_a_Will}\n${profile[0]?.Is_it_up_to_date}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/vuesaxlinearlocation.png")}
                />, name: 'Location of Will', value: profile[0]?.Location_of_Will
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/profile.png")}
                />, name: 'Executor of Will', value: profile[0]?.Executor_of_the_Will
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/document-text.png")}
                />, name: 'Do you have a POA?', value: profile[0]?.Do_you_have_a_POA[0]
              },
            ]
          },
          profile?.length > 0 && profile[0]?.accounts?.length > 0 && profile[0]?.accounts[0]?.Email && {
            subHeading: profile[0]?.accounts[0]?.Preferred_1st_Name,
            id: profile[0]?.accounts[1]?.id,
            enableSubHeading: true,
            enableEdit: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/profile.png")}
                />, name: 'Do you have a beneficiary for your super fund?', value: profile[0]?.accounts[0]?.Super_Fund_Beneficiary?.includes('Yes') ? "Yes, " + profile[0]?.accounts[0]?.If_Yes_Beneficiary_Name_s : "No"
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/document-text.png")}
                />, name: 'Do you have a Will?\nIs it current?', value: `${profile[0]?.Do_you_have_a_Will}\n${profile[0]?.accounts[0]?.Is_it_up_to_date}`
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/vuesaxlinearlocation.png")}
                />, name: 'Location of Will', value: profile[0]?.accounts[0]?.Location_of_Will
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/profile.png")}
                />, name: 'Executor of Will', value: profile[0]?.accounts[0]?.Executor_of_the_Will
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/document-text.png")}
                />, name: 'Do you have a POA?', value: profile[0]?.accounts[0]?.Do_you_have_a_POA[0]
              },
            ]
          }
        ].filter(obj => obj)
      },
      {
        title: 'Insurance Needs Analysis',
        icon: require("../assets/shield-tick.png"),
        link: 'EditInsurance',
        items: [
          !profile[0].insurance && {
            enableEdit: false,
            enableSubHeading: false,
            item: [
              { icon: "", name: 'Insurance Needs Analysis', value: '' },
            ]
          },
          profile[0]?.insurance?.length >= 1 && {
            subHeading: profile[0]?.insurance[0]?.Client_Name?.name,
            id: profile[0]?.insurance[0]?.Client_Name?.id,
            enableSubHeading: true,
            enableEdit: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Total Liabilities', value: "$" + profile[0]?.insurance[0]?.Total_Liabilities?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for Children/Education', value: "$" + profile[0]?.insurance[0]?.Child_Edu_Allowance?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Replace Income p.a.', value: "$" + profile[0]?.insurance[0]?.Replace_Income_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Number of years', value: profile[0]?.insurance[0]?.Number_of_Income_Yrs?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for Medical', value: "$" + profile[0]?.insurance[0]?.Allowance_Medical?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for funeral', value: "$" + profile[0]?.insurance[0]?.Allowance_Funeral?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for Emergency', value: "$" + profile[0]?.insurance[0]?.Allowance_Emergency?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for House Modifications', value: "$" + profile[0]?.insurance[0]?.Allowance_Home_Mods?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Other Income', value: "$" + `${profile[0]?.insurance[0]?.Other_Allowances_Consideration?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') || 0}\n${profile[0]?.insurance[0]?.Multi_Line_1}`
              }
            ]
          },
          profile[0]?.insurance?.length >= 2 && {
            subHeading: profile[0]?.insurance[1]?.Client_Name?.name,
            id: profile[0]?.insurance[1]?.Client_Name?.id,
            enableSubHeading: true,
            enableEdit: true,
            item: [
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Total Liabilities', value: "$" + profile[0]?.insurance[1]?.Total_Liabilities?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for Children/Education', value: "$" + profile[0]?.insurance[1]?.Child_Edu_Allowance?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Replace Income p.a.', value: "$" + profile[0]?.insurance[1]?.Replace_Income_p_a?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Number of years', value: profile[0]?.insurance[1]?.Number_of_Income_Yrs?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for Medical', value: "$" + profile[0]?.insurance[1]?.Allowance_Medical?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for funeral', value: "$" + profile[0]?.insurance[1]?.Allowance_Funeral?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for Emergency', value: "$" + profile[0]?.insurance[1]?.Allowance_Emergency?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Allowance for House Modifications', value: "$" + profile[0]?.insurance[1]?.Allowance_Home_Mods?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              },
              {
                icon: <Image
                  style={styles.vuesaxlinearprofileCircle}
                  resizeMode="contain"
                  source={require("../assets/dollar-square.png")}
                />, name: 'Other Income', value: `$${profile[0]?.insurance[1]?.Other_Allowances_Consideration?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}\n${profile[0]?.insurance[1]?.Multi_Line_1}`
              }
            ]
          }
        ].filter(obj => obj)
      },
    ])
  }

  const ageInYears = (date: string) => {
    if (date) {
      const birthdate: any = new Date(date);
      const currentDate: any = new Date();

      const ageInMilliseconds = currentDate - birthdate;
      const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));

      return ageInYears + ' Years';
    }

    return null;
  }

  useEffect(() => {
    getProfile();
  }, [])

  useEffect(() => {
    let totalAssets = 0;
    let totalLiabilities = 0;

    if (assets?.length > 0) {
      totalAssets = parseFloat(assets.reduce((sum: number, item: any) => sum + item.Current_Value, 0)?.toFixed(2));
    }

    if (liabilities?.length > 0) {
      totalLiabilities = parseFloat(liabilities.reduce((sum: number, item: any) => sum + item.Current_Value, 0)?.toFixed(2));
    }

    setTotalNetWorth(parseFloat((totalAssets - totalLiabilities)?.toFixed(1)));
  }, [assets, liabilities])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const formattedDate = `${date.getDate()}/${month}/${date.getFullYear()}`;
    return formattedDate;
  }

  return (
    <View
      style={styles.profile}
    >
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="dark-content" />
      <CustomHeader name="Profile" type={3} />
      <Loader visible={loading} />
      <ScrollView
        style={styles.userdetailsParent}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        {/* <Pressable onPress={getProfile}><Text>get profile</Text></Pressable> */}
        <View style={[styles.userdetails, styles.optionsSpaceBlock]}>
          <View style={[styles.advice, styles.adviceShadowBox]}>
            <View style={styles.users}>
              <View style={styles.loginuser}>
                <View
                  style={[styles.frWrapper, styles.wrapperLayout, profile[0]?.accounts?.length > 0 && { marginRight: -5 }]}
                >
                  <Text style={styles.dr}>
                    {profile?.length > 0 && (
                      (profile[0]?.First_Name && profile[0]?.Last_Name)
                        ? (profile[0]?.First_Name.charAt(0) + profile[0]?.Last_Name.charAt(0))
                        : ((profile[0]?.First_Name || profile[0]?.Last_Name) || '').slice(0, 2)
                    )}
                  </Text>
                </View>
                {
                  profile[0]?.accounts?.length > 0 &&
                  <View style={[styles.drWrapper, styles.wrapperLayout, profile[0]?.accounts?.length > 0 && { marginLeft: -5 }]}>
                    <Text style={styles.dr}>
                      {profile[0]?.accounts?.length > 0 && (
                        (profile[0]?.accounts[0]?.First_Name && profile[0]?.accounts[0]?.Last_Name)
                          ? (profile[0]?.accounts[0]?.First_Name.charAt(0) + profile[0]?.accounts[0]?.Last_Name.charAt(0))
                          : ((profile[0]?.accounts[0]?.First_Name || profile[0]?.accounts[0]?.Last_Name) || '').slice(0, 2)
                      )}
                    </Text>
                  </View>
                }
              </View>
              <Text
                style={[
                  styles.danFleur,
                  styles.mt26,
                  styles.mTypo,
                  styles.danFleurClr,
                ]}
              >{profile[0]?.Account_Name?.name}</Text>
            </View>
            <View style={[styles.assetsview, styles.mt25]}>
              <View style={[styles.assetsviewChild, styles.childBorder]} />
              <View
                style={[
                  styles.frameParent,
                  styles.mt15,
                  styles.frameParentFlexBox,
                ]}
              >
                <View style={styles.vuesaxlinearsmsParent}>
                  <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearsms.png")}
                  />
                  <Text style={[styles.email, styles.ml6]}>Email</Text>
                </View>
                <Text style={[styles.stKildaRdTypo, { width: '80%' }]}>{profile?.length > 0 && profile[0]?.Email}</Text>
              </View>
              <View
                style={[
                  styles.assetsviewChild,
                  styles.mt15,
                  styles.childBorder,
                ]}
              />
              <View
                style={[
                  styles.frameParent,
                  styles.mt15,
                  styles.frameParentFlexBox,
                ]}
              >
                <View style={styles.vuesaxlinearsmsParent}>
                  <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearcall.png")}
                  />
                  <Text style={[styles.email, styles.ml6]}>Phone</Text>
                </View>
                <Text style={styles.stKildaRdTypo}>
                  {profile?.length > 0 && profile[0]?.Phone ? profile[0]?.Phone : "No Phone Number"}
                </Text>
              </View>
              <View
                style={[
                  styles.assetsviewChild,
                  styles.mt15,
                  styles.childBorder,
                ]}
              />
              <View
                style={[
                  styles.frameParent,
                  styles.mt15,
                  styles.frameParentFlexBox,
                ]}
              >
                <View style={styles.vuesaxlinearsmsParent}>
                  <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearprofile.png")}
                  />
                  <Text style={[styles.email, styles.ml6]}>Member Since</Text>
                </View>

                <Text style={styles.stKildaRdTypo}>
                  {profile?.length > 0 && formatDate(profile[0]?.Created_Time)}
                </Text>
              </View>
              <View
                style={[
                  styles.assetsviewChild,
                  styles.mt15,
                  styles.childBorder,
                ]}
              />
              <View
                style={[
                  styles.frameParent,
                  styles.mt15,
                  styles.frameParentFlexBox,
                ]}
              >
                <View style={styles.vuesaxlinearsmsParent}>
                  <Image
                    style={styles.vuesaxlinearsmsIcon}
                    resizeMode="cover"
                    source={require("../assets/vuesaxlinearlocation.png")}
                  />
                  <Text style={[styles.email, styles.ml6]}>Address</Text>
                </View>
                <Text style={[styles.stKildaRd, styles.stKildaRdTypo]}>
                  {profile?.length > 0 && (
                    <>
                      {profile[0]?.Mailing_Street ||
                        profile[0]?.Mailing_City ||
                        profile[0]?.Mailing_State ||
                        profile[0]?.Mailing_Zip ||
                        profile[0]?.Mailing_Country
                        ? (
                          <>
                            {profile[0]?.Mailing_Street && <>{profile[0]?.Mailing_Street}</>}
                            {profile[0]?.Mailing_City && <>{profile[0]?.Mailing_City}{profile[0]?.Mailing_State ? ", " : ""}</>}
                            {profile[0]?.Mailing_State && <>{profile[0]?.Mailing_State}{profile[0]?.Mailing_Zip ? ", " : ""}</>}
                            {profile[0]?.Mailing_Zip && <>{profile[0]?.Mailing_Zip}{profile[0]?.Mailing_Country ? ", " : ""}</>}
                            {profile[0]?.Mailing_Country && <>{profile[0]?.Mailing_Country}</>}
                          </>
                        ) : (
                          "No Address Specified"
                        )
                      }
                    </>
                  )}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.advice1, styles.mt15, styles.adviceShadowBox]}>
            <View style={[styles.frameParent1, styles.frameParentFlexBox]}>
              <View style={styles.mParent}>
                <Text style={[styles.m, styles.mTypo]}>
                  {totalNetWorth ? "$" + totalNetWorth?.toFixed(0)?.replace(/\B(?=(\d{3})+(?!\d))/g, ',',) : "N/A"}
                </Text>
                <Text style={[styles.email, styles.mt5]}>
                  Current Net Wealth
                </Text>
              </View>
              <View style={[styles.frameChild, styles.childBorder]} />
              <View style={styles.mParent}>
                <Text style={[styles.m, styles.mTypo]}>22%</Text>
                <Text style={[styles.email, styles.mt5]}>Profile Complete</Text>
              </View>
            </View>
          </View>
        </View>
        <AccordionContainer accordions={accordion} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textEmployChoiceComponent: {
    flexWrap: 'wrap',
    color: '#4B4B4B',
    lineHeight: 22,
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: 'red',
    width: 300
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000'
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
    alignItems: "center",
    paddingHorizontal: 10,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  mt_12: {
    marginTop: 12,
  },
  mt26: {
    marginTop: 26,
  },
  ml6: {
    marginLeft: 6,
  },
  mt15: {
    marginTop: 15,
  },
  mt25: {
    marginTop: 25,
  },
  mt5: {
    marginTop: 5,
  },
  ml10: {
    marginLeft: Margin.m_2xs,
  },
  frameScrollViewContent: {
    flexDirection: "column",
  },
  profileScrollViewContent: {
    flexDirection: "column",
  },
  optionsSpaceBlock: {
    paddingHorizontal: Padding.p_lg,
    alignSelf: "stretch",
    marginBottom: 20
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
  wrapperLayout: {
    justifyContent: "center",
    height: 104,
    width: 104,
    borderRadius: 52,
    padding: 5,
    alignItems: "center",
    overflow: "hidden",
  },
  mTypo: {
    textAlign: "left",
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "700",
    color: '#FBB142',
  },
  danFleurClr: {
    color: Color.black,
    textAlign: "left",
    fontSize: 18,
    fontWeight: '700'
  },
  childBorder: {
    borderColor: "#f3f1ee",
    borderStyle: "solid",
    paddingHorizontal: 8,
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: '100%'
  },
  stKildaRdTypo: {
    textAlign: "right",
    fontFamily: FontFamily.outfitMedium,
    fontWeight: "700",
    fontSize: 12,
    color: Color.black,
    lineHeight: 22,
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
  dr: {
    fontSize: FontSize.size_6xl,
    color: Color.white1,
    textAlign: "center",
    fontFamily: FontFamily.sourceSerifPro,
    fontWeight: "600",
    lineHeight: 22,
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
  danFleur: {
    fontSize: 18,
    fontFamily: FontFamily.sourceSerifPro
  },
  users: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  assetsviewChild: {
    borderTopWidth: 1,
    width: "100%",
    height: 1,
  },
  vuesaxlinearsmsIcon: {
    width: 18,
    height: 18,
  },
  email: {
    fontWeight: "300",
    fontFamily: FontFamily.outfitLight,
    color: '#4b4b4b',
    fontSize: 14,
    textAlign: "left",
    lineHeight: 22,
  },
  vuesaxlinearsmsParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
    alignItems: 'flex-start'
  },
  stKildaRd: {
    width: 170,
  },
  assetsview: {
    alignSelf: "stretch",
  },
  advice: {
    borderWidth: 1,
    borderColor: "#eaeaea",
    paddingTop: 28,
    paddingBottom: Padding.p_lg,
    alignItems: "center",
  },
  m: {
    color: Color.goldenrod_100,
    fontSize: 20
  },
  mParent: {
    alignItems: "center",
    width: "46%"
  },
  frameChild: {
    borderRightWidth: 1,
    width: 1,
    height: 51,
  },
  frameParent1: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  advice1: {
    borderWidth: 1,
    borderColor: "#eaeaea",
    paddingVertical: Padding.p_2xs,
    alignItems: "center",
  },
  userdetails: {
    paddingVertical: 0,
  },
  vuesaxlinearprofileCircleIcon: {
    width: 20,
    height: 20,
  },
  vuesaxlinearprofileCircleWrapper: {
    borderRadius: 10,
    backgroundColor: Color.floralwhite,
    borderColor: "#ffeccf",
    borderWidth: 1,
    width: 40,
    height: 40,
    paddingHorizontal: Padding.p_4xs,
    paddingVertical: Padding.p_5xs,
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  aboutYou: {
    marginLeft: 10,
    fontSize: 15,
    lineHeight: 24,
    width: "75%",
    flexWrap: "wrap",
  },
  excercise1: {
    borderWidth: 1,
    borderColor: "#eaeaea",
    padding: Padding.p_5xs,
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
    borderRadius: Border.br_sm,
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white1,
  },
  options: {
    paddingBottom: 20,
  },
  userdetailsParent: {
    alignSelf: "stretch",
    flex: 1,
    marginBottom: 20
  },
  profile: {
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white1,
  },
  vuesaxlinearprofileCircle: {
    width: 20,
    height: 20,
    marginRight: 9
  },
});

export default Profile;
