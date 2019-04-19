class CardsController < ApplicationController

  require "payjp"

  def index
  end

  def show
    card = Card.where(user_id: 1).first
    if card.blank?
      redirect_to action: "new"
    else
      Payjp.api_key = PAYJP_SECRET_KEY
      customer = Payjp::Customer.retrieve(card.customer_id)
      @card = card
      @default_card_information = customer.cards.retrieve(card.card_id)
      @exp_month = @default_card_information.exp_month.to_s
      @exp_year = @default_card_information.exp_year.to_s.slice(2,3)
    end
  end

  def new
    card = Card.where(user_id: 1)
    redirect_to mypage_card_path(1, 1) if card.exists?
  end

  def create_card
    Payjp.api_key = PAYJP_SECRET_KEY
    if params[:payjp_token].blank?
      redirect_to new_mypage_card_path(:mypage_id)
    else
      customer = Payjp::Customer.create(
        description: "登録テスト",
        card: params[:payjp_token],
        metadata: {user_id: 1}
      )
      @card = Card.new(user_id: 1, customer_id: customer.id, card_id: customer.default_card)
      if @card.save
        redirect_to mypage_card_path(1, 1)
      else
        redirect_to new_mypage_card_path(:mypage_id)
      end
    end
  end

  def create
  end

  def edit
  end

  def update
  end

  def delete
    card = Card.where(user_id: 1).first
    if card.blank?
    else
      customer = Payjp::Customer.retrieve(card.customer_id)
      customer.delete
      card.delete
    end
    redirect_to new_mypage_card_path(1, 1)
  end

end
