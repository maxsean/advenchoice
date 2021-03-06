# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180219182503) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "choices", force: :cascade do |t|
    t.bigint "encounter_id"
    t.string "body", null: false
    t.integer "next", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "condition"
    t.index ["encounter_id"], name: "index_choices_on_encounter_id"
  end

  create_table "encounters", force: :cascade do |t|
    t.text "body", null: false
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "chapter"
  end

  create_table "journals", force: :cascade do |t|
    t.bigint "character_id", null: false
    t.bigint "encounter_id", null: false
    t.text "body", null: false
    t.string "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_journals_on_character_id"
    t.index ["encounter_id"], name: "index_journals_on_encounter_id"
  end

  create_table "outcomes", force: :cascade do |t|
    t.bigint "choice_id"
    t.string "outcome_type"
    t.string "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["choice_id"], name: "index_outcomes_on_choice_id"
  end

  create_table "revelations", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "journal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["journal_id"], name: "index_revelations_on_journal_id"
    t.index ["user_id", "journal_id"], name: "index_revelations_on_user_id_and_journal_id", unique: true
    t.index ["user_id"], name: "index_revelations_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider"
    t.string "uid"
    t.string "name"
    t.string "oauth_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "encounter", default: 1
    t.boolean "admin"
  end

end
