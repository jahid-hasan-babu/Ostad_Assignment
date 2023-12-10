db.createCollection("user")


db.collectionName.drop()

db.collectionName.insertOne(
    {
        name: "Jahid",
        roll: 500444,
        dept: "CMT",
        institute: "Thakurgaon polytechnic institute"
    }
)

db.collectionName.deleteOne({
    "name": "Jahid"
})
