class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def oldest_cat(cats):
    oldest = cats[0]
    for cat in cats:
        if cat.age > oldest.age:
            oldest = cat
    return oldest

print ("Oldest cat is: ", oldest_cat(["cat1", "cat2", "cat3"]).name)

cat1 = Cat("Whiskers", 2)
cat2 = Cat("Mittens", 4)
cat3 = Cat("Shadow", 3)
