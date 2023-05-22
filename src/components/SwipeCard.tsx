import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeckSwiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeroSection from './HeroSection';

const Card = ({ item }:any) => (
    <HeroSection item={item}/>
);

const SwipeCard = ({cards}:any) => {
  const renderCard = (card:any) => <Card item={card} key={card.id} />;

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
        onSwipedLeft={onSwipedLeft}
        onSwipedRight={onSwipedRight}
        cardIndex={0}
        backgroundColor={'transparent'}
        stackSize={2}
        stackSeparation={15}
        cardVerticalMargin={30}
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
