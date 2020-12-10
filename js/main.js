$(document).ready(function () {

    $('#burger').on("click", function () {
        $('#menu').addClass('open');
    });
    $('#menu').on("click", function () {
        $('#menu').removeClass('open');
    });

    let loader = $('#loader')

    $('#submit').on("click", function () {
        $(".error").hide();
        $('input').css("border-color", "")

        let name = $('#name');
        let address = $('#address');
        let text = $('#text');

        let hasError = false;

        let formOk = $('#form-ok')

        if (!name.val()) {
            name.siblings(".error").show()
            name.css("border-color", "red")
            hasError = true;
        }
        if (!address.val()) {
            address.siblings(".error").show();
            address.css("border-color", "red")
            hasError = true;
        }
        if (!text.val()) {
            text.siblings(".error").show();
            text.css("border-color", "red")
            hasError = true;
        }
        if (!hasError) {
            loader.css('display', 'flex')
            $.ajax({
                method: "POST",
                url: "https://itlogia.ru/test/checkout",
                data: {name: name.val(), address: address.val(), text: text.val()}
            })
                .done(function (message) {
                    loader.hide();
                    console.log(message);
                    if (message.success) {
                        $('#order-form').hide()
                        formOk.css('display', 'flex')
                    } else {
                        alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.")
                    }
                })
        }
    });

    new WOW().init();
});

