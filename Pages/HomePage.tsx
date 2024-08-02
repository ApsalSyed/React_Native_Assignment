import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import SearchBars from '../Atoms/SearchBar/SearchBars';
import DynamicCard from '../Atoms/Card/DynamicCard';
import {
  home,
  cleaning,
  painting,
  heating,
  plumbing,
  electrical,
  banglore,
  electrician,
} from '../Atoms/ImageImports/ImageImport';
import {cardstyles} from '../Atoms/Card/CardStyles';
import LoginText from '../Atoms/Text/LoginText';

export default function HomePage() {
  return (
    <View style={cardstyles.mainContainer}>
      <LoginText text="" type="homePageTitle" />
      <SearchBars placeholder="Search for services" />

      <View style={cardstyles.cardContainer}>
        <View style={cardstyles.row}>
          <View style={cardstyles.card}>
            <Image source={home} style={cardstyles.image} />
            <Text style={cardstyles.text}>Remodel</Text>
          </View>

          <View style={cardstyles.card}>
            <Image source={cleaning} style={cardstyles.image} />
            <Text style={cardstyles.text}>Cleaning</Text>
          </View>

          <View style={cardstyles.card}>
            <Image source={painting} style={cardstyles.image} />
            <Text style={cardstyles.text}>Painting</Text>
          </View>
        </View>

        <View style={cardstyles.row}>
          <View style={cardstyles.card}>
            <Image source={heating} style={cardstyles.image} />
            <Text style={cardstyles.text}>Heating</Text>
          </View>

          <View style={cardstyles.card}>
            <Image source={plumbing} style={cardstyles.image} />
            <Text style={cardstyles.text}>Plumbing</Text>
          </View>

          <View style={cardstyles.card}>
            <Image source={electrical} style={cardstyles.image} />
            <Text style={cardstyles.text}>Electrical</Text>
          </View>
        </View>
        <View>
          <Image source={electrician} style={cardstyles.scrollImage} />
        </View>
      </View>
    </View>
  );
}
