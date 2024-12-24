export default function TitleSection({ title, subtitle }) {
    return (
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 text-lg">{subtitle}</p>
      </div>
    );
  }
  