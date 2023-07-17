#!/usr/bin/perl

# This is the main code of the "Helping Hands" program.

use strict;
use warnings;

# Declare global variables

my $num_teams;
my ($team_1, $team_2, $team_3, $team_4);
my ($sponsor1, $sponsor2);
my @team_members;
my %task_list;

# Set the number of teams

$num_teams = 4;

# Assign the four teams to variables

$team_1 = "Team 1";
$team_2 = "Team 2";
$team_3 = "Team 3";
$team_4 = "Team 4";

# Set the two sponsors

$sponsor1 = "Sponsor 1";
$sponsor2 = "Sponsor 2";

# Set the list of team members

@team_members = ("John Smith", "Jane Doe", "James Jones", "Jill Johnson", "Jack Brown", "Julie Wilson");

# Set the task list

$task_list{"Team 1"} = "Task 1";
$task_list{"Team 2"} = "Task 2";
$task_list{"Team 3"} = "Task 3";
$task_list{"Team 4"} = "Task 4";

# Print out the welcome message 

print "Welcome to the Helping Hands Program!\n";
print "We have $num_teams teams working on various tasks.\n";
print "Our sponsors are $sponsor1 and $sponsor2.\n";
print "The team members are:\n";

# Print out the list of team members

foreach my $member(@team_members){
	print "$member\n";
}

# Print out the tasks for each team

print "\nThe tasks for each team are:\n";
print "$team_1: $task_list{$team_1}\n";
print "$team_2: $task_list{$team_2}\n";
print "$team_3: $task_list{$team_3}\n";
print "$team_4: $task_list{$team_4}\n";

# Print out instructions

print "\nPlease assign each team member to a team and a task.\n";
print "Thank you for your help!\n";