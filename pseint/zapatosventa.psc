Algoritmo zapatosventa
	Definir item como Cadena
	terminate = falso
	validacion = 1234
	
	definir precio_items Como Real
	iva = 0.19
	total = 1.0
	
	definir password Como Entero
	definir cantidad como entero
	
	Escribir "Bienvenidos a la zapateria"
	
	Escribir "Por favor, ingrese su numero de telefono."
	Leer telefono_cliente //no se usa. imagine un caso de contacto por problemas del pedido
	Escribir ""
	Escribir "Por favor, ingrese su correo electronico."
	Leer email_cliente
	Escribir ""
	Escribir "Por favor, ingrese su contrasena."
	Leer password
	
	si password == validacion
		Escribir "Las opciones de zapatos son:"
		Escribir "1. botas pascualas - 100"
		Escribir "2. stilettos - 500"
		Escribir "3. sneakers - 300"
		Escribir "4. oxford - 400"
		Escribir "5. derby - 400"
		Escribir "Opcion [1-5]"
		Leer zapatos
		
		Escribir "Cuantos pares a comprar?"
		Leer cantidad
		
		//este caso tambien funcionaria mejor con listas
		//es posible que sea capaz de conseguir cualquier proceso con listas duh
		segun ConvertirANumero(zapatos)
			caso 1:
				item = "Botas Pascualas"
				precio_items = 100 * cantidad
				descuento = -0.1
				
				Si cantidad > 1 Entonces
					total = total + total * descuento
				FinSi
				
			caso 2:
				item = "Stilettos"
				precio_items = 500 * cantidad
				descuento = -0.3
				
				Si cantidad > 3 Entonces
					total = total + total * descuento
				FinSi
				
			caso 3:
				item = "Sneakers"
				precio_items = 300 * cantidad
				descuento = -0.1
				
				Si cantidad > 5 Entonces
					total = total + total * descuento
				FinSi
				
			caso 4:
				item = "Oxfords"
				precio_items = 400 * cantidad
				descuento = -0.2
				
				Si cantidad > 2 Entonces
					total = total + total * descuento
				FinSi
				
			caso 5:
				item = "Derby"
				precio_items = 400 * cantidad
				descuento = -0.15
				
				Si cantidad > 3 Entonces
					total = total + total * descuento
				FinSi
				
				
			De Otro Modo:
				Imprimir "Opcion invalida"
				terminate = true
		finsegun
					
		Si terminate == falso
			subtotal = precio_items + precio_items * iva
			total = total - total * 0.05
			
			Limpiar Pantalla
			
			Imprimir "-----Detalles de la compra-----"
			Imprimir "Correo electronico: ", email_cliente
			Imprimir ""
			Imprimir "Producto: ", item
			Imprimir "Cantidad: ", cantidad
			Imprimir ""
			Imprimir "IVA: ", iva * 100, '%'
			Imprimir "Subtotal: ", precio_items
			Imprimir "Descuento aplicado de ", 100 - total * 100, "%"
			Imprimir "Valor del descuento: ", subtotal - subtotal * total
			Imprimir "Total: ", subtotal * total
		FinSi
			
	SiNo
		Imprimir "Contrasena incorrecta."
	
	finsi
	
	
FinAlgoritmo
