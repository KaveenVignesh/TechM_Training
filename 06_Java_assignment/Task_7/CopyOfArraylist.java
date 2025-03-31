package java_assignment_4.Task_7;

import java.util.ArrayList;
import java.util.Scanner;

public class CopyOfArraylist {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        ArrayList<String> colors = new ArrayList<>();
        System.out.println("enter colors to add in arraylist:");
        colors.add(input.nextLine().toLowerCase());
        colors.add(input.nextLine());
        colors.add(input.nextLine());
        colors.add(input.nextLine());
        colors.add(input.nextLine());
        System.out.println("List: " + colors);
        ArrayList<String> copy = new ArrayList<>(colors);
        System.out.println("Copied List: " + copy);
    }
}
