FactoryGirl.define do
  factory :user do
    username { Faker::DrWho.character }
    email { Faker::Internet.email }
    password { Faker::Lorem.characters(10) }
  end
end
