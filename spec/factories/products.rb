FactoryBot.define do
  factory :product do
    name                    {"カバン"}
    introduce               {"商品紹介"}
    condition               {"1"}
    delivery_fee_payer      {"1"}
    shipping_method         {"1"}
    area                    {"1"}
    days_to_delivery        {"1"}
    price                   {"1000"}
    parent_category_id      {"1"}
    child_category_id       {"11"}
    grandchild_category_id  {"301"}
  end
end
