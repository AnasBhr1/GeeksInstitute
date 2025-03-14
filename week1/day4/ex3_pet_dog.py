# pet_dog.py

import random
from dog import Dog

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [dog.name for dog in args]
        print(f"{', '.join(names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet!")

# Example usage:

# Create dog instances
dog1 = PetDog("Buddy", 3, 15)
dog2 = PetDog("Charlie", 4, 20)

# Train dog1
dog1.train()

# Play with both dogs
dog1.play(dog2)

# Do a trick with dog1
dog1.do_a_trick()

# Try doing a trick with an untrained dog
dog2.do_a_trick()
