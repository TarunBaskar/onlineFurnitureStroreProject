package simpleRailwayReservation;

import java.util.*;

import java.util.Date;
import java.sql.*;
import java.text.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

// abstraction
abstract class TicketBooking {
    Scanner sc = new Scanner(System.in);

    // Generate random PNR number
    protected long generateRandomPNR() {
        return (long) (Math.random() * 10000000000L); // 10-digit PNR number
    }

    // Generate random seat numbers
    protected int[] generateRandomSeatNumbers(int numOfSeats) {
        int[] seatNumbers = new int[numOfSeats];
        Random rand = new Random();
        for (int i = 0; i < numOfSeats; i++) {
            seatNumbers[i] = rand.nextInt(100) + 1; 
        }
        return seatNumbers;
    }

    abstract void Booking() throws Exception;

}

// Inheritance
public class User extends TicketBooking {
    Scanner sc = new Scanner(System.in);
    Admin ad = new Admin();
    RailwayReservation r = new RailwayReservation();
    // Passenger Details Declaration
    String pname[] = new String[1000];
    int page[] = new int[1000];
    String pgender[] = new String[1000];

    // Train Details Declaration
    String tname, bp, dp; // train_name,boarding_point,destination_point
    int tnum, seat, cnum, ch; // train Number,seat,concessionCategory,coach

    // Generate random PNR number
    private long generatePNR() {
        return (long) (Math.random() * 9000000000L) + 1000000000L;
    }

    // Generate random seat number
    private int generateSeatNumber() {
        return (int) (Math.random() * 100) + 1;
    }
    
    // user ticket booking

    void Booking() throws Exception {
        System.out.println("Enter the train number: ");
        tnum = sc.nextInt();
        if (check(tnum) == 0) {
            System.out.println("Train number doesn't exist");
            r.user_mode();
        }
        System.out.println("Enter the Boarding: ");
        bp = sc.next();

        System.out.println("Enter the Destination: ");
        dp = sc.next();

        System.out.print("Number of seats required: ");
        seat = sc.nextInt();
        Date dt2 = null;
        try {
            System.out.println("Enter the date of journey in (yyyy-MM-dd) format: ");
            String dt = sc.next();
            Date dt1 = new SimpleDateFormat("yyyy-MM-dd").parse(dt);
            dt2 = new Date(dt1.getTime());
        } catch (Exception e) {
            System.out.println(e);
        }

        int j = 0, k = 0;
        for (int i = 0; i < seat; i++) {
            System.out.println("Enter " + (i + 1) + " Passenger Name: ");
            pname[i] = sc.next();
            System.out.println("Enter " + (i + 1) + " Passenger age: ");
            page[i] = sc.nextInt();

            if ((page[i] > 0 && page[i] <= 12) || (page[i] >= 60 && page[i] < 120)) {
                k++;
            }
            if (page[i] < 0 || page[i] > 120) {
                j = 1;
                System.out.println("Enter the Valid Age");
            }
            System.out.println("Enter " + (i + 1) + " Passenger Gender");
            pgender[i] = sc.next();

        }
        if (j == 1) {
            return;
        }

        System.out.println("Enter the class: ");
        System.out.println("1. First AC\n2. Second AC \n3.Third AC\n4. Sleeper");
        ch = sc.nextInt();
        String coach = "";
        switch (ch) {
            case 1:
                coach = "First AC";
                break;
            case 2:
                coach = "Second AC";
                break;
            case 3:
                coach = "Third AC";
                break;
            case 4:
                coach = "Sleeper coach";
                break;

            default:
                System.out.println("Enter the number in the given options");
                break;
        }

        System.out.println("Enter the Concession Category: ");
        System.out.println("1. Military Personnel\n2. Doctor\n3. none");
        cnum = sc.nextInt();

        if (cnum != 1 && cnum != 2 && cnum != 3) {
            System.out.print("Choose the correct option from above! ");
            r.user_mode();
        }

        System.out.println("Continue the Process (y/n): ");
        String confirm = sc.next();

        if (confirm.equals("n")) {
            System.out.println("Your Ticket is not Booked!");
            r.user_mode();
        }

        int amt = reserve(tnum, tname, bp, dp, seat, ch);
        if (amt == 0) {
            System.out.println("Train Number doesn't exist");
            r.user_mode();
        }

        long pnr = generateRandomPNR();
        int[] seatNumbers = generateRandomSeatNumbers(seat);
        for (int i = 0; i < seat; i++) {
            seatNumbers[i] = generateSeatNumber();
        }

        if (cnum == 1) {
            System.out.println("Enter the how many Military personnel are traveling (35% discount): ");
            int m = sc.nextInt();
            double amount = (amt - ((m * (amt / seat)) * 0.35)) + ((k * (amt / seat)) * 0.5);
            System.out.println("Amount to be Paid is: " + amount);
        } else if (cnum == 2 || cnum==3) {
            System.out.println("Amount to be paid is " + (amt - ((k * (amt / seat)) * 0.5)));
        }

        ticket(pname, page, coach, tnum, dt2, pnr, seatNumbers);
    }

