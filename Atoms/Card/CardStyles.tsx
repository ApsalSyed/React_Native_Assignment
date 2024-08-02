import { StyleSheet } from "react-native";
import ProfilePage from "../../Pages/ProfilePage";


export const cardstyles=StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: '#3a4b6a',
  },
  cardContainer: {
    flex: 1,
    padding: 7,
  },
  row: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    height: 120,
    width: 120,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    padding: 5,
  },
  scrollImage:
  {
    height:"70%",
    width:"100%",
    marginTop:5,
    borderRadius:30
  },
  profilePic: {
    width: 100, 
    height: 100, 
    borderRadius: 50,
    marginTop:15,
    objectFit:"contain"
  },

});