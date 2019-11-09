import React from 'react'
import DrawerIcon from '../components/DrawerIcon';
import { Slider, Header } from 'react-native-elements';
import { withNavigation} from 'react-navigation';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder, ScrollView,Button, TouchableOpacity } from 'react-native';
import CardStack from '../components/CardStack';



class GameScreen extends React.Component{
    
    state ={
        sliderValue: 5,
        picks: []
    }
    
    changeSlider(value){
        // console.log("v: ",value)
        const sliderValue = Math.floor(value)
        console.log("sv: ",sliderValue)
        this.setState({
            sliderValue
        })
    }

    // onSwipe(){
    //     if (left){
    //         (pass entire GameObj, hometeam picked)
    //     } else if (right){
    //         (pass entire GameObj, awayteam picked)
    //     }
    //     then remove gameobj from card stack
    // }

    render(){
    return(
        <View style={styles.container}>
            <Header style={styles.header}
                barStyle={'light-content'}
                leftComponent={<DrawerIcon />}
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
                            maximumValue={10}
                            minimumTrackTintColor="white"
                            maximumTrackTintColor="black"
                            value={this.state.sliderValue}
                            onValueChange={(value)=>this.changeSlider(value)}
                            />
                    </View>
                </View>
                <View style={styles.gameContainer}>
                    <CardStack />
                </View>
                <View style={styles.container}>
                    {/* <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button_left}><Text>Left</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button_right}><Text>Right</Text></TouchableOpacity>
                    </View> */}
                    <TouchableOpacity onPress={()=>console.log(this.props.navigation.navigate('BetSlip'))} style={styles.betslip_button}><Text>Bet Slip</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
    }
}

GameScreen.navigationOptions = {
    header: null,
    title: 'Home',
    left: <DrawerIcon />
};

export default withNavigation(GameScreen)

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
        // marginTop: 15,
        // paddingTop: 25,
        // paddingBottom: 25,
        left: '50%',
        top:'150%',
        zIndex: 88
        // position: 'absolute'
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
   
    betslip_button: {
        backgroundColor: 'rgb(41,139,217)',
        width: '60%',
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: 'center',
        top: '1200%',
        left: '20%'
        
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