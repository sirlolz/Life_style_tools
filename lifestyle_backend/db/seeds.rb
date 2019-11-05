# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Workout.destroy_all
Exercise.destroy_all
Budget.destroy_all

User.create(username:"a", password:"a")

Workout.create(plan: "strength", description:"get strong")
Workout.create(plan: "cardio", description:"get fast")

Exercise.create(name: "deadlift", workout_id: 1)
Exercise.create(name: "squat", workout_id: 1)
Exercise.create(name: "light jog", workout_id: 2)
Exercise.create(name: "sprints", workout_id: 2)
