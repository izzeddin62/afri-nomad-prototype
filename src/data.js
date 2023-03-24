import nyungwe from "./assets/nyungwe.jpg"
import nyungwe2 from "./assets/nyungwe2.jpg"
import nyungwe3 from "./assets/nyungwe3.jpg"
import nyungwe4 from "./assets/nyungwe4.jpg"
import nyungwe5 from "./assets/nyungwe5.JPG"
import virunga from "./assets/virunga.jfif";
import virunga2 from "./assets/virunga2.jpg";
import virunga3 from "./assets/virunga3.jpg";
import virunga4 from "./assets/virunga4.webp";
import virunga5 from "./assets/virunga5.jpg";
import gishwati from "./assets/gishwati.png";
import gishwati2 from "./assets/gishwati2.jpg";
import gishwati3 from "./assets/gishwati3.jpg";
import gishwati4 from "./assets/gishwati4.jpg";
import gishwati5 from "./assets/gishwati5.jpg";
import kivu from "./assets/kivu.jpg";
import kivu2 from "./assets/kivu2.jpg";
import kivu3 from "./assets/kivu3.jpg";
import kivu4 from "./assets/kivu4.jpg";
import kivu5 from "./assets/kivu5.jpg";
import akagera from "./assets/akagera.jpg";
import akagera2 from "./assets/akagera2.jpg";
import akagera3 from "./assets/akagera3.jpg";
import akagera4 from "./assets/akagera4.jpg";
import akagera5 from "./assets/akagera.jpg";
import mombasa from "./assets/mombasa.jpeg";
import mombasa2 from "./assets/mombasa2.jpeg";
import mombasa3 from "./assets/mombasa3.jpeg";
import mombasa4 from "./assets/mombasa4.jpeg";
import mombasa5 from "./assets/mombasa5.jfif";
import masai from "./assets/masai.jfif"
import masai2 from "./assets/masai2.jfif"
import masai3 from "./assets/masai3.jfif"
import masai4 from "./assets/masai4.jfif"
import masai5 from "./assets/masai5.jfif"
import nakuru from "./assets/nakuru.jfif"
import nakuru2 from "./assets/nakuru2.jfif"
import nakuru3 from "./assets/nakuru3.jfif"
import nakuru4 from "./assets/nakuru4.jfif"
import nakuru5 from "./assets/nakuru5.jfif"
import kisumu from "./assets/kisumu.jfif"
import kisumu2 from "./assets/kisumu2.jfif"
import kisumu3 from "./assets/kisumu3.jfif"
import kisumu4 from "./assets/kisumu4.jfif"
import kisumu5 from "./assets/kisumu5.jfif"
import kanjuru from "./assets/kanjuru.jfif"
import kanjuru2 from "./assets/kanjuru2.jfif"
import kanjuru3 from "./assets/kanjuru3.jfif"
import kanjuru4 from "./assets/kanjuru4.jfif"
import kanjuru5 from "./assets/kanjuru5.jfif"
import yankari from "./assets/yankari.jfif"
import yankari2 from "./assets/yankari2.jfif"
import yankari3 from "./assets/yankari3.jfif"
import yankari4 from "./assets/yankari4.jfif"
import yankari5 from "./assets/yankari5.jfif"
import gurara from "./assets/gurara.jfif"
import gurara2 from "./assets/gurara2.jfif"
import gurara3 from "./assets/gurara3.jfif"
import gurara4 from "./assets/gurara4.jfif"
import gurara5 from "./assets/gurara5.jfif"
import shere from "./assets/shere.jfif"
import shere2 from "./assets/shere2.jfif"
import shere3 from "./assets/shere3.jfif"
import shere4 from "./assets/shere4.jfif"
import shere5 from "./assets/shere5.jfif"
import mambila from "./assets/mambila.jfif"
import mambila2 from "./assets/mambila2.jfif"
import mambila3 from "./assets/mambila3.jfif"
import mambila4 from "./assets/mambila4.jfif"
import mambila5 from "./assets/mambila5.jfif"

