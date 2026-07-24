package DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import classes.Producto;



public class ProductDAO {
    private final Connection dbConnection;

    
    public ProductDAO(Connection newConnection) {
        dbConnection = newConnection;
    }

    public boolean AddProduct(Producto newProduct) throws SQLException {
        try {
            PreparedStatement SQLStatement = dbConnection.prepareStatement(
                "INSERT INTO producto (nombre, descripcion, proveedor, ingredienteActivo, concentracion, presentacion, tipo) " +
                "VALUES (?,?,?,?,?,?,?)"
            );

            SQLStatement.setString(1, newProduct.nombre);
            SQLStatement.setString(2, newProduct.descripcion);
            SQLStatement.setString(3, newProduct.proveedor);
            SQLStatement.setString(4, newProduct.ingredienteActivo);
            SQLStatement.setString(5, newProduct.concentracion);
            SQLStatement.setString(6, newProduct.presentacion);
            SQLStatement.setString(7, newProduct.tipo);

            return SQLStatement.executeUpdate() > 0;
        }
        catch (SQLException e) {
            throw e;
        }
    }
    
    public Producto GetProduct(int id) throws SQLException {
        try {
            PreparedStatement SQLStatement = dbConnection.prepareStatement(
                "SELECT * FROM producto WHERE idProducto = ?"
            );

            SQLStatement.setInt(1, id);

            ResultSet table = SQLStatement.executeQuery();

            if (table.next()) {
                return ConstructProduct(table);
            }
            else {
                return null;
            }
        }
        catch (SQLException e) {
            throw e;
        }
    }

    public ArrayList<Producto> GetAllProducts() throws SQLException {
        try {
            PreparedStatement SQLStatement = dbConnection.prepareStatement(
                "SELECT * FROM producto"
            );

            ResultSet table = SQLStatement.executeQuery();
            ArrayList<Producto> productList = new ArrayList<>();

            while (table.next()) {
                productList.add(ConstructProduct(table));
            }

            return productList;
        }
        catch (SQLException e) {
            throw e;
        }
    }
    
    public boolean ChangeProduct(Producto newProduct) throws SQLException {
        try {
            PreparedStatement SQLStatement = dbConnection.prepareStatement(
                "UPDATE producto SET nombre = ?, descripcion = ?, proveedor = ?, ingredienteActivo = ?, concentracion = ?, presentacion = ?, tipo = ? " +
                "WHERE idProducto = ?"
            );

            SQLStatement.setString(1, newProduct.nombre);
            SQLStatement.setString(2, newProduct.descripcion);
            SQLStatement.setString(3, newProduct.proveedor);
            SQLStatement.setString(4, newProduct.ingredienteActivo);
            SQLStatement.setString(5, newProduct.concentracion);
            SQLStatement.setString(6, newProduct.presentacion);
            SQLStatement.setString(7, newProduct.tipo);
            SQLStatement.setInt(8, newProduct.id);

            return SQLStatement.executeUpdate() > 0;
        }
        catch (SQLException e) {
            throw e;
        }
    }

    public boolean DeleteProduct(int id) throws SQLException {
        try {
            PreparedStatement SQLStatement = dbConnection.prepareStatement(
                "DELETE FROM producto " +
                "WHERE idProducto = ?"
            );

            SQLStatement.setInt(1, id);

            return SQLStatement.executeUpdate() > 0;
        }
        catch (SQLException e) {
            throw e;
        }
    }
    
    public ArrayList<Producto> FilterProducts(Producto dummyFilter) throws SQLException {
        ArrayList<Producto> productList = new ArrayList<>();
        StringBuilder sqlString = new StringBuilder("SELECT * FROM producto WHERE 1=1");
        ArrayList<String> values = new ArrayList<>();
        PreparedStatement fullStatement;
        ResultSet filteredTable;

        //validations and query construction
        if (!dummyFilter.nombre.isBlank()) {
            sqlString.append(" AND nombre LIKE ?");
            values.add("%" + dummyFilter.nombre + "%");
        }

        if (!dummyFilter.proveedor.isBlank()) {
            sqlString.append(" AND proveedor = ?");
            values.add(dummyFilter.proveedor);
        }

        if (!dummyFilter.tipo.isBlank()) {
            sqlString.append(" AND tipo = ?");
            values.add(dummyFilter.tipo);
        }
        
        if (!dummyFilter.ingredienteActivo.isBlank()) {
            sqlString.append(" AND nombre LIKE ?");
            values.add("%" + dummyFilter.nombre + "%");
        }

        if (!dummyFilter.concentracion.isBlank()) {
            sqlString.append(" AND proveedor = ?");
            values.add(dummyFilter.proveedor);
        }

        if (!dummyFilter.presentacion.isBlank()) {
            sqlString.append(" AND tipo = ?");
            values.add(dummyFilter.tipo);
        }
        
        
        //query execution and array population
        fullStatement = dbConnection.prepareStatement(sqlString.toString());

        for (int i = 0; i < values.size(); i++) {
            fullStatement.setString(i + 1, values.get(i));
        }
        
        filteredTable = fullStatement.executeQuery();
        
        while (filteredTable.next()) {
            productList.add(ConstructProduct(filteredTable));
        }
        
        return productList;
    }





    private Producto ConstructProduct(ResultSet row) throws SQLException {
        Producto fetchedProduct = new Producto();

        fetchedProduct.id = row.getInt("idProducto");
        fetchedProduct.nombre = row.getString("nombre");
        fetchedProduct.proveedor = row.getString("proveedor");
        fetchedProduct.descripcion = row.getString("descripcion");
        fetchedProduct.ingredienteActivo = row.getString("ingredienteActivo");
        fetchedProduct.concentracion = row.getString("concentracion");
        fetchedProduct.presentacion = row.getString("presentacion");
        fetchedProduct.tipo = row.getString("tipo");

        return fetchedProduct;
    }
}