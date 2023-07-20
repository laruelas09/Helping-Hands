import java.io.*; 
import java.util.*; 

class HelpingHands { 

	public static void main(String[] args) 
	{ 
		int maxHelpers = 2000; 
		List<Integer> helperList = new ArrayList<>(); 
		
		for (int i = 0; i < maxHelpers; i++) { 
			helperList.add(i); 
		} 
		
		System.out.println("Welcome to the 'Helping Hands' program! We are happy to have you here!"); 
		System.out.println("How can we help you? Please enter your desired tasks"); 
		
		Scanner scan = new Scanner(System.in); 
		String task = scan.nextLine(); 
		
		if (task.equals("help")) { 
			System.out.println("We are here to provide you with a helping hand!"); 
			System.out.println("Please tell us how many helpers you need:"); 
			
			int count = scan.nextInt(); 
			
			if (count > maxHelpers) { 
				System.out.println("We are sorry, we can't help you with so many helpers. Please try again."); 
			} 
			else { 
				System.out.println("Great! Here are your "+count+" helpers:"); 
				
				for (int i = 0; i < count; i++) { 
					int index = (int)(Math.random() * (helperList.size() - 1)); 
					System.out.println("Helper #" + helperList.remove(index)); 
				} 
				
				System.out.println("These helpers are here to help you out. We wish you all the best!"); 
			} 
		} 
		else { 
			System.out.println("Sorry, we don't understand your request. Please try again."); 
		} 
		
		scan.close(); 
	} 
}