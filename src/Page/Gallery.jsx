import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleSection from "../Gallery/TitleSection";
import Category from "../Gallery/Category";
import galeri from "../assets/izmir.jpg";

export default function Gallery() {
  const categories = [
    {
      title: "Müstakil Evler",
      properties: [
        {
          id: 1,
          image: galeri,
          info: {
            roomCount: "2+1",
            propertyType: "Müstakil Ev",
            city: "İzmir",
            avgPrice: "1,250,000 TL",
            contactNumber: "0 555 555 55 55",
          },
        },
        {
          id: 2,
          image: galeri,
          info: {
            roomCount: "3+1",
            propertyType: "Müstakil Ev",
            city: "Bursa",
            avgPrice: "1,750,000 TL",
            contactNumber: "0 555 555 55 55",
          },
        },
        {
          id: 3,
          image: galeri,
          info: {
            roomCount: "4+2",
            propertyType: "Müstakil Ev",
            city: "Antalya",
            avgPrice: "2,300,000 TL",
            contactNumber: "0 555 555 55 55",
          },
        },
      ],
    },
    {
      title: "Villalar",
      properties: [
        {
          id: 4,
          image: galeri,
          info: {
            roomCount: "5+1",
            propertyType: "Villa",
            city: "Bodrum",
            avgPrice: "5,500,000 TL",
            contactNumber: "0 555 555 55 55",
          },
        },
        {
          id: 5,
          image: galeri,
          info: {
            roomCount: "6+2",
            propertyType: "Villa",
            city: "Fethiye",
            avgPrice: "6,200,000 TL",
            contactNumber: "0 555 555 55 55",
          },
        },
      ],
    },
    {
      title: "Rezidanslar",
      properties: [
        {
          id: 6,
          image: galeri,
          info: {
            roomCount: "1+1",
            propertyType: "Rezidans",
            city: "İstanbul",
            avgPrice: "950,000 TL",
            contactNumber: "0 555 555 55 55",
          },
        },
        {
          id: 7,
          image: galeri,
          info: {
            roomCount: "2+1",
            propertyType: "Rezidans",
            city: "Ankara",
            avgPrice: "1,150,000 TL",
            contactNumber: "0 555 555 55 55",
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
            title="Galeri"
            subtitle="Türkiye'nin en güzel şehirlerindeki modern konut seçeneklerimizi keşfedin."
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
