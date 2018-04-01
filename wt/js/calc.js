function calc() {

	var long, weight, wrap, insurance;

	long = document.getElementById('longh').value;
	weight = document.getElementById('weighth').value;
	wrap = document.getElementById('wraph').value;
	insurance = document.getElementById('insuranceh').value;
	
	if (long =='' || weight =='' || wrap =='' || insurance =='')
		alert('Немножко пусто!');
	
	long = parseInt(long); 
	weight = parseInt(weight);
	wrap = parseInt(wrap);
	insurance = parseInt(insurance);

	result = 

		(long > 2000) ? 'ОШИБКА!<br>Максимальный путь перевозки <b>2000км</b>' :
		(weight > 40) ? 'ОШИБКА!<br>Максимальный вес груза <b>40кг</b>' :
		(long < 0 || weight < 0 || wrap < 0 || insurance < 0) ? 'Вы ввели отрицательное значение!<br><b>НЕ НАДО ТАК!</b>' :

	long*21 + weight*10 + wrap + insurance  ;

	document.getElementById('out').innerHTML = result;

}


/*10 – калькулятор для расчета стоимости доставки товара (задаются длина
пути, вес товара или габариты, стоимость упаковки, страхование). Формулу
расчета придумать самостоятельно;
*/