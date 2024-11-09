// ملف script.js

// إظهار الشاشة
let display = document.getElementById('display');

// إضافة الرموز والأرقام للشاشة
function appendSymbol(symbol) {
    display.value += symbol;
}

// مسح الشاشة
function clearDisplay() {
    display.value = '';
}

// حذف آخر رمز
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// تنفيذ العمليات الحسابية الأساسية
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'خطأ';
    }
}

// إضافة الوظائف العلمية
function appendFunction(func) {
    let value = display.value;
    try {
        switch (func) {
            case 'sin':
                display.value = Math.sin(eval(value));
                break;
            case 'cos':
                display.value = Math.cos(eval(value));
                break;
            case 'tan':
                display.value = Math.tan(eval(value));
                break;
            case 'log':
                display.value = Math.log10(eval(value));
                break;
        }
    } catch (error) {
        display.value = 'خطأ';
    }
}
