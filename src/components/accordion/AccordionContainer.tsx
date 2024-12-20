import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Accordion from './Accordion';

const AccordionContainer = ({ accordions }: any) => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const initialActive = accordions.find((acc: { isActiveTab: any; }) => acc.isActiveTab);
    setActiveAccordion(initialActive?.title || null); // Set initial active based on isActiveTab
  }, [accordions]); // Only run when accordions change

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
  accordionContainer: {
    borderWidth: 0,
    borderRadius: 16,
    borderColor: "#eaeaea",
    marginHorizontal: 30,
    marginTop: 3,
    paddingBottom: 0
  }
});