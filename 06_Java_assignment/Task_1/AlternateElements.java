package java_assignment_4.Task_1;

import java.util.Arrays;
import java.util.Scanner;

public class AlternateElements {

    public static int[] copyAlternateElements(int[] array) {
        int[] result = new int[(array.length + 1) / 2];
        for (int i = 0, j = 0; i < array.length; i += 2, j++) {
            result[j] = array[i];
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner in =new Scanner(System.in);
        System.out.println("Enter the size of array:");
        int size= in.nextInt();
        int[] array=new int[size];
        System.out.println("Enter the array elements:S");
        for(int i=0;i<array.length;i++){
            array[i]=in.nextInt();
        }
        System.out.println("Copy Alternate elements : "+Arrays.toString(copyAlternateElements(array)));
    }
}
