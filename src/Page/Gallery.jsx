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
        { id: 1, image: galeri, info: "2+1, İzmir" },
        { id: 2, image: galeri, info: "3+1, Bursa" },
        {
          id: 3,
          image: galeri,
          info: "4+2, Antalya",
        },
      ],
    },
    {
      title: "Villalar",
      properties: [
        {
          id: 4,
          image: galeri,
          info: "5+1, Bodrum",
        },
        {
          id: 5,
          image: galeri,
          info: "6+2, Fethiye",
        },
      ],
    },
    {
      title: galeri,
      properties: [
        {
          id: 6,
          image: galeri,
          info: "1+1, İstanbul",
        },
        {
          id: 7,
          image: galeri,
          info: "2+1, Ankara",
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
