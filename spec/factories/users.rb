FactoryBot.define do
  factory :user do
    id                    {"1"}
    nickname              {"abe"}
    email                 {"kkk@gmail.com"}
    password              {"00000000"}
    password_confirmation {"00000000"}
    family_name           {"山田"}
    first_name            {"太郎"}
    kana_family_name      {"ヤマダ"}
    kana_first_name       {"タロウ"}
    birth_year            {"2000"}
    birth_month           {"1"}
    birth_day             {"20"}
    postal_code           {"111-1111"}
    prefecture            {"兵庫県"}
    city                  {"神戸市"}
    block_number          {"1"}
  end

end
