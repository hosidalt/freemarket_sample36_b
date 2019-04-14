class ProfilesController < ApplicationController
  def index
    @user = User.new
  end
end