    // check the train available
    int check(int tnum) throws Exception {
        int result = 0;
        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement("SELECT * FROM train WHERE tnum=?")) {
            statement.setInt(1, tnum);
            ResultSet rs = statement.executeQuery();
            if (rs.first()) {
                result = 1;
            }
        } catch (SQLException e) {
            System.out.print(e);
        }
        return result;
    }

    // reserve the seat in the train
    int reserve(int tnum, String tname, String bp, String dp, int seat, int ch) throws ClassNotFoundException {
        int flag = 0;
        int amt = 0;
        try (Connection connection = DatabaseConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement("SELECT * FROM train WHERE tnum=?")) {
            statement.setInt(1, tnum);
            ResultSet rs = statement.executeQuery();

            if (rs.next()) {
                flag = 1;
                if (ch == 1) {
                    amt = seat * rs.getInt("fAC");
                } else if (ch == 2) {
                    amt = seat * rs.getInt("sAC");
                } else if (ch == 3 || ch == 4) {
                    amt = seat * rs.getInt("tAC");
                } else {
                    amt = seat * rs.getInt("sc");
                }

                try (PreparedStatement updateStatement = connection.prepareStatement("UPDATE train SET seats=seats-? WHERE tnum=?")) {
                    updateStatement.setInt(1, seat);
                    updateStatement.setInt(2, tnum);
                    updateStatement.executeUpdate();
                }
            }
        } catch (SQLException e) {
            System.out.print(e);
        }
        if (flag == 0) {
            return 0;
        } else {
            return amt;
        }
    }


    // ticket detail  are store in database
    void ticket(String pname[], int page[], String coach, int tnum, Date dt2, long pnr, int[] seatNumbers) throws ClassNotFoundException {
        try (Connection connection = DatabaseConnection.getConnection()) {
            Date date = new Date();
            Timestamp sqt = new Timestamp(date.getTime());

            String insertChartQuery = "INSERT INTO ticket (pnr, name, age, gender, seat_num, coach, status, timestamp, dot, tnum) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            for (int i = 0; i < pname.length; i++) {
                PreparedStatement st = connection.prepareStatement(insertChartQuery);
                st.setLong(1, pnr);
                st.setString(2, pname[i]);
                st.setInt(3, page[i]);
                st.setString(4, pgender[i]); // Assuming pgender is a member variable in the User class
                st.setInt(5, seatNumbers[i]);
                st.setString(6, coach);
                st.setString(7, "confirm");
                st.setTimestamp(8, sqt);
                st.setDate(9, new java.sql.Date(dt2.getTime()));
                st.setInt(10, tnum);
                st.executeUpdate();
                System.out.println("Congrats!!!! Your ticket is booked.");
                System.out.println("PNR Number: " + pnr + " (Note: This is your PNR number)");
                r.user_mode();
            }
        } catch (SQLException e) {
            System.out.println("Error executing SQL query: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

	
    
    protected long generateRandomPNR() {
        return (long) (Math.random() * 10000000000L); // 10-digit PNR number
    }
    
    
    protected int[] generateRandomSeatNumbers(int numOfSeats) {
        int[] seatNumbers = new int[numOfSeats];
        Random rand = new Random();
        for (int i = 0; i < numOfSeats; i++) {
            seatNumbers[i] = rand.nextInt(100) + 1; // Assuming seat numbers range from 1 to 100
        }
        return seatNumbers;
    }
   
    // display ticket details
    void display_ticket() throws Exception {
        System.out.println("Enter the Train Number: ");
        int tnum = sc.nextInt();
        System.out.println("Enter the pnr no: ");
        long pnr = sc.nextLong();

        try (Connection connection = DatabaseConnection.getConnection()) {
            String query = "SELECT * FROM ticket WHERE tnum = ? AND pnr = ?";
            PreparedStatement st = connection.prepareStatement(query);
            st.setInt(1, tnum);
            st.setLong(2, pnr);
            ResultSet rs = st.executeQuery();

            while (rs.next()) {
                long ticketPNR = rs.getLong("pnr");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                String gender = rs.getString("gender");
                int seatNumber = rs.getInt("seat_num");
                String coach = rs.getString("coach");
                String status = rs.getString("status");
                Timestamp timestamp = rs.getTimestamp("timestamp");
                Date dateOfTravel = rs.getDate("dot");
                int trainNumber = rs.getInt("tnum");

                System.out.println("************************************");
                System.out.println("PNR Number: " + ticketPNR);
                System.out.println("Train Number: " + trainNumber);
                System.out.println("Name: " + name);
                System.out.println("Age: " + age);
                System.out.println("Gender: " + gender);
                System.out.println("Seat Number: " + seatNumber);
                System.out.println("Coach: " + coach);
                System.out.println("Status: " + status);
                System.out.println("Timestamp: " + timestamp);
                System.out.println("Date of Travel: " + dateOfTravel);
                System.out.println("************************************");
            }
        } catch (SQLException e) {
            System.out.println("Error executing SQL query: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        System.out.print("Do you want to continue (y/n) respectively  : ");
        String ch = sc.next();
        if (ch.equals("y")) {
            r.user_mode();
        } else {
            r.menu();
        }
    }

	
	// cancel the ticket
	void cancel1() throws Exception
	{
		cancel();
		System.out.print("Do you want to continue (y/n) respectively  : ");
		String ch=sc.next();
		if(ch.equals("y"))
		{
			r.user_mode();
		}
		else
		{
			r.menu();
		}
	}
	
	
	 
	void cancel() throws Exception {
	    long pnr;
	    String j = "cancel";

	    try (Connection connection = DatabaseConnection.getConnection()) {
	        System.out.print("Enter PNR Number: ");
	        pnr = sc.nextLong();

	        // Create an update ResultSet
	        Statement stmt = connection.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
	        ResultSet r = stmt.executeQuery("SELECT * FROM ticket WHERE pnr='" + pnr + "'");

	        if (r.first()) {
	            // Perform delete operation on the ResultSet
	            r.deleteRow();
	            System.out.println("Ticket with PNR " + pnr + " has been canceled and removed from the database.");
	        } else {
	            System.out.println("PNR number does not exist.");
	        }

	        // Close the ResultSet and Statement
	        r.close();
	        stmt.close();
	    } catch (SQLException e) {
	        System.out.println("Error executing SQL query: " + e.getMessage());
	    } catch (Exception e) {
	        System.out.println("Error: " + e.getMessage());
	    }
	}

    
    // view the train detail
	void view() throws Exception {
	    System.out.print("From: ");
	    String from = sc.next();
	    System.out.print("To: ");
	    String to = sc.next();

	    try (Connection c = DatabaseConnection.getConnection()) {
	        System.out.println("***************************************************************************************************************************************************************************************");
	        System.out.println("Train Number   Train Name     Seats          Boarding       Destination    First AC       Second AC      Third AC       Sleeper Coach  Journey date   Departure      Arrival");
	        System.out.println("***************************************************************************************************************************************************************************************");

	        String query = "SELECT * FROM train WHERE bp=? AND dp=?";
	        PreparedStatement st = c.prepareStatement(query);
	        st.setString(1, from);
	        st.setString(2, to);
	        ResultSet r = st.executeQuery();

	        while (r.next()) {
	            setw(r.getInt(1), r.getString(2), r.getInt(3), r.getString(4), r.getString(5), r.getInt(6), r.getInt(7), r.getInt(8), r.getInt(9), r.getDate(10), r.getString(11), r.getString(12), 15);
	        }
	    } catch (SQLException e) {
	        System.out.println("Error executing SQL query: " + e.getMessage());
	    } catch (Exception e) {
	        System.out.println("Error: " + e.getMessage());
	    }
	}


void view1() throws Exception
{
	view();
	System.out.print("Do you want to continue (y/n) respectively  : ");
	String ch=sc.next();
	if(ch.equals("y"))
	{
		r.user_mode();
	}
	else
	{
		r.menu();
	}
}

void setw(int tnum, String str1, int seats,String str10,String str11, int fAc,int sAc,int tAc,int sc,Date doj, String str7,String str9, int width)
{
	String str=Integer.toString(tnum);
	System.out.print(str);
	for (int x = str.length(); x < width; ++x) 
	System.out.print(' ');	
	System.out.print(str1);		
	for (int x = str1.length(); x < width; ++x) 
	System.out.print(' ');		
	String str8=Integer.toString(seats);
	System.out.print(str8);		
	for (int x = str8.length(); x < width; ++x) 
	System.out.print(' ');		
	System.out.print(str10);		
	for (int x = str10.length(); x < width; ++x) 
	System.out.print(' ');
	System.out.print(str11);		
	for (int x = str11.length(); x < width; ++x) 
	System.out.print(' ');		
	String str2=Integer.toString(fAc);
	System.out.print(str2);
	for (int x = str2.length(); x < width; ++x) 
	System.out.print(' ');	
	String str3=Integer.toString(sAc);
	System.out.print(str3);
	for (int x = str3.length(); x < width; ++x) 
	System.out.print(' ');	
	String str4=Integer.toString(tAc);
	System.out.print(str4);
	for (int x = str4.length(); x < width; ++x) 
	System.out.print(' ');	
	String str5=Integer.toString(sc);
	System.out.print(str5);
	for (int x = str5.length(); x < width; ++x) 
	System.out.print(' ');
	
	DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	String str6 = df.format(doj);
	System.out.print(str6);
	for (int x = str6.length(); x < width; ++x) 
	System.out.print(' ');
	System.out.print(str7);
	for (int x = str7.length(); x < width; ++x) 
	System.out.print(' ');
	System.out.println(str9);
}

}
