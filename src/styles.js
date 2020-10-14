import {StatusBar, StyleSheet} from 'react-native'

// css部分
export default StyleSheet.create({

    row: {
        flexDirection: 'column',
        marginTop: StatusBar.currentHeight || 0,
    },
    listContainer: {
        //backgroundColor: '#00bfff',
        flex: 1,
        flexDirection: 'row',
        fontSize: 24,
    },
    formContainer: {
        //backgroundColor: '#00bfff',
        flex: 1,
        flexDirection: 'row',
        fontSize: 24,
    },
    
    item: {
        flex: 0,
        flexDirection: "row",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
  
    title: {
        flex: 4,
        fontSize: 24,
        fontFamily:'Georgia',
        fontWeight:('bold', '600'),
        textAlign:'left',
    },

    index: {
        padding: 10,
        fontSize: 24,
    },

    button:{
        fontSize: 20,
    },

    temp:{
        marginTop: StatusBar.currentHeight || 0,
    }

  
  });