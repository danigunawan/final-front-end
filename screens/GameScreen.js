import React from 'react'
import GameCard from '../components/GameCard'
import DrawerIcon from '../components/DrawerIcon';
import { Slider, Header } from 'react-native-elements';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, ScrollView,Button } from 'react-native';

function GameScreen(props){
    const useSwiper = useRef(null).current
    const handleOnSwipedLeft = () => useSwiper.swipeLeft()
    const handleOnSwipedTop = () => useSwiper.swipeTop()
    const handleOnSwipedRight = () => useSwiper.swipeRight()
    const handleOnSwipedDown = () => useSwiper.swipeDown()
    
    return(
        <View style={styles.container}>
            <Header style={styles.header}
                barStyle={'light-content'}
                leftComponent={<DrawerIcon
                // navigation={this.props.navigation}
                />}
                rightComponent={<Text style={styles.funds}>Funds: $100</Text>}
            />
            <View style={styles.mainContainer}>
                <View style={styles.midContainer}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Confidence Meter</Text>
                        <Slider
                            style={styles.slider}
                            thumbTintColor='white'
                            minimumValue={0}
                            maximumValue={5}
                            minimumTrackTintColor="white"
                            maximumTrackTintColor="black"
                            value={2.5}
                            />
                    </View>
                </View>
                <View style={styles.gameContainer}>
                    <Swiper
                        ref={useSwiper}
                        animateCardOpacity
                        containerStyle={styles.container}
                        cards={photoCards}
                        renderCard={card => <Card card={card} />}
                        cardIndex={0}
                        backgroundColor="white"
                        stackSize={2}
                        infinite
                        showSecondCard
                        animateOverlayLabelsOpacity
                        overlayLabels={{
                            left: {
                                title: 'LEFT',
                                element: <OverlayLabel label="LEFT" color="#E5566D" />,
                                style: {
                                    wrapper: styles.overlayWrapper,
                                },
                            },
                            right: {
                                title: 'RIGHT',
                                element: <OverlayLabel label="RIGHT" color="#4CCC93" />,
                                style: {
                                    wrapper: {
                                        ...styles.overlayWrapper,
                                        alignItems: 'flex-start',
                                        marginLeft: 30,
                                    },
                                },
                            },
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

GameScreen.navigationOptions = {
    header: null,
    title: 'Home',
    left: <DrawerIcon />
};

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(53, 60, 80)',
    },

    mainContainer:{
        top: 110,
        position: "absolute",
        alignSelf: 'center',
    },

    pic: {
        zIndex:99,
        alignContent: 'center'

    },

    slider:{
        width: 200, 
        height: 40, 
        alignContent: 'center'
     
    },
    midContainer: {
        marginTop: 15,
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: 'center',
    },

    gameContainer: {
        marginTop: 15,
        paddingTop: 25,
        paddingBottom: 25,
        right: 290,
        position: 'absolute'
    },


    title: {
        fontSize: 27,
        color: 'rgb(225,225,225)',
        lineHeight: 27,
        textAlign: 'center',
    },

    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    buttonsContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 50
    },
    button: {
        backgroundColor: 'transparent',
        width: '40%',
        height: 40
    },
    logo: {
        height: 80,
        resizeMode: "center"

    },
    funds: {
        color: 'white'
    },
    header: {
        backgroundColor: 'rgb(10,106,250)'
    },
    appTitle: {
        fontSize: 36,
    }
});