class StatusesController < ApplicationController

  require "payjp"

  def index
  end

  def show
  end

  def new
  end

  def pay
    card = Card.where(user_id: 1).first
    Payjp.api_key = PAYJP_SECRET_KEY
    Payjp::Charge.create(
      amount: params[:statuses][:amount],
      customer: card.customer_id,
      currency: "jpy"
    )
    buy_item = Status.new(buy_params)
    buy_item.save
    redirect_to root_path
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def buy_params
    params.require(:statuses).permit(:stage, :item_id, :buyer_id)
  end


end
