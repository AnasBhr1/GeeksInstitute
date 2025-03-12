class dog():
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(self.name + " goes woof!")

    def jump(self):
        print(self.name + " jumps " + str(self.height * 2) + " cm high!")

davids_dog = dog("Rex", 50)
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = dog("Teacup", 20)
print(f"sarah dog name is {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is taller than {sarahs_dog.name}")
else:
    print(f"{sarahs_dog.name} is taller than {davids_dog.name}")
