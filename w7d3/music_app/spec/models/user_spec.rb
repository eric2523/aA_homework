require 'rails_helper'

RSpec.describe User, type: :model do
    describe "User should have email" do
      it { should validate_presence_of(:email)}
    end

    describe "User should have password_digest" do
      it { should validate_presence_of(:password_digest)}
    end

    describe "User's password should be longer than 6 characters" do 
      it { should validate_length_of(:password).is_at_least(6)}
    end

    describe "#is_password?" do
      let(:user) {User.create(email: 'aaa@aa.io', password: 'password123')}

      it "should return true if password matches" do 
        expect(user.is_password?("password123")).to eq(true)
      end
      it "should return false if password does not match" do
        expect(user.is_password?("password567")).to eq(false)
      end

    end
end
