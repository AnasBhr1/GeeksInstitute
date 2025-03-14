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


class TheIncredibles(Family):
    def __init__(self, last_name):
        super().__init__(last_name)

    def use_power(self, name):
        for member in self.members:
            if member['name'] == name:
                if member['age'] > 18:
                    print(f"{member['incredible_name']} can {member['power']}!")
                    return
                else:
                    raise Exception(f"{name} is not over 18 years old.")
        print(f"No member named {name} found.")

    def incredible_presentation(self):
        print("Here is our powerful family:")
        super().family_presentation()
        for member in self.members:
            print(f"{member['incredible_name']} has the power to {member['power']}!")


# Creating an instance of TheIncredibles class
incredible_family = TheIncredibles("Incredibles")

# Adding members to the family
incredible_family.born(name='Michael', age=35, gender='Male', is_child=False, power='fly', incredible_name='MikeFly')
incredible_family.born(name='Sarah', age=32, gender='Female', is_child=False, power='read minds', incredible_name='SuperWoman')

# Calling the incredible_presentation method
incredible_family.incredible_presentation()

# Adding Baby Jack
incredible_family.born(name='Jack', age=2, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')

# Calling the incredible_presentation method again
incredible_family.incredible_presentation()

# Testing the use_power method
try:
    incredible_family.use_power('MikeFly')  # Should print MikeFly's power
    incredible_family.use_power('BabyJack')  # Should raise an exception
except Exception as e:
    print(e)
