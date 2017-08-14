FactoryGirl.define do
  factory :job do
    title { Faker::Job.title }
    company { Faker::Company.bs }
    level { Faker::Job.key_skill }
    salary { Faker::Number.number(3) }
    description { Faker::TwinPeaks.quote }
    city { Faker::StarTrek.location }
    state { Faker::Lorem.characters(2) }
  end
end
