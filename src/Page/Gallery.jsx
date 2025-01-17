import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleSection from "../Gallery/TitleSection";
import Category from "../Gallery/Category";

// Villa imports
import villa1 from "../assets/villa/1.jpeg";
import villa2 from "../assets/villa/2.jpeg";
import villa3 from "../assets/villa/3.jpeg";
import villa4 from "../assets/villa/4.jpeg";
import villa5 from "../assets/villa/5.jpeg";
import villa6 from "../assets/villa/6.jpeg";
import villa7 from "../assets/villa/7.jpeg";
import villa8 from "../assets/villa/8.jpeg";
import villa9 from "../assets/villa/9.jpeg";
import villa10 from "../assets/villa/10.jpeg";
import villa11 from "../assets/villa/11.jpeg";
import villa12 from "../assets/villa/12.jpeg";
import villa13 from "../assets/villa/13.jpeg";
import villa14 from "../assets/villa/14.jpeg";
import villa15 from "../assets/villa/15.jpeg";
import villa16 from "../assets/villa/16.jpeg";
import villa17 from "../assets/villa/17.jpg";
import villa18 from "../assets/villa/18.jpg";
import villa19 from "../assets/villa/19.jpeg";
import villa20 from "../assets/villa/20.jpeg";
import villa21 from "../assets/villa/21.jpeg";
import villa22 from "../assets/villa/22.jpeg";
import villa23 from "../assets/villa/23.jpeg";
import villa24 from "../assets/villa/24.jpeg";
import villa25 from "../assets/villa/25.jpeg";
import villa26 from "../assets/villa/26.jpeg";
import villa27 from "../assets/villa/27.jpeg";
import villa28 from "../assets/villa/28.jpeg";
import villa29 from "../assets/villa/29.jpeg";
import villa30 from "../assets/villa/30.jpeg";
import villa31 from "../assets/villa/31.jpg";
import villa32 from "../assets/villa/32.jpeg";
import villa33 from "../assets/villa/33.jpeg";
import villa34 from "../assets/villa/34.jpeg";
import villa35 from "../assets/villa/35.jpg";
import villa36 from "../assets/villa/36.jpg";
import villa37 from "../assets/villa/37.jpg";
import villa38 from "../assets/villa/38.jpg";
import villa39 from "../assets/villa/39.jpg";
import villa40 from "../assets/villa/40.jpg";
import villa41 from "../assets/villa/41.jpg";
import villa42 from "../assets/villa/42.jpg";
import villa43 from "../assets/villa/43.jpg";
import villa44 from "../assets/villa/44.jpg";
import villa45 from "../assets/villa/45.jpg";
import villa46 from "../assets/villa/46.jpg";
import villa47 from "../assets/villa/47.jpg";
import villa48 from "../assets/villa/48.jpg";
import villa49 from "../assets/villa/49.jpg";
import villa50 from "../assets/villa/50.jpg";
import villa51 from "../assets/villa/51.jpg";
import villa52 from "../assets/villa/52.jpg";
import villa53 from "../assets/villa/53.jpg";
import villa54 from "../assets/villa/54.jpg";
import villa55 from "../assets/villa/55.jpeg";
import villa56 from "../assets/villa/56.jpeg";
import villa57 from "../assets/villa/57.jpeg";
import villa58 from "../assets/villa/58.jpg";

// Rezidans imports
import rezidans1 from "../assets/rezidans/1.jpg";
import rezidans2 from "../assets/rezidans/2.jpg";
import rezidans3 from "../assets/rezidans/3.jpg";
import rezidans4 from "../assets/rezidans/4.jpg";
import rezidans5 from "../assets/rezidans/5.jpg";
import rezidans6 from "../assets/rezidans/6.jpg";
import rezidans7 from "../assets/rezidans/7.jpg";
import rezidans8 from "../assets/rezidans/8.jpg";
import rezidans9 from "../assets/rezidans/9.jpg";
import rezidans10 from "../assets/rezidans/10.jpg";
import rezidans11 from "../assets/rezidans/11.jpg";
import rezidans12 from "../assets/rezidans/12.jpg";
import rezidans13 from "../assets/rezidans/13.jpg";
import rezidans14 from "../assets/rezidans/14.jpg";
import rezidans15 from "../assets/rezidans/15.jpg";
import rezidans16 from "../assets/rezidans/16.jpg";
import rezidans17 from "../assets/rezidans/17.jpg";
import rezidans18 from "../assets/rezidans/18.jpg";
import rezidans19 from "../assets/rezidans/19.jpg";
import rezidans20 from "../assets/rezidans/20.jpg";
import rezidans21 from "../assets/rezidans/21.jpg";
import rezidans22 from "../assets/rezidans/22.jpg";
import rezidans23 from "../assets/rezidans/23.jpg";

export default function Gallery() {
  const categories = [
    {
      title: "الفلل",
      properties: [
        {
          id: 1,
          image: villa1,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 2,
          image: villa2,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        // Villa 3-58 için aynı yapıyı tekrarlıyoruz
        ...Array.from({ length: 56 }, (_, index) => ({
          id: index + 3,
          image: eval(`villa${index + 3}`),
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        })),
      ],
    },
    {
      title: "الشقق الفندقية",
      properties: [
        {
          id: 1,
          image: rezidans1,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        // Rezidans 2-23 için aynı yapıyı tekrarlıyoruz
        ...Array.from({ length: 22 }, (_, index) => ({
          id: index + 2,
          image: eval(`rezidans${index + 2}`),
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        })),
      ],
    },
  ];

  return (
    <>
      <div className="h-screen">
        <Header page={"gallery"} />
        <div className="py-20">
          {/* Başlık Bölümü */}
          <TitleSection
            title="المعرض"
            subtitle="اكتشف خيارات السكن الحديثة في أجمل مدن تركيا."
          />
          {/* Kategoriler */}
          <div className="container mx-auto px-4">
            {categories.map((category) => (
              <Category
                key={category.title}
                title={category.title}
                properties={category.properties}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
