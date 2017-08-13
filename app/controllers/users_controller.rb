class UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def create
    @user = User.create!(user_params)
    json_response(@user, :created)
  end

  def show
    json_response(@user)
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end
end
