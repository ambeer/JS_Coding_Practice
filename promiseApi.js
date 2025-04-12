const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('P1 is failed');
    }, 5000)
});
const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('P2 is failed');
    }, 3000)
});

const p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('P3 is failed');
    }, 2000)
});

const p4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        reject('P4 is failed');
    }, 3000)
});

// promise.all
/*Promise.all([p1, p2 , p3 ,p4])
.then(function(res){
    console.log(res);
})
.catch(function(error){
    console.error('Promise is failed');
    console.error(error.message);
});*/

// promise.all
/*Promise.allSettled([p1, p2 , p3 ,p4])
.then(function(res){
    console.log(res);
})
.catch(function(error){
    console.error('Promise is failed');
    console.error(error.message);
});*/

// promise race
/*Promise.race([p1, p2 , p3 ,p4])
.then(function(res){
    console.log(res);
})
.catch(function(error){
    console.error('Promise is failed');
    console.error(error.message);
});*/


Promise.any([p1, p2 , p3 ,p4])
.then(function(res){
    console.log(res);
})
.catch(function(error){
    console.error('Promise is failed');
    console.error(error.message);
});