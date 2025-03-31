package java_assignment_4.Task_3;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class ReadTextFile {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter the file path:");
        String path = sc.nextLine();
        if (!path.endsWith(".txt")) {
            System.out.println("Invalid file type! Please provide a .txt file.");
            return;
        }
        System.out.println("Opening file: " + path);
        try {
            BufferedReader reader = new BufferedReader(new FileReader(path));
            String line;
            System.out.println("Reading file content:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
            System.out.println("File reading completed.");
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
