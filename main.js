


var random= Math.floor(Math.random()*1000000);
var ranarr =Array.from(String(random), Number);


console.log(ranarr);
if(document.getElementById('gen')){
        document.getElementById("gen").addEventListener("click",function (){
       document.getElementById("print").innerHTML= (random);
       document.getElementById("load").innerHTML= "Page refreshing in 10 seconds" ;
       setTimeout('Redirect()', 10000);
    });
}
  

 
     

 const Redirect =()=>
  {  
      

        document.getElementById('content').innerHTML=`   
        <h1>Guess the number</h1>
          <input type="text" id="inputnum"placeholder="Enter a number"><br>
          <button type="submit" onclick="useIP()" id="guess"> Guess</button>
          <button type="submit" onclick="location.href='index.html'">Replay the game</button><br><br>

          <h2 id="output"></h2>
      </div>`
        document.getElementById('firstPage').style.display='none';
  }




function useIP(){
	const ip= Number(document.getElementById("inputnum").value);
	let result=0;
		if (ip!= 0 && ip===ip%1000000){
			let arr = Array.from(String(ip),Number);


            let comp=0;
            for(let i =0 ; i<=ranarr.length;i++){
                
  	                if(ranarr[i]===arr[i]){
  	                	result= comp++;
  	                }
  	                 
            }
            document.getElementById("output").innerHTML=`The Luck guess made is ${result}`;
               
        } 
		else{
           alert("Enter a 6 digit number");
		}
		
  }
  
  
