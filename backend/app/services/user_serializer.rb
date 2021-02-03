class UserSerializer

    def initialize(user_obj)
        @user = user_obj
    end


    def to_serialized_json
        options = {
          include: {
              only: [:id, :username, :name, :password_digest]
           }
        }
        @user.to_json(options)
      end

end 