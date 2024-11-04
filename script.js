// ข้อมูลหนังสือเพิ่มเติม
const books = [
    {
        title: "Bullet & Beast เล่ม 1",
        author: "Kou Tanihara",
        price: "115.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626859/1000276563_front_XXL.jpg?imgname=Bullet---Beast-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1"
    },
    {
        title: "เวทรักษาที่ไหนเขาใช้กันแบบนี้ เล่ม 4 (Mg)",
        author: "คุโรคาตะ, เรกิ คางุยามะ",
        price: "175.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626205/1000276359_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%A7%E0%B8%97%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%AB%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%99%E0%B8%B5%E0%B9%89-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-4-(Mg)"
    },
    {
        title: "Your Name. เธอคือ...(Manga) 2 + Earthbound",
        author: "มาโคโตะ ชินไค (Makoto Shinkai)",
        price: "360.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/201702/209596/1000194076_front_XXL.jpg?imgname=Your-Name.-%E0%B9%80%E0%B8%98%E0%B8%AD%E0%B8%84%E0%B8%B7%E0%B8%AD...(Manga)-2-+-Earthbound"
    },
    {
        title: "Suzume การผนึกประตูของซุซุเมะ 1 (Mg)",
        author: "มาโคโตะ ชินไค (Makoto Shinkai)",
        price: "140.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202401/601593/1000268573_front_XXL.jpg?imgname=Suzume-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9C%E0%B8%99%E0%B8%B6%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B9%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%8B%E0%B8%B8%E0%B8%8B%E0%B8%B8%E0%B9%80%E0%B8%A1%E0%B8%B0-1-(Mg)"
    },
    {
        title: "ขอต้อนรับสู่ห้องเรียนนิยม (เฉพาะ) ยอดคน ปี 2 เล่ม 3 (Mg)",
        author: "คินุงาสะ โชโงะ",
        price: "175.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626216/1000276344_front_XXL.jpg?imgname=%E0%B8%82%E0%B8%AD%E0%B8%95%E0%B9%89%E0%B8%AD%E0%B8%99%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1-(%E0%B9%80%E0%B8%89%E0%B8%9E%E0%B8%B2%E0%B8%B0)-%E0%B8%A2%E0%B8%AD%E0%B8%94%E0%B8%84%E0%B8%99-%E0%B8%9B%E0%B8%B5-2-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-3-(Mg)"
    },
    {
        title: "ชีวิตไม่ง่ายของนางร้าย LV99 เล่ม 4 (Mg)",
        author: "ซาโตริ ทานาบาตะ",
        price: "$175.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626189/1000276347_front_XXL.jpg?imgname=%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%A2-LV99-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-4-(Mg)"
    },
    {
        title: "เกิดใหม่เป็นขุนนางขึ้นเป็นใหญ่ด้วยสกิล เล่ม 6",
        author: "มิไรจิน A",
        price: "125.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202409/624415/1000275801_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%82%E0%B8%B8%E0%B8%99%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AA%E0%B8%81%E0%B8%B4%E0%B8%A5-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-6"
    },
    {
        title: "เกิดใหม่เป็นท่านลอร์ดมาบุกเบิกดินแดน เล่ม 9 จบ",
        author: "SUSUMU SORANO",
        price: "95.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626368/1000276430_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%A5%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%94%E0%B8%A1%E0%B8%B2%E0%B8%9A%E0%B8%B8%E0%B8%81%E0%B9%80%E0%B8%9A%E0%B8%B4%E0%B8%81%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B9%81%E0%B8%94%E0%B8%99-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-9-%E0%B8%88%E0%B8%9A"
    },
    {
        title: "ไอน์ ซอฟ กับโลกแห่งขีดจำกัด เล่ม 1",
        author: "Tomio HIDAKA",
        price: "115.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626891/1000276556_front_XXL.jpg?imgname=%E0%B9%84%E0%B8%AD%E0%B8%99%E0%B9%8C-%E0%B8%8B%E0%B8%AD%E0%B8%9F-%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1"
    },
    {
        title: "นางกำนัลมือสังหารแห่งวังหลัง เล่ม 1",
        author: "Tabasa IORI",
        price: "110.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626866/1000276569_front_XXL.jpg?imgname=%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%A5%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1"
    },
    {
        title: "พ่อบ้านสุดแกร่งไร้เทียมทาน เล่ม 1",
        author: "Kamui",
        price: "110.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626870/1000276532_front_XXL.jpg?imgname=%E0%B8%9E%E0%B9%88%E0%B8%AD%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B9%88%E0%B8%87%E0%B9%84%E0%B8%A3%E0%B9%89%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B8%A2%E0%B8%A1%E0%B8%97%E0%B8%B2%E0%B8%99-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1"
    },
    {
        title: "Suzume การผนึกประตูของซุซุเมะ เล่ม 3 (จบ)(Mg)",
        author: "มาโคโตะ ชินไค (Makoto Shinkai)",
        price: "175.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626188/1000276303_front_XXL.jpg?imgname=Suzume-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9C%E0%B8%99%E0%B8%B6%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B9%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%8B%E0%B8%B8%E0%B8%8B%E0%B8%B8%E0%B9%80%E0%B8%A1%E0%B8%B0-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-3-(%E0%B8%88%E0%B8%9A)(Mg)"
    },
    {
        title: "Weathering With You ฤดูฝัน ฉันมีเธอ เล่ม 1 Mg",
        author: "มาโคโตะ ชินไค (Makoto Shinkai)",
        price: "145.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202004/503056/1000232273_front_XXL.jpg?imgname=Weathering-With-You-%E0%B8%A4%E0%B8%94%E0%B8%B9%E0%B8%9D%E0%B8%B1%E0%B8%99-%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%98%E0%B8%AD-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1-Mg"
    },
    {
        title: "Wearthering With You ฤดูฝัน ฉันมีเธอ เล่ม 2 Mg",
        author: "มาโคโตะ ชินไค (Makoto Shinkai)",
        price: "145.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202106/529212/1000241966_front_XXL.jpg?imgname=Wearthering-With-You-%E0%B8%A4%E0%B8%94%E0%B8%B9%E0%B8%9D%E0%B8%B1%E0%B8%99-%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%98%E0%B8%AD-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-2-Mg"
    },
    {
        title: "Weathering With You ฤดูฝัน ฉันมีเธอ เล่ม 3 ฉบับจบ (Mg)",
        author: "มาโคโตะ ชินไค (Makoto Shinkai)",
        price: "145.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202106/529210/1000241967_front_XXL.jpg?imgname=Weathering-With-You-%E0%B8%A4%E0%B8%94%E0%B8%B9%E0%B8%9D%E0%B8%B1%E0%B8%99-%E0%B8%89%E0%B8%B1%E0%B8%99%E0%B8%A1%E0%B8%B5%E0%B9%80%E0%B8%98%E0%B8%AD-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-3-%E0%B8%89%E0%B8%9A%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%9A-(Mg)"
    },
    {
        title: "Your name. เธอคือ เล่ม 3 (บาร์ใหม่) (Mg)",
        author: "มาโคโตะ ชินไค (Makoto Shinkai)",
        price: "135.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/201909/487114/1000223761_front_XXL.jpg?imgname=Your-name.-%E0%B9%80%E0%B8%98%E0%B8%AD%E0%B8%84%E0%B8%B7%E0%B8%AD-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-3-(%E0%B8%9A%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88)-(Mg)"
    },
    {
        title: "สายลับซินเดอเรลลากับนักฆ่าคลั่งรัก เล่ม 2 (Mg)",
        author: "ยูโซะ นัตสึโนะ",
        price: "175.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626209/1000276360_front_XXL.jpg?imgname=%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B9%80%E0%B8%A3%E0%B8%A5%E0%B8%A5%E0%B8%B2%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%86%E0%B9%88%E0%B8%B2%E0%B8%84%E0%B8%A5%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%81-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-2-(Mg)"
    },
    {
        title: "เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้ว เล่ม 24",
        author: "Fuse",
        price: "125.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202409/624410/1000275792_front_XXL.jpg?imgname=%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B8%81%E0%B9%87%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%AA%E0%B9%84%E0%B8%A5%E0%B8%A1%E0%B9%8C%E0%B9%84%E0%B8%9B%E0%B8%8B%E0%B8%B0%E0%B9%81%E0%B8%A5%E0%B9%89%E0%B8%A7-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-24"
    },
    {
        title: "รักครั้งนี้มีคนนกเยอะไปมั้ย เล่ม 1",
        author: "Takibi AMAMORI",
        price: "135.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202409/624408/1000275789_front_XXL.jpg?imgname=%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%99%E0%B8%B5%E0%B9%89%E0%B8%A1%E0%B8%B5%E0%B8%84%E0%B8%99%E0%B8%99%E0%B8%81%E0%B9%80%E0%B8%A2%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%9B%E0%B8%A1%E0%B8%B1%E0%B9%89%E0%B8%A2-%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1-1"
    },
    {
        title: "อ่านชะตาวันสิ้นโลก 1 (Mg)",
        author: "sing N song",
        price: "495.00 บาท",
        image: "https://storage.naiin.com/system/application/bookstore/resource/product/202410/626170/1000276296_front_XXL.jpg?imgname=%E0%B8%AD%E0%B9%88%E0%B8%B2%E0%B8%99%E0%B8%8A%E0%B8%B0%E0%B8%95%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B4%E0%B9%89%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%81-1-(Mg)"
    }
];

function displayBooks() {
    const booksContainer = document.getElementById('books-container');

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');

        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-content">
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <p class="price">Price: ${book.price}</p>
            </div>
        `;

        booksContainer.appendChild(bookElement);
    });
}

window.onload = displayBooks;
