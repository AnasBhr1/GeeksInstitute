from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import psycopg2

app = FastAPI()

DB_NAME = "restaurant"
USERNAME = "postgres"
PASSWORD = "odd199600"
HOST = "localhost"
PORT = "5432"

connection = psycopg2.connect(dbname=DB_NAME, user=USERNAME, password=PASSWORD)
cursor = connection.cursor()

class MenuItem(BaseModel):
    name: str
    price: int

class MenuManager:
    @classmethod
    def get_by_name(cls, name: str):
        cursor.execute("SELECT * FROM Menu_Items WHERE item_name = %s", (name,))
        item = cursor.fetchone()
        return item if item else None

    @classmethod
    def all(cls):
        cursor.execute("SELECT * From Menu_Items")
        items = cursor.fetchall()
        return items

@app.get("/menu/")
def show_restaurant_menu():
    items = MenuManager.all()
    if not items:
        raise HTTPException(status_code=404, detail="Menu is empty.")
    return items

@app.get("/menu/{name}")
def view_item(name: str):
    item = MenuManager.get_by_name(name)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found.")
    return item

@app.post("/menu/")
def add_item(item: MenuItem):
    cursor.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)", (item.name, item.price))
    connection.commit()
    return {"message": f"Item '{item.name}' added successfully!"}

@app.put("/menu/{name}")
def update_item(name: str, item: MenuItem):
    cursor.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s", (item.name, item.price, name))
    connection.commit()
    return {"message": f"Item '{name}' updated to '{item.name}' with price {item.price}."}

@app.delete("/menu/{name}")
def delete_item(name: str):
    cursor.execute("DELETE FROM Menu_Items WHERE item_name = %s", (name,))
    connection.commit()
    return {"message": f"Item '{name}' deleted successfully!"}

