const alert1=()=>{
    alert('hello')
}
// payBill
const payBill=()=>{
   const respons= confirm('please pay bill 200 taka')
   if(respons===true){
       console.log('thakns you')
   }
   else{
       console.log('you are on select')
   }
}
// visit
const visit=()=>{
   const phone= prompt('phone')
    if(phone){
        console.log(phone)
    }
}