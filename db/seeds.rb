# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

e1 = Encounter.create(id: 1, body: "A lullaby beckons you to awaken from your deep sleep. Yet you feel safe and at peace in your dreams.")

c1 = Choice.create(encounter: e1, body: "Ignore the siren's song and fall back to sleep.", next: 2)
e2 = Encounter.create(id: 2, body: "Darkness consumes you again as you descend to the familiar comfort of your unconscious. You will not receive another opportunity to awaken for a long time.")

c2 = Choice.create(encounter: e1, body: "Heed the call. Awaken.", next: 3)
o1 = Outcome.create(choice: c2, outcome_type: "add_trait", body: "Awakened")

e3 = Encounter.create(id: 3, body: "An orange light pierces the shadows, revealing thousands of people marching towards a horizon covered by a massive grey duststorm. You are among them, and you struggle against the momentum of the horde. All around you are descretated buildings, some tall enough to pierce the dark clouds. You are in a city shattered beyond recognition.
  You see a faint light emnating from the third story of a stout building laden with brown stone.")

c3 = Choice.create(encounter: e3, body: "Push your way toward the brownstone building.", next: 4)
e4 = Encounter.create(id: 4, body: "You make your way across, pushing your mindless peers away. However the horde proves overwhelming and you find yourself quickly exhausted. You see a door to the building. It's about ten meters away.")

c4 = Choice.create(encounter: e3, body: "Continue marching with the horde.", next: 5)
e5 = Encounter.create(id: 5, body: "incomplete")

c5 = Choice.create(encounter: e4, body: "Give up, wait for another opportunity while you recover.", next: 6)
e6 = Encounter.create(id: 6, body: "incomplete")

c6 = Choice.create(encounter: e4, body: "Attempt to reach the door.", next: 7)
e7 = Encounter.create!(id: 7, body: "You summon the last of your strength to make another push for the building. A particularily large person rams into you, however you were able to stay on your feet and maneuver around him. You reach the door and grasp the handle. It falls apart.")

c7 = Choice.create(encounter: e7, body: "Keep the doorhandle and proceed upstairs", next: 8)
o2 = Outcome.create(choice: c7, outcome_type: "add_item", body: "Doorhandle")
c8 = Choice.create(encounter: e7, body: "Discard the doorhandle and proceed upstairs", next: 8)
e8 = Encounter.create(id: 8, body: "Something happens...")
