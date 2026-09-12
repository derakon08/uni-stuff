<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="classes.Producto" %>

<% ArrayList<Producto> productos = (ArrayList<Producto>) request.getAttribute("productos"); %>
<% String errorLine = (String) request.getAttribute("alerta"); %>



<!DOCTYPE html>
<html lang="es">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>SURAGRO | Sistema de Inventario</title>

    <!-- Google Fonts -->

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Oswald:wght@300;400;500;600&display=swap" rel="stylesheet">

    <!-- Material Symbols -->

    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

    <link rel="stylesheet" href="css/style.css">

</head>

<body>

<div class="app">

    <aside class="sidebar">

        <div class="sidebar-header">

            <div class="logo">

                <div class="logo-icon">

                    <span class="material-symbols-outlined">

                        science

                    </span>

                </div>

                <div class="logo-text">

                    <h1>SURAGRO</h1>

                    <p>Centralized Inventory</p>

                </div>

            </div>

        </div>

        <nav class="navigation"> 
                <button class="nav-item active">

                    <span class="material-symbols-outlined">

                        inventory_2

                    </span>

                    <span>Inventario</span>

                </button>
        </nav>

        <div class="sidebar-footer">
            <button class="nav-item" data-page="login">
                <span class="material-symbols-outlined">

                    logout

                </span>

                <span>Cerrar sesión</span>

            </button>
        </div>
    </aside>


    <div class="workspace">
        <header class="topbar">
            <div class="page-info">
                <h2 id="page-title">

                    Dashboard

                </h2>

            </div>

            <div class="toolbar">
                <button class="icon-button">
                    <span class="material-symbols-outlined">

                        notifications

                    </span>

                </button>

                <button class="icon-button">
                    <span class="material-symbols-outlined">

                        account_circle

                    </span>

                </button>
            </div>
        </header>

        <main id="content" class="content">
            <section id="page-body">
                <section class="page">

                <header class="page-header">

                    <div>

                        <h2>Gestión de productos</h2>

                        <p>
                            Registrar, buscar y administrar productos.
                        </p>

                    </div>

                </header>

                <section class="cards inventory-layout">

                    <article class="card">

                        <div class="card-header">

                            <h3>Buscar / Registrar</h3>

                        </div>

                        <form action="servletProductos"
                            method="post"
                            class="filters">

                            <div class="input-group">

                                <label for="nombre">
                                    Nombre
                                </label>

                                <input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    maxlength="100">

                            </div>
                            
                            <div class="input-group">

                                <label for="tipo">
                                    Tipo
                                </label>

                                <input
                                    id="tipo"
                                    name="tipo"
                                    type="text"
                                    maxlength="25">

                            </div>

                            <div class="input-group">

                                <label for="descripcion">
                                    Descripción
                                </label>

                                <textarea
                                    id="descripcion"
                                    name="descripcion"
                                    rows="4"
                                    maxlength="500"></textarea>

                            </div>

                            <div class="input-group">

                                <label for="proveedor">
                                    Proveedor
                                </label>

                                <input
                                    id="proveedor"
                                    name="proveedor"
                                    type="text"
                                    maxlength="45">

                            </div>

                            <div class="input-group">

                                <label for="ingredienteActivo">
                                    Ingrediente activo
                                </label>

                                <input
                                    id="ingredienteActivo"
                                    name="ingredienteActivo"
                                    type="text"
                                    maxlength="100">

                            </div>

                            <div class="input-group">

                                <label for="concentracion">
                                    Concentración
                                </label>

                                <input
                                    id="concentracion"
                                    name="concentracion"
                                    type="text"
                                    maxlength="45">

                            </div>

                            <div class="input-group">

                                <label for="presentacion">
                                    Presentación
                                </label>

                                <input
                                    id="presentacion"
                                    name="presentacion"
                                    type="text"
                                    maxlength="10">

                            </div>
                            
                            <p><%= errorLine %></p>

                            <div class="card-header">

                                <button
                                    type="submit"
                                    class="btn btn-secondary"
                                    name="action"
                                    value="search">

                                    Buscar

                                </button>

                                <button
                                    type="submit"
                                    class="button-primary"
                                    name="action"
                                    value="add">

                                    Agregar

                                </button>

                            </div>

                        </form>

                    </article>

                    <article class="card">
                        <div class="card-header">
                            <h3>Productos registrados</h3>
                        </div>

                        <div class="inventory-list">
                            
                            <% for (Producto product: productos) { %>
                            <form action="servletProductos" method="post">
                            <input type="hidden" name="idProducto" value="<%= product.id %>">
                            <details id="<%= product.id%>">
                                    <summary class="inventory-item">
                                        <div>
                                            <h4><%= product.nombre %></h4>
                                            <p><%= product.tipo %></p>
                                        </div>
                                    </summary>

                                    <div class="filters">
                                        <div class="input-group">
                                            <label>Descripción</label>

                                            <p>
                                                <%= product.descripcion %>
                                            </p>
                                        </div>

                                        <div class="input-group">
                                            <label>Proveedor</label>

                                            <p><%= product.proveedor %></p>
                                        </div>

                                        <div class="input-group">
                                            <label>Ingrediente activo</label>

                                            <p><%= product.ingredienteActivo %></p>
                                        </div>

                                        <div class="input-group">
                                            <label>Concentración</label>

                                            <p><%= product.concentracion %></p>
                                        </div>

                                        <div class="input-group">
                                            <label>Presentación</label>

                                            <p><%= product.presentacion %></p>
                                        </div>                                

                                        <button class="button-red btn" name="action" value="delete">
                                            Eliminar
                                        </button>
                                    </div>
                                </details>
                            </form>
                            <%}%>
                        </div>

                    </article>

                </section>
            </section>
        </main>
    </div>
</div>

</body>
</html>