let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
  { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
  { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
];

// 1. Print Developers
function PrintDeveloper() {
  //Write your code here , just console.log
  let developers =[];
  for(let i of arr){
    if(i.profession=='developer'){
      developers.push(i.name);
    }
  }

  console.log(developers);
   
}

// 2. Add Data
function addData() {
  //Write your code here, just console.log
  let id = window.prompt("id");
  let name = window.prompt("name");
  let age = window.prompt("age");
  let profession = window.prompt("profession");
  let salary = window.prompt("salary");
  let obj = {};
  obj.id=parseInt(id);
  obj.name=name;
  obj.age=parseInt(age);
  obj.profession=profession;
  obj.salary=parseInt(salary);

  arr.push(obj);
  console.log(arr);
}

// 3. Remove Admins
function removeAdmin() {
  //Write your code here, just console.log
  for(let i in arr){
    if(arr[i].profession =='admin'){
      arr.splice(i,1);
    }
  }

  console.log(arr);
  
}

// 4. Concatenate Array
function concatenateArray() {
  //Write your code here, just console.log
  let arr1 =[1,2,3,4];
  let arr2 =[1,2,3,4];

  let ans = arr1+","+arr2

  console.log(ans);


}

// 5. Average Age
function averageAge() {
  //Write your code here, just console.log
  let n = arr.length;
  let sumAge = 0;
  for(let i of arr){
    sumAge = sumAge +i.age;
  }
  
  console.log(sumAge/n);

}

// 6. Age Check
function checkAgeAbove25() {
  //Write your code here, just console.log
  let valid = false;
  for(let i of arr){
    if(i.age >25){
      valid = true;
      break;
    }
  }

  console.log(valid);
  

}

// 7. Unique Professions
function uniqueProfessions() {
  //Write your code here, just console.log
  let obj = {};
  for(let i of arr){
    if(obj[i.profession] == undefined){
      obj[i.profession] =1;
    }
    else{
      obj[i.profession]++;
    }
  }

  //console.log(obj);
  let distinctProfession =[];
  for(let i in obj){
     if(obj[i] == 1){
      distinctProfession.push(i);
     }
  }
  
  console.log(distinctProfession);



}

// 8. Sort by Age
function sortByAge() {
  //Write your code here, just console.log
  let age =[]; let obj = {};
  for(let i of arr){

    age.push(i.age);
    obj[i.age] = i;

  }

  age.sort();
  let final =[];
  for(let i of age){
    final.push(obj[i]);
  }

  console.log(final);
}

// 9. Update Profession
function updateJohnsProfession() {
  //Write your code here, just console.log

  for(let i of arr){
    if(i.name=="john"){
      i.profession ='manager';
    }
  }

  console.log(arr);

}

// 10. Profession Count
function getTotalProfessions() {
  //Write your code here, just console.log
  let obj = {};
  for(let i of arr){
    if(obj[i.profession] == undefined){
      obj[i.profession] =1;
    }
    else{
      obj[i.profession]++;
    }
  }

  console.log(obj);


}


