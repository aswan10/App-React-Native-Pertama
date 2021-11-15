import React, { Component } from "react";
import {Text,View, Image, TextInput, StyleSheet, ScrollView} from "react-native";
import macbook from '../../assets/Image/macbook.jpg';

const StylingComponent = () => {
    return (
      <View>
        <Text style={styles.text}>Styling Component</Text>
        <View 
        style={{
          width: 100,
          height: 100, 
          backgroundColor: '#0abde3', 
          borderWidth: 2, 
          borderColor: 'green',
          marginTop: 20,
          marginLeft : 20
          }} />
          <View style={{padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 8}}>
            <Image source={macbook} style={{width: 188, height: 107, borderRadius: 8}} />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>New Macbook Pro 2021</Text>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#F2994A', marginTop: 12}}>Rp. 25.000.000</Text>
            <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
              Makassar
            </Text>
            <View style={{backgroundColor: '#6FCF87', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
              <Text style={{fontSize: 14, fontWeight: '600', color:'white', textAlign: 'center'}}>Beli</Text>
            </View>
          </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontWeight : 'bold',
      color: 'green',
      marginLeft : 20,
      marginTop : 40,
    }
  })

  export default StylingComponent;