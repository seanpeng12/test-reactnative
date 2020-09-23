import React, {useState, useEffect} from 'react';
import { Alert, Button } from 'react-native';


export default function Click(props){
    // useState
    const [count, setCount] = useState(props.count);
    let countString = "計算:"+count;
    // 一render就觸發
    useEffect(()=>Alert.alert("加上"+count));
    
    return(
        <Button title={countString} onPress={()=>
            setCount(count+1)}/>
    );
    
}

