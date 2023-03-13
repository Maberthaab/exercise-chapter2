function tarikSaldo(x, y) {
	let biaya = 0.5
	if(x % 5 == 0){
		if(x <= (y + biaya)) {
			let sisa = y - x - biaya
			console.log('Berhasil menarik saldo sebesar : ' + sisa)
		} else {
			console.log('Saldo tidak mencukupi')
		}
	}
	else{
		console.log('Saldo bukan kelipatan 5, sisa saldo: '+ y)
	}
	
}

tarikSaldo(30, 20)
tarikSaldo(42, 100)