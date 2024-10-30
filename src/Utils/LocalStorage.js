// Set Selected Package In Local Storage
const saveDataToLS=(item)=>{
    const stringifiedData=JSON.stringify(item);
    localStorage.setItem("SelectedPlace",stringifiedData);
}

// Get Prev Selected Package From Local Storage
const getFromLS=()=>{
    const getDataFromLS=localStorage.getItem("SelectedPlace")
    if(getDataFromLS){
        return JSON.parse(getDataFromLS)
    }
    return [];
}


//Get Pick Up Id From SelectedPackage Components And set It In Local Storage
const AddToLS=id=>{
    const placeCard = getFromLS();
    placeCard.push(id);
    saveDataToLS(placeCard)
};


//Remove An Item From Local Storage
const removeFromLS=(id)=>{
    const currentStorage = getFromLS();
    const remaining = currentStorage.filter(ind=>ind !==id)
    saveDataToLS(remaining)
}

// Set Tour Plan In Local Storage
const saveDataToLSforTP=(item)=>{
    const stringifiedData=JSON.stringify(item);
    localStorage.setItem("SelectedTourPlan",stringifiedData);
}

// Get Prev Tour Plan From Local Storage
const getTourPlanFromLS=()=>{
    const getDataFromLS=localStorage.getItem("SelectedTourPlan")
    if(getDataFromLS){
        return JSON.parse(getDataFromLS)
    }
    return [];
}

//Get Pick Up Id From Tour Plan Components And set It In Local Storage
const AddToTourPlan=id=>{
    const placeCard = getTourPlanFromLS();
    placeCard.push(id);
    saveDataToLSforTP(placeCard)
};


//Remove An Item From Local Storage
const removeTorPlanFromLS=(id)=>{
    const currentStorage = getTourPlanFromLS();
    const remaining = currentStorage.filter(ind=>ind !==id)
    saveDataToLSforTP(remaining)
}

export {getFromLS,saveDataToLS,AddToLS,removeFromLS,getTourPlanFromLS,saveDataToLSforTP,AddToTourPlan,removeTorPlanFromLS};