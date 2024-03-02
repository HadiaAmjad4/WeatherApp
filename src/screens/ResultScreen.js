import React from 'react';
import { StyleSheet, Text, View, SafeAreaView , Image} from 'react-native';

const ResultScreen = ({ route }) => {
  const { weatherData, error } = route.params;
  

  return (
    <SafeAreaView style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    
    {/* Main View For City  */}
    <View>
    {weatherData && (
      <Text style = {styles.city}>
         {weatherData.name}
      </Text>
    )}
    <Text style = {styles. subCity}> Weather Forecast </Text>
    </View>
    

    {/* View for temp */}
            {/* View for Temp  */}
  <View style = {styles.tempContainer}>
  <Image
          source={require('../../assets/Images/temp1.png')}
          style={styles.Image}
        />
        {weatherData && (
        <Text style = {styles.tempText} >
            {(weatherData.main.temp - 273.15).toFixed(2)} 
        </Text>
        )}
        <Text style = {styles.tempMiniText}> °C </Text>
    </View>


     {/* View for Image  */}
     <View style = {styles.weaImgContainer}>
    <Image
          source={require('../../assets/Images/wea4.png')}
          style={styles.weaImg}
        />
     </View>

      {/* View for Attributes  */}
      <View style = {styles.attContainer}>
     <Text style = {styles.weaText}> Weather Now</Text>
  {/* This is Parent View for first row */}
  <View style = {styles.att1}>
    <View style = {styles.tempAtt} > 
    <View>
    <Image
          source={require('../../assets/Images/1.png')}
          style={styles.attImage}
        />
    </View>
    <View> 

         <Text style={styles.attText}> Temperature  </Text>
         {weatherData && (
        <Text style={styles.infoText}>  {(weatherData.main.temp - 273.15).toFixed(2)} °C </Text>
         )}
        </View>

    </View>
     <View style = {styles.windAtt}>
        <View>
        <Image
          source={require('../../assets/Images/3.png')}
          style={styles.attImage}
        />  
        </View>
        <View> 

         <Text style={styles.attText}> Humidity </Text>
         {weatherData && ( 
         <Text style={styles.infoText}> {weatherData.main.humidity}% </Text>
         )}
         </View>
  
    </View> 
  

    
  </View>








  {/* This is parent view for second row  */}

  <View style = {styles.att1}>
    <View style = {styles.tempAtt} > 
    <View>
    <Image
          source={require('../../assets/Images/2.png')}
          style={styles.attImage}
        />
    </View>
    <View > 

         <Text style={styles.attText}> Wind Speed </Text>
         <View style = {styles.wind}>      
         {weatherData &&(
              <Text style={styles.infoWind}> {weatherData.wind.speed}  </Text>
         )}
        <Text style={styles.miniText}> m/s</Text>
        </View>

    </View>

    </View>
     <View style = {styles.windAtt}>
        <View>
        <Image
          source={require('../../assets/Images/4.png')}
          style={styles.attImage}
        />  
        </View>
        <View> 

         <Text style={styles.attText}> Weather </Text>
      
        {weatherData &&(
         <Text style={styles.infoTextWea}> {weatherData.weather[0].description} </Text>
         )} 
         </View>
  
    </View> 
  

    
  </View>



{/* End of second row */}


     </View>
 



      {/* ------------------------------------------------------------------------------------------------------ */}
       {/* ------------------------------------------------------------------------------------------------------ */}


{/* 
      {weatherData && (
        <View style={styles.weatherContainer}>
          <Text style={styles.city}>{weatherData.weather[0].description}</Text>
          <Text style={styles.text}>Humidity: {weatherData.main.humidity}%</Text>
          <Text style={styles.text}>Wind Speed: {weatherData.wind.speed} m/s</Text>
        </View>
      )} */}
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#1B1A55', // Set background color here if desired
  },
  error: {
    color: 'red',
  },
  weatherContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginTop: 5,
  },
  tempContainer : {
    flexDirection : 'row',
    marginTop : 40,
  },
  city: {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 22,
    fontWeight: '900',
    marginLeft: 30,
    marginTop : 20,
   
  },
  subCity : {
    color : '#fff',
    fontSize: 18,
    marginTop : 7,
    marginLeft: 26,
  },
  Image: {
    height: 60,
    width: 70,
    borderRadius : 100,
    marginLeft : 20,
    marginTop : 10,
  },  
  tempText : {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 50,
    fontWeight: '900',
    marginLeft: 130,
    marginBottom : 10,
    marginTop : 18,
  },
  tempMiniText : {
    color: '#fff',
    fontFamily: 'Arial',
    fontSize: 25,
    fontWeight: '900',
    marginBottom : 10,
    marginTop : 40,
  },
  weaImgContainer : {
    marginTop : 40,
    justifyContent : 'center',
    alignItems : 'center',
    
  },
  weaImg : {
    height : 200,
    width : 300,
    
  },
  attContainer : {
    marginTop : 30,
    marginHorizontal : 10,
    backgroundColor : '#fff',
    height : '40%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  weaText: {
    marginLeft : 20,
    marginTop : 15,
    fontSize : 16,
    fontWeight: 'bold',
  },
  att1 : {
     flexDirection : 'row',
    marginTop : 20,
   
  },
  attImage : {
    height: 60,
    width: 60,
    borderRadius : 100,
    marginLeft : 20,
    marginTop : 10,
  },
  tempAtt : {
    flexDirection : 'row',
  },
  windAtt: {
    flexDirection : 'row',
  },
  attText : {
  fontSize : 13,
  opacity: 0.7,
  marginTop : 15,
  marginLeft : 12,
  },
  infoText : {
    fontSize : 20,
    marginTop : 7,
    marginLeft : 10,
    fontWeight : 'bold',
    fontFamily : 'Arial',
  },
  infoTextWea : {
    fontSize : 12,
    marginTop : 13,
    marginLeft : 10,
   
    fontFamily : 'Arial',
  },
  miniText : {
    fontSize : 13,
    opacity: 0.7,
    marginTop : 15,
    
  },
  wind: {
   flexDirection : 'row',
  },
  infoWind : {
    fontSize : 25,
    marginTop : 7,
    marginLeft : 12,
    fontWeight : 'bold',
    fontFamily : 'Arial',
  },
});
