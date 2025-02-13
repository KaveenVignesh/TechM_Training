package input;

import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class FileCreator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose an option:\n1. Create 3 files\n2. Create a folder with 3 files\n3. Create a folder with 4 files");
        int choice = sc.nextInt();
        sc.nextLine();
        switch (choice) {
            case 1:
                creatingFiles(".", 3); // Create 3 files in the current directory
                break;
            case 2:
                FolderWithFiles("MyFolder", 3);
                break;
            case 3:
                FolderWithFiles("AnotherFolder", 4);
                break;
            default:
                System.out.println("Invalid choice!");
        }
        sc.close();
    }
    public static void creatingFiles(String directory, int fileCount) {
        for (int i = 1; i <= fileCount; i++) {
            File file = new File(directory, "File" + i + ".txt");
            try {
                if (file.createNewFile()) {
                    System.out.println("File created: " + file.getAbsolutePath());
                } else {
                    System.out.println("File already exists: " + file.getAbsolutePath());
                }
            } catch (IOException e) {
                System.out.println("An error occurred while creating the file: " + e.getMessage());
            }
        }
    }

    public static void FolderWithFiles(String folderName, int fileCount) {
        File folder = new File(folderName);
        if (!folder.exists()) {
            if (folder.mkdir()) {
                System.out.println("Folder created: " + folder.getAbsolutePath());
            } else {
                System.out.println("Failed to create folder.");
                return;
            }
        } else {
            System.out.println("Folder already exists: " + folder.getAbsolutePath());
        }
        creatingFiles(folderName, fileCount); // Create files inside the folder
    }
}
