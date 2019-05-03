class ItemsController < ApplicationController

  before_action :set_parentCategory, only: [:index, :new, :create, :edit, :update]

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
    @item.images.build
  end

  def create
    @item = Item.new(item_params)
    binding.pry
    if @item.save
      redirect_to root_path
      # 商品の出品完了
      # モーダルウィンドウが出てくる
    else
      render plain: @item.errors.inspect
      # 画面はそのままで保存できない旨のメッセージの表示
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def set_parentCategory
    @parentCategories = Category.where(id: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1001, 1101, 1201])
  end

  def item_params
    params.require(:item).permit(:name, :introduce, :price, :parent_category_id, :child_category_id, :grandchild_category_id, :shipping_method, :condition, :delivery_fee_payer, :area, :days_to_delivery, image_attributes: [:image])
  end
end
