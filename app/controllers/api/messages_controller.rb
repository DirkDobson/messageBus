class Api::MessagesController < ApplicationController

  def create
    message = current_user.messages.create(
      email: current_user.email
     body: params[:body]
     )

    Messagebus.publish "/chat_channel", message.attributes
  end



end
