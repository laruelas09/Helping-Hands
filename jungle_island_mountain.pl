#!/usr/bin/perl
use strict;
use warnings;

# Creating a subroutine to help show the main menu
sub show_menu {
	print "1. Volunteer\n";
	print "2. Donate\n";
	print "3. View List of Volunteers and Donors\n";
	print "4. Exit\n";
	print "Please choose an option: ";
}

# Initialize variables
my %volunteers = ();
my %donors = ();
my $choice;

# Main execution loop
while (1) {
	# Show main menu
	show_menu();
	chomp ($choice = <STDIN>);

	if ($choice == 1) {
		# Prompt user for name
		print "Enter your name: ";
		chomp (my $name = <STDIN>);
		
		# Prompt user for hours volunteered
		print "Enter the number of hours you will volunteer: ";
		chomp (my $hours = <STDIN>);
		
		# Add name and hours to volunteers hash
		$volunteers{$name} = $hours;
		print "Thank you for volunteering!\n";
	}
	elsif ($choice == 2) {
		# Prompt user for name
		print "Enter your name: ";
		chomp (my $name = <STDIN>);
		
		# Prompt user for amount donated
		print "Enter the amount you will donate: ";
		chomp (my $amount = <STDIN>);
		
		# Add name and amount to donors hash
		$donors{$name} = $amount;
		print "Thank you for your donation!\n";
	}
	elsif ($choice == 3) {
		# Print out list of volunteers
		if (scalar(keys %volunteers) == 0) {
			print "No volunteers yet.\n";
		}
		else {
			print "List of Volunteers:\n";
			foreach my $name (sort keys %volunteers) {
				print "$name volunteered for $volunteers{$name} hours.\n";
			}
		}
		
		# Print out list of donors
		if (scalar(keys %donors) == 0) {
			print "No donors yet.\n";
		}
		else {
			print "List of Donors:\n";
			foreach my $name (sort keys %donors) {
				print "$name donated \$$donors{$name}.\n";
			}
		}
	}
	elsif ($choice == 4) {
		# Exit the program
		exit 0;
	}
	else {
		# Invalid choice
		print "Invalid choice. Please try again.\n";
	}
}