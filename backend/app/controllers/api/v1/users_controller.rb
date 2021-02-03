class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  # GET /users.json
  def index
    @users = User.all

    render json: UserSerializer.new(@users).to_serialized_json
  end

  # GET /users/1
  # GET /users/1.json
  def show
    render json: UserSerializer.new(@user).to_serialized_json
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

      if @user.save
        render json: UserSerializer.new(@user).to_serialized_json
      else
        render json: @user.errors, status: :unprocessable_entity
        render @user.errors.full_messages, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json
  def update
    respond_to do |format|
      if @user.update(user_params)
        render json: UserSerializer.new(@user).to_serialized_json
      else        
        render @user.errors.full_messages, status: :unprocessable_entity
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    render json: @user

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:username, :name, :password_digest)
    end
end
