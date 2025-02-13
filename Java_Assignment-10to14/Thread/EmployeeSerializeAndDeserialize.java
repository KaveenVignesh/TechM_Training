package Thread;
import java.io.*;

public class EmployeeSerializeAndDeserialize {
    public void employeeSerialize() throws IOException {
        try {
            //Creating the object
            Employee e1 = new Employee(211, "ravi","e1@gmail.com");
            //Creating stream and writing the object
            FileOutputStream fout = new FileOutputStream("employee.txt");
            ObjectOutputStream out = new ObjectOutputStream(fout);
            out.writeObject(e1);
            out.flush();
            //closing the stream
            out.close();
            System.out.println("success");
        } catch (Exception e) {
            System.out.println(e);
        }
    }
    public void employeeDeserialize() throws IOException {
        try{
            //Creating stream to read the object
            ObjectInputStream in=new ObjectInputStream(new FileInputStream("employee.txt"));
            Employee s=(Employee) in.readObject();
            //printing the data of the serialized object
            System.out.println(s.eno+" "+s.ename+" "+s.email);
            //closing the stream
            in.close();
        }catch(Exception e){
            System.out.println(e);
        }
    }

    public static void main(String[] args) throws IOException {
        EmployeeSerializeAndDeserialize employee1=new EmployeeSerializeAndDeserialize();
        employee1.employeeSerialize();
        employee1.employeeDeserialize();
    }
}
class Employee implements Serializable
{
    Employee(int eno, String ename,String email){
        this.eno=eno;
        this.ename=ename;
        this.email=email;
    }
    int eno;
    String ename;
    transient String email;
}

