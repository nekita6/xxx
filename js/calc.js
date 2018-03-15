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

	result = (long > 2000) ? 'ОШИБКА! (Максимальный путь перевозки 2000км)' :
		(weight > 40) ? 'ОШИБКА! (Максимальный вес груза 40кг)' :
		long*21 + weight*10 + wrap + insurance  ;

	document.getElementById('out').innerHTML += result 'R';

}


// 10 – калькулятор для расчета стоимости доставки товара (задаются длина
// пути, вес товара или габариты, стоимость упаковки, страхование). Формулу
// расчета придумать самостоятельно;

// Допустим, за каждые 100гр отправитель платит 20р
// За каждые 10см³ - 25р
// И с расстоянием также