const fetchData = function(){
    return new Promise((resolve , reject) => {
    setTimeout(() => {   
        resolve({name : "Jeet" , url : "https://chaicode.com"})
    }, 3000)
    });
}

/* 
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
 */ 

async function greet(){
    try {
        console.log(`Data is Fetching ...`);
        const data = await fetchData()
        console.log(data);
        console.log(`Data fetched`);
                
    } catch (error) {
        console.log("Error is "+ error);
        
    }
}

greet()