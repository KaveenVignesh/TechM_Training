package collections.set;

import java.util.*;

public class SetSampleTestClass {

    public static void setSample(HashSet<Integer> hs){

        System.out.println("HashSet Size: " + hs.size());
        System.out.println("Elements in HashSet: " + hs);
        System.out.print("Using iterator : ");
        Iterator<Integer> iterator = hs.iterator();
        while (iterator.hasNext())
            System.out.print(iterator.next() + " ");
        System.out.println();
        System.out.print("Using enhanced for loop : ");
        for (Integer element : hs)
            System.out.print(element + " ");
        hs.remove(30);
        System.out.println("\nHashSet after removing element : " + hs);
        System.out.print("ELements divisible by 7:");
        for (Integer element: hs)
            if(element%7==0)
                System.out.print(element+" ");
    }
    public static void setSample(LinkedHashSet<String> hs){
        System.out.println("HashSet Size: " + hs.size());
        System.out.println("Elements in HashSet: " + hs);
        System.out.print("Using iterator : ");
        Iterator<String> iterator = hs.iterator();
        while (iterator.hasNext())
            System.out.print(iterator.next() + " ");
        System.out.println();
        System.out.print("Using enhanced for loop : ");
        for (String element : hs)
            System.out.print(element + " ");
        hs.remove("AXZZ");
        System.out.println("\nHashSet after removing element : " + hs);
        System.out.print("ELements Size more than 5:");
        for (String element: hs)
            if(element.length()>5)
                System.out.print(element+" ");
    }
    public static void setSample(TreeSet<Double> hs){
        System.out.println("HashSet Size: " + hs.size());
        System.out.println("Elements in HashSet: " + hs);
        System.out.print("Using iterator : ");
        Iterator<Double> iterator = hs.iterator();
        while (iterator.hasNext())
            System.out.print(iterator.next() + " ");
        System.out.println();
        System.out.print("Using enhanced for loop : ");
        for (Double element : hs)
            System.out.print(element + " ");
        hs.remove(1.212);
        System.out.println("\nHashSet after removing element : " + hs);
        System.out.print("ELements Size more than 5:");
        for (Double element: hs)
            if(element>20)
                System.out.print(element+" ");
    }
    public static void main(String[] args) {
        HashSet<Integer> hs = new HashSet<>();
        hs.add(1);
        hs.add(5);
        hs.add(9);
        hs.add(42);
        hs.add(21);
        hs.add(14);
        hs.add(30);
        hs.add(35);
        setSample(hs);
        LinkedHashSet<String> hs1 = new LinkedHashSet<>();
        hs1.add("A");
        hs1.add("AB");
        hs1.add("ABCD");
        hs1.add("ABCDED");
        hs1.add("REFDSSA");
        hs1.add("AVGVDDSA");
        hs1.add("LIYRWSA");
        hs1.add("AXZZ");
        setSample(hs1);
        TreeSet<Double> hs2 = new TreeSet<>();
        hs2.add(1.255);
        hs2.add(52.155);
        hs2.add(12.2555);
        hs2.add(44.244);
        hs2.add(7.7441);
        hs2.add(40.299);
        hs2.add(20.2763);
        hs2.add(30.542);
        setSample(hs2);

    }
}
