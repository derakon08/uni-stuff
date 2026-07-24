/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import java.io.IOException;
import java.sql.SQLException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import database.DBConnection;
import classes.Producto;
import DAO.ProductDAO;

/**
 *
 * @author dera
 */

public class servletProductos extends HttpServlet {
    private final ProductDAO productConnection;

    public servletProductos() throws SQLException {
        productConnection = new ProductDAO(DBConnection.GetDatabaseConnection());
    }
  
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        try {
            request.setAttribute("productos", productConnection.GetAllProducts());
            request.setAttribute("alerta", "");
            request.getRequestDispatcher("test.jsp").forward(request, response);
        }
        catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    throws ServletException, IOException {
        String action = request.getParameter("action");
        Producto producto = new Producto();

        producto.nombre = request.getParameter("nombre");
        producto.descripcion = request.getParameter("descripcion");
        producto.proveedor = request.getParameter("proveedor");
        producto.ingredienteActivo = request.getParameter("ingredienteActivo");
        producto.concentracion = request.getParameter("concentracion");
        producto.presentacion = request.getParameter("presentacion");
        producto.tipo = request.getParameter("tipo");

        try {
            switch (action) {
                case "add":
                    if ( producto.nombre.isBlank() ||
                    producto.descripcion.isBlank() ||
                    producto.proveedor.isBlank() ||
                    producto.ingredienteActivo.isBlank() ||
                    producto.concentracion.isBlank() ||
                    producto.presentacion.isBlank() ||
                    producto.tipo.isBlank() ) {
                        request.setAttribute("productos", productConnection.GetAllProducts());
                        request.setAttribute("alerta", "Todos los campos deben estar llenos.");
                        request.getRequestDispatcher("test.jsp").forward(request, response);
                        return;   
                    }

                    productConnection.AddProduct(producto);
                    request.setAttribute("productos", productConnection.GetAllProducts());
                    request.setAttribute("alerta", "Nuevo producto agregado.");
                    request.getRequestDispatcher("test.jsp").forward(request, response);
                    break;

                case "search":
                    request.setAttribute("alerta", "Filtrado.");
                    request.setAttribute("productos", productConnection.FilterProducts(producto));
                    request.getRequestDispatcher("test.jsp").forward(request, response);
                    break;
                 
                case "delete":
                    productConnection.DeleteProduct(Integer.parseInt(request.getParameter("idProducto")));
                    request.setAttribute("alerta", "Producto borrado.");
                    request.setAttribute("productos", productConnection.GetAllProducts());
                    request.getRequestDispatcher("test.jsp").forward(request, response);
                    break;
            }

        } catch (SQLException e) {
            throw new ServletException(e);
        }
    }

    @Override
    public String getServletInfo() {
        return "Navigation router";
    }
}

