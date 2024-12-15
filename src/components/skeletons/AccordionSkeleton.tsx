import * as React from 'react';
import { View, Text, Image } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const AccordionSkeleton = () => {
    return (
        <SkeletonPlaceholder borderRadius={4} >
            <View style={{ flexDirection: 'column', alignItems: 'center', borderWidth: 1,  borderRadius: 16, borderColor: "#eaeaea",marginHorizontal: 30,marginTop: 20,paddingBottom: 20, paddingLeft: 10, paddingRight: 10 }}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <View style={{ width: 20, height: 20, borderRadius: 50 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Image style={{ width: 60, height: 15 }} source={require('../../assets/money-send.png')} />
                        <Text style={{ marginTop: 6, fontSize: 14, lineHeight: 18, width: 250 }}>Hello world</Text>                    
                    </View>
                </View>      
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <View style={{ width: 20, height: 20, borderRadius: 50 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Image style={{ width: 60, height: 15 }} source={require('../../assets/money-send.png')} />
                        <Text style={{ marginTop: 6, fontSize: 14, lineHeight: 18, width: 250 }}>Hello world</Text>                    
                    </View>
                </View>      
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <View style={{ width: 20, height: 20, borderRadius: 50 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Image style={{ width: 60, height: 15 }} source={require('../../assets/money-send.png')} />
                        <Text style={{ marginTop: 6, fontSize: 14, lineHeight: 18, width: 250 }}>Hello world</Text>                    
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <View style={{ width: 20, height: 20, borderRadius: 50 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Image style={{ width: 60, height: 15 }} source={require('../../assets/money-send.png')} />
                        <Text style={{ marginTop: 6, fontSize: 14, lineHeight: 18, width: 250 }}>Hello world</Text>                    
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <View style={{ width: 20, height: 20, borderRadius: 50 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Image style={{ width: 60, height: 15 }} source={require('../../assets/money-send.png')} />
                        <Text style={{ marginTop: 6, fontSize: 14, lineHeight: 18, width: 250 }}>Hello world</Text>                    
                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                    <View style={{ width: 20, height: 20, borderRadius: 50 }} />
                    <View style={{ marginLeft: 10 }}>
                        <Image style={{ width: 60, height: 15 }} source={require('../../assets/money-send.png')} />
                        <Text style={{ marginTop: 6, fontSize: 14, lineHeight: 18, width: 250 }}>Hello world</Text>                    
                    </View>
                </View>       
            </View>
        </SkeletonPlaceholder>
    );
};

export default AccordionSkeleton;