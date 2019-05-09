class ProductsController < ApplicationController
  def index
    # 各カテゴリーの商品を無作為に４つずつ取得
    @products_ladies = Product.where(parent_category_id: 1).random
    @products_mans = Product.where(parent_category_id: 2).random
    @products_kids = Product.where(parent_category_id: 3).random
    @products_interiors = Product.where(parent_category_id: 4).random
    @products_books = Product.where(parent_category_id: 5).random
    @products_toys = Product.where(parent_category_id: 6).random
    @products_perfumes = Product.where(parent_category_id: 7).random
    @products_appliances = Product.where(parent_category_id: 8).random
  end

  def show
    @product = Product.find(params[:id])
    @images = @product.images
    @seller = User.find(@product.seller_id)
    @seller_items = Product.where(seller_id: @seller.id).where.not(id: @seller.id)
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save(item_params)
      # 商品の出品完了
      # モーダルウィンドウが出てくる
    else
      # 画面はそのままで保存できない旨のメッセージの表示
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @product = Product.find(params[:id])
    if @product.destroy
      redirect_to root_path
    else
      render :show
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :introduce, :price, :parent_category_id, :child_category_id, :grandchild_category_id, :shipping_method, :condition, :delivery_fee_payer, :area, :days_to_delivery, :image).merge(seller_id: current_user.id)
  end
end
