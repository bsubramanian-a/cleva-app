import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles';



const AssetAllocation = ({ assetData }: any) => {

    const screenWidth = Dimensions.get("window").width;

    // const renderRow = ({ item, index }: any) => {
    //     return (
    //         <View style={styles.row}>
    //             <Text style={styles.rowTitle}>{item[0]}</Text>
    //             {item.slice(1).map((cellData: any, cellIndex: any) => (
    //                 <Text key={cellIndex} style={styles.cell}>
    //                     {cellData}
    //                 </Text>
    //             ))}
    //         </View>
    //     );
    // };

    const colors = [`rgba(239, 159, 39, 1)`, `rgba(151, 85, 182, 1)`];

    const data = {
        labels: [assetData[0][0], assetData[0][2]], // optional
        data: [assetData[0][1] / 100, assetData[0][3] / 100]
    };

    // const data = {
    //     labels: [assetData[0][0],assetData[0][2]], // optional
    //     data: [assetData[0][1]/100,assetData[0][3]/100]
    //   };

    const chartConfig = {
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1, index: any) => {
            return index != undefined
                ? colors[index]
                : `rgba(0, 0, 0, ${opacity})`;
        },
        style: {
            borderRadius: 16,
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
        },
    };

    return (
        <View style={styles.container}>
            <View>
                <ProgressChart
                    data={data}
                    width={screenWidth}
                    height={220}
                    strokeWidth={16}
                    radius={50}
                    chartConfig={chartConfig}
                    hideLegend={true}
                    style={{ paddingBottom: 20 }} // Add padding to accommodate legend
                />
                <View>
                    <View style={styles.balance}>
                        <View style={styles.row}>
                            <View style={[styles.circle, { backgroundColor: 'rgba(239, 159, 39, 1)' }]} />
                            <Text style={styles.balanceText}>{assetData[0][0]} : {assetData[0][1]}%</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={[styles.circle, { backgroundColor: 'rgba(151, 85, 182, 1)' }]} />
                                <Text style={styles.balanceText}>{assetData[0][2]} : {assetData[0][3]}%</Text>     
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.totalWealth]}>
                <View style={styles.rectangleParent}>
                    <View
                        style={[styles.rectangleView1, styles.frameInnerLayout]}
                    />
                    <View style={[styles.ml8]}>
                        <Text style={[styles.netWorthClr, styles.seeAllTypo]}>
                            {assetData[1][0]}
                        </Text>
                        <Text style={[styles.text3, styles.mt7, styles.textClr]}>
                            <View style={[styles.percentageText]}>
                                <Text style={styles.text2}>{assetData[1][1]}    </Text>
                                <Text style={styles.text2_new}>{assetData[1][2]}</Text>
                            </View>
                        </Text>
                    </View>
                </View>
                <View style={[styles.rectangleParent]}>
                    <View
                        style={[styles.rectangleView2, styles.frameInnerLayout]}
                    />
                    <View style={[styles.ml8]}>
                        <Text style={styles.seeAllTypo}>{assetData[1][3]}</Text>
                        <Text style={[styles.text3, styles.mt7, styles.textClr]}>
                            <View style={[styles.percentageText]}>
                                <Text style={styles.text2}>{assetData[1][4]}    </Text>
                                <Text style={styles.text2_new}>{assetData[1][5]}</Text>
                            </View>
                        </Text>
                    </View>
                </View>
            </View>
            <View style={[styles.totalWealth]}>
                <View style={styles.rectangleParent}>
                    <View
                        style={[styles.rectangleView3, styles.frameInnerLayout]}
                    />
                    <View style={[styles.ml8]}>
                        <Text style={[styles.netWorthClr, styles.seeAllTypo]}>
                            {assetData[2][0]}
                        </Text>
                        <Text style={[styles.text3, styles.mt7, styles.textClr]}>
                            <View style={[styles.percentageText]}>
                                <Text style={styles.text2}>{assetData[2][1]}    </Text>
                                <Text style={styles.text2_new}>{assetData[2][2]}</Text>
                            </View>
                        </Text>
                    </View>
                </View>
                <View style={[styles.rectangleParent]}>
                    <View
                        style={[styles.rectangleView4, styles.frameInnerLayout]}
                    />
                    <View style={[styles.ml8]}>
                        <Text style={styles.seeAllTypo}>{assetData[2][3]}</Text>
                        <Text style={[styles.text3, styles.mt7, styles.textClr]}>
                            <View style={[styles.percentageText]}>
                                <Text style={styles.text2}>{assetData[2][4]}    </Text>
                                <Text style={styles.text2_new}>{assetData[2][5]}</Text>
                            </View>
                        </Text>
                    </View>
                </View>
            </View>
            <View style={[styles.totalWealth]}>
                <View style={styles.rectangleParent}>
                    <View
                        style={[styles.rectangleView5, styles.frameInnerLayout]}
                    />
                    <View style={[styles.ml8]}>
                        <Text style={[styles.netWorthClr, styles.seeAllTypo]}>
                            {assetData[3][0]}
                        </Text>
                        <Text style={[styles.text3, styles.mt7, styles.textClr]}>
                            <View style={[styles.percentageText]}>
                                <Text style={styles.text2}>{assetData[3][1]}    </Text>
                                <Text style={styles.text2_new}>{assetData[3][2]}</Text>
                            </View>
                        </Text>
                    </View>
                </View>
                <View style={[styles.rectangleParent]}>
                    <View
                        style={[styles.rectangleView6, styles.frameInnerLayout]}
                    />
                    <View style={[styles.ml8]}>
                        <Text style={styles.seeAllTypo}>{assetData[3][3]}</Text>
                        <Text style={[styles.text3, styles.mt7, styles.textClr]}>
                            <View style={[styles.percentageText]}>
                                <Text style={styles.text2}>{assetData[3][4]}    </Text>
                                <Text style={styles.text2_new}>{assetData[3][5]}</Text>
                            </View>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom:50
    },
    totalWealth: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between', // Change to flex-start
        marginTop: 20,
        marginLeft:20
    },
    rectangleParent: {
        flex: 1,
        alignItems: "flex-start",
        flexDirection: "row",
        width:"50%"
    },
    textClr: {
        color: Color.gray_200,
        textAlign: "left",
    },
    seeAllTypo: {
        fontFamily: FontFamily.openSansRegular,
        color: '#4b4b4b',
        fontSize: 12,
    },
    netWorthClr: {
        color: '#4b4b4b',
        fontSize: 12,
        textAlign: "left",
    },
    frameInnerLayout: {
        height: 40,
        width: 3,
        borderRadius: Border.br_md,
    },
    rectangleView: {
        backgroundColor: "#74447c",
    },
    rectangleView1: {
        backgroundColor: "#74447c",
    },
    rectangleView2: {
        backgroundColor: "#FBB142",
    },
    rectangleView3: {
        backgroundColor: "#EC6666",
    },
    rectangleView4: {
        backgroundColor: "#576DDE",
    },
    rectangleView5: {
        backgroundColor: "#B47AD8",
    },
    rectangleView6: {
        backgroundColor: "#36938C",
    },
    frameInner: {
        backgroundColor: Color.goldenrod,
    },
    mt7: {
        marginTop: 7,
    },
    text3: {
        fontSize: FontSize.size_sm,
    },
    text1: {
        fontFamily: FontFamily.openSansBold,
        fontWeight: "bold",
        color: '#262627',
        fontSize: 16
    },
    text2: {
        fontFamily: FontFamily.openSansBold,
        fontWeight: "bold",
        color: '#262627',
        fontSize: 16
    },
    text2_new: {
        fontFamily: FontFamily.openSansBold,
        fontWeight: "bold",
        color: '#c4c4c4',
        fontSize: 16
    },
    ml8: {
        marginLeft: 8,
    },

    tableHeader: {
        flex: 1,
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "center", // ignore this - we'll come back to it
        flexDirection: "row",
        borderColor: "red",
        borderWidth: 1
    },
    headerRow: {
        borderColor: "green",
        borderWidth: 1,
        backgroundColor: "#7cb48f",
        width: "45%",
        height: 100,
        margin: 4,
    },
    balance: {
        textAlign: 'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10,
    },
    balanceText: {
        fontSize: 12,
        color: Color.black,
        marginLeft: 5,
    },
    percentageText: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    verticalLine: {
        width: 1,
        height: 20, // Adjust height as needed
        backgroundColor: 'black',
        marginRight: 10,
    },
    rowTitle: {
        width: 100, // Adjust width as needed
        padding: 10,
        borderWidth: 0,
        borderColor: 'black',
        fontWeight: 'bold',
    },
    columnHeader: {
        flex: 1,
        padding: 10,
        borderWidth: 0,
        borderColor: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    cell: {
        flex: 1,
        padding: 10,
        borderWidth: 0,
        borderColor: 'black',
    },
});

export default AssetAllocation;
