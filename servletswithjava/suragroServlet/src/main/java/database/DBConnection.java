package database;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static final String DATABASE_URL = "jdbc:mysql://localhost:3306/inventario_suragro";


    public static Connection GetDatabaseConnection() throws SQLException {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new SQLException("MySQL JDBC driver not found on classpath", e);
        }
         
        return DriverManager.getConnection(
            DATABASE_URL,
            "inventario",
            "test"
        );
    }
}