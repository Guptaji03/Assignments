
function sleep(time){
    
    return new Promise((resolve,reject)=>{
    if(typeof time==="number"){
        
        setTimeout(() => {
            resolve({
                success: true,
                message: "success"
            })
        }, time)
    }
    else{
        reject({
            success: false,
            message: "Invalid Arguments"
        })
    }

    })
}

sleep(1000)
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject))
