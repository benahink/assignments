import java.util.Scanner;

public class MyTodo {
    public static void main(String [] args) {

        Scanner sc = new Scanner(System.in);
        String choice = null;

        System.out.println("Please make a choice: ");
        System.out.println("");
        System.out.println("[1] add a task");
        System.out.println("[2] print tasks");
        System.out.println("{3} Exit");
        choice = sc.nextLine();

        while (Integer.parseInt(choice) != 3) {
            switch(choice) {
                case "1": 
                    System.out.println("Add a task");
                    choice = sc.nextLine();
                    break;
                case "2":
                    System.out.println("Print tasks");
                    choice = sc.nextLine();
                    break;
                case "3":
                    System.out.println("Exit");
                    choice = sc.nextLine();
                    break;
            }
        }
        System.out.println("Goodbye!");
    }
}