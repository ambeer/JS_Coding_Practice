function simulateAsyncTask(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {  
            resolve('promise is resolved');
        }, 2000);
    });
}

async function runTask(){
    try {
        console.log("task started");
        const result = await simulateAsyncTask();
        console.log("Result " + result);
        console.log("Task is finished");
    } catch(error) { 
        console.log(error);
    }

}

runTask();