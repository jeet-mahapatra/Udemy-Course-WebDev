
let fetchData = function(){
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            let msg = true
            if(msg){
                resolve(`This is resolved`)
            }
            else{
                reject(`this is rejected`)
            }
        }, 1000)
    })
}

fetchData()
    .then(data => {
        console.log(data); 
        return data.toUpperCase();  
    })
    .then((val) =>{
        console.log(val);
        
    })
    .catch((err) => {
        console.error(err);
        
    })
