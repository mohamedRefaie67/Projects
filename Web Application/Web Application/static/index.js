
//List The Form

function toggleForm(formId, arrowId) {
    var form = document.getElementById(formId);
    var arrow = document.getElementById(arrowId);

    form.style.display = (form.style.display === "block") ? "none" : "block";

    arrow.classList.toggle('down');

    // حفظ حالة النموذج في localStorage
    localStorage.setItem('lastOpenedForm', formId);
}

// فحص localStorage عند تحميل الصفحة
window.onload = function () {
    var lastOpenedForm = localStorage.getItem('lastOpenedForm');
    if (lastOpenedForm) {
        var form = document.getElementById(lastOpenedForm);
        form.style.display = "block";
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

