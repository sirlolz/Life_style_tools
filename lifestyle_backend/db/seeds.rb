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
