class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :type, :description
  has_many :exercises
end
