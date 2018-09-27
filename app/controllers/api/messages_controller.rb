class Api::MessagesController < ApplicationController

  def create
    Messagebus.publish "/chat_channel", { email: params[:email], body: params[:body] }
  end



end
