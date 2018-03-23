function calc() {

	var long, weight, wrap, insurance;

	long = document.getElementById('longh').value;
	long = parseInt(long);

	weight = document.getElementById('weighth').value;
	weight = parseInt(weight);

	wrap = document.getElementById('wraph').value;
	wrap = parseInt(wrap);

	insurance = document.getElementById('insuranceh').value;
	insurance = parseInt(insurance);

	result = 

		(long > 2000) ? 'ОШИБКА!<br>Максимальный путь перевозки <b>2000км</b>' :
		(weight > 40) ? 'ОШИБКА!<brМаксимальный вес груза <b>40кг</b>' :
		(long < 0 || weight < 0 || wrap < 0 || insurance < 0) ? 'Вы ввели отрицательное значение!<br><b>НЕ НАДО ТАК!</b>' :
		// (long.length === 0 || weight.length === 0 || wrap.length === 0 || insurance.length < 1) ? 'Ы' :

	long*21 + weight*10 + wrap + insurance  ;

	document.getElementById('out').innerHTML = result;

}


// 10 – калькулятор для расчета стоимости доставки товара (задаются длина
// пути, вес товара или габариты, стоимость упаковки, страхование). Формулу
// расчета придумать самостоятельно;
