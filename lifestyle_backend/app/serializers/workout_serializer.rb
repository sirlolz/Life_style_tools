class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :plan, :description
  has_many :exercises
end
