package java_assignment_4.Task_3;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class ReadLine {
    public static void main(String[] args) {
        System.out.println("Enter the file path:");
        Scanner scanner = new Scanner(System.in);
        String path =scanner.nextLine();
        try{
            BufferedReader reader = new BufferedReader(new FileReader(path));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }

}
