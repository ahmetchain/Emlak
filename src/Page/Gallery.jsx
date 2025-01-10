import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleSection from "../Gallery/TitleSection";
import Category from "../Gallery/Category";
import galeri from "../assets/izmir.jpg";

export default function Gallery() {
  const categories = [
    {
      title: "المنازل المستقلة",
      properties: [
        {
          id: 1,
          image: galeri,
          info: {
            roomCount: "٢+١",
            propertyType: "منزل مستقل",
            city: "إزمير",
            avgPrice: "١٬٢٥٠٬٠٠٠ ﷼",
            contactNumber: "٠ ٥٥٥ ٥٥٥ ٥٥ ٥٥",
          },
        },
        {
          id: 2,
          image: galeri,
          info: {
            roomCount: "٣+١",
            propertyType: "منزل مستقل",
            city: "بورصة",
            avgPrice: "١٬٧٥٠٬٠٠٠ ﷼",
            contactNumber: "٠ ٥٥٥ ٥٥٥ ٥٥ ٥٥",
          },
        },
        {
          id: 3,
          image: galeri,
          info: {
            roomCount: "٤+٢",
            propertyType: "منزل مستقل",
            city: "أنطاليا",
            avgPrice: "٢٬٣٠٠٬٠٠٠ ﷼",
            contactNumber: "٠ ٥٥٥ ٥٥٥ ٥٥ ٥٥",
          },
        },
      ],
    },
    {
      title: "الفلل",
      properties: [
        {
          id: 4,
          image: galeri,
          info: {
            roomCount: "٥+١",
            propertyType: "فيلا",
            city: "بودروم",
            avgPrice: "٥٬٥٠٠٬٠٠٠ ﷼",
            contactNumber: "٠ ٥٥٥ ٥٥٥ ٥٥ ٥٥",
          },
        },
        {
          id: 5,
          image: galeri,
          info: {
            roomCount: "٦+٢",
            propertyType: "فيلا",
            city: "فتحية",
            avgPrice: "٦٬٢٠٠٬٠٠٠ ﷼",
            contactNumber: "٠ ٥٥٥ ٥٥٥ ٥٥ ٥٥",
          },
        },
      ],
    },
    {
      title: "الشقق الفندقية",
      properties: [
        {
          id: 6,
          image: galeri,
          info: {
            roomCount: "١+١",
            propertyType: "شقة فندقية",
            city: "إسطنبول",
            avgPrice: "٩٥٠٬٠٠٠ ﷼",
            contactNumber: "٠ ٥٥٥ ٥٥٥ ٥٥ ٥٥",
          },
        },
        {
          id: 7,
          image: galeri,
          info: {
            roomCount: "٢+١",
            propertyType: "شقة فندقية",
            city: "أنقرة",
            avgPrice: "١٬١٥٠٬٠٠٠ ﷼",
            contactNumber: "٠ ٥٥٥ ٥٥٥ ٥٥ ٥٥",
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
