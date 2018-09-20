function converter()
{
	var precio = getValueCoin();
	var price = precio.value;
	var conversion, iva ,neto, original, price;
	precio = getValuePrice(document.getElementById("paellaPrice"));
	var iva = precio * (19/100);
	var original = precio - iva;
	if(price == "pesos")
	{
		console.log("Precio original: ",original);
		console.log("IVA: ",iva);
		console.log("Valor neto: ",precio);
	}
	if(price == "dolar")
	{
		conversion = original * 0.00033;
		iva = conversion * (9/100);
		neto = conversion + iva;
		console.log("Precio original: ",original);
		console.log("IVA: ",iva);
		console.log("Valor neto: ",neto);
	}
	if(price == "euro")
	{
		conversion = original * 0.00028;
		iva = conversion * (21/100);
		neto = conversion + iva;
		console.log("Precio original: ",original);
		console.log("IVA: ",iva);
		console.log("Valor neto: ",neto);
	}
}

function calcOG()
{
	var precio = getValueCoin();
	var price = precio.value;
	var original;
	precio = getValuePrice(document.getElementById("paellaPrice"));
}
function calcIVA()
{
	var precio = getValueCoin();
	var price = precio.value;
	var valor = getValuePrice(document.getElementById("paellaPrice"));
	var iva;
	if(price == "pesos")
	{
		console.log("Precio original: ",original);
		console.log("IVA: ",iva);
		console.log("Valor neto: ",precio);
	}
	if(price == "dolar")
	{
		conversion = converter() * 0.00033;
		iva = conversion * (9/100);
		neto = conversion + iva;
		console.log("Precio original: ",original);
		console.log("IVA: ",iva);
		console.log("Valor neto: ",neto);
	}
	if(price == "euro")
	{
		conversion = converter() / 3561.16;
		iva = conversion * (21/100);
		neto = conversion + iva;
		console.log("Precio original: ",original);
		console.log("IVA: ",iva);
		console.log("Valor neto: ",neto);
	}
}