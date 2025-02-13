package Thread;

public class CreatingThread {
    public static  void main(String[] args) {
        Kt1Thread1 t1 = new Kt1Thread1();
        t1.start();
    }
}
class Kt1Thread1 extends Thread{
    public void run(){
        System.out.println("From Kt1Thread");
        System.out.println("From Kt1Thread");
        System.out.println("From Kt1Thread");
    }
}
