class Family:
    def __init__(self, last_name):
        self.members = []
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations on the new family member: {kwargs['name']}!")

    def is_18(self, name):
        for member in self.members:
            if member['name'] == name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Last Name: {self.last_name}")
        for member in self.members:
            print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Child: {member['is_child']}")

# Creating an instance of the Family class with the last name "Smith"
my_family = Family("Smith")

# Adding members to the family
my_family.born(name='Michael', age=35, gender='Male', is_child=False)
my_family.born(name='Sarah', age=32, gender='Female', is_child=False)

# Checking if a family member is over 18
print(my_family.is_18("Michael"))  # True
print(my_family.is_18("Sarah"))   # True

# Presenting the family
my_family.family_presentation()
