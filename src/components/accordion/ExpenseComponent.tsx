import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import convertToFormattedAmount from '../../utils/convert-to-formatted-amount';
import calculatePaymentAmount from '../../utils/calculate-payment-amount';

const ExpenseComponent = ({ icon, wrappedName, wrappedValue, type }: { icon: React.ReactNode, wrappedName: string, wrappedValue: any, type: string }) => {

    const completeString = (
        <>
            <View style={styles.itemContainer}>
                <View style={styles.itemContent}>
                    {icon}
                    <Text style={styles.name}>{wrappedName}</Text>
                </View>
                <Text style={styles.value}>
                    {type == 'gas' && convertToFormattedAmount(wrappedValue?.Gas_p_a)}
                    {type == 'electricity' && convertToFormattedAmount(wrappedValue?.Electricity_p_a)}
                    {type == 'water' && convertToFormattedAmount(wrappedValue?.Water_p_a)}
                    {type == 'insurance' && convertToFormattedAmount(wrappedValue?.Home_Contents_Insurance_p_a)}
                    {type == 'car' && convertToFormattedAmount(wrappedValue?.Car_Insurance_p_a)}
                    {type == 'health' && convertToFormattedAmount(wrappedValue?.Private_Health_Insurance_p_a)}
                    {type == 'home' && convertToFormattedAmount(wrappedValue?.Home_Loan)}
                    {type == 'investment' && convertToFormattedAmount(wrappedValue?.Investment_Property_Loan_p_a)}
                    {type == 'other' && convertToFormattedAmount(wrappedValue?.Other_Expenses_p_a)}
                    {type == 'personal' && convertToFormattedAmount(wrappedValue?.Personal_Loan_p_a)}
                    {type == 'credit' && convertToFormattedAmount(wrappedValue?.Credit_Cards_per_month)}
                    {type == 'otherinvestment' && convertToFormattedAmount(wrappedValue?.Other_Investment_Loan_p_a)}
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
                        {type == 'gas' && calculatePaymentAmount(wrappedValue?.Gas_p_a, wrappedValue?.Gas_Pay_Frequency)}
                        {type == 'electricity' && calculatePaymentAmount(wrappedValue?.Electricity_p_a, wrappedValue?.Electricity_Pay_Frequency)}
                        {type == 'water' && calculatePaymentAmount(wrappedValue?.Water_p_a, wrappedValue?.Water_Pay_Frequency)}
                        {type == 'insurance' && calculatePaymentAmount(wrappedValue?.Home_Contents_Insurance_p_a, wrappedValue?.Home_Contents_Pay_Frequency)}
                        {type == 'car' && calculatePaymentAmount(wrappedValue?.Car_Insurance_p_a, wrappedValue?.Car_Insurance_Pay_Frequency)}
                        {type == 'health' && calculatePaymentAmount(wrappedValue?.Private_Health_Insurance_p_a, wrappedValue?.Private_Health_Pay_Frequency)}
                        {type == 'home' && calculatePaymentAmount(wrappedValue?.Home_Loan, wrappedValue?.Home_Loan_Repayment_Frequency)}
                        {type == 'investment' && "$" + calculatePaymentAmount(wrappedValue?.Investment_Property_Loan_p_a, wrappedValue?.Invest_Property_Pay_Frequency)}
                        {type == 'personal' && calculatePaymentAmount(wrappedValue?.Personal_Loan_p_a, wrappedValue?.Personal_Laon_Pay_Freq)}
                        {type == 'credit' && calculatePaymentAmount(wrappedValue?.Credit_Cards_per_month, wrappedValue?.Credit_Cards_per_month)}
                        {type == 'otherinvestment' && calculatePaymentAmount(wrappedValue?.Other_Investment_Loan_p_a, wrappedValue?.Other_Investment_Loan_Pay_Freq)}
                        {type == 'other' && convertToFormattedAmount(wrappedValue?.Other_Expenses_p_a)}
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

export default ExpenseComponent;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },
    innerText: {
        borderWidth: 0,
        borderColor: "red",
        borderStyle: "solid",
        padding: 0,
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
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        marginRight: 10,
        color: '#4B4B4B'
    },
    value: {
        fontWeight: 'bold',
        color: '#000'
    },       
});