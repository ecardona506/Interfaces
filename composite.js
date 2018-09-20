function shoppingCar(typePaella)
{ 
    this.typePaella = typePaella;
    this.arrayElements = [];
    /*
    //Sin prototype de js
    this.compoProto = function() 
    {
        var objectComposite = 
        {
        add: function(product)
        {
        arrayElements.push(product);
        return arrayElements;
        },
        remove: function (product)
        {
        arrayElements.split(0, this.arrayElements.length);
        arrayElements.add(product);
        return arrayElements;
        }
    }
    return objectComposite;
    } 
    */
    //utilizando prototype de js
    shoppingCar.prototype = 
    {
        add: function(product)
        {
            this.arrayElements.push(product);
            return this.arrayElements;
        },
        remove: function (product)
        {
            this.arrayElements.split(0, this.arrayElements.length);
            this.arrayElements.add(product);
        return this.arrayElements;
        }   
    }
}

var arr = []

function buildShoppingCar(typeProduct){//tipo de producto, producto){
    var car = new shoppingCar(typeProduct); 
    car.add(typeProduct);
    arr.push(car);
    console.log(arr);
}