let menuItems = ["Mariscos","Vegetariana","Carne y Pollo"];

function getValueType(paellaType)
{
	this.paellaType = paellaType;
}

function getValuePrice(valor)
{
	this.valor = valor;
}

function getValueCoin()
{
	var precio = document.getElementById("precio");
	var valor = precio.value;
	console.log(valor);
	return valor;
}

function buildPaella() 
{
	var factory = new executeFactory(this.paellaType.value);
	var paellaProduct = new generatePaella(factory.type);
	var buildCar = new buildShoppingCar(this.paellaType.value);
	var decorator = new executeDecorator(menuItems);
	var adapter= new converter();
	return decorator;
}