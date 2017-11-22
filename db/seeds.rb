# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

e1 = Encounter.create(body: "A lullaby beckons you to awaken from your deep sleep. Yet you feel safe and at peace in your dreams.")

e2 = Encounter.create(body: "Darkness consumes you again as you descend to the familiar comfort of your unconscious. You will not receive another opportunity to awaken for a long time.")

e3 = Encounter.create(body: "An orange light pierces the shadows, revealing thousands of people marching towards a horizon covered by a massive grey duststorm.")

c1 = Choice.create(encounter: e1, body: "Ignore the siren's song and fall back to sleep.", next: 2)

c2 = Choice.create(encounter: e1, body: "Heed the call. Awaken.", next: 3)
