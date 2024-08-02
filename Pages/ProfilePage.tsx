import React from 'react';
import { Image, Text, View } from 'react-native';
import { favorder, balance, update, versions, profile, order, orderFav, dummyImage } from '../Atoms/ImageImports/ImageImport';
import { cardstyles } from '../Atoms/Card/CardStyles';
import LoginText from '../Atoms/Text/LoginText';
import IconButtons from '../Atoms/Button/IconButtons';
import { profilePageStyles } from './ProfilePageStyles';
import { Divider } from 'react-native-paper';

export default function ProfilePage() {
  return (
    <View style={profilePageStyles.mainContainer}>
      <View style={profilePageStyles.firstContainer}>
        <Image source={dummyImage} style={cardstyles.profilePic} />
        <View style={profilePageStyles.textContainer}>
          <LoginText text="David" type="normalText" />
          <LoginText text="duplicate@gmail.com" type="normalText" />
        </View>
        <View style={profilePageStyles.iconButton}>
          {/* <IconButtons /> */}
        </View>
      </View>

      <Divider />

      <View style={profilePageStyles.secondContainer}>
        <View style={profilePageStyles.card}>
          <Image source={favorder} style={profilePageStyles.image} />
          <Text style={profilePageStyles.text}>Favourite</Text>
        </View>
        <View style={profilePageStyles.card}>
          <Image source={balance} style={profilePageStyles.image} />
          <Text style={profilePageStyles.text}>Balance</Text>
        </View>
      </View>

      <Divider />

      <View style={profilePageStyles.thirdContainer}>
        <View style={profilePageStyles.profile}>
          <Image source={update} style={profilePageStyles.smallImage} />
          <LoginText text="App Update Available" type="profileText" />
        </View>
      </View>

      <Divider/>

      <View style={profilePageStyles.thirdContainer}>
        <View style={profilePageStyles.profile}>
          <Image source={profile} style={profilePageStyles.smallImage} />
          <LoginText text="Your Profile" type="profileText" />
        </View>
      </View>

      <Divider />

      <View style={profilePageStyles.fourthContainer}>
        <View style={profilePageStyles.orderHeading}>
          <LoginText text="Orders" type="Order" />
        </View>
        <Divider  />
        <View style={profilePageStyles.thirdContainer}>
          <View style={profilePageStyles.profile}>
            <Image source={order} style={profilePageStyles.smallImage} />
            <LoginText text="Your Orders" type="profileText" />
          </View>
        </View>
        <Divider  />
        <View style={profilePageStyles.thirdContainer}>
          <View style={profilePageStyles.profile}>
            <Image source={orderFav} style={profilePageStyles.smallImage} />
            <LoginText text="Favorite Orders" type="profileText" />
          </View>
        </View>
        <Divider/>
        <View style={profilePageStyles.thirdContainer}>
          <View style={profilePageStyles.profile}>
            <Image source={versions} style={profilePageStyles.smallImage} />
            <LoginText text="Version 1.0.1" type="profileText" />
          </View>
        </View>
      <Divider/>
      </View>
    </View>
  );
}
