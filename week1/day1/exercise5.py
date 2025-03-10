#Exercise 5 : Favorite numbers
my_fav_numbers = {7, 14, 21}
my_fav_numbers.add(42)
my_fav_numbers.add(99)
my_fav_numbers.remove(99)
friend_fav_numbers = {3, 8, 15}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(our_fav_numbers)