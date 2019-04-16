class LogoutsController < ApplicationController
  def index
    @user = User.new
  end
end
