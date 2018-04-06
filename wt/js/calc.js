function calc() {

	var long = document.getElementById('longh').value;
	var weight = document.getElementById('weighth').value;
	var wrap = document.getElementById('wraph').value;
	var insurance = document.getElementById('insuranceh').value;
	var valid = /[^\d,]/g;

	if (long =='' || weight =='' || wrap =='' || insurance =='')
		alert('Немножко пусто!')
	else if (valid.test(long, weight, wrap, insurance) == true || valid.test(weight) == true || valid.test(wrap) == true || valid.test(insurance) == true)
		alert('Вводите только числовые значение, пожалуйста')
	else if (long > 2000)
		result = 'ОШИБКА!<br>Максимальный путь перевозки <b>2000км</b>'
	else if (weight > 40)
		result = 'ОШИБКА!<br>Максимальный вес груза <b>40кг</b>'
	else if (long < 0 || weight < 0 || wrap < 0 || insurance < 0)
		result = 'Вы ввели отрицательное значение!<br><b>НЕ НАДО ТАК!</b>'
	else {
		result = long*21 + weight*10 + wrap*1 + insurance*1;
		document.getElementById('out').innerHTML = result + ' ₽';
	}

}


/*10 – калькулятор для расчета стоимости доставки товара (задаются длина
пути, вес товара или габариты, стоимость упаковки, страхование). Формулу
расчета придумать самостоятельно;
*/