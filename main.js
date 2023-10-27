

((name, callback)=> {
         document.write( 'biriyani ordered <br> <br>');
    
            document.write('biriyani  for preparation <br> <br>');
    
    setTimeout(()=> {
        let ans = `Your  ${name} is ready. The total bill amount is $120 <br>  <br>`;
        callback(ans);
         document.write(`On the Way Pizzahub server <br>  <br>`);

    }, 3000);


    setTimeout(()=>{
         alert(`Succesfully Deliverd Thanks for your order`);
        
    },6000)
})

("biriyani",(message)=>{
	document.write(message);
    
   
});