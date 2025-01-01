import { useState } from "react";
import { motion } from "framer-motion";
import {
    BarChart,
    GraduationCap,
    Zap,
    RefreshCw,
    CheckCircle,
} from "lucide-react";

// الخطوات بالتفاصيل والنتائج
const steps = [
    {
        week: "الأسبوع الأول",
        title: "تحليل الفجوات وإعداد خارطة الطريق",
        description:
            "حلل مهامك الحالية، وحدد الفجوات، وأنشئ خارطة طريق مخصصة تناسب احتياجاتك. ستحصل على قائمة مرجعية مفصلة لتنفيذ الذكاء الاصطناعي والأتمتة بكفاءة.",
        icon: <BarChart className="h-10 w-10 text-blue-600" />,
        outcomes: [
            "استراتيجية مخصصة لتنفيذ الذكاء الاصطناعي",
            "قائمة أولويات لأتمتة المهام",
            "إطار عمل لحساب العائد على الاستثمار",
        ],
    },
    {
        week: "الأسبوع الثاني",
        title: "بناء وكلاء المعرفة",
        description:
            "قم ببناء وكلاء المعرفة الشخصية الخاصة بك للمساعدة في التحليل وإعداد التقارير والتوثيق. هذه الأدوات تمكنك من أتمتة المهام المشابهة بشكل مستقل.",
        icon: <GraduationCap className="h-10 w-10 text-green-600" />,
        outcomes: [
            "مساعد بحثي قائم على الذكاء الاصطناعي",
            "إنشاء تقارير تلقائية",
            "نظام توثيق ذكي",
        ],
    },
    {
        week: "الأسبوع الثالث",
        title: "إنشاء وكلاء العمل",
        description:
            "قم بتطوير مساعدين بالذكاء الاصطناعي لأتمتة المهام في أدوات مثل جوجل شيتس، البريد الإلكتروني، التقويم، وواتساب. قم بتحسين تدفقات العمل بسهولة.",
        icon: <Zap className="h-10 w-10 text-yellow-500" />,
        outcomes: [
            "أتمتة إدارة البريد الإلكتروني",
            "نظام تحسين التقويم",
            "مخططات تكامل سير العمل",
        ],
    },
    {
        week: "الأسبوع الرابع",
        title: "دمج تدفقات الأتمتة",
        description:
            "قم بدمج كل شيء - وكلاء المعرفة، المساعدين بالذكاء الاصطناعي، والأتمتة - في أنظمة متكاملة لتحقيق أقصى إنتاجية.",
        icon: <RefreshCw className="h-10 w-10 text-red-600" />,
        outcomes: [
            "تدفقات أتمتة شاملة",
            "لوحة متابعة الأداء",
            "إطار عمل للتحسين المستمر",
        ],
    },
];

const EnhancedCoachingJourneyArabic = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800" dir="rtl">
            {/* القسم الرئيسي */}
            <div className="container mx-auto px-6 py-16">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    {/* المحتوى النصي */}
                    <motion.div
                        className="lg:w-1/2 space-y-6 text-right"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                            برنامج إتقان وكلاء الذكاء الاصطناعي لمدة 4 أسابيع
                        </span>
                        <h1 className="text-5xl font-bold leading-tight">
                            أتقن وكلاء الذكاء الاصطناعي <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                وحوّل تدفق عملك!
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            أطلق العنان للإنتاجية واحصل على الوضوح من خلال رحلتنا التدريبية المخصصة حسب أهدافك ومستواك. دع وكلاء الذكاء الاصطناعي يعملون من أجلك بينما تركز على ما يهم.
                        </p>
                        <div className="flex gap-4 justify-end">
                            <button
                                className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
                                onClick={() => window.location.href = "https://wa.me/+201288493425"}
                            >
                                ابدأ الآن! 🚀
                            </button>
                            <button
                                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition"
                                onClick={() => window.location.href = "https://www.facebook.com/share/p/15hK4hvtr6/"}
                            >
                                اكتشف المزيد
                            </button>
                        </div>
                    </motion.div>

                    {/* الرسوم التفاعلية */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                            <div className="grid grid-cols-2 gap-4">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        className={`p-4 rounded-lg shadow-md cursor-pointer ${activeStep === index
                                                ? "bg-blue-100 border-2 border-blue-600"
                                                : "bg-white"
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => setActiveStep(index)}
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            {step.icon}
                                            <span className="font-semibold">{step.week}</span>
                                        </div>
                                        <h3 className="text-sm font-bold">{step.title}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* رحلة التدريب */}
            <div className="container mx-auto px-6 py-24 text-right">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">رحلتك التدريبية نحو وكلاء الذكاء الاصطناعي!</h2>
                    <p className="text-lg text-gray-600">
                        مسار خطوة بخطوة لإتقان وكلاء الذكاء الاصطناعي وأنظمة الأتمتة.
                    </p>
                </div>

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-xl bg-white shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="flex items-start gap-6">
                                {step.icon}
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                    <ul className="mt-4 space-y-2">
                                        {step.outcomes.map((outcome, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <span className="text-gray-700">{outcome}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Floating CTA */}
            <motion.div
                className="fixed bottom-8 left-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <button
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition"
                    onClick={() => window.location.href = "https://wa.me/+201288493425"}
                >
                    احجز مقعدك الآن 🚀
                </button>
            </motion.div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white text-right py-8">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">
                            أحمد توفيق - خبير الذكاء الاصطناعي والأتمتة
                        </h3>
                        <p className="text-sm text-gray-400">
                            © 2025 جميع الحقوق محفوظة.
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a
                            href="https://www.facebook.com/ahmed.tawfeeq01"
                            className="hover:text-blue-400 transition"
                        >
                            فيسبوك
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ahmed-tawfeeq/"
                            className="hover:text-blue-400 transition"
                        >
                            لينكيد إن
                        </a>
                        <a
                            href="https://wa.me/+201288493425"
                            className="hover:text-green-400 transition"
                        >
                            واتساب
                        </a>
                        <a
                            href="mailto:a.tawfeeq101@gmail.com"
                            className="hover:text-yellow-400 transition"
                        >
                            البريد الإلكتروني
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default EnhancedCoachingJourneyArabic;