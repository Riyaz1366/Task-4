let obj1 = { name: "Riyaz", age: 28 };
let obj2 = { age: 28, name: "Riyaz" };


function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

if (compareObjects(obj1, obj2)) {
  console.log("The objects are same");
} else {
  console.log("The objects are not same.");
}















//let obj1 = { name: "Riyaz", age: 28 }.sort;
//let obj2 = { age: 28, name: "Riyaz" }.sort;

//if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
 // console.log("The two objects are equal.");
//} else {
 // console.log("The two objects are not equal.");
//}

/* let obj1 = { "Name":"Riyaz","Age":"28"}
let obj2 = { "Age": "28","Name":"Riyaz"}

function compareobj(obj1,obj2){

    const obj1keys= object.Values(obj1);
    const obj2keys = object.Values(obj2);

    if(obj1keys.length  !== obj2keys.length){

        return false;  
    }
    for (let key of obj1keys){
    if (obj1[key] !== obj2[key])
    {

        return false;
    }
        return true;
    }
    
}

compareobj(obj1,obj2); */
