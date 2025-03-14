class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
        return (self.weight / self.age) * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_dog_power = other_dog.run_speed() * other_dog.weight
        
        if self_power > other_dog_power:
            return f'{self.name} won the fight'
        elif self_power < other_dog_power:
            return f'{other_dog.name} won the fight'
        else:
            return 'It\'s a tie'

# Create 3 dog instances
dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Bella", 3, 18)
dog3 = Dog("Max", 4, 25)

# Test the methods
print(dog1.bark())  # Rex is barking
print(dog2.run_speed())  # 60.0
print(dog3.fight(dog2))  # Max won the fight
