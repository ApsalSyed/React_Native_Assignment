import {StyleSheet} from 'react-native';

export const profilePageStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    paddingTop:30
  },
  iconButton: {
    alignItems: 'flex-end',
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  card: {
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
  thirdContainer: {
    marginVertical: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  fourthContainer: {
    marginVertical: 20,
  },
  orderHeading: {
    marginBottom: 10,
  },
});
