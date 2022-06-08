//de objeto a array
const data = {
    frontEnd : "Braco", 
    backend: "Krishna", 
    design: "Laura"
}
 const entries = Object.entries(data); 
 console.log(entries); 
 //valores de un objeto

 const values = Object.values(data); 
 console.log(values); 

 //padEnd padStart

 const frase = "Hola "; 
 console.log(frase.padStart(7, "mo")); 
 console.log(frase.padEnd(12, "lala-" )); 
 console.log("amigos".padEnd(12, "-------")); 

 //async promises

 const helloWorld = () =>{
     return new Promise((resolve, reject) =>{
         if(true){
            setTimeout(()=>{
                resolve("Hola mundo")
            }, 3000)
         }else{
             reject(new Error("hay un error")); 
         }
     })
 }

const helloAsync = async () =>{
    const hello = await helloWorld(); 
    //const hello2 = await
    console.log(hello); 
}
helloAsync(); 

//async await

const otraFuncion = async () =>{
    try{
        const hello = await helloWorld(); 
        console.log(hello);
    } catch (error){
        console.log(error); 
    }
}
otraFuncion(); 