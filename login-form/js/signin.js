function check() {

    var count = 0;

    if (document.form.mail.value == "") {
        count = 1;
    } else if (document.form.password.value == "") {
        count = 1;
    }

    if (count) {
        alert('未入力項目があります');
        return false;
    } else {
        return true;
    }

}