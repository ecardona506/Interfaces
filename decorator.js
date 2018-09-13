function productPaella(name)
{
	this.name = name;
}

function decorateNameProduct(product,description)
{
	this.product =  product;
	this.description = description;
	var allName = this.product.name + " " + description;
	return allName;
}

function executeDecorator(item)
{
	var descripcion = "La mejor paella de la universidad";
	var deco = []
	for (var i = item.length - 1; i >= 0; i--) 
	{
		let producto = new productPaella(item[i]);
		let element = new decorateNameProduct(producto,descripcion);
		deco.push(element);
	}
	console.log(deco);
}