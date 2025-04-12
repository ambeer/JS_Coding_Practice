const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 is resolved after 2 secs');
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p2 is resovled afetrer 5 secs');
    }, 2000)
});

async function handleAsycAwait(){
    try {
        console.log("Before promise resolve");
        const p1result = await p1; 
        console.log(p1result);
        console.log('after p1 promise resolve');

        const p2result = await p2; 
        console.log(p2result);
        console.log('after p2 promise resolve');
    } catch (error){
        console.log(error);
    }
    
}

handleAsycAwait();