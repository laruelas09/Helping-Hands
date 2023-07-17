from random import randint

# define a function to generate random number
def random_number(start, end):
	random_num = randint(start, end)
	return random_num
 
# define a function to generate a list of random numbers
def random_list(size):
	random_list = [] 
	for num in range(size):
		random_num = random_number(1, 100)
		random_list.append(random_num)
	return random_list

# define a function to sort the list of random numbers
def sort_random_list(random_list):
	for i in range(len(random_list) - 1):
		for j in range(i + 1, len(random_list)):
		    if random_list[i] > random_list[j]:
				random_list[i], random_list[j] = random_list[j], random_list[i]
	return random_list

# define a function to print the sorted list of random numbers
def print_sorted_list(sorted_random_list):
	print("Sorted list is: ")
	for num in sorted_random_list:
		print(num, end=" ")

# define a main function to call all functions
def main(): 
	# call the random_list() function to generate a list of random numbers 
	random_list_generated = random_list(100)

	# call the sort_random_list() function to sort the generated list
	sorted_random_list = sort_random_list(random_list_generated)

	# call the print_sorted_list() to print the sorted list 
	print_sorted_list(sorted_random_list)

if __name__ == "__main__":
	main()