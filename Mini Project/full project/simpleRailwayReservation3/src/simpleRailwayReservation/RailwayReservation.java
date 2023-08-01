package simpleRailwayReservation;
import java.util.*;


public class RailwayReservation{
	Scanner sc = new Scanner(System.in);
	
	// admin page for login
	void admin_log() throws Exception{
		System.out.print("Enter password : ");
		String ps = sc.next();
		if (ps.equals("Admin@123")) {
			admin_mode();
		} else {
			System.out.println("Wrong password !!!!!!");
			menu();
		}
	}
	// menu for admin
	void admin_mode() throws Exception
	{
		Admin ad = new Admin();
		System.out.println(
				"-----------------------ADMINISTRATOR MENU-------------------------------\n1. Create detail for trains\n2. Display all trains details\n3. Display Ticket of a train\n4. Display all users\n5. Return to main menu \n6. Exit");
		int ch = sc.nextInt();
		switch (ch) {
			case 1:
				ad.create_train();
				break;

			case 2:
				ad.display_train();
				break;
			case 3:
				ad.display_ticket();
				break;
			case 4:
				ad.display_user();
				break;

			case 5:
				menu();
				break;
			default:
				System.exit(0);
				break;
		}
	}
		 

	// user page for login
	void user_log() throws Exception{
		Admin ad = new Admin(); // make Admin class as Object
		System.out.println("               WELCOME TO USER MENU                      ");
		System.out.println("1.Login\n2.Signup\n3.Main Menu\n4.Exit");
		int u_no = sc.nextInt();
		switch(u_no) {
			case 1:
				user_mode(); 
				break;
			case 2:
				ad.user_signup(); 
				break;
			case 3:
				menu();
				break;
			default:
				System.exit(0);
				break;
		}

	}
	
	// user menu
	void user_mode() throws Exception{
		User us = new User(); // make user class as object
		Admin ad = new Admin(); // make Admin class as object
		if(ad.user_login()== 1) { // it check if the user is login successfully 
			System.out.println("You SuccessFully Login");
			System.out.println("1.Book Ticket\n2.Cancel Ticket\n3.view\n4.view Tickets\n5.Main Menu\n6.Exit");
			int u_no = sc.nextInt();
			switch(u_no) {
				case 1:
					us.Booking(); // user can book the ticket
					break;
				case 2:
					us.cancel1(); // user can cancel the ticket
					break;
				case 3:
					us.view1(); // user can view the ticket
					break;
				case 4:
					us.display_ticket(); // user can view the ticket
					break;
				case 5:
					menu(); // if not intrested move to menu page
					break;
				default:
					System.exit(0);
					
			}
			
		}else {
			System.out.println("Worng Username or password......");
			System.out.println("if you don't have account make signup");
			user_log();
		}
	}
	// Menu Method
	void menu()throws Exception{

		System.out.println("                 MAIN MENU                  ");
		System.out.println("1.User Mode\n2.Admin Mode\n3.Exit");
		System.out.println();
		
		int m_no = sc.nextInt();
		switch(m_no) {
			case 1:
				user_log();//goes to user page
				break;
			case 2:
				admin_log();//goes to admin page
			default:
				System.exit(0);
				break;
		}
	}
	
	// main method
	public static void main(String args[]) throws Exception {
		
		System.out.println("                                RAILWAY RESERVATION SYSTEM                                     ");
		System.out.println("-----------------------------------------------------------------------------------------------");
		System.out.println();
		System.out.println();
		
		RailwayReservation rail = new RailwayReservation(); // make Railway Reservation as object
		rail.menu();// first call the menu method
	}
	  
}