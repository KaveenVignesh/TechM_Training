package java_assignment_4.Task_7;

import java.util.LinkedList;
import java.util.Scanner;

public class InsertAtLast {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        LinkedList<String> colors = new LinkedList<>();
        System.out.println("enter colors to add in arraylist:");
        colors.add(input.nextLine().toLowerCase());
        colors.add(input.nextLine());
        colors.add(input.nextLine());
        colors.add(input.nextLine());
        colors.add(input.nextLine());
        System.out.println("list: " + colors);
        System.out.println("enter element to insert at Last: ");
        colors.addLast(input.nextLine());
        System.out.println("Updated LinkedList: " + colors);
    }
}
