package java_assignment_4.Task_3;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Scanner;

public class LastModifiedDate {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the file path: ");
        String path = scanner.nextLine();
        File file = new File(path);
        if (file.exists() && file.isFile()) {
            long lastModified = file.lastModified();
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            String Date = sdf.format(lastModified);
            System.out.println("Last Modified Date: " + Date);
        } else {
            System.out.println("The file does not exist or is not a valid file.");
        }
        scanner.close();
    }
}
