import psycopg2


DB_NAME = "restaurant"
USERNAME = "postgres"
PASSWORD = "odd199600"
HOST = "localhost"
PORT = "5432"

connection = psycopg2.connect( dbname=DB_NAME, user=USERNAME, password=PASSWORD)

cursor = connection.cursor()

class MenuItem :
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        cursor.execute("Insert Into Menu_Items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
        connection.commit()
        connection.close()

    def update(self, new_name, new_price):
        cursor.execute("Update Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", (new_name, new_price, self.name))
        connection.commit()
        connection.close()

    def delete(self):
        cursor.execute("Delete FROM Menu_Items WHERE item_name = %s", (self.name))
        connection.commit()
        connection.close()

item = MenuItem('Burger', 35)
item.save()
# item.delete()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')
# print(item2)  
# items = MenuManager.all()
# print(items) 