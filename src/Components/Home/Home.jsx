import React, { useEffect, useState } from 'react'
import { Banner } from '../Banner/Banner'
import { Packages } from '../Packages/Packages'
import { CardSection } from '../CardSection/CardSection'
import { TourPlanCardSection } from '../TourPlanCardSection/TourPlanCardSection';
import { AddToLS, getFromLS, removeFromLS,getTourPlanFromLS,AddToTourPlan} from '../../Utils/LocalStorage';

export const Home = () => {
  
const [packageData,setPackageData] = useState([]);
const [bookedTourData,setTourData] = useState([]);
const [tourPlan,setTourPlan] = useState([]);

useEffect(()=>{
    fetch("package.json")
    .then((resp)=>resp.json())
    .then((data)=>setPackageData(data))
},[])

//ussEffect hook for Selected Package Component
useEffect(()=>{
  const storageData = getFromLS();
  const savedData = [];

  for (const id of storageData){
      const findResult=packageData.find(product=>product.place_id === id);
      savedData.push(findResult);
  }
  setTourData(savedData);
},[packageData])

//ussEffect hook for Tour Plan Component
useEffect(()=>{
  const storageData = getTourPlanFromLS();
  const savedData = [];

  for (const id of storageData){
      const findResult=packageData.find(product=>product.place_id === id);
      savedData.push(findResult);
  }
  setTourPlan(savedData);
},[packageData])


//Save Package Item ID In Local Storage
const handleSelectPlace=(item)=>{
  if(!(getFromLS().includes(item.place_id))){
    const updatedItems = [...bookedTourData,item]
    setTourData(updatedItems);
    AddToLS(item.place_id)
    }else{
      alert("The Package is already Added")
    }
};

//Save Tour Plan In Local Storage
const handleTourStart=(item)=>{
  if(!(getTourPlanFromLS().includes(item.place_id))){
    const updatedItems = [...tourPlan,item]
    setTourPlan(updatedItems);
    AddToTourPlan(item.place_id);
    removeFromLS(item.place_id);
    }else{
      alert("The Tour is Already Planned")
    }
}

  return (
    <div>
        <Banner/>
        <div className='bg-gray-100'>
          <div className='flex container mx-auto'>
            <Packages packageData={packageData} handleSelectPlace={handleSelectPlace}/>
            <div className='w-1/4'>
              <CardSection bookedTourData={bookedTourData} handleTourStart={handleTourStart}/>
              <TourPlanCardSection tourPlan={tourPlan} />
            </div>
          </div>
        </div>
    </div>
  )
}
