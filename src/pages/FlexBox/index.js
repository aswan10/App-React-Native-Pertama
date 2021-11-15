import React, { Component } from "react";
import { Text, View, Image } from "react-native";

class FlexBox extends Component{
    render(){
        return (
        <View>
            <View style={{flexDirection: 'row', backgroundColor: '#c8d6e5', alignItems: 'center', justifyContent:'space-between'}}>
                <View style={{backgroundColor: '#ee5253', width: 50, height:50}} />
                <View style={{backgroundColor: '#feca57', width:50, height:50}} />
                <View style={{backgroundColor: '#1dd1a1', width:50, height:50}} />
                <View style={{backgroundColor: '#5f27cd',width:50, height:50}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                <Text>Beranda</Text>
                <Text>Video</Text>
                <Text>Playlist</Text>
                <Text>Komunitas</Text>
                <Text>Channel</Text>
                <Text>Tentang</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                <Image 
                source={{
                    uri : 'https://scontent.fupg1-1.fna.fbcdn.net/v/t1.6435-9/91521399_3204124489621011_7266724750867562496_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH-uXRhToDZ-vaDvq8G9cz94ILKK336j67ggsorffqPrpbWIERFp9ugN4HmuhKrG1UWC_w6NoXjPEctd6ey9sSs&_nc_ohc=IzIeAAxBgj4AX8PQmDu&_nc_ht=scontent.fupg1-1.fna&oh=36b91a8bb54f389bbb79dc26371a9d48&oe=61AF67A9'}} 
                style= {{width: 100, height:100, borderRadius: 50, marginRight: 14}} />
                <View>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>wanHEX</Text>
                    <Text>100 ribu Subcriber</Text>
                </View>
            </View>
        </View>
        );
    }
}

export default FlexBox;