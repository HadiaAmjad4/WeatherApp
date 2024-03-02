// import React, { useState } from 'react';
// import { SafeAreaView ,View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Image } from 'react-native';


// const HomeScreen = ({navigation}) => {
//   const [city, setCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState('');

//   const fetchWeatherData = () => {
//     fetch(`http://localhost:8000/weather?city=${city}`) 
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Invalid city. Please check the city name.');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setWeatherData(data);
//         setError('');
//       })
//       .catch(error => {
//         console.error('Error fetching weather data:', error);
//         setError(error.message);
//       });
//   };

//   return (
//     <View style={styles.container}>
    
//       <View  style={styles.search}>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter City"
//           placeholderTextColor="#F6F5F5"
//           value={city}
//           onChangeText={text => setCity(text)}
//         />
//         <Button title="Search" onPress={fetchWeatherData} style={styles.Button}/>
        
//       </View>

//       {error ? <Text style={styles.error}>{error}</Text> : null}
//       {weatherData && (
//         <View style={styles.weatherContainer}>
//           <Text style={styles.city}> {weatherData.name}</Text>
//           <Text style={styles.city}> {(weatherData.main.temp - 273.15).toFixed(2)}°C</Text>
//           <Text style={styles.city}> {weatherData.weather[0].description}</Text>
//           <Text style={styles.text}>Humidity: {weatherData.main.humidity}%</Text>
//           <Text style={styles.text}>Wind Speed: {weatherData.wind.speed} m/s</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor : '#0C134F',
//   },
//   heading: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginTop : 40,
//     marginBottom: 20,
//     color : '#FBF9F1',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//   },
//   input: {
//     height: 40,
//     width: '50%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     marginTop : 80,
//     color : '#fff',
//     borderRadius : 10,
//   },
//   search: {
//     alignItems : 'center',
//     justifyContent: 'center',
//   },
//   Button : {
//     color : '#FBF9F1',
//   },
//   weatherContainer: {
//     marginTop: 50,
//     backgroundColor : '#0C134F',
//     padding: 10,
//     borderRadius: 5,
//     alignItems : 'center',
//   },
//   city: {
//     marginBottom: 10,
//     fontSize: 15,
//     fontWeight: 'bold',
//     color : '#FBF9F1',
//   },
//   text: {
//     marginBottom: 10,
//     fontSize: 15,
//     color : '#FBF9F1',
//   },
//   boxcontainer: {
//     backgroundColor : '#B7C9F2',
//     marginBottom: 10,
//     marginTop: 30,
//     height : '45%',
//     width : '87%',
//     flexDirection : 'row',
//     justifyContent : 'space-evenly',
//     justifyContent : 'space-between'
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default HomeScreen;

import React, { useState } from 'react';
import { SafeAreaView ,View, Text, TextInput, Button, StyleSheet,TouchableOpacity,Image } from 'react-native';


const HomeScreen = ({navigation}) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  // const fetchWeatherData = () => {
  //   fetch(`http://localhost:8000/weather?city=${city}`) 
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Invalid city. Please check the city name.');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       setWeatherData(data);
  //       setError('');
  //     })
  //     .catch(error => {
  //       console.error('Error fetching weather data:', error);
  //       setError(error.message);
  //     });

  // };



  const fetchWeatherData = () => {
    console.log('Fetching Weather Data.....')
    fetch(`http://localhost:8000/weather?city=${city}`) 
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid city. Please check the city name.');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
        setError('');
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        setError(error.message);
      });
    };




  const handlePress = () => {

    const fetchWeatherData = () => {
      console.log('Fetching Weather Data.....')
      fetch(`http://localhost:8000/weather?city=${city}`) 
        .then(response => {
          if (!response.ok) {
            throw new Error('Invalid city. Please check the city name.');
          }
          return response.json();
        })
        .then(data => {
          setWeatherData(data);
          setError('');
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          setError(error.message);
        })
  
    };
    fetchWeatherData();
    navigation.navigate('Result', {weatherData});
  };
       



  return (
    <SafeAreaView style={styles.container}>

      {/* View for Image */}
      <View style={styles.ImageContainer}>
        <Image
          source={require('../../assets/Images/wea2.png')}
          style={styles.Image}
        />
        <Text style={styles.text}>
          Stay ahead of the weather
        </Text>
      </View>


     {/* View for Input field */}
      <View style = {styles.InputContainer}>
      <TextInput
      placeholder= "Enter City"
      placeholderTextColor = "#fff"
      style = {styles.Input}
      value = {city}
      onChangeText={(text) => setCity(text)}
      />

    
      </View>

    <View>
      <TouchableOpacity

      style = {styles.buttonContainer}
      onPress =  {handlePress}
      >
        <Text style = {styles.button}> Search   </Text>
        </TouchableOpacity>
    </View>

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
  error: {
    color: 'red',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#1B1A55', // Set background color here if desired
     alignItems: 'center',
  },

  ImageContainer: {
    marginTop : 0,
    alignItems: 'center',
    marginTop : 155,
  },
  Image: {
    height: 140,
    width: 180,
  },
  text: {
    color: '#fff',
    marginTop: 10,
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: '300',
  },
  InputContainer: {
    marginTop: 50,
    width: '80%', // Adjust width as needed
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white background
    borderRadius: 10,
    padding: 10,
  },
  Input: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer : {
    marginTop : 25,
    height : 50,
    width : 120,
    backgroundColor : '#86A7FC',
    borderRadius : 100,
    justifyContent : 'center',
    alignItems : 'center',
  },
  button : {
    color : '#fff',
    fontSize : 15
  },
});

export default HomeScreen;
