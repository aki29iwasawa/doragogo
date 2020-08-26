function check() {

    var count = 0;

    if (document.form.firstname.value == "") {
        count = 1;
    } else if (document.form.lastname.value == "") {
        count = 1;
    } else if (document.form.gender.value == "") {
        count = 1;
    } else if (document.form.date.value == "") {
        count = 1;
    }

    if (count) {
        alert('未入力項目があります');
        return false;
    } else {
        alert('保存しました')
        return true;
    }

}