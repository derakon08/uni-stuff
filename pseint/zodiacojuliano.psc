Algoritmo sin_titulo
	Definir dia, mes como Numero
	Definir nombre, bth, signo como Cadena
	
	
	
	Imprimir "Ingrese su nombre"
	Leer nombre
	
	Imprimir "Ingrese si fecha de nacimiento (DD/MM/YYYY)"
	Leer bth
	
	dia <- ConvertirANumero(Subcadena(bth, 1, 2))
	mes <- ConvertirANumero(Subcadena(bth, 4, 5))
	
	Si (mes == 1 && dia > 20) || (mes == 2 && dia < 19)
		signo = "acuario"
		
	FinSi
	si (mes == 2 & dia > 18) | (mes == 3 & dia < 21)
		signo = "piscis"
	
	FinSi
	si (mes == 3 & dia > 20) | (mes == 4 & dia < 21)
		signo = "aries"
		
	FinSi
	si (mes == 4 & dia > 20) | (mes == 5 & dia < 22)
		signo = "tauro"
		
	FinSi
	si (mes == 5 & dia > 21) | (mes == 6 & dia < 22)
		signo = "geminis"
		
	FinSi
	si (mes == 6 & dia > 21) | (mes == 7 & dia < 23)
		signo = "cancer"
		
	FinSi
	si (mes == 7 & dia > 22) | (mes == 8 & dia < 24)
		signo = "leo"
		
	FinSi
	si (mes == 8 & dia > 23) | (mes == 9 & dia < 24)
		signo = "virgo"
		
	FinSi
	si (mes == 9 & dia > 23) | (mes == 10 & dia < 24)
		signo = "libra"
		
	FinSi
	si (mes == 10 & dia > 23) | (mes == 11 & dia < 23)
		signo = "escorpio"
		
	FinSi
	si (mes == 11 & dia > 22) | (mes == 12 & dia < 22)
		signo = "sagitario"
		
	FinSi
	si (mes == 12 & dia > 21) | (mes == 1 & dia < 21)
		signo = "capricornio"
		
	FinSi
	
	Imprimir "El signo de " + nombre + " (" + bth + ") es: " + signo
	
FinAlgoritmo
