package simpleRailwayReservation;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/RailwayReservation";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "Tarun@TN41";
    private static final String MYSQL_JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";

    // Method to get a database connection
    public static Connection getConnection() throws SQLException, ClassNotFoundException {
        Class.forName(MYSQL_JDBC_DRIVER);
        return DriverManager.getConnection(DB_URL, USERNAME, PASSWORD);
    }
}
