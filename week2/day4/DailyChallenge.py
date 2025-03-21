import requests
import psycopg2
import random

conn = psycopg2.connect(
    dbname="countries",
    user="postgres",
    password="odd199600",
    host="localhost",
    port="5432"
)

cur = conn.cursor()


response = requests.get("https://restcountries.com/v3.1/all")
if response.status_code != 200:
    print("Failed to fetch countries")
    exit()

all_countries = response.json()
random_countries = random.sample(all_countries, 10)  

for country in random_countries:
    name = country.get("name", {}).get("common", "Unknown")
    capital = country.get("capital", ["Unknown"])[0]
    flag = country.get("flags", {}).get("png", "")
    subregion = country.get("subregion", "Unknown")
    population = country.get("population", 0)

    cur.execute(
        "INSERT INTO countries (name, capital, flag, subregion, population) VALUES (%s, %s, %s, %s, %s)",
        (name, capital, flag, subregion, population)
    )

conn.commit()
cur.close()
conn.close()

print("10 random countries added to the database!")
