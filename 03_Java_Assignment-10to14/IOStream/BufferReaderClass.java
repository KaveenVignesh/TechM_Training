package input;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class BufferReaderClass {
    static void inputFromBuffer() throws IOException
    {
        // Enter data using BufferReader
        BufferedReader r = new BufferedReader(new InputStreamReader(System.in));
        String s1 = r.readLine();
        System.out.println("String input got from user"+s1);
        float a1= Float.parseFloat(r.readLine());
        System.out.println("The float input from user:"+a1);
        int num1=Integer.parseInt(r.readLine());
        System.out.println("the integer from user"+num1);
    }
    public void inputFromScanner(){
        Scanner sc=new Scanner(System.in);
        String s2=sc.nextLine();
        System.out.println("String input from user using Scanner class"+s2);
        int num2=sc.nextInt();
        System.out.println("Integer input from user using Scanner class"+num2);
        float a2=sc.nextFloat();
        System.out.println("Float input from user using Scanner class"+a2);
    }

    public static void main(String[] args) throws IOException {
        BufferReaderClass.inputFromBuffer();
        BufferReaderClass scanner=new BufferReaderClass();
        scanner.inputFromScanner();
    }
}
