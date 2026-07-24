Algoritmo restaurante
	Definir subtotal como Real
	Definir plato_principal, bebida Como cadena
	terminate = falso
	h_division = "==============================="
	
	num_clientes = 0 + 1
	num_factura = 0 + 1
	id_cliente = ConvertirATexto(num_clientes / 10000)
	id_factura = ConvertirATexto(num_factura / 10000)
	id_cliente = Subcadena(id_cliente, 3, 10)
	id_factura = Subcadena(id_factura, 3, 10)
	iva = 0.02
	
	
	Escribir "Bienvenido a nuestro restaurante. Por favor elija su menu."
	Escribir "1. corriente"
	Escribir "2. bandeja paisa"
	Escribir "3. carne de res asado"
	Escribir "4. carne de cerdo asada"
	Leer plato
	
	
	segun (plato) hacer
		opcion 1:
			plato_principal = "Corriente. Valor: $12.000"
			subtotal = subtotal + 12000
		opcion 2:
			plato_principal = "Bandeja paisa. Valor: $15.000"
			subtotal = subtotal + 15000
		opcion 3:
			plato_principal = "Carne de res asado. Valor: $10.000"
			subtotal = subtotal + 10000
		opcion 4:
			plato_principal = "Carne de cerdo asada. Valor: $11.000" 
			subtotal = subtotal + 11000
		De Otro Modo:
			Escribir "No es una opcion valida"
			terminate = Verdadero
	FinSegun
	
	si no terminate
		
		Escribir "Por favor elija su bebida."
		Escribir "1. Limonada"
		Escribir "2. Gaseosa"
		Escribir "3. Jugo en agua (mango)"
		Escribir "4. Jugo en leche (mango)"
		Leer plato
		
		segun plato Hacer
			opcion 1:
				bebida = "Limonada. Valor: $5000"
				subtotal = subtotal + 5000
			opcion 4:
				bebida = "Gaseosa. Valor: $5000"
				subtotal = subtotal + 5000
			opcion 4:
				bebida = "Jugo en agua. Valor: $6500"
				subtotal = subtotal + 6500
			opcion 4:
				bebida = "Jugo en leche. Valor: $7000"
				subtotal = subtotal + 7000
			De Otro Modo:
				Escribir "No es una opcion valida"
				terminate = Verdadero
		FinSegun
	finsi
	
	si no terminate
		Imprimir "No.Cliente"
		Imprimir id_cliente
		Imprimir "No.factura"
		Imprimir id_factura
		Imprimir h_division
		Imprimir plato_principal
		Imprimir bebida
		Imprimir h_division
		Imprimir "Subtotal: " + ConvertirATexto(subtotal)
		Escribir "IVA: " + ConvertirATexto(iva * 100 ) + "%"
		Escribir "Valor Total:"
		Escribir subtotal + subtotal* iva
	FinSi
FinAlgoritmo
