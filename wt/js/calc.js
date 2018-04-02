function calc() {

	var long, weight, wrap, insurance;

	long = document.getElementById('longh').value;
	weight = document.getElementById('weighth').value;
	wrap = document.getElementById('wraph').value;
	insurance = document.getElementById('insuranceh').value;

	if (long =='' || weight =='' || wrap =='' || insurance =='')
		alert('Немножко пусто!')
	else {
		long = parseInt(long); 
		weight = parseInt(weight);
		wrap = parseInt(wrap);
		insurance = parseInt(insurance);
	}

	if (long > 2000)
		result = 'ОШИБКА!<br>Максимальный путь перевозки <b>2000км</b>'
	else if (weight > 40)
		result = 'ОШИБКА!<br>Максимальный вес груза <b>40кг</b>'
	else if (long < 0 || weight < 0 || wrap < 0 || insurance < 0)
		result = 'Вы ввели отрицательное значение!<br><b>НЕ НАДО ТАК!</b>'
	else {
		result = long*21 + weight*10 + wrap + insurance;
	}

	document.getElementById('out').innerHTML = result;

}


/*10 – калькулятор для расчета стоимости доставки товара (задаются длина
пути, вес товара или габариты, стоимость упаковки, страхование). Формулу
расчета придумать самостоятельно;
*/