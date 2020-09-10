require 'rails_helper'

RSpec.describe User, type: :model do
    let(:user) {User.create(email: 'aaa@aa.io', password: 'password123')}

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
      it "should return true if password matches" do 
        expect(user.is_password?("password123")).to eq(true)
      end
      it "should return false if password does not match" do
        expect(user.is_password?("password567")).to eq(false)
      end
    end

    describe "#reset_session_token!" do 
      it "should reset the user's session token" do 
        old = user.session_token 
        expect(user.reset_session_token!).not_to eq(old)
      end

      it "should return the user's session token" do 
        expect(user.reset_session_token!).to eq(user.session_token)
      end
    end

    describe "::find_by_credentials" do 
      it "should accept an email and password as arguments" 
      it "should return the user if user is found"
      it "should return nil if user is not found"
    end
end
