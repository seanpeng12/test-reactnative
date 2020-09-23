import React from 'react';
import { Alert, Button } from 'react-native';

export default function Click(){
    let count = 0 ;
    let countString = "count:"+count;
    function handleClick(){
        Alert.alert("count"+count);
        count++;
    }
    return(
        <Button title={countString} onPress={handleClick}/>
    );
    
}