/**
 * @file AccordionItem.tsx
 * @description Accordion item component that handles expandable/collapsible content sections
 * Provides a reusable component for displaying content in an expandable/collapsible format
 * with support for navigation, custom icons, and animated transitions
 */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { wrapTitle } from '../../utils/wrapTitle';
import InsuranceBox from '../InsuranceBox';
import ExpenseComponent from './ExpenseComponent';

/**
 * Interface for AccordionItem props
 * @interface
 * @property {any} icon - Icon source for the accordion item
 * @property {any} name - Name/label text to display
 * @property {string} [value] - Optional value text to display
 * @property {boolean} [editable] - Whether the item is editable
 * @property {number} [index] - Index position of the item
 * @property {boolean} [finAccount] - Whether this is a financial account
 * @property {any} [element] - Optional additional data element
 * @property {string} [comments] - Optional comments text
 * @property {boolean} [isRetirement] - Whether this is a retirement item
 * @property {boolean} [isExpense] - Whether this is an expense item
 * @property {string} [type] - Optional type identifier
 */
interface AccordionItemProps {
    icon: any;
    name: any;
    value?: string;
    editable?: boolean;
    index?: number;
    finAccount?: boolean;
    element?: any;
    comments?: string;
    isRetirement?: boolean;
    isExpense?: boolean;
    type?: string;
}

/**
 * AccordionItem Component
 * Renders a collapsible section with header and content
 * Features:
 * - Animated expand/collapse
 * - Custom header with icon
 * - Optional navigation capability 
 * - Customizable content rendering
 * - Support for different item types (expenses, retirement, insurance)
 * - Configurable text wrapping
 * - Optional comments display
 * 
 * @component
 * @param {AccordionItemProps} props - Component properties
 * @returns {JSX.Element} Rendered AccordionItem component
 */
const AccordionItem = ({
    icon = null,
    name = "",
    value = "",
    editable = false,
    index = 0,
    finAccount = false,
    element = null,
    comments = "",
    isRetirement = false,
    isExpense = false,
    type = ""
}: AccordionItemProps): JSX.Element => {
    
    // Wrap the title text if it exceeds the specified length
    const wrappedName = name ? wrapTitle(name, 22) : "N/A";

    // Wrap the value text if it exceeds the specified length
    let wrappedValue = "";
    //console.log("value planb1", value);
    if (value != "" && !isRetirement && !isExpense) {
        //console.log("value planb2", value);
        wrappedValue = value ? wrapTitle(value.toString(), 20) : "N/A";
    }
    //console.log("wrappedValue", wrappedValue);

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

export default AccordionItem;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10
    },
    titleRight: {
        alignSelf: "flex-end",
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