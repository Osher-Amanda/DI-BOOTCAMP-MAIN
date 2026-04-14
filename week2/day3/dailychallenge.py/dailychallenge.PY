import math

# =========================
# Circle Class
# =========================
class Circle:
    def __init__(self, radius=None, diameter=None):
        """
        Initialize a Circle instance.
        You can provide either radius or diameter.
        """
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2  # convert diameter to radius
        else:
            raise ValueError("You must provide either radius or diameter")

    # Property to get diameter from radius
    @property
    def diameter(self):
        return self.radius * 2

    # Property to set diameter and automatically update radius
    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    # Method to calculate area
    def area(self):
        return math.pi * (self.radius ** 2)

    # Dunder method for string representation
    def __str__(self):
        return f"Circle with radius: {self.radius:.2f}, diameter: {self.diameter:.2f}"

    # Dunder method to add two circles
    def __add__(self, other_circle):
        if isinstance(other_circle, Circle):
            return Circle(self.radius + other_circle.radius)
        raise TypeError("Can only add another Circle")

    # Dunder method to compare if one circle is greater than another
    def __gt__(self, other_circle):
        if isinstance(other_circle, Circle):
            return self.radius > other_circle.radius
        return NotImplemented

    # Dunder method to check equality of two circles
    def __eq__(self, other_circle):
        if isinstance(other_circle, Circle):
            return self.radius == other_circle.radius
        return NotImplemented

# =========================
# Testing Circle Class
# =========================

# Create Circle instances
circle1 = Circle(radius=5)
circle2 = Circle(diameter=12)
circle3 = Circle(radius=7)

# Print circle attributes
print(circle1)  # Circle with radius: 5.00, diameter: 10.00
print(circle2)  # Circle with radius: 6.00, diameter: 12.00

# Calculate area
print(f"Area of circle1: {circle1.area():.2f}")
print(f"Area of circle2: {circle2.area():.2f}")

# Add circles
circle_sum = circle1 + circle3
print(f"Sum of circle1 and circle3: {circle_sum}")  # Circle with radius: 12.00

# Compare circles
print(circle1 > circle2)  # False
print(circle3 > circle1)  # True

# Check equality
circle4 = Circle(radius=5)
print(circle1 == circle4)  # True
print(circle1 == circle2)  # False

# Sorting a list of circles by radius
circles_list = [circle1, circle2, circle3, circle4]
sorted_circles = sorted(circles_list, key=lambda c: c.radius)
print("Sorted circles by radius:")
for c in sorted_circles:
    print(c)

# -------------------------
# Explanation:
# -------------------------
# 1. __init__: Initializes Circle with radius or diameter; converts diameter to radius if given.
# 2. diameter property: Allows getting and setting diameter, updates radius automatically.
# 3. area(): Calculates area using math.pi.
# 4. __str__: Provides readable string output for the Circle object.
# 5. __add__: Adds two circles by summing their radii and returning a new Circle.
# 6. __gt__: Compares two circles; returns True if self.radius > other.radius.
# 7. __eq__: Checks if two circles have equal radius.
# 8. Sorting: Use key=lambda c: c.radius to sort circles in a list by radius.
# 9. All methods demonstrate OOP concepts and dunder methods.

# Bonus (Optional):
# You could use Python's turtle module to draw circles based on radius:
# import turtle
# t = turtle.Turtle()
# for c in sorted_circles:
#     t.circle(c.radius * 10)  # scale for visibility
# turtle.done()