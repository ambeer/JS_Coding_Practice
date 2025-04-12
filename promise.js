var cart = ['shirts', 'pants', 'kuthas'];

// create order and return order id
// proceed for payments using order id
// show summary page
// updateWalltet

createOrder()
    .then(function(orderId){
        console.log('order id', orderId);
        return orderId;
    })
    .then(function(orderId){
        return proceedForPayments(orderId);
    })
    .then(function(paymentMessage){
        console.log(paymentMessage);
    })
    .catch(function(){
        console.log('cart creation is failed')
    });

function proceedForPayments(orderId){
    return new Promise(function(resolve, reject){        
        if(orderId){
            // call proceedForPayment API by passing order id
            resolve('Payment is completed');
        }
    }); 
}
function createOrder(cart){
    var promise = new Promise(function(resolve, reject){
        // call create order api by passing cart details
        if(!validateCart(cart)){
            const error = new Error('Cart details wrong');
            reject(error);
        }
        // call createorder api and get order id
        let orderId = '123434';
        resolve('123434');
    });
    return promise;
}

function validateCart(cart){
    return true;
}