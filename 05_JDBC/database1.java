package jdbc.project;

import java.io.IOException;
import java.sql.*;
import java.util.Scanner;

public class database1 {
    static String url = "jdbc:mysql://localhost:3306/jdbcdata";
    static String username = "root";
    static String password = "hsengivneevak22@";

    static Connection connect=null;
    static Statement statement=null;
    static ResultSet result=null;
    static PreparedStatement prepstatement=null;

    public static void main(String[] args) throws SQLException, IOException {
        Scanner in=new Scanner(System.in);
        System.out.println("Select the option:\n 1.Create \n 2.Update record \n 3.delete record \n 4.Select records");
        int option=in.nextInt();
        String name,department;
        int id,age,salary;
        while (true)  {
            switch (option) {
                case 1:
                    System.out.println("Enter information for creating records");
                    System.out.println("Enter name:");
                    in.nextLine();
                    name = in.nextLine();
                    System.out.println("Enter Department:");
                    department = in.nextLine();
                    System.out.println("Enter age:");
                    age = in.nextInt();
                    System.out.println("Enter salary:");
                    salary = in.nextInt();
                    insertRecord(name, age, department, salary);
                    
                    break;
                case 2:
                    System.out.println("Enter information for updating records");
                    System.out.println("Enter id:");
                    id = in.nextInt();
                    in.nextLine();
                    System.out.println("Enter name:");
                    name = in.nextLine();
                    System.out.println("Enter Department:");
                    department = in.nextLine();
                    System.out.println("Enter age:");
                    age = in.nextInt();
                    System.out.println("Enter salary:");
                    salary = in.nextInt();
                    updateRecords(name, age, department, salary, id);
                    break;
                case 3:
                    System.out.println("enter information for deleting the record");
                    System.out.println("Enter id for deletion:");
                    id = in.nextInt();
                    deleteRecord(id);
                    break;
                case 4:
                    System.out.println("Displaying All records");
                    selectRecords();
                    break;
                default:
                    System.out.println("Enter the correct option");
                    break;
            }
        }
//        String option=in.nextLine().toLowerCase();
//        switch (option){
//            case "create":
//                System.out.println("Enter information for creating records");
//                System.out.println("Enter name:");
//                in.nextLine();
//                name=in.nextLine();
//                System.out.println("Enter Department:");
//                department= in.nextLine();
//                System.out.println("Enter age:");
//                age=in.nextInt();
//                System.out.println("Enter salary:");
//                salary= in.nextInt();
//                insertRecord(name,age,department,salary);
//                break;
//            case "update":
//                System.out.println("Enter information for updating records");
//                System.out.println("Enter id:");
//                id= in.nextInt();
//                in.nextLine();
//                System.out.println("Enter name:");
//                name=in.nextLine();
//                System.out.println("Enter Department:");
//                department= in.nextLine();
//                System.out.println("Enter age:");
//                age=in.nextInt();
//                System.out.println("Enter salary:");
//                salary= in.nextInt();
//                updateRecords(name,age,department,salary,id);
//                break;
//            case "delete":
//                System.out.println("enter information for deleting the record");
//                System.out.println("Enter id for deletion:");
//                id= in.nextInt();
//                deleteRecord(id);
//                break;
//            case "select":
//                System.out.println("Displaying All records");
//                selectRecords();
//                break;
//        }
    }

    public static void selectRecords() throws SQLException{
        String query="select * from employee";
        connect=DriverManager.getConnection(url,username,password);
        statement=connect.createStatement();
        result=statement.executeQuery(query);
        while(result.next()){

            System.out.println("Employee_id:"+result.getInt("employee_id"));
            System.out.println("Employee_Name:"+result.getString("employee_name"));
            System.out.println("Employee_age:"+result.getInt("employee_age"));
            System.out.println("Employee_Department:"+result.getString("employee_depatment"));
            System.out.println("Employee_Salary:"+result.getInt("salary"));
        }
        connect.close();
    }

    public  static void insertRecord(String name,int age,String department,int salary) throws SQLException{
//        String query="insert into employee values (?,?,?,?,?)";
//        connect=DriverManager.getConnection(url,username,password);
//        statement= connect.createStatement();
        connect=DriverManager.getConnection(url,username,password);
        prepstatement=connect.prepareStatement("INSERT INTO employee (employee_name, employee_age, employee_depatment, salary) VALUES (?, ?, ?, ?)");
        prepstatement.setString(1,name);
        prepstatement.setInt(2,age);
        prepstatement.setString(3,department);
        prepstatement.setInt(4,salary);
        int row = prepstatement.executeUpdate();
        System.out.println("Number of rows affected:"
                +row);
        connect.close();
    }

    public static void updateRecords(String name,int age,String department,int salary,int id) throws SQLException {
        connect=DriverManager.getConnection(url,username,password);
        prepstatement=connect.prepareStatement("UPDATE employee SET employee_name=?, employee_age=?, employee_depatment=?, salary=? WHERE employee_id=?");
        prepstatement.setString(1,name);
        prepstatement.setInt(2,age);
        prepstatement.setString(3,department);
        prepstatement.setInt(4,salary);
        prepstatement.setInt(5,id);
        int row = prepstatement.executeUpdate();
        System.out.println("Number of rows affected:" +row);
        connect.close();
    }

    public static void deleteRecord(int id) throws SQLException{
        String query="delete from employee where employee_id="+id;
        connect=DriverManager.getConnection(url,username,password);
        statement=connect.createStatement();

        System.out.println("no of rows affected:"+statement.executeUpdate(query));
        connect.close();

    }
}
