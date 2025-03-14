import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius:
            self.radius = radius
        elif diameter:
            self.radius = diameter / 2
        else:
            self.radius = 1  # default radius if no value is provided
    
    @property
    def diameter(self):
        return self.radius * 2
    
    @property
    def area(self):
        return math.pi * self.radius ** 2
    
    def __repr__(self):
        return f"Circle(radius={self.radius})"
    
    def __add__(self, other):
        # Adding circles: sum of their radii
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        return NotImplemented
    
    def __gt__(self, other):
        # Comparing by area: return True if self has a larger area
        if isinstance(other, Circle):
            return self.area > other.area
        return NotImplemented
    
    def __eq__(self, other):
        # Checking if two circles are equal based on radius
        if isinstance(other, Circle):
            return self.radius == other.radius
        return NotImplemented

# Create Circle instances
circle1 = Circle(radius=5)
circle2 = Circle(diameter=10)

# Print the circles' attributes
print(circle1)
print(f"Area of Circle1: {circle1.area}")
print(f"Diameter of Circle1: {circle1.diameter}")

# Adding two circles together
circle3 = circle1 + circle2
print(f"Circle1 + Circle2: {circle3}")

# Compare two circles
print(f"Circle1 is greater than Circle2: {circle1 > circle2}")
print(f"Circle1 is equal to Circle2: {circle1 == circle2}")

# Sort circles by radius
circle_list = [circle1, circle2, circle3]
sorted_circles = sorted(circle_list, key=lambda x: x.radius)
print(f"Sorted circles: {sorted_circles}")

