function check() {

    var count = 0;

    if (document.form.tel.value == "") {
        count = 1;
    }

    if (count) {
        alert('未入力項目があります');
        return false;
    } else {
        return true;
    }

    /*　送信後にページ移動をしたい */

}

function checkcode() {

    var count = 0;

    if (document.form2.code.value == "") {
        count = 1;
    }

    if (count) {
        alert('未入力項目があります');
        return false;
    } else {
        alert('確認できました')
        return true;
    }
}