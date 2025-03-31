package collections.list;

import java.util.*;

public class ListCollection {
    public static void main(String[] args) {
        System.out.println("example of different list:");
        ArrayListExample arraylist=new ArrayListExample();
        LinkedListExample linkedlist=new LinkedListExample();
        VectorExample vector=new VectorExample();
        StackExample stack=new StackExample();
        arraylist.start();
        linkedlist.start();
        vector.start();
        stack.start();
    }
}

class ArrayListExample extends Thread {
    public void run() {
        List<Integer> list1 = new ArrayList<>();
        System.out.println("Is list1 empty? " + list1.isEmpty());
        list1.add(35);
        list1.add(23);
        list1.add(67);
        list1.add(82);
        list1.add(56);
        list1.add(36);
        list1.add(94);
        list1.add(85);
        System.out.println("Is list1 empty? " + list1.isEmpty());
        System.out.println("The given list is:" + list1);
        System.out.println("Number of elements in the list: " + list1.size());
        list1.add(12);
        System.out.println("After adding one element:");
        System.out.println("The given list is :" + list1);
        System.out.println("The number of elements in the list: " + list1.size());
        System.out.println("Is 49 available in the list:" + list1.contains(49));
        System.out.println("The given list before removing elements is :" + list1);
    }
}
class LinkedListExample extends Thread {
    public void run() {
        List<Integer> list1 = new LinkedList<>();
        System.out.println("Is list1 empty? " + list1.isEmpty());
        list1.add(5);
        list1.add(23);
        list1.add(7);
        list1.add(82);
        list1.add(5);
        list1.add(22);
        list1.add(9);
        list1.add(49);
        System.out.println("Is list1 empty? " + list1.isEmpty());
        System.out.println("The given list is:" + list1);
        System.out.println("Number of elements in the list: " + list1.size());
        list1.add(12);
        System.out.println("After adding one element:");
        System.out.println("The given list is :" + list1);
        System.out.println("The number of elements in the list: " + list1.size());
        System.out.println("Is 86 available in the list:" + list1.contains(86));
        System.out.println("The given list before removing elements is :" + list1);
    }
}
class VectorExample extends Thread {
    public void run() {
        List<Integer> list1 = new Vector<>();
        System.out.println("Is list1 empty? " + list1.isEmpty());
        list1.add(3);
        list1.add(55);
        list1.add(6);
        list1.add(2);
        list1.add(56);
        list1.add(477);
        list1.add(21);
        list1.add(30);
        System.out.println("Is list1 empty? " + list1.isEmpty());
        System.out.println("The given list is:" + list1);
        System.out.println("Number of elements in the list: " + list1.size());
        list1.add(12);
        System.out.println("After adding one element:");
        System.out.println("The given list is :" + list1);
        System.out.println("The number of elements in the list: " + list1.size());
        System.out.println("Is 56 available in the list:" + list1.contains(56));
        System.out.println("The given list before removing elements is :" + list1);
    }
}
class StackExample extends Thread {
    public void run() {
        List<Integer> list1 = new Stack<>();
        System.out.println("Is list1 empty? " + list1.isEmpty());
        list1.add(96);
        list1.add(24);
        list1.add(67);
        list1.add(82);
        list1.add(56);
        list1.add(77);
        list1.add(91);
        list1.add(101);
        System.out.println("Is list1 empty? " + list1.isEmpty());
        System.out.println("The given list is:" + list1);
        System.out.println("Number of elements in the list: " + list1.size());
        list1.add(12);
        System.out.println("After adding one element:");
        System.out.println("The given list is :" + list1);
        System.out.println("The number of elements in the list: " + list1.size());
        System.out.println("Is 66 available in the list:" + list1.contains(66));
        System.out.println("The given list before removing elements is :" + list1);
    }
}
