import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const SimpleBtn = (props) => {
    return (
      <TouchableOpacity style={props.buttonContainer} onPress={props.pressHandler}>
        <Text style={props.buttonText}>
          {props.value}
        </Text>
      </TouchableOpacity>
    )
  }

export class BtnOrdinary extends Component {
    pressHandler = () => {
      const { currentState, value, click } = this.props;
       if(currentState !== '0') {
        click(currentState + value);
      } else {
        click(value);
      }
    }
  
    render() {
      return (
        <SimpleBtn
          buttonContainer={styles.buttonContainer}
          pressHandler={this.pressHandler}
          buttonText={styles.buttonText}
          value={this.props.value}
        />
      )
    }
}

export class BtnZero extends Component {
    pressHandler = () => {
      const { currentState, value, click } = this.props;
      if(currentState === '0') {
        click('0');
      } else {
        click(currentState + '0');
      }
    }
  
    render() {
      return (
        <SimpleBtn
          buttonContainer={styles.buttonContainer}
          pressHandler={this.pressHandler}
          buttonText={styles.buttonText}
          value={this.props.value}
        />
      )
    }
  }
  export class BtnDele extends Component {
    pressHandler = () => {
      const { currentState, value, click } = this.props;
      if(currentState.toString().includes('.')) {
        click(currentState);
      } else {
        click(currentState + '.');
      }
    }
  
    render() {
      return (
        <SimpleBtn
          buttonContainer={styles.buttonContainer}
          pressHandler={this.pressHandler}
          buttonText={styles.buttonText}
          value={this.props.value}
        />
      )
    }
  }
const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: '#F0F7F3',
      paddingTop: 30,
      paddingRight: 50,
      paddingLeft: 60,
      width: 130,
      height: 95,
      
    },
    buttonText: {
        color: '#141214',
       // textAlign: 'center',
        fontWeight: '700',
        fontSize: 26
      },
     

});