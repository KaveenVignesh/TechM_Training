package Thread;

public class CreatingThread2 {
    public static void main(String[] args) {
        Kt2Thread2 kt1 = new Kt2Thread2();
        Thread t1=new Thread(kt1);
        Thread t2=new Thread(kt1);
        t1.start();
        t2.start();
    }
}
class Kt2Thread2 extends Thread{
    public void run(){
        System.out.println("From ThreadTwo!");
        System.out.println(10/0);
    }
}
