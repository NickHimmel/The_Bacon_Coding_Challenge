require 'rails_helper'
require 'spec_helper'

RSpec.describe User, type: :model do
  it { should have_many(:jobs) }
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password) }
  # it { should validate_uniqueness_of(:username) }
  it { should validate_length_of(:password).is_at_least(6)}
end
