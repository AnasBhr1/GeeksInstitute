import psycopg2


DB_NAME = "restaurant"
USERNAME = "postgres"
PASSWORD = "odd199600"
HOST = "localhost"
PORT = "5432"

connection = psycopg2.connect("dbname=restaurant user=postgres password=odd199600")

cursor = connection.cursor()

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
        item = connection.fetchone()
        connection.close()
        return item if item else None

    @classmethod
    def all(cls):
        cursor.execute("SELECT * From Menu_Items")
        items= cursor.fetchall()
        connection.close()
        return items
    
