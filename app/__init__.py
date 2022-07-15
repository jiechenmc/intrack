from flask import Flask, request
from peewee import *
from playhouse.shortcuts import model_to_dict

app = Flask(__name__)

db = SqliteDatabase("database.db")


class JobEntry(Model):
    applied = IntegerField()
    assessed = IntegerField()
    company = TextField()
    position = TextField()
    lastContact = TextField()

    class Meta:
        database = db


db.create_tables([JobEntry], safe=True)


@app.route("/api/get", methods=["GET"])
def get():
    return {'posts': [model_to_dict(p) for p in JobEntry.select()]}


@app.route("/api/create", methods=["POST"])
def create():
    data = request.form

    applied = 0
    assessed = 0

    if "applied" in data and data["applied"] == "on":
        applied = 1

    if "assessed" in data and data["assessed"] == "on":
        assessed = 1

    entry = JobEntry.create(applied=applied,
                            assessed=assessed,
                            company=data["company"],
                            position=data["position"],
                            lastContact=data["lastContact"])
    entry.save()
    return model_to_dict(entry)


@app.route("/api/delete", methods=["DELETE"])
def delete():
    _id = int(request.form["id"])
    post = JobEntry.get_by_id(_id)
    JobEntry.delete_by_id(_id)
    return model_to_dict(post)


@app.route("/api/update", methods=["PUT"])
def update():
    JobEntry.update(**request.form).where(
        JobEntry.id == request.form["id"]).execute()
    post = JobEntry.get_by_id(request.form["id"])
    return model_to_dict(post)