class CategoriesController < ApplicationController

  def index
  end

  def show
    category = Category.find(params[:id]) 
    if category.ancestry == nil
      @parent_category = category
      @child_category = nil
      @grandchild_category = nil
    elsif category.ancestry == "#{category.parent.id}"
      @parent_category = category.parent
      @child_category = category
      @grandchild_category = nil
    else
      @parent_category = category.parent.parent
      @child_category = category.parent
      @grandchild_category = category
    end
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
