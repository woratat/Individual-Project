const { menus } = require("./menu");

const Restaurant = function (id, name, style, desc) {
  this.id = id;
  this.name = name;
  this.style = style;
  this.desc = desc;
};

var restaurants = new Array();
restaurants.push(
  new Restaurant(
    1,
    "Steve Café & Cuisine",
    "Thai",
    "ร้านอาหารไทยริมแม่น้ำเจ้าพระยา บรรยากาศสบาย ๆ พนักงานบริการดี ราคาสูงนิดนึง แต่วัตถุดิบก็ดีงามสมราคา เมนู “แกงเหลืองไหลบัวกุ้งสด” รสจัดจ้านมาก ๆ ออกเปรี้ยวนำ เค็มตาม และเผ็ดสุดเหวี่ยง กุ้งสดตัวใหญ่ อร่อยดีงามค่ะ, “ผัดสะตอกุ้งสด” เป็นแบบผัดกะปินะคะ รสชาติออกเปรี้ยว เค็ม เผ็ด กุ้งอวบ ๆ สดอร่อย จานนี้ชอบมาก ๆ ค่ะ และ “ยำส้มโอ” รสชาติเปรี้ยว หวาน ๆ มาช่วยตัดเผ็ดได้อย่างดีค่ะ"
  )
);
restaurants.push(
  new Restaurant(
    2,
    "KABOCHA SUSHI",
    "Japanese",
    "ร้านอาหารญี่ปุ่นปากซอยลาดพร้าว 19 ที่คนลาดพร้าวต้องเคยมากิน! จุดเด่นของที่นี่คือความสดและคุณภาพระดับเลิศ ถ้าไม่เชื่อขอให้ลอง “Super Salmon Sashimi” ปลาแซลมอนนอร์เวย์เนื้อนุ่ม กัดทีเดียวขาด ลิ้นละลายเลยทีเดียว และ “Salmon Avocado Salad” สลัดอโวคาโดน้ำสลัดงาญี่ปุ่น ท็อปด้วยแซลมอนสด เสิร์ฟมาในชามสลัดใบใหญ่ อร่อยดี ผักสด ให้เยอะ ส่วนตัวคิดว่าคุณภาพค่อนข้างคุ้มกับราคา ไม่ลองแล้วจะไม่เสียใจ!"
  )
);
restaurants.push(
  new Restaurant(
    3,
    "PIZZERIA LIMONCELLO",
    "Italian",
    "ร้านอาหารอิตาเลียนในซอยสุขุมวิท 11 ภายในร้านตกแต่งโทนสีเหลือง มีครัวเปิดสามารถมองเห็นเตาสำหรับทำพิซซ่าสด ๆโชว์อยู่ด้วย เมนูวันนี้ที่มากินเป็น Salmone al Limone สเต๊กปลาแซลมอนที่กริลล์มาแบบไม่สุกจนเกินไป เนื้อฉ่ำ ๆ เวลาเคี้ยวจะได้รสชาติของซอสที่แทรกอยู่ในเนื้อทุกอณู โดยรวมแล้วชอบมากค่ะ อ่านต่อได้ที่"
  )
);
restaurants.push(
  new Restaurant(
    4,
    "The Great Escake",
    "Cofee",
    "The Great Escake ร้านคาเฟ่เปิดใหม่ที่เชียงใหม่ บรรยากาศดีมากพี่จ๋า! ประเด็นคือนอกจากบรรยากาศจะดีน่าถ่ายรูปเช็กอินแล้ว เมนูเบเกอรีแต่ละตัวของเขาเหมือนหลุดออกจากนิตยสาร สวยมากกก แล้วรสชาติก็เลิศเลอเพอร์เฟกจนงงว่านี่เราไม่ได้นั่งอยู่ที่ฝรั่งเศสใช่ไหมนะ? สาเหตุที่แต่ละเมนูมันดีขนาดนี้เพราะพี่สาวของเจ้าของร้านเขามีประสบการณ์ในการทำเบเกอรีที่ฝรั่งเศส จึงอยากนำเสนอเบเกอรีที่มีความโมเดิร์นดูแปลกตา แต่รสชาติก็ยังคงอยู่ในระดับที่ชาวต่างชาติก็ชอบ และคนไทยก็ชอบ"
  )
);

Restaurant.prototype.getMenu = function (id) {
  let data = [];
  menus.forEach((x) => {
    if (id == x.parent_res) {
      data.push(x);
    }
  });
  return data;
};

module.exports = {
  restaurants: restaurants,
};