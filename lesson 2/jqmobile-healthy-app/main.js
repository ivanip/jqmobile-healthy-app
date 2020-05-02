$(function () {
    $('#bmi-result').hide(0);

    $('#btn-calculate-bmi').on('click', function (e) {
        e.preventDefault();

        var number_weight = parseFloat($('#number-weight').val());
        var number_height = parseFloat($('#number-height').val());

        if (isNaN(number_weight) || number_weight < 20 || number_weight > 200) {
            alert('請輸入正確的體重');
            return;
        }

        if (isNaN(number_height) || number_height < 50 || number_height > 250) {
            alert('請輸入正確的身高');
            return;
        }

        var bmi = number_weight / (Math.pow(number_height / 100, 2));

        $('#slider').val(bmi).slider("refresh");

        var message;

        if (bmi < 18.5) {
            message = '需要增重了!';
        } else if (bmi >= 18.5 && bmi <= 24) {
            message = '目前的比例很健康，繼續保持!'
        } else {
            message = '需要規劃一下健康飲食的餐單了!';
        }

        $('#bmi-message').html(message);

        $('#bmi-result').show(0);
    });
});