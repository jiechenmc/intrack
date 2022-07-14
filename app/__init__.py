from flask import Flask
from peewee import *

app = Flask(__name__)

db = SqliteDatabase("data.db")
print(db)


class JobEntry(Model):
    count: IntegerField()
    applied: IntegerField()
    assessed: IntegerField()
    company: TextField()
    position: TextField()
    area: TextField()
    link: TextField()
    lastContact: TextField()

    class Meta:
        database = db


db.create_tables([JobEntry], safe=True)


@app.route("/api")
def home():
    return "hi"