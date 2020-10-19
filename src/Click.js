import React, {useState, useEffect} from 'react';
import { Alert, Button } from 'react-native';


// export default function Click(props){
//     // useState(functional component寫法)，並使用props傳來的num變數
//     const [count, setCount] = useState(props.number);
//     let countString = "計算:"+count;
//     // 一render就觸發
//     useEffect(()=>Alert.alert("turnTO"+count));
    
//     function showNum(){
//         Alert.alert("props:"+count);
//         // 讓click可以更改app num值
//         props.update(count);
//     }
//     // 一render就觸發(從props)
//     useEffect(showNum);
//     return(
//         <Button title={countString} onPress={()=>
//             setCount(count+1)}/>
//     );
    
// }

export default function Click(props){
    // useState使用router傳來的count變數
    const [count, setCount] = useState(props.number);
    let countString = "計算:"+count;

    // 一render就觸發
    useEffect(()=>Alert.alert("變成"+count));
    
    function showNum(){
        // Alert.alert("props:"+count);
        // 讓click可以更改app num值
        props.update(count);
    }
    return(
        <Button title={countString} onPress={()=>
            setCount(count+1)}/>
    );
    
}

