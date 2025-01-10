import { useState } from "react";
import Ev3 from "../assets/Basliksiz-1-1.png";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function OpportunitySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const questions = [
    "ما هو الغرض من استخدام المنزل أو المصيف؟",
    "ما هو النطاق السعري الذي تفضله؟",
    "كم متر مربع وعدد الغرف التي ترغب بها؟",
    "هل تفضل منزلاً مستقلاً، برجاً، مجمعاً سكنياً، أم مصيفاً؟",
    "هل لديك طلبات خاصة مثل مسبح، حديقة، قرب من البحر، إطلالة بحرية، وسط المدينة، أو قرب من المعالم الطبيعية؟",
  ];

  const extraQuestions = [
    "كم عدد الغرف التي تفكر بها؟ (2+1، 3+1، 4+1، 5+1، 6+1)",
    "أي منطقة تفضل أن يكون منزلك فيها؟",
    "هل تفكر بالشراء لأغراض الاستثمار أم للسكن؟",
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-8 py-16">
      <div className="w-full lg:w-1/2">
        <img
          src={Ev3}
          alt="فرصة"
          className="w-full h-auto object-cover object-center"
        />
      </div>

      <div className="w-full lg:w-1/3 flex flex-col justify-center text-left sm:items-start sm:ml-20 px-4 lg:px-0">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-snug">
          أخبرنا ما هو نوع المنزل الذي تحتاجه، وسنجد المنزل الأنسب لك
        </h2>

        <h3 className="text-xl sm:text-2xl text-gray-600 mb-8">
          ما نوع المنزل الذي تبحث عنه؟
        </h3>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">
                {index + 1}
              </span>
              <p className="text-gray-700 text-lg leading-relaxed">
                {question}
              </p>
            </div>
          ))}

          {/* Devamını Oku Bölümü */}
          {isExpanded && (
            <div className="space-y-6 mt-6">
              {extraQuestions.map((question, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-sm">
                    {questions.length + index + 1}
                  </span>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {question}
                  </p>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mt-4"
          >
            {isExpanded ? (
              <>
                <span>عرض أقل</span>
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                <span>اقرأ المزيد</span>
                <ChevronDown size={20} />
              </>
            )}
          </button>
        </div>

        <a
          href="#iletisim"
          className="flex items-center justify-center w-[200px] h-[60px] bg-black text-white text-lg font-semibold text-center transition-all duration-300 mt-8 hover:bg-black/90"
        >
          تواصل معنا
        </a>
      </div>
    </section>
  );
}
