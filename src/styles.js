import {StatusBar, StyleSheet} from 'react-native'

// css部分
export default StyleSheet.create({

    container: {
        //backgroundColor: '#00bfff',
        flex: 1,
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight || 0,
    },
  
    item: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#DDDDDD",
        padding: 12,
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

    content: {
        flex: 1,
    },

  
  });