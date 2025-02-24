package java_assignment_4.Task_4;

import java.util.Scanner;

public class ExceptionHandlingExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        try {
            System.out.print("Enter a n1: ");
            int n1 = scanner.nextInt();
            int a = 100 / n1;
            System.out.println("Result: " + a);
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero is not allowed.");
        }
    }
}
