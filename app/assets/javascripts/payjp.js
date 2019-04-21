document.addEventListener(
  "DOMContentLoaded", () => {
    Payjp.setPublicKey("pk_test_00c68fdebace91c880df5146");
    var btn = document.getElementById("token_submit");
    var form = $("#charge-form")
    btn.addEventListener("click", e => {
      e.preventDefault();
      var card = {
        number:     document.getElementById("cards_number").value,
        cvc:        document.getElementById("cards_cvc").value,
        exp_month:  document.getElementById("cards_exp_month").value,
        exp_year:   document.getElementById("cards_exp_year").value
      };
      Payjp.createToken(card, (status, response) => {
        if (status === 200) {
          $("#cards_number").removeAttr("name");
          $("#cards_cvc").removeAttr("name");
          $("#cards_exp_month").removeAttr("name");
          $("#cards_exp_year").removeAttr("name");
          $("#card_token").append(
            $('<input type="hidden" name="payjp_token">').val(response.id)
          );
          form.get(0).submit();
          alert("登録が完了しました");
        } else {
          alert("カード情報が正しくありません。");
        }
      });
    });
  },
  false
);
