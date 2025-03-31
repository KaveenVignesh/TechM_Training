package input;

public class PrintStatements {
    static void outPrint(){
        System.out.print("1st example");
        System.out.print("2nd example");
    }
    static void outPrintln(){
        System.out.println("3rd example");
        System.out.println("4th example");
    }
  public void errPrint(){
        System.err.print("1st error print");
        System.err.print("2nd error print");
    }

    public static void main(String[] args) {
        PrintStatements.outPrint();
        PrintStatements.outPrintln();
        PrintStatements errprint=new PrintStatements();
        errprint.errPrint();
    }
}
