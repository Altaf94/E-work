import React from "react";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    logo: {
      width:200,
      height:90,
      alignSelf:'center',
      margin:10,
     
    },
      fixedContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
  },

    logos: {
      alignSelf:'center',
      resizeMode:'contain',
      flexDirection:'row',
      justifyContent:'space-evenly',
     
    },
    splash: {
      alignSelf:'center',

    },
    Header:{
      height:200,
    },
    ProductHeader:{
      height:150,
      backgroundColor:'#170800'
    },
    borderStyleHighLighted: {
      borderColor: "white",
      borderWidth:2,
      width:42,
      borderRadius:5,
      
    },
    underlineStyleBase:{
      color:'white',
      fontSize:25,
      textAlign:'center',
      fontWeight:'bold',
      backgroundColor:'black',
      opacity:0.5
    },
    inputs:{
     width:350,
     height:45,
     alignSelf:'center',
     borderRadius:10,
     borderColor:'white',
     borderWidth:0.5,
     color:'grey',
     flexDirection:'row',
     padding:10,
     backgroundColor:'white'
    },
    Searchinputs:{
      width:350,
      alignSelf:'center',
      borderRadius:10,
      borderColor:'grey',
      borderWidth:0.5,
      color:'white',
      flexDirection:'row',
      paddingBottom:5,
      paddingTop:5,
      backgroundColor:'grey',
      opacity:0.3
     },
    inputs2:{
      flexDirection:"row", 
      justifyContent:"space-evenly",
      padding:5,
      marginBottom:10
     },
     inputs3:{
      width:150,
      borderRadius:10,
      borderColor:'#7c8389',
      borderWidth:0.5,
      color:'#7c8389',
      paddingBottom: 5,
      paddingTop:5, 
      paddingRight:15,
      paddingLeft:15,
      width:170
     },

    TextColor:{
      color:'white',
      fontSize:20,
      flexDirection:'row',  
    },
    ScrollViewtext:{
      color:'white',
      fontSize:13,
      padding:5,
      fontWeight:'500', 
      textAlign:'center',
      fontFamily:'Pacifico-Regular'
    },
    ScrollViewtextproduct:{
      color:'white',
      fontSize:15,
      padding:5, 
    },
    logos: {
      width:80,
      height:80,
      margin:10,
      resizeMode:'contain',
      borderRadius:100, 
      borderWidth:1,
      borderColor:'#a58430' 
    },
    logos2: {
      
      height:200,
     
    },
    scrolling:{
      paddingTop:15,
    },

    Scrollingimages:{
      width:"100%",
      height:150,
      borderRadius:5,
      alignSelf:'center'
    },
    Scrollingimages2:{
      width:"100%",
      height:120,
      borderRadius:5,
      alignSelf:'center', 
    },
    fourimage:{
      width: "24%", 
      height: 100,
      marginTop:5,
      marginLeft:5
      
    },
    CardScrollingimages:{
      width:50,
      height:100,
      borderRadius:50,
      alignSelf:'center',
    },
    CardScrollingimage1:{
      width:100,
      height:100,
      borderRadius:50,
      alignSelf:'center',
    },
    scrollpadding:{
     padding:10,
     display:'flex'
    },
    scrollpadding2:{
      padding:20,
  
      margin:10,
      borderRadius:5
     },
    textstyle:{
     fontWeight: 'bold',
     fontSize: 20,
     color:'black',
     paddingTop:10,
     paddingBottom:10,
    },
    heading1:{
      fontSize:16,
      color:'white',
      fontWeight: 'bold',
      margin:5
    },
    footer:{
      flexDirection:'row',
      backgroundColor:'black',
      justifyContent:'space-evenly'
    },
    FooterText:{
      color: 'white',
      padding:10,
      fontSize:15,
    },
    Profile: {
      fontSize: 20,
      alignSelf:'center',
      fontWeight:"bold",
      color:'white',
      paddingTop:55,
      paddingBottom:10,
      
    },
    profileInput:{
      borderTopWidth:1,
      borderBottomWidth:1,
      width:350,
      alignSelf:'center',
      borderColor:'white',
      color:'white'
  
    },
 

      
    
    hairline: {
      backgroundColor: '#A2A2A2',
      height: 2,
      width: 165
    },
    Appoinmenttext:{
      fontWeight:"bold",
      fontSize:25,
      padding:15,
      color:'white',
    },
    searchsection:{
      color:'white',
    },
    SliderImage:{
     resizeMode: 'contain',
     height: 250,
     width:'100%',
    },
   
    height:{
      width:'100%',
      height:'100%',
      backgroundColor:'white',

    },
    
 
    mapicon:{
      position:'absolute', 
      padding:15, 
      textAlign:'center' ,
      bottom:20, 
      right:30, 
      backgroundColor:'white', 
      width:80, 
      height:80, 
      borderRadius:100, 
      alignItems:'center',
      shadowColor: "#000",
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 20

    },
    Rating:{
      position:"absolute",
      right:20,
      top:20,
      backgroundColor:'#454545',
      opacity:0.9,
      padding:5,
      borderRadius:4,
      
    },
    RatingVertical:{
      position:"absolute",
      right:22,
      top:20,
      backgroundColor:'#454545',
      opacity:0.9,
      padding:8,
      borderRadius:3,  
    },
    mainpagelogo:{
      width:200,
      height:200,
      alignSelf:'center',
      resizeMode:'contain',
      flexDirection:'column',
      justifyContent:"space-around",
      flex:1,
    
    },

    RatingText:{
      textAlign:"center",
      fontWeight:"900",
      color:'white',
      fontSize: 15,  
    },
    Specialofferline:{
      flexDirection:'row',
      padding:5,
      
    },
    paddingright:{
      marginLeft:80,
    },
    Logininputs:{
      width:350,
      alignSelf:'center',
      borderRadius:10,
      borderColor:'white',
      backgroundColor:'black',
      color:'white',
      borderWidth:2,
      flexDirection:'row',
      padding:15,
      marginTop:10,
     },
     paymentinputs:{
      width:200,
      alignSelf:'center',
      borderRadius:10,
      borderColor:'white',
      backgroundColor:'black',
      color:'white',
      borderWidth:2,
      flexDirection:'row',
      padding:15,
      marginTop:10,
     },
     Cardheader:{
      flex:1, 
      flexDirection:'row', 
      justifyContent:'space-between', 
      padding:20,
     },
     selectedDayStyle:{
      borderColor:'black'
     },

     giftcard:{
      
     }
  });
