import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeroSection from './HeroSection';

const Card = ({ item }:any) => (
    <HeroSection item={item}/>
);

const SwipeCard = () => {
  const renderCard = (card:any) => <Card item={card} key={card.id} />;

  const [cards, setCards] = React.useState([
    {
      Name: "Super Sorted",
      progress: 40,
      id:1,
      Component: "SuperSorted"
    },
    {
      Name: "Plan B: Estate Plan/Will",
      progress: 47,
      id:2,
      Component: "PlanBEstatePlanWill"
    },
    {
      Name: "Money on Autodrive",
      progress: 47,
      id:3,
      Component: "MoneyAutoDrive"
    },
    {
      Name: "Plan B Emergency Fund",
      progress: 47,
      id:4,
      Component: "PlanBEmergencyFund"
    },
    {
      Name: "Plan B Insurance",
      progress: 47,
      id:5,
      Component: "PlanBInsurance"
    },
    {
      Name: "Debtonate Debt",
      progress: 47,
      id:6,
      Component: "DebtonateDebt"
    }
  ]);

  const onSwiped = (cardIndex: number) => {
    // console.log('Swiped');
    // const newCards = [...cards]; // Create a copy of the cards array
    // console.log("cardIndex", cardIndex);
    // console.log("cards", cards);
    // console.log("newCards", newCards);
    // newCards.push(newCards.splice(cardIndex, 1)[0]);
    // console.log("after push newCards", newCards);
    // setCards(newCards);
    // console.log("after set cards", cards);
  };

  const onSwipedLeft = () => {
    console.log('Swiped left');    
  };

  const onSwipedRight = () => {
    console.log('Swiped right');
  };

  return (
    <View style={styles.container}>
      <DeckSwiper
        cards={cards}
        renderCard={renderCard}
        onSwiped={onSwiped}
        cardIndex={0}
        backgroundColor={'transparent'}
        stackSize={2}
        stackSeparation={15}
        cardVerticalMargin={30}
        keyExtractor={(card) => card.id.toString()}
        infinite={true}
        // overlayLabels={{
        //   left: {
        //     title: 'NOPE',
        //     element: (
        //       <Icon name="times-circle" size={80} color="#E5566D" />
        //     ),
        //   },
        //   right: {
        //     title: 'LIKE',
        //     element: <Icon name="heart" size={80} color="#4CCC93" />,
        //   },
        // }}
        animateOverlayLabelsOpacity
        animateCardOpacity
      />
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow'
  },
  card: {
    height: 330,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBB142',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SwipeCard;
