import { act, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function reduce(state,action){

  switch(action.type){

    case "name":return {...state,name:action.payload}
    case "establishment_year": return {...state,establishment_year:action.payload}
    case "building":return {...state,address:{...state.address,building:action.payload}}
    case "street":return {...state,address:{...state.address,street:action.payload}}
    case "cityName":return {...state,address:{...state.address,city:{...state.address.city,cityName:action.payload}}}
    case "pincode":return {...state,address:{...state.address,city:{...state.address.city,locality:{...state.address.city.locality,pinCode:action.payload}}}}
    case "landmark":return {...state,address:{...state.address,city:{...state.address.city,locality:{...state.address.city.locality,landmark:action.payload}}}}
    case "state": return {...state,address:{...state.address,state:action.payload}}
    case "latitude": return {...state,address:{...state.address,coordinates:{...state.address.coordinates,latitude:action.payload}}}
    case "longitude": return {...state,address:{...state.address,coordinates:{...state.address.coordinates,longitude:action.payload}}}
    case "courses_offered": return {...state,courses_offered:[action.payload]}
    case "reset": return {name:"",establishment_year:"",address: {building:"",street:"",city: {cityName:"",locality: {pinCode:"",landmark:""}},state:"",coordinates: { latitude:"", longitude:"" }},courses_offered: []}
    default :
    return "there is an error"
  }
}
function App() {
  const [count, setCount] = useState([])
  let [data,dispatch]=useReducer(reduce,{name:"",establishment_year:"",address: {building:"",street:"",city: {cityName:"",locality: {pinCode:"",landmark:""}},state:"",coordinates: { latitude:"", longitude:"" }},courses_offered: []})
  
  function submit(e){
    e.preventDefault()
    count.push(data)
    dispatch({type:"reset"})

  }

  return (
    <>
      <form onSubmit={submit}>
        <input type='text' placeholder='Collage name'value={data.name} onChange={(e)=>{dispatch({type:"name",payload:e.target.value})}}/>
        <input type='text' placeholder='Establishment year'value={data.establishment_year} onChange={(e)=>{dispatch({type:"establishment_year",payload:e.target.value})}}/>
        <input type='text' placeholder='building name'value={data.address.building} onChange={(e)=>{dispatch({type:"building",payload:e.target.value})}}/>
        <input type='text' placeholder='street name'value={data.address.street} onChange={(e)=>{dispatch({type:"street",payload:e.target.value})}}/>
        <input type='text' placeholder='city name'value={data.address.city.cityName} onChange={(e)=>{dispatch({type:"cityName",payload:e.target.value})}}/>
        <input type='text' placeholder='pincode'value={data.address.city.locality.pinCode} onChange={(e)=>{dispatch({type:"pincode",payload:e.target.value})}}/>
        <input type='text' placeholder='landmark'value={data.address.city.locality.landmark} onChange={(e)=>{dispatch({type:"landmark",payload:e.target.value})}}/>
        <input type='text' placeholder='state name'value={data.address.state} onChange={(e)=>{dispatch({type:"state",payload:e.target.value})}}/>
        <input type='text' placeholder='latitude'value={data.address.coordinates.latitude} onChange={(e)=>{dispatch({type:"latitude",payload:e.target.value})}}/>
        <input type='text' placeholder='longitude'value={data.address.coordinates.longitude} onChange={(e)=>{dispatch({type:"longitude",payload:e.target.value})}}/>
        <input type='text' placeholder='courses'value={data.courses_offered} onChange={(e)=>{dispatch({type:"courses_offered",payload:e.target.value})}}/>
        <input type="submit"/>
      </form>
      {
        count.map((v,i)=>{
          return(
            <div key={i} style={{border:"1px solid black",marginTop:"35px"}}>
              <h1>College:{v.name}</h1>
              <h2>year:{v.establishment_year}</h2>
              <h2>Adress:{v.address.building}</h2>
              <h2>street:{v.address.street}</h2>
              <h2>City Name:{v.address.city.cityName}</h2>
              <h2>Pincode:{v.address.city.locality.pinCode}</h2>
              <h2>landmark:{v.address.city.locality.landmark}</h2>
              <h2>State:{v.address.state}</h2>
              <h2>latitude:{v.address.coordinates.latitude}</h2>
              <h2>longitude:{v.address.coordinates.longitude}</h2>
              <h2>Courses:{v.courses_offered[0]}</h2>
            </div>
          )
        })
      }
    </>
  )
}

export default App;
