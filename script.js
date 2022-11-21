
let countOfStation,fare,Totalfare;


function getOptions(){
    let startStation=document.getElementById("first").value;
    console.log(startStation);
    let lastStation=document.getElementById("last").value;
    console.log(lastStation);
    countOfStation=Math.abs(startStation-lastStation)+1;
    console.log(countOfStation);
    let paymentMethod=document.getElementById("pay").value;
    console.log(paymentMethod);

   Totalfare=Math.ceil(countOfStation/4)*10;
   if(Totalfare>60){
    Totalfare=60;
   }
            
    if(paymentMethod=='Card' && Totalfare>10){
        let f=(Totalfare/100)*10;
        fare=Totalfare-f;
    }
    else{
        fare=Totalfare;
        
    }
    document.getElementById("Total").value=fare;

}