import React, {useState} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import RadioButtonGroup from './RadioButtonGroup';
import {FontFamily} from '../GlobalStyles';
import actions from '../../actions';

const GoalCategoryModal = ({visible, onClose, navigation}: any) => {
  const [category, setCategory] = useState('');

  const data = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  const handleCategoryChange = (value: any) => {
    setCategory(value);
    actions.updateAddGoals({goalType: value});
  };

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ScrollView
            contentContainerStyle={{paddingTop: 5}}
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>x</Text>
            </TouchableOpacity>

            <Text style={styles.saveHeading}>Save for something big</Text>
            <Text style={styles.heading}>
              What is the{'\n'}Category of the{'\n'}goals you have in{'\n'}mind?
            </Text>
            <Text style={styles.subheading}>
              To create a new goal, select the category
            </Text>

            <RadioButtonGroup
              options={[
                {
                  value: 'Property',
                  description:
                    'New home, first home, renovations, investent property',
                },
                {
                  value: 'Travel',
                  description: 'Dream Holiday, Overseas, Amazing Experience',
                },
                {
                  value: 'Kids Education & Investments',
                  description:
                    'Education fund, investment for 21t birthday, help them into property',
                },
                {
                  value: 'Lifestyle',
                  description: 'New car, christmas gift fund, wedding',
                },
                {
                  value: 'Assets & Liabilities',
                  description:
                    'Pay down debt or save to buy growth assets for investment',
                },
                {
                  value: 'Save for Something Big',
                  description:
                    'Pay down debt or save to buy growth assets for investment',
                },
                {
                  value: 'My super fund goal',
                  description: 'What is your Cleva Life goal for your super ?',
                },
              ]}
              defaultValue={'Option 2'}
              onChange={handleCategoryChange}
              count={1}
              coptionView={styles.coptionView}
              coptionContainer={{
                height: 75,
                paddingVertical: 0,
                backgroundColor: '#fff',
                borderRadius: 38,
                marginVertical: 10,
                borderWidth: 1,
                borderColor: '#dedede',
              }}
              coptionDescription={{
                textAlign: 'center',
                color: '#2A3545',
                fontSize: 10,
              }}
              coptionTextStyle={{
                textAlign: 'center',
                color: '#2A3545',
                fontSize: 14,
                fontWeight: 600,
              }}
              cselectedOptionBackground={{
                backgroundColor: '#FBB142',
                color: '#fff',
              }}
            />

            <View style={[styles.nextprevious, styles.emailLoginSpaceBlock]}>
              <TouchableOpacity onPress={onClose} style={styles.next}>
                <Image
                  style={styles.iconleftarrow}
                  resizeMode="cover"
                  source={require('../assets/iconarrow.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (category !== '') {
                    onClose();
                    navigation.navigate('AddANewGoalGoalDate');
                  }
                }}
                style={styles.next}>
                <Image
                  style={styles.iconrightarrow}
                  resizeMode="cover"
                  source={
                    category != ''
                      ? require('../assets/iconarrow1.png')
                      : require('../assets/iconrightarrow.png')
                  }
                />
                <Text
                  style={[styles.next1, category !== '' && {color: '#000'}]}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  fillShadowGradientFromOpacity: 0,
  fillShadowGradientToOpacity: 0,
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(251,177,66, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#fff',
  },
};

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10000,
  },
  closeButtonText: {
    color: '#000',
    fontFamily: FontFamily.textMediumBoldText1,
    fontSize: 18,
    fontWeight: '400',
  },
  coptionView: {
    borderRadius: 38,
    height: 70,
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  emailLoginSpaceBlock: {
    overflow: 'hidden',
    paddingBottom: 25,
  },
  heading: {
    color: '#2A3545',
    fontFamily: FontFamily.sourceSerifPro,
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 20,
  },
  iconleftarrow: {
    height: 20,
    resizeMode: 'cover',
    width: 20,
  },
  iconrightarrow: {
    bottom: 1,
    height: 20,
    left: '71.83%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute',
    right: '0%',
    width: '28.17%',
  },
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    height: Dimensions.get('window').height - 100,
    overflow: 'hidden',
    padding: 16,
    width: Dimensions.get('window').width - 30,
  },
  next: {
    height: 22,
    width: 71,
  },
  next1: {
    top: 0,
    left: 0,
    // fontSize: FontSize.textMediumBoldText1_size,
    lineHeight: 22,
    fontWeight: '600',
    fontFamily: FontFamily.textMediumBoldText1,
    color: '#aaa9a8',
    textAlign: 'right',
    position: 'absolute',
  },
  nextprevious: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 24,
  },
  saveHeading: {
    color: '#C0C0C0',
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '400',
    marginBottom: 15,
  },
  subheading: {
    color: '#2A3545',
    fontFamily: FontFamily.outfitMedium,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default GoalCategoryModal;
