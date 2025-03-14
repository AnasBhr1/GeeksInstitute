class Pagination:
    def __init__(self, items=None, pageSize=10):
        if items is None:
            items = []
        self.items = items
        self.pageSize = int(pageSize)  # Convert pageSize to an integer if it's a float
        self.totalItems = len(items)
        self.totalPages = (self.totalItems + self.pageSize - 1) // self.pageSize  # Calculate the total number of pages
        self.currentPage = 1  # Start on the first page

    def getVisibleItems(self):
        start = (self.currentPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def prevPage(self):
        self.currentPage = max(self.currentPage - 1, 1)  # Prevent going below page 1
        return self

    def nextPage(self):
        self.currentPage = min(self.currentPage + 1, self.totalPages)  # Prevent going above the last page
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        # Convert pageNum to an integer and clamp it within the valid range
        pageNum = int(pageNum)
        if pageNum < 1:
            self.currentPage = 1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else:
            self.currentPage = pageNum
        return self


# Example usage
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  # ["a", "b", "c", "d"]

p.nextPage()
print(p.getVisibleItems())  # ["e", "f", "g", "h"]

p.lastPage()
print(p.getVisibleItems())  # ["y", "z"]

# Go to page 2 and check the visible items
p.goToPage(2)
print(p.getVisibleItems())  # ["e", "f", "g", "h"]

# Go to a page that doesn't exist (e.g., page 10)
p.goToPage(10)
print(p.getVisibleItems())  # ["y", "z"]

# Go to the first page and check the visible items
p.firstPage()
print(p.getVisibleItems())  # ["a", "b", "c", "d"]

# Go to a negative page number, which should set it to the first page
p.goToPage(-5)
print(p.getVisibleItems())  # ["a", "b", "c", "d"]
