// older way using
var maxFinder = {
    maxNumber : 0,
    find : function(numbers){
        numbers.forEach(function(element) {
            if(element > this.maxNumber){
                this.maxNumber = element;
            }            
        }, this);
    }
};
maxFinder.find([1,2,3,4]);
console.log(maxFinder.maxNumber);


// older way using
var maxFinder1 = {
    maxNumber : 0,
    find : function(numbers){
        var self = this;
        numbers.forEach(function(element) {
            if(element > self.maxNumber){
                self.maxNumber = element;
            }            
        });
    }
};
maxFinder1.find([1,2,3,4]);
console.log(maxFinder.maxNumber);




var maxFinder2 = {
    maxNumber : 0,
    find : function(numbers){
        numbers.forEach(
            function(element){
                if(element > this.maxNumber){
                    this.maxNumber = element;
                }
            }.bind(this)
        );
    }
}

maxFinder2.find([1,2,3,4]);
console.log(maxFinder2.maxNumber);


//using arrow function now this is binding to its corresponding lexical scope by default


var maxFinder3 = {
    maxFinder : 0,
    find : function(numbers){
        numbers.forEach(element => {
            if(element > this.maxFinder)
                this.maxFinder = element;
        });
    }
}

maxFinder3.find([1,2,3,4,5]);
console.log(maxFinder3.maxFinder);