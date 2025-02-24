package java_assignment_4.Task_4;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileEmptyException {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the file name: ");
        String name = scanner.nextLine();
        try {
            readFile(name);
        } catch (FileNotFoundException e) {
            System.out.println("Error: File not found - " + e.getMessage());
        } catch (IllegalStateException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            scanner.close();
            System.out.println("finally block executed.");
        }
    }
    public static void readFile(String fileName) throws FileNotFoundException {
        File file = new File(fileName);
        Scanner fileScanner = new Scanner(file);
        if (!fileScanner.hasNext()) {
            fileScanner.close();
            throw new IllegalStateException("File is empty.");
        }
        while (fileScanner.hasNextLine()) {
            System.out.println(fileScanner.nextLine());
        }
        fileScanner.close();
    }
}
