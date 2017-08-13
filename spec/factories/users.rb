FactoryGirl.define do
  factory :user do
    username { Faker::Lorem.word }
    email { Faker::Internet.email }
    password { Faker::Lorem.characters(10) }
  end
end
