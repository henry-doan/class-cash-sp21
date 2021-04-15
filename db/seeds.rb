cost_array = (50..500).to_a
classroom_array = ['Mrs. ', 'Mr. ', 'Ms. ']
Reward.delete_all
Point.delete_all
Enrollment.delete_all
User.delete_all
Classroom.delete_all

5.times do |i|
  user = User.create(
    name: Faker::FunnyName.two_word_name,
    email: "test#{i}@email.com",
    password: "password"
  )
  classroom = Classroom.create(
    name: classroom_array.sample + Faker::Games::Pokemon.name
  )

  5.times do
    enrollment = Enrollment.create(
      total_points: 0,
      user_id: user.id,
      classroom_id: classroom.id
    )

    5.times do
      Reward.create(
        name: Faker::Vehicle.make_and_model,
        cost: cost_array.sample,
        desc: Faker::ChuckNorris.fact,
        enrollment_id: enrollment.id
      )
      Point.create(
        name: Faker::TvShows::HowIMetYourMother.catch_phrase,
        desc: Faker::TvShows::HowIMetYourMother.quote,
        value: cost_array.sample,
        enrollment_id: enrollment.id
      )
    end
  end
end

puts "Data has been seeded"