class Api::UsersController < ApplicationController
  def index
    render json: user.where.not(id: current_user.id)
  end
end
