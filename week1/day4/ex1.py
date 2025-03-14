class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# Creating instances of the cats
bengal = Bengal("Bengal Cat", 3)
chartreux = Chartreux("Chartreux Cat", 2)
siamese = Siamese("Siamese Cat", 4)

# List of all cats
all_cats = [bengal, chartreux, siamese]

# Sara's pets
sara_pets = Pets(all_cats)

# Taking all the cats for a walk
sara_pets.walk()
