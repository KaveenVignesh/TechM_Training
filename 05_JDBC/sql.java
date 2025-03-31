package jdbc;

import java.sql.*;

public class sql {
//    Class.forName("com.mysql.cj.jdbc.Driver");
    static String url = "jdbc:mysql://localhost:3306/jdbcdata";
    static String username = "root";
    static String password = "hsengivneevak22@";

    static Connection connect = null;
    static Statement statement1 =null;
    static PreparedStatement statement2=null;
    static ResultSet result=null;

    public static void main(String[] args) throws SQLException, Exception {

//        selectRecords();
        selectColumnFromRecords();
//        selectRecordsWithCondition();
//        selectRecordsWithExternalParameters(21);
//        selectRecordsWithPreparedStatement(22);
//        insertRecord();
//         insertRecordWithVariables(18,"SP",780000);
//         insertRecordWithPreparedStatement(11,"MDH",670000);
//        deleteRecord();
//        deleteRecordWithVariables(22);
//        deleteRecordWithPreparedStatement(15);
//         updateRecord();
//         updateRecordWithVariables(18, 850000);
//        updateRecordWithPreparedStatement(17, 880000);
    }
    public static void selectRecords() throws SQLException{
        String query="select * from employee";
        connect =DriverManager.getConnection(url,username,password);
        statement1= connect.createStatement();
        result=statement1.executeQuery(query);
        while(result.next()){
            System.out.println("Employee_id:"+result.getInt(1));
            System.out.println("Employee_Name:"+result.getString(2));
            System.out.println("Employee_age:"+result.getInt(3));
            System.out.println("Employee_Department:"+result.getString(4));
            System.out.println("Employee_Salary:"+result.getInt(5));
        }
        connect.close();
    }
    public static void selectColumnFromRecords() throws SQLException{
        String query="select employee_id,employee_name,salary from employee";
        connect=DriverManager.getConnection(url,username,password);
        statement1= connect.createStatement();
        result=statement1.executeQuery(query);
        while(result.next()){
            System.out.println("Employee_id:"+result.getInt(1));
            System.out.println("Employee_Name:"+result.getString(2));
            System.out.println("Employee_Salary:"+result.getInt(3));
        }
        connect.close();
    }

    public  static void selectRecordsWithCondition() throws SQLException{
        String query="select * from employee where employee_age>21";
        connect=DriverManager.getConnection(url,username,password);
        statement1= connect.createStatement();
        result=statement1.executeQuery(query);
        while(result.next()){
            System.out.println("Employee_id:"+result.getInt(1));
            System.out.println("Employee_Name:"+result.getString(2));
            System.out.println("Employee_age:"+result.getInt(3));
            System.out.println("Employee_Department:"+result.getString(4));
            System.out.println("Employee_Salary:"+result.getInt(5));
        }
        connect.close();
    }

    public static void selectRecordsWithExternalParameters(int id) throws SQLException{
        String query="select employee_id , employee_name, employee_depatment from employee " + "where employee_age>"+id;
        connect=DriverManager.getConnection(url,username,password);
        statement1= connect.createStatement();
        result=statement1.executeQuery(query);
        while(result.next()){
            System.out.println("Employee_Name:"+result.getString(1));
            System.out.println("Employee_Department:"+result.getString(2));
        }
        connect.close();
    }

    public static void selectRecordsWithPreparedStatement(int age) throws SQLException{
        //String qurey="select employee_depatment,employee_age from employee where employee_age<id"+id;
        connect=DriverManager.getConnection(url,username,password);
        PreparedStatement statement=connect.prepareStatement("select employee_depatment,employee_age from employee where employee_age<?");
        statement.setInt(1,age);
        result=statement.executeQuery();
        while (result.next()){
            System.out.println("Employee_Department:"+result.getString(1));
            System.out.println("Employee_age:"+result.getInt(2));
        }
        connect.close();
    }

    public  static void insertRecord() throws SQLException{
        String query="insert into employee values (7,'suban',23,'web developer',21000)";
        connect=DriverManager.getConnection(url,username,password);
        statement1= connect.createStatement();
        int row = statement1.executeUpdate(query);
        System.out.println("Number of rows affected:"
                +row);
        connect.close();
    }
}

