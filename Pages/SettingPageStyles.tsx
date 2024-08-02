import { StyleSheet } from 'react-native';

export const SettingPageStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#3a4b6a',
        flex: 1,
        padding: 10,
    },
    headContainer: {
        alignItems: 'center',
        marginBottom: 20,
        paddingTop:10,
        // borderWidth:1,
        // borderRadius:5,
        // backgroundColor:"#eff4ef"
    },
    sectionContainer: {
        marginBottom: 20,
        backgroundColor:"white",
        paddingLeft:10,
        paddingTop:10,
        borderRadius:20,
        flexDirection:"row",
        objectFit:"contain"
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10,
        paddingLeft:10
    },

    image: {
        height: 100,
        width: 100,
        objectFit:"contain"
    },
    text: {
        fontSize: 15,
        color: 'black',
        marginTop: 10,
        paddingTop:15
    },
    languageContainer:
    {
        backgroundColor:"white",
        padding:20,
        borderRadius:20,
        marginBottom:20
    },
    thirdContainer:
    {
      backgroundColor:"white",
      borderRadius:10,
      marginTop:10
    },
    profile :
    {
      flexDirection:"row",
      alignItems:"center",
      paddingTop:1,
      objectFit:"contain"
    },
    smallImage:
  {
    height:20,
    width:30,
    padding:20,
    margin:2
  },
  Wraper:
  {
    backgroundColor:"white",

    marginTop:20,
    borderRadius:10
  }
});
