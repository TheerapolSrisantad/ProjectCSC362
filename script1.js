const bookPrices = {
    "Bullet & Beast เล่ม 1": 115,
    "เวทรักษาที่ไหนเขาใช้กันแบบนี้ เล่ม 4 (Mg)": 175,
    "Your Name. เธอคือ...(Manga) 2 + Earthbound": 360,
    "Suzume การผนึกประตูของซุซุเมะ 1 (Mg)": 140,
    "ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน ปี 2 เล่ม 3 (Mg)": 175,
    "ชีวิตไม่ง่ายของนางร้าย LV99 เล่ม 4 (Mg)": 175,
    "เกิดใหม่เป็นขุนนางขึ้นเป็นใหญ่ด้วยสกิล เล่ม 6": 125,
    "เกิดใหม่เป็นท่านลอร์ดมาบุกเบิกดินแดน เล่ม 9 จบ": 95,
    "ไอน์ ซอฟ กับโลกแห่งขีดจำกัด เล่ม 1": 115,
    "นางกำนัลมือสังหารแห่งวังหลัง เล่ม 1": 110,
    "พ่อบ้านสุดแกร่งไร้เทียมทาน เล่ม 1": 110,
    "Suzume การผนึกประตูของซุซุเมะ เล่ม 3 (จบ)(Mg)": 175,
    "Weathering With You ฤดูฝัน ฉันมีเธอ เล่ม 1 Mg": 145,
    "Weathering With You ฤดูฝัน ฉันมีเธอ เล่ม 2 Mg": 145,
    "Weathering With You ฤดูฝัน ฉันมีเธอ เล่ม 3 ฉบับจบ (Mg)": 145,
    "Your name. เธอคือ เล่ม 3 (บาร์ใหม่) (Mg)": 135,
    "สายลับซินเดอเรลลากับนักฆ่าคลั่งรัก เล่ม 2 (Mg)": 175,
    "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว เล่ม 24": 125,
    "รักครั้งนี้มีคนนกเยอะไปมั้ย เล่ม 1": 135,
    "อ่านชะตาวันสิ้นโลก 1 (Mg)": 495,
};

function calculateTotal() {
    const selectedBooks = document.querySelectorAll('.book-dropdown');
    let totalPrice = 0;
    selectedBooks.forEach(select => {
        if (select.value) {
            totalPrice += bookPrices[select.value] || 0; // ตรวจสอบว่าราคาไม่เป็น undefined
        }
    });
    totalPrice += 50; // ค่าจัดส่ง
    document.getElementById('money_price').value = `฿${totalPrice}`;
}

document.getElementById('add-book').addEventListener('click', () => {
    const newSelect = document.querySelector('.book-dropdown').cloneNode(true);
    document.getElementById('book-selection').appendChild(newSelect);
    newSelect.addEventListener('change', calculateTotal); // เพิ่ม event listener ใหม่
});

document.querySelectorAll('.book-dropdown').forEach(select => {
    select.addEventListener('change', calculateTotal);
});

const form = document.getElementById("shop-form");
const messageDiv = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data) {
            form.reset();
            messageDiv.style.display = "block";
            messageDiv.style.color = "green";
            messageDiv.innerText = "ทำการบันทึกข้อมูลการสั่งซื้อแล้ว";
        }
    })
    .catch((error) => {
        console.error("ข้อผิดพลาด:", error);
        messageDiv.style.display = "block";
        messageDiv.style.color = "red";
        messageDiv.innerText = "เกิดข้อผิดพลาดในการบันทึกข้อมูล";
    });
});
