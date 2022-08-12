import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ListItem = (props)=>{
    return(
        <ScrollView>
            <View style={styles.listItem}>
                <Text>Apple Iphone : Price $200</Text>
                <Text>Android Iphone : Price $100</Text>
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    listItem:{
        marginTop:5,
        color:'green',
        alignItems:'center',
        backgroundColor:'#eee'
    },
    placeImage:{
        marginRight:8,
        width:100,
        height:100
    }
}
    
)

export default ListItem;