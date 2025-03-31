package java_assignment_4.Task_3;

import java.io.File;
import java.util.Scanner;

public class FileList {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter directory path: ");
        String Path = scanner.nextLine();
        scanner.close();
        File directory = new File(Path);
        if (directory.exists() && directory.isDirectory()) {
            String[] fileList = directory.list();
            if (fileList != null && fileList.length > 0) {
                System.out.println("Files and directories in " + Path + ":");
                for (String fileName : fileList) {
                    System.out.println(fileName);
                }
            } else {
                System.out.println("The directory is empty.");
            }
        } else {
            System.out.println("Invalid directory path.");
        }
    }
}
