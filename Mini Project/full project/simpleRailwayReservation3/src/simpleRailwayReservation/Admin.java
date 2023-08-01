package simpleRailwayReservation;

import java.sql.*;
import java.util.*;
import java.util.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

public class Admin {
	
	RailwayReservation r = new RailwayReservation();
	Scanner sc = new Scanner(System.in);
	//encapsulation
    private String username;
	private String password;
	private String gender;
	private int age;
	
	// user Signup 

    public void user_signup() throws Exception {
        String uname;


        System.out.println("Enter Username: ");
        uname = sc.next();

        try (Connection c = DatabaseConnection.getConnection()) {
            Statement s = c.createStatement();
            ResultSet rl = s.executeQuery("select uname from user where uname='" + uname + "'");
            if (!rl.next()) {
                System.out.println("Please Enter the Password: ");
                password = sc.next();
                System.out.println("Please Enter your age: ");
                age = sc.nextInt();
                System.out.println("Enter Gender(M/F): ");
                gender = sc.next();
                user_db(uname, password, age, gender); // send this data to the user database
                r.menu();

            } else {
                System.out.println("Username already exists");
                System.out.println("Do you want to continue or return to the menu (y/n): ");
                String ch = sc.next();
                if (ch.equals("y")) {
                    r.user_mode();
                } else {
                    r.menu();
                }
            }
        } catch (SQLException e) {
            System.out.println("Error executing SQL query: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

	
	// User Login

 public int user_login() throws Exception {
    String uname;

    System.out.println("Enter UserName: ");
    uname = sc.next();
    System.out.println("Enter the Password: ");
    password = sc.next();

    try (Connection c = DatabaseConnection.getConnection()) {
        String query = "SELECT uname, pass FROM user WHERE uname = ?";
        PreparedStatement st = c.prepareStatement(query);
        st.setString(1, uname);
        ResultSet r = st.executeQuery();

        if (r.next()) {
            String storedPassword = r.getString("pass");
            if (password.equals(storedPassword)) {
                return 1; // Login success
            }
        }
    } catch (SQLException e) {
        System.out.println("Error executing SQL query: " + e.getMessage());
    } catch (Exception e) {
        System.out.println("Error: " + e.getMessage());
    }

    return 0; // Login failed
}
 
 public String getUsername() {
     return username;
 }

 public void setUsername(String username) {
     this.username = username;
 }

 public String getPassword() {
     return password;
 }

 public void setPassword(String password) {
     this.password = password;
 }

 public String getGender() {
     return gender;
 }

 public void setGender(String gender) {
     this.gender = gender;
 }

 public int getAge() {
     return age;
 }

 public void setAge(int age) {
     if (age >= 0 && age <= 150) {
         this.age = age;
     } else {
         System.out.println("Invalid age! Age must be between 0 and 150.");
     }
 }


	
	// train details 
	
	void train_info()
	{
		int num,seats;
		String name,bp,dp;
		int[] f=new int[4];
		
		
		System.out.print("Enter train number: ");
		num=sc.nextInt();
		if(num<9999&&num>99999)
		{
			System.out.println("Enter correct train number!!!");
		}
		else
		{	
			System.out.print("Enter Train name for "+num+" train: ");
			
			name=sc.next();
			java.sql.Date date=	null;
			System.out.print("Enter date of journey in (yyyy-mm-dd) format: ");
			String dt=sc.next();
			try
			{
				java.util.Date dt1=new SimpleDateFormat("yyyy-MM-dd").parse(dt);
				date=new java.sql.Date(dt1.getTime());
			}
			catch(Exception e)
			{
				System.out.println(e);
			}
		
			
			System.out.print("Enter Boarding Point: "); 
			bp=sc.next();
			System.out.print("Destination Point: ");
			dp=sc.next();
			
			System.out.print("Enter Departure time of journey in (hh:mm:ss) format: "); 
			String dtime=sc.next();
			
			System.out.print("Enter arrival time of journey in (hh:mm:ss) format: "); 
			String atime=sc.next();
			
			
			System.out.print("Enter the total number of seats in the train: ");
			seats=sc.nextInt();

			System.out.println("Enter price for each ticket type: ");
			System.out.print("First AC : "); 
			f[0]=sc.nextInt();
			System.out.print("Second AC : "); 
			f[1]=sc.nextInt();
			System.out.print("Third AC : "); 
			f[2]=sc.nextInt();
			System.out.print("Sleeper Class : "); 
			f[3]=sc.nextInt();
			
			
			train_db(num,name,seats,bp,dp,f[0],f[1],f[2],f[3],date,dtime,atime);
			System.out.print("The train "+num+"Details inserted in the database");
		}
	}
	
	// create the train details
	void create_train() throws Exception
	{	
		String ch="y";
		while(ch=="y")
		{
			train_info();
			System.out.print("Do you want to continue (y/n) : ");
			ch=sc.next();
		}
		r.admin_mode();
	}
	// display the train detail
	/// Polymorhphism
	void setwR(int tnum, String str1, int seats,String str10,String str11, int fAc,int sAc,int tAc,int sc,Date doj, String str7,String str9, int width)
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
	
	//display the train

    void display_train_db() {
        try {
            Connection c = DatabaseConnection.getConnection();
            System.out.println("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
            System.out.println("Train Number   Train Name     Seats          Boarding       Destination    First AC       Second AC      Third AC       Sleeper Coach  Journey date   Departure      Arrival");
            System.out.println("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");

            Statement st = c.createStatement();
            ResultSet r = st.executeQuery("SELECT * FROM train");
            while (r.next()) {
                setwR(r.getInt(1), r.getString(2), r.getInt(3), r.getString(4), r.getString(5), r.getInt(6), r.getInt(7), r.getInt(8), r.getInt(9), r.getDate(10), r.getString(11), r.getString(12), 15);
            }
        } catch (ClassNotFoundException e) {
            System.out.println("Error: MySQL JDBC driver not found.");
        } catch (SQLException e) {
            System.out.println("Error executing SQL query: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }


	// main train display function
	void display_train()
	{
		display_train_db();// call the display function
		try
		{
			System.out.print("Do you want to continue (y/n) respectively : ");
			String ch=sc.next();
			if(ch.equals("y"))
			{
				r.admin_mode();
			}
			else
			{
				r.menu();
			}
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
//	// train ticket display
//	void setwR(long pnr, String str1,int age,String str3, int seats,String str5,String str6,Timestamp tm,Date dot, int width)
//	{
//		String str=Long.toString(pnr);
//		System.out.print(str);
//		for (int x = str.length(); x < width; ++x) 
//		System.out.print(' ');	
//		System.out.print(str1);		
//		for (int x = str1.length(); x < width; ++x) 
//		System.out.print(' ');	
//		String str2=Integer.toString(age);
//		System.out.print(str2);
//		for (int x = str2.length(); x < width; ++x) 
//		System.out.print(' ');	
//		System.out.print(str3);
//		for (int x = str3.length(); x < width; ++x) 
//		System.out.print(' ');	
//		String str4=Integer.toString(seats);
//		System.out.print(str4);		
//		for (int x = str4.length(); x < width; ++x) 
//		System.out.print(' ');		
//		System.out.print(str5);
//		for (int x = str5.length(); x < width; ++x) 
//		System.out.print(' ');		
//		System.out.print(str6);
//		for (int x = str6.length(); x < width; ++x) 
//		System.out.print(' ');
//		
//		java.util.Date d=new java.util.Date();
//		d.setTime(tm.getTime());
//		DateFormat df = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
//		String str7 = df.format(d);
//		
//		
//		System.out.print(str7);
//		for (int x = str7.length(); x < width; ++x) 
//		System.out.print(' ');		
//		
//		DateFormat dF = new SimpleDateFormat("dd/MM/yyyy");
//		String str8 = dF.format(dot);
//		System.out.println(str8);
//	}

	//train ticket display
    void display_ticket() throws Exception {
        System.out.println("Enter the Train Number: ");
        int tnum = sc.nextInt();
        System.out.println("Enter the pnr no: ");
        long pnr = sc.nextLong();

        try {
            Connection c = DatabaseConnection.getConnection();
            String query = "SELECT * FROM ticket WHERE tnum = ? AND pnr = ?";
            PreparedStatement st = c.prepareStatement(query);
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
        } catch (ClassNotFoundException e) {
            System.out.println("Error: MySQL JDBC driver not found.");
        } catch (SQLException e) {
            System.out.println("Error executing SQL query: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        System.out.print("Do you want to continue (y/n) respectively  : ");
        String ch = sc.next();
        if (ch.equals("y")) {
            r.admin_mode();
        } else {
            r.menu();
        }
    }

	
	// display user 
	// Polymorhphism
	void setwR(String str,int age,String str3,Timestamp tm,int width)
	{
		System.out.print(str);
		for (int x = str.length(); x < width; ++x) 
		System.out.print(' ');		
		String str2=Integer.toString(age);
		System.out.print(str2);
		for (int x = str2.length(); x < width; ++x) 
		System.out.print(' ');	
		System.out.print(str3);
		for (int x = str3.length(); x < width; ++x) 
		System.out.print(' ');	
		java.util.Date d=new java.util.Date();
		d.setTime(tm.getTime());
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		String str7 = df.format(d);
		System.out.println(str7);

	}
	
	//display user
    void display_user() throws Exception {
        try {
            Connection c = DatabaseConnection.getConnection();
            System.out.println("---------------------------------------------------------------------------------------------");
            System.out.println("Username                 Age                      Gender                   Booking time");
            System.out.println("---------------------------------------------------------------------------------------------");

            Statement st = c.createStatement();
            ResultSet r = st.executeQuery("select * from user");
            while (r.next()) {
                setwR(r.getString(1), r.getInt(3), r.getString(4), r.getTimestamp(5), 25);
            }
        } catch (ClassNotFoundException e) {
            System.out.println("Error: MySQL JDBC driver not found.");
        } catch (SQLException e) {
            System.out.println("Error executing SQL query: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }

        System.out.print("Do you want to continue or return to the main menu (y/n) respectively: ");
        String ch = sc.next();
        if (ch.equals("y")) {
            r.admin_mode();
        } else {
            r.menu();
        }
    }	

	
	// user database
    void user_db(String uname, String pass, int age, String gender) {
        try {
            Connection c = DatabaseConnection.getConnection();
            Date date = new Date();
            Timestamp st = new Timestamp(date.getTime());

            // Insert the data into the database
            String insertUserQuery = "INSERT INTO user(uname, pass, age, gender, timestamp) VALUES (?, ?, ?, ?, ?)";
            PreparedStatement st1 = c.prepareStatement(insertUserQuery);
            st1.setString(1, uname);
            st1.setString(2, pass);
            st1.setInt(3, age);
            st1.setString(4, gender);
            st1.setTimestamp(5, st);
            st1.executeUpdate();
        } catch (ClassNotFoundException e) {
            System.out.println("Error: MySQL JDBC driver not found.");
        } catch (SQLException e) {
            System.out.println("Error executing SQL query: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

	// train database
	
	void train_db(int tnum,String tname,int seats,String bp,String dp,int i,int j,int k,int l,java.sql.Date date,String dtime,String atime)
	{
		
		
		
		
		try
		{
			String mysqlJDBCDriver = "com.mysql.cj.jdbc.Driver"; 
            String url = "jdbc:mysql://localhost:3306/RailwayReservation"; 
            String user = "root"; 
            String pass = "Tarun@TN41"; 
            Class.forName(mysqlJDBCDriver);
           Connection c = DriverManager.getConnection(url, user, pass);
			PreparedStatement st=c.prepareStatement("insert into train (tnum,tname,seats,bp,dp,fAC,sAC,tAC,sc,doj,dtime,atime) values(?,?,?,?,?,?,?,?,?,?,?,?)");
			st.setInt(1,tnum);
			st.setString(2,tname);
			st.setInt(3,seats);
			st.setString(4,bp);
			st.setString(5,dp);	
			st.setInt(6,i);
			st.setInt(7,j);
			st.setInt(8,k);
			st.setInt(9,l);
			st.setDate(10,date);
			st.setString(11,dtime);
			st.setString(12,atime);			
			st.executeUpdate();
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
	
	

}
