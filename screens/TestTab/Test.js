// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import WheelPicker from 'react-native-wheel-picker-android';

// const Test = () => {
//   const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

//   const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

//   const onYearValueChange = (index) => {
//     setSelectedYear(years[index]);
//   };

//   return (
//     <View>
//       <Text>Year Picker Example</Text>
//       <WheelPicker
//         data={years}
//         selectedItem={years.indexOf(selectedYear)}
//         onItemSelected={onYearValueChange}
//         isCyclic
//         selectedItemTextColor="#000000"
//         itemTextColor="#B0B0B0"
//         selectedItemTextSize={24}
//         itemTextSize={16}
//         style={{ width: 200, height: 150 }}
//       />
//       <Text>Selected Year: {selectedYear}</Text>
//     </View>
//   );
// };

// export default Test;
