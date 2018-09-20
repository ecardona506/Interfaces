//¿Qué ingredientes tiene cada paella?

function paellaProduct()
{
	this.product = function(ingredients)
	{
		this.ingredients = ingredients;
	}
}

function paellaMariscos()
{
	var ingredientsMariscos = ["camarones","pulpo","mejillones"];
	return new paellaProduct(ingredientsMariscos);
}

function paellaFactoryMethod()
{
	this.crearPaella = function(type)
	{
		if(type == "Mariscos")
			return paellaMariscos;
	}
}

function generatePaella(type)
{
	var paellaMethod = new paellaFactoryMethod();
	var paella = paellaMethod.crearPaella(type);
	console.log(paella)
	return paella;
}