class SnsCredential < ApplicationRecord

  devise :omniauthable, omniauth_providers: %i[facebook google_oauth2]

  belongs_to :user

  def self.find_for_google_oauth2(auth, signed_in_resource=nil)
    # sns = User.find_for_google_oauth2(request.env["omniauth.auth"])
    sns = SnsCredential.where(uid: auth.uid, provider: auth.provider).first_or_create

    # sns.usertがいるかどうかでif文を作る
    if sns.user
    # いる場合はそのユーザーをuserという変数に格納
      user = sns.user
    end

    # いなかった場合はUser.newしてauth.infoのnameとemailを入れておく
    unless user
      user = User.new( name:     auth.info.name,
                       provider: auth.provider,
                       uid:      auth.uid,
                       email:    auth.info.email,
                       token:    auth.credentials.token,
                       password: Devise.friendly_token[0, 20])
    end
    # メソッドの最後でuserを返す
    user
  end
end
