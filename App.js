/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import { BtnOrdinary, BtnZero, BtnDele } from './components/Button';

type Props = {};
export default class App extends Component<Props> {

  state = {
    text: '0',
    count: 0,
    note: "",
    pin: [0],
    alert:""
  }

  handleClick = (value) => {

    let x = this.state.count + 1;
    this.setState({
      count: x
    });
    console.log("enter time" + x);

    let pin = Object.assign([], this.state.pin);

    if (x <= 4) {
      pin.push(value);
     
      this.setState({
        pin:pin
  
      });
    } else {

console.log("yhfgdgfhhjh" +this.state.pin.pop())

      this.setState({
        note: "Next incorrect attempt will block you"
      });
    }

    if(x==4){
      this.checkpin();
    }

   


    this.setState({
      text: "",

    });


    console.log(value);
    this.setState({
      text: value,

    });


  }
  handleDelete = () => {
    this.setState({
      note: ""
    })
  }

  checkpin=()=>{
    if(this.state.pin.pop(3)==789){
      this.setState({
        alert: "pin entered correct"
      })
      console.log("yes")
    }else{
      this.setState({
        alert: " incorrect pin"
      })
      console.log("no")
    }
  }



  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{flexDirection: 'row',  marginTop: 40}}>

<View style={this.state.pin.length > 0 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
<View style={this.state.pin.length > 1 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
<View style={this.state.pin.length > 2 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
<View style={this.state.pin.length > 3 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20}} />
</View>
        <View>
          {/* <Text style={styles.text}>{this.state.note}</Text> */}
          <Text style={styles.text}>{this.state.alert}</Text>
        </View>
        <View style={styles.row}>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='1' />
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='2' />
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='3' />
        </View>
        <View style={styles.row}>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='4' />
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='5' />
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='6' />

        </View>
        <View style={styles.row}>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='7' />
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='8' />
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='9' />

        </View>
        <View style={styles.row}>
          <BtnZero />
          <BtnZero currentState={this.state.text} click={this.handleClick} value='0' />
          <BtnDele currentState={this.state.text} click={this.handleDelete} value='-' />

        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    paddingTop: 40,
    flexDirection: 'column',
    backgroundColor: '#F0F7F3',
  },
  row: {

    flexDirection: 'row'
  },
  textInput: {
    color: '#ffffff',
    backgroundColor: '#6f6371',
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    padding: 10,
    paddingTop: 45,
    width: '100%',
    textAlign: 'right'
  },
  text:{
    textAlign:'center'
  }
});
