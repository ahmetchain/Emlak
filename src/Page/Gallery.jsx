import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleSection from "../Gallery/TitleSection";
import Category from "../Gallery/Category";
import galeri from "../assets/izmir.jpg";
import mustakil from "../assets/mustakil/mustakil.webp";
import mustakil1 from "../assets/mustakil/mustakil1.webp";
import mustakil2 from "../assets/mustakil/mustakil2.webp";

import villa from "../assets/villa/villa.webp";
import villa1 from "../assets/villa/villa1.webp";
import villa2 from "../assets/villa/villa2.webp";

import rezidans from "../assets/rezidans/rezidans.jpg";
import rezidans1 from "../assets/rezidans/rezidans1.jpg";
import rezidans2 from "../assets/rezidans/rezidans2.jpg";

export default function Gallery() {
  const categories = [
    {
      title: "المنازل المستقلة",
      properties: [
        {
          id: 1,
          image: mustakil,
          info: {
            roomCount: "٢+١",
            propertyType: "منزل مستقل",
            city: "إزمير",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 2,
          image: mustakil1,
          info: {
            roomCount: "٣+١",
            propertyType: "منزل مستقل",
            city: "بورصة",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 3,
          image: mustakil2,
          info: {
            roomCount: "٤+٢",
            propertyType: "منزل مستقل",
            city: "أنطاليا",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
      ],
    },
    {
      title: "الفلل",
      properties: [
        {
          id: 4,
          image: villa,
          info: {
            roomCount: "٥+١",
            propertyType: "فيلا",
            city: "بودروم",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 5,
          image: villa1,
          info: {
            roomCount: "٦+٢",
            propertyType: "فيلا",
            city: "فتحية",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 6,
          image: villa2,
          info: {
            roomCount: "٦+٢",
            propertyType: "فيلا",
            city: "فتحية",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
      ],
    },
    {
      title: "الشقق الفندقية",
      properties: [
        {
          id: 7,
          image: rezidans,
          info: {
            roomCount: "١+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 8,
          image: rezidans1,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "أنقرة",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
        {
          id: 9,
          image: rezidans2,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "أنقرة",
            contactNumber: "٠ ٥٤٣ ٦٥٣ ٥١ ٣٤",
          },
        },
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
