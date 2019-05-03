class CategoriesController < ApplicationController

  def index
  end

  def show
  end

  def new
  end

  def import
    Category.import(params[:category][:file])
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
