let ajaxPost = (cls, classError, func) => {
  $(cls).submit(function () {
    let $this = $(this);
    let error = 0;

    $this.find('.js-validate-text').each(function () {
      $(this).parent().removeClass(classError);
      let re = /^[a-zA-Zа-яА-ЯЁё ]+$/;
      let isText = re.test($(this).val());

      if (!isText) {
        $(this).parent().addClass(classError);
        error += 1;
      }
    });

    $this.find('.js-validate-email').each(function () {
      $(this).parent().removeClass(classError);
      let reEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let isEmail = reEmail.test($(this).val());

      if (!isEmail) {
        $(this).parent().addClass(classError);
        error += 1;
      }
    });

    $this.find('.js-validate-phone').each(function () {
      $(this).parent().removeClass(classError);
      let rePhone = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
      let isPhone = rePhone.test($(this).val());

      if (!isPhone) {
        $(this).parent().addClass(classError);
        error += 1;
      }
    });

    if (error === 0) {
      $.ajax({
        type: $this.attr('method'),
        url: $this.attr('action'),
        data: $this.serialize(),
      }).done((data) => {
        $this.trigger('reset');
        func(data);
      });
    } else {
      // Убираем ошибку при фокусе
      let orderFieldInput = $('.order-form__field input');

      orderFieldInput.on('focus', (e) => {
        let $this = $(e.currentTarget);
        let orderField = $this.parent();

        if (orderField.hasClass('error-validate')) {
          orderField.removeClass('error-validate');
        }
      });
    }

    return false;
  });
};

ajaxPost('.js-validate-form', 'error-validate', () => {
  return false;
});
