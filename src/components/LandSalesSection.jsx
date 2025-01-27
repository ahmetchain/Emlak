import React from 'react';

const LandSalesSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-4 drop-shadow-lg">
            خدمة بيع الأراضي
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30">
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">نحن بجانبك في كل خطوة من عملية شراء الأراضي في أجمل مناطق تركيا.</p>
          </div>

          <div className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30">
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">يجد المستثمرون الأجانب في تركيا وجهة مثالية للاستثمار العقاري بفضل موقعها الجغرافي الاستراتيجي الذي يجعلها مركز جذب عالمي.</p>
          </div>

          <div className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30">
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">خيارات استثمار الأراضي المتنوعة: زراعية (للزراعة)، سياحية (للبناء الفندقي والسياحي)، صناعية (لإنشاء المصانع والمستودعات)، سكنية (لبناء المساكن) وغيرها من الاستخدامات.</p>
          </div>

          <div className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30">
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">ما هي المواصفات التي تبحث عنها في قطعة الأرض التي ترغب بشرائها؟ سنساعدك في العثور على الأرض المثالية.</p>
          </div>

          <div className="bg-blue-900/40 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:bg-blue-800/50 transition-all duration-300 border border-blue-700/30">
            <p className="text-lg sm:text-xl md:text-2xl text-right text-amber-100 leading-relaxed">لا تتردد في التواصل معنا، سنساعدك في العثور على الفرصة المناسبة لك.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandSalesSection; 