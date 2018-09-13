//¿Qué paella es?

function paella(type)
{
	this.type = type; //Crea un atributo
	this.defineType = function()
	{
		return this.type;
	}
}

function paellaFactory()
{
	this.createPaella = function(type)
	{
		return new paella(type);
	}
}

function executeFactory(type)
{
	var callFactory = new paellaFactory();
	var paellaProduct = callFactory.createPaella(type);
	return paellaProduct;
}