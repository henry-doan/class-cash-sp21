cost_array = (50..500).to_a
classroom_array = ['Mrs. ', 'Mr. ', 'Ms. ']
# Reward.delete_all
# Point.delete_all
# Enrollment.delete_all
# User.delete_all
# Classroom.delete_all
@i = 0

5.times do
  classroom = Classroom.create(
    name: classroom_array.sample + Faker::Games::Pokemon.name
    )

  5.times do
    user = User.create(
    name: Faker::FunnyName.two_word_name,
    image: Faker::Avatar.image,
    email: "test#{@i}@email.com",
    password: "password"
    )
    @i = @i + 1
    
    enrollment = Enrollment.create(
      total_points: 0,
      user_id: user.id,
      classroom_id: classroom.id
    )

    ClassroomReward.create(
      name: Faker::Vehicle.make_and_model,
      cost: cost_array.sample,
      desc: Faker::ChuckNorris.fact,
      classroom_id: classroom.id
    )

    5.times do
      Reward.create(
        name: Faker::Vehicle.make_and_model,
        cost: cost_array.sample,
        desc: Faker::ChuckNorris.fact,
        redeemed: false,
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