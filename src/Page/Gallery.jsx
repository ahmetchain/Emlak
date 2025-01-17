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
        {
          id: 3,
          image: villa3,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 4,
          image: villa4,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 5,
          image: villa5,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 6,
          image: villa6,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 7,
          image: villa7,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 8,
          image: villa8,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 9,
          image: villa9,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 10,
          image: villa10,
          info: {
            roomCount: "٤+١",
            propertyType: "فيلا",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
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
        {
          id: 2,
          image: rezidans2,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 3,
          image: rezidans3,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 4,
          image: rezidans4,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 5,
          image: rezidans5,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 6,
          image: rezidans6,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 7,
          image: rezidans7,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 8,
          image: rezidans8,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 9,
          image: rezidans9,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 10,
          image: rezidans10,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen">
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
