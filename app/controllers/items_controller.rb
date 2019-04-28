class ItemsController < ApplicationController

  def index
  end

  def show
    @item = Item.find(1)
    @images = @item.images
    @seller = User.find(@item.seller_id)
    @seller_items = Item.where(seller_id: @seller.id).where.not(id: @seller.id)
  end

  def new
    @item = Item.new
    @prefectures = Prefecture.all
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
