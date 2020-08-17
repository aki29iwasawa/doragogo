function check() {

    var count = 0;

    if (document.form.mail.value == "") {
        count = 1;
    } else if (document.form.firstpassword.value == "") {
        count = 1;
    } else if (document.form.secondpassword.value == "") {
        count = 1;
    }

    if (count) {
        alert('未入力項目があります');
        return false;
    } else {
        alert(('登録しました'))
        return true;
    }

}