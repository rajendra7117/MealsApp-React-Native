import {View, Text, StyleSheet} from 'react-native'

const Ingredient = ({ing}) => {
        return(
            <View style={styles.textBox}>
                <Text style={styles.text}>{ing}</Text>
            </View>
        )
}

export default Ingredient;

const styles = StyleSheet.create({
    textBox:{
        width: 'auto',
        height: 40,
        padding: 7,
        borderColor: '#fff',
        elevation: 1,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 2,
        shadowOffset: {width: 0, height:1},
        backgroundColor: "#ffffff",
       borderWidth: 1,
        borderRadius: 4,
        marginHorizontal: 3
      },
      text:{
          fontSize: 18
      }
     
})