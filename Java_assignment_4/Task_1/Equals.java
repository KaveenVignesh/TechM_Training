package java_assignment_4.Task_1;
import java.util.Arrays;
import java.util.Scanner;

public class Equals {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of elements in the arrays: ");
        int n = scanner.nextInt();

        Integer[] array1 = new Integer[n];
        Integer[] array2 = new Integer[n];

        System.out.println("Enter elements for first array:");
            for (int i = 0; i < n; i++) {
                array1[i] = scanner.nextInt();
            }

        System.out.println("Enter elements for second array:");
            for (int i = 0; i < n; i++) {
                array2[i] = scanner.nextInt();
            }

        System.out.println("Arrays.equals: " + Arrays.equals(array1, array2));
        System.out.println("Arrays.deepEquals: " + Arrays.deepEquals(array1, array2));

        scanner.close();
    }

}