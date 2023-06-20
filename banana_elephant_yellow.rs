// Import modules
use std::io;

fn main() 
{
    println!("Welcome to Helping Hands! This command line app allows you to easily donate to a charity of your choice.");

    loop
    {
        println!("Please select an option:\n1. Donate\n2. View Donation History\n3. Exit");

        let mut selection = String::new();

        io::stdin().read_line(&mut selection)
            .expect("Failed to read line");

        let selection: u32 = match selection.trim().parse()
        {
            Ok(num) => num,
            Err(_) => 
            {
                println!("Please enter a valid selection 1, 2, or 3!");
                continue;
            },
        };

        match selection
        {
            1 => 
            {
                println!("Choose charity:\n1. Food Bank\n2. Animal Shelter\n3. Education Fund");

                let mut charity = String::new();

// Read user input
                io::stdin().read_line(&mut charity)
                    .expect("Failed to read line");

                let charity: u32 = match charity.trim().parse()
                {
                    Ok(num) => num,
                    Err(_) => 
                    {
                        println!("Please enter a valid selection 1, 2, or 3!");
                        continue;
                    },
                };

// Make donation
                match charity
                {
                    1 => println!("You have donated to the Food Bank!\n"),
                    2 => println!("You have donated to the Animal Shelter!\n"),
                    3 => println!("You have donated to the Education Fund!\n"),
                    _ => println!("Invalid selection!"),
                }

            },
            2 => 
            {
                println!("Your donation history:");
                println!("Food Bank:		$0.00");
                println!("Animal Shelter:	$0.00");
                println!("Education Fund:	$0.00");
            },
            3 => 
            {
                println!("Thank you for using Helping Hands!");
                break;
            },
            _ => println!("Invalid selection!"),
        }

    }
}