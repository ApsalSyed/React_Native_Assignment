// import React from 'react'
// import { useState } from 'react';
// import { SearchBar } from '@rneui/themed';
// import { View } from 'react-native';

// type myprops =
// {
//   placeHolder:string
// }
// export default function SearchBars({placeHolder}:myprops) {
//   const [search, setSearch] = useState("");

//   const updateSearch = (newSearch: string) => {
//     setSearch(newSearch);
//   };

//   return (
//     <View>
//       <SearchBar
//         placeholder={placeHolder}
//         onChangeText={updateSearch}
//         value={search}
//       />
//     </View>
//   )
// }

import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { SearchBarStyles } from './SearchBarStyles';
import { View } from 'react-native';

type myprops=
{
  placeholder:string,
}
const SearchBars = ({placeholder}:myprops) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={SearchBarStyles.container}>
    <Searchbar
      style={SearchBarStyles.inputBox}
      placeholder={placeholder}
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
    </View>
  );
};

export default SearchBars;