document.getElementById('longh').onkeypress = function(event) {
	if (event.keyCode < 46 || event.keyCode > 57) {
		return false;
	} else if (event.keyCode == 47) {
		return false;
	}
}

document.getElementById('weighth').onkeypress = function(event) {
	if (event.keyCode < 46 || event.keyCode > 57) {
		return false;
	} else if (event.keyCode == 47) {
		return false;
	}
}

document.getElementById('wraph').onkeypress = function(event) {
	if (event.keyCode < 46 || event.keyCode > 57) {
		return false;
	} else if (event.keyCode == 47) {
		return false;
	}
}

document.getElementById('insuranceh').onkeypress = function(event) {
	if (event.keyCode < 46 || event.keyCode > 57) {
		return false;
	} else if (event.keyCode == 47) {
		return false;
	}
}

document.onkeypress = function(event) {
	if (event.keyCode == 13) {
		calc();
	}
}

function calc() {

	var long = document.getElementById('longh').value;
	var weight = document.getElementById('weighth').value;
	var wrap = document.getElementById('wraph').value;
	var insurance = document.getElementById('insuranceh').value;

	if (long =='' || weight =='')
		alert('Немножко пусто! \nДлина пути и вес товара обязательны для заполнения')

	else if (long == 0 || weight == 0)
		alert('Длина пути и вес не могут быть равны 0')
	
	else if (long > 2000){
		result = 'ОШИБКА! Максимальный путь перевозки 2000км';
		alert(result)
	}
	
	else if (weight > 40){
		result = 'ОШИБКА! Максимальный вес груза 40кг';
		alert(result)
	}
	
	else {
		result = long*21 + weight*10 + wrap*1 + insurance*1;
		document.getElementById('out').innerHTML = result + ' ₽';
	}

}


/*10 – калькулятор для расчета стоимости доставки товара (задаются длина
пути, вес товара или габариты, стоимость упаковки, страхование). Формулу
расчета придумать самостоятельно;
*/