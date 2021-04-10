console.log("Hello World");
   // alert("Hello World");
   //document.write("Hello Guys")

   
//DOM Manipulation
 
let elem = document.getElementById('Click');
console.log(elem);

let elemClass = document.getElementsByClassName('container1');
console.log(elemClass);
// elemClass[0].style.background = 'yellow'
elemClass[0].classList.add('bg-Primary')
elemClass[0].classList.add('text-success')

// tn = document.getElementsByTagName('div')
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText  = ('This is a createdelement paragraph.')
// tn[0].appendChild(createdElement);

tn = document.getElementsByTagName('div')
console.log(tn);
CreatedElement = document.createElement('p')
CreatedElement.innerText = ('This is a Created Para.')
tn[0].appendChild(CreatedElement);




// myarr = [1,2,3,4,5,6]

// var i ;
// for(i = 0; i < myarr.length;i++){
//    console.log(myarr[i])
// }

