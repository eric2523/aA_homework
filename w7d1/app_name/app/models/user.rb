class User < ApplicationRecord
    attr_reader :password

    validates :username :session_token, presence: true 
    validates :password_digest, presence: { message: 'Password can''t be blank'}
    validates :password, length: {minimum: 6, allow_nil: true}

    def password=(password)
        @password = password
        password_digest = BCrypt::Password.create(password)
    end
end