defimport math  # needed to calculate total pages using ceil

# =========================
# Pagination Class
# =========================

class Pagination:
    def __init__(self, items=None, page_size=10):
        """
        Initializes the Pagination object.
        :param items: List of items to paginate (default empty list)
        :param page_size: Number of items per page (default 10)
        """
        if items is None:
            self.items = []  # if no items are provided, initialize empty list
        else:
            self.items = items
        
        self.page_size = page_size   # number of items per page
        self.current_idx = 0         # current page index (0-based)
        self.total_pages = math.ceil(len(self.items) / self.page_size)  # total pages

    # -------------------------
    # Step 3: Get visible items on current page
    # -------------------------
    def get_visible_items(self):
        """
        Returns a list of items on the current page.
        """
        start = self.current_idx * self.page_size
        end = start + self.page_size
        return self.items[start:end]  # slice the list to get only visible items

    # -------------------------
    # Step 4: Navigation methods
    # -------------------------
    def go_to_page(self, page_num):
        """
        Goes to the specified page number (1-based).
        Raises ValueError if page_num is invalid.
        """
        if page_num < 1 or page_num > self.total_pages:
            raise ValueError(f"Invalid page number: {page_num}")
        self.current_idx = page_num - 1  # convert 1-based to 0-based index

    def first_page(self):
        self.current_idx = 0
        return self  # allows method chaining

    def last_page(self):
        self.current_idx = self.total_pages - 1 if self.total_pages > 0 else 0
        return self

    def next_page(self):
        if self.current_idx < self.total_pages - 1:
            self.current_idx += 1
        return self

    def previous_page(self):
        if self.current_idx > 0:
            self.current_idx -= 1
        return self

    # -------------------------
    # Bonus Step 5: Custom string representation
    # -------------------------
    def __str__(self):
        visible_items = self.get_visible_items()
        return "\n".join(str(item) for item in visible_items)

# =========================
# Step 6: Test the Pagination class
# =========================

alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

# Test getting visible items
print(p.get_visible_items())  
# Output: ['a', 'b', 'c', 'd']

# Test navigating to next page
p.next_page()
print(p.get_visible_items())  
# Output: ['e', 'f', 'g', 'h']

# Test navigating to last page
p.last_page()
print(p.get_visible_items())  
# Output: ['y', 'z']

# Test go_to_page with invalid page
try:
    p.go_to_page(10)
except ValueError as e:
    print(e)  # Output: ValueError: Invalid page number: 10

try:
    p.go_to_page(0)
except ValueError as e:
    print(e)  # Output: ValueError: Invalid page number: 0

# Test __str__ method
p.first_page()
print(str(p))
# Output:
# a
# b
# c
# d

# -------------------------
# Explanation Step by Step
# -------------------------
# 1. __init__:
#    - Initializes items, page_size, current page index, and calculates total pages using math.ceil.
#    - If items is None, sets it as an empty list.
# 2. get_visible_items:
#    - Uses list slicing to get items for the current page based on current_idx and page_size.
# 3. Navigation methods (first_page, last_page, next_page, previous_page):
#    - Adjust current_idx to move between pages.
#    - Return self to allow method chaining.
#    - go_to_page validates input and sets current_idx to the requested page.
# 4. __str__:
#    - Joins visible items with newline characters to print them line by line.
# 5. Testing:
#    - Demonstrates navigation, invalid page handling, and printing the page contents.