const data = [
    {
        name: "Nyungwe Forest National Park",
        id: 1,
        country: "Rwanda",
        countryId: "rwanda",
        location: "Rusizi, Rwanda",
        img: nyungwe,
        imgs: [nyungwe2, nyungwe3, nyungwe4, nyungwe5],
        description:
            "One of the oldest rainforests in Africa, Nyungwe is rich in biodiversity and spectacularly beautiful. The mountainous region is teaming with wildlife, including a small population of chimpanzees as well as 12 other species of primate, including the L'Hoest's monkey endemic to the Albertine Rift.",
    },
    {
        name: "Virunga Mountains",
        id: 2,
        country: "Rwanda",
        countryId: "rwanda",
        location: "Musanze, Rwanda",
        img: virunga,
        imgs: [virunga2, virunga3, virunga4, virunga5],
        description:
            "The Virunga Mountains (also known as Mufumbiro) are a chain of volcanoes in East Africa, along the northern border of Rwanda, the Democratic Republic of the Congo (DRC), and Uganda. The mountain range is a branch of the Albertine Rift Mountains, which border the western branch of the East African Rift.",
    },
    {
        name: "Gishwati-Mukura National Park and Biosphere Reserve",
        id: 3,
        country: "Rwanda",
        countryId: "rwanda",
        img: gishwati,
        imgs: [gishwati2, gishwati3, gishwati4, gishwati5],
        location: "Nyabihu, Rwanda",
        description:
            "The Gishwati-Mukura Landscape is located in the Albertine Rift in the western part of Rwanda. This young national park is a global biodiversity hotspot, including a variety of endemic and endangered species.",
    },
    {
        name: "Lake Kivu",
        id: 4,
        country: "Rwanda",
        countryId: "rwanda",
        img: kivu,
        imgs: [kivu2, kivu3, kivu4, kivu5],
        location: "Gisenyi, Rwanda",
        description:
            "Lake Kivu is one of the African Great Lakes. It lies on the border between the Democratic Republic of the Congo and Rwanda, and is in the Albertine Rift, the western branch of the East African Rift. Lake Kivu empties into the Ruzizi River, which flows southwards into Lake Tanganyika",
    },
    {
        name: "Akagera national park",
        id: 5,
        country: "Rwanda",
        countryId: "rwanda",
        img: akagera,
        imgs: [akagera2, akagera3, akagera4, akagera5],
        location: "Musanze, Rwanda",
        description:
            "Akagera National Park is a protected area in eastern Rwanda covering 1,122 km2 (433 sq mi) along the international border with Tanzania. It was founded in 1934 and includes savannah, montane and swamp habitats. Akagera National Park lies in eastern Rwanda, hugging the border with Tanzania. It's characterized by woodland, swamps, low mountains and savannah. The varied terrain shelters wildlife including zebras, giraffes, elephants, lions and hundreds of bird species, such as the rare shoebill stork. In the southern part of the park, vast Lake Ihema is home to hippos and crocodiles",
    },
    {
        name: "Mombasa city",
        id: 6,
        country: "Kenya",
        countryId: "kenya",
        img: mombasa,
        imgs: [mombasa2, mombasa3, mombasa4, mombasa5],
        location: "Mombasa, Kenya",
        description:
            "Mombasa is the second city in Kenya. it is located in the coastal region of kenya. it has beautifull beaches, camel riding, hostorical sites and a national park. Mombasa, city and chief port of Kenya, situated on a coralline island in a bay of the Indian Ocean. The island is linked to its mainland municipal territory of 100 square miles (259 square km) by causeway, bridge, and ferry and has an area of 5.5 square miles (14.25 square km)",
    },
    {
        name: "Masai mara national park",
        id: 7,
        country: "Kenya",
        countryId: "kenya",
        img: masai,
        imgs: [masai2, masai3, masai4, masai5],
        location: "Narok County, Kenya",
        description:
            "Masai mara is locate at Narok County in Kenya which boarders Tanzania. The national park is good location for visitors who enjoy animals and interacting with the local people. masai people are known for having kept there culture alive upto date",
    },
    {
        name: "Nakuru City",
        id: 8,
        country: "Kenya",
        countryId: "kenya",
        img: nakuru,
        imgs: [nakuru2, nakuru3, nakuru4, nakuru5],
        location: "Narok County, Kenya",
        description:
            "Nakuru is the 4th city in kenya. it is known fr lake Nakuru national park. This lake is known as flamingo lakes, as it's full of flamingos..its a good place to watch a large group of flamingos",
    },
    {
        name: "Kisumu city",
        id: 9,
        country: "Kenya",
        countryId: "kenya",
        img: kisumu,
        imgs: [kisumu2, kisumu3, kisumu4, kisumu5],
        location: "Kisumu city, Kenya",
        description:
            "Kisumu city is a city located along lake victoria. The lake is one of leading fish producing water sources in kenya. It has good hotels that give you good views of the lake. you can also ride on boat across the lake",
    },
    {
        name: "Yankari National Park",
        id: 10,
        country: "Nigeria",
        countryId: "nigeria",
        img: yankari,
        imgs: [yankari2, yankari3, yankari4, yankari5],
        location: "Bauchi State, Nigeria",
        description:
            "Yankari National Park (aka Yankari game reserve), is a stunning and sizable wildlife reserve, situated in the Northeastern state of Bauchi State in Nigeria. Many natural warm water springs, as well as a huge variety of flora and animals, may be found there. It has a total area of 2,244 square kilometers (866 sq mi), multiple natural warm water springs, and a diverse range of flora and wildlife. Because of its prime location in the center of the West African savanna, it offers travelers and tourists a singular opportunity to observe animals in its natural setting. Yankari was initially established in 1956 as a game reserve but later became Nigeria's biggest national park in 1991. ",
    },
    {
        name: "Kajuru Castle",
        id: 11,
        country: "Nigeria",
        countryId: "nigeria",
        img: kanjuru,
        imgs: [kanjuru2, kanjuru3, kanjuru4, kanjuru5],
        location: "Kaduna State, Nigeria",
        description:
            "Kajuru Castle is located in Kadiri village in southern Kaduna State.  Built between 1981 and 1989, it is a luxurious villa. A German expatriate residing in Kaduna at the time erected the castle in Nigeria. Up to 150 guests can be accommodated in the breathtaking architectural wonder that is the Kaujru castle. The castle is situated on a mountaintop in Kajuru (Ajure) village, Kaduna State, some 45 kilometers from Kaduna. It is a fantasy Romanesque structure made of granite stone that is 1 meters thick, featuring turrets, an armory, and a dungeon. The castle is privately owned and can accommodate 150 people.",
    },
    {
        name: "Gurara Falls",
        id: 12,
        country: "Nigeria",
        countryId: "nigeria",
        img: gurara,
        imgs: [gurara2, gurara3, gurara4, gurara5],
        location: "Niger state, Nigeria",
        description:
            "The magnificent Gurara Waterfalls is named for two deities that the Gwari people traditionally worshiped: Gura and Rara. A wonderful location to take in the wildlife or go fishing in the Gurara River is the Gurara Waterfalls. The Gurara Waterfalls are a branch of the Niger River. According to oral tradition, Gurara Waterfalls was first located in 1745 by a Gwari hunter named Buba. Europeans later found it in 1925 after using it as a vacation area. Gurara Waterfalls was revered by locals in the areas surrounding it before Europeans learned of the waterfalls. Also, according to oral history, the Gurara River and Waterfalls were named after the deities Gura and Rara.",
    },
    {
        name: "Shere Hills",
        id: 12,
        country: "Nigeria",
        countryId: "nigeria",
        img: shere,
        imgs: [shere2, shere3, shere4, shere5],
        location: "Plateau state, Nigeria",
        description: "A group of sloping hills known as the Shere Hills can be located in Jos, Plateau State, Nigeria. When you see how the boulders are placed to form the hills, which will literally steal your breath away, the sight of the hills provides for an intriguing spectacle as you start to wonder at the wonder of creation. After Chappal Waddi on the Mambilla Plateau in Taraba State and Mount Dimlang on the Shebshi Mountains in Adamawa State, Shere Hills is notable as the highest point of the Jos Plateau and is officially the third highest point in Nigeria. About 10 kilometers to the east of Jos are the hills. When there were conflicts in the past, the locals of this area used to hide away in these hills. The Shere Hills' (Gog & Maggog) highest points are located at 1,829 meters (6,001 feet above sea level). The tallest and most craggy mountain on the Plateau is Shere Hills. The hills' perfectly organized rocks make for a difficult trek for anyone aiming to reach the summit of the tallest hill. Also, it provides mountain climbers and adventure seekers with unmatched options.",
    },
    {
        name: "Mambilla Plateau",
        id: 13,
        country: "Nigeria",
        countryId: "nigeria",
        img: mambila,
        imgs: [mambila2, mambila3, mambila4, mambila5],
        location: "Taraba State, Nigeria",
        description:
            "Located in the highland region of Taraba State of Nigeria it houses Chappal Waddi mountain, regarded to be Nigeria's highest point with an average height of roughly 2,419 meters (7,936 feet) above sea level. As a travel destination, it offers some of the nicest weather in the nation, which is mild and welcoming throughout the year, in contrast to other regions of the nation where there are temperature fluctuations during the day and night. Moreover, there are no tse-tse flies or mosquitoes on the Mambilla Plateau. In Mambilla, daytime temperatures rarely get beyond 25°C; the driest months are December and January, when relative humidity drops to approximately 15%, while the wet season typically begins in August.",
    },

];


export default data

