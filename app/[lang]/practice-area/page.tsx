import { getDictionary } from "../../get-dictionary";
import Image from "next/image";
import batikBg from "../../assets/images/batik4.jpg";
import garudaImg from "../../assets/images/garuda.png";
import BatikFooter from "../../components/BatikFooter";
import FadeIn, { FadeInHero } from "../../components/FadeIn";

export default async function PracticeArea({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = (rawLang === "id" ? "id" : "en") as "en" | "id";
    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative flex min-h-[85vh] items-center overflow-hidden md:min-h-screen">
                <div className="absolute inset-0 -z-10 bg-black">
                    <Image
                        src={batikBg}
                        alt="Batik Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
                </div>

                <div className="container mx-auto max-w-7xl px-6 md:px-12">
                    <div className="max-w-4xl pt-20">
                        {/* Top line */}
                        <FadeInHero delay={0.2} direction="left" distance={50}>
                            <div className="mb-8 h-px w-full max-w-2xl bg-white/40" />
                        </FadeInHero>

                        <FadeInHero delay={0.3} duration={0.8}>
                            <h1 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                                {dict.practices.title}
                            </h1>
                        </FadeInHero>

                        <FadeInHero delay={0.5} duration={0.8}>
                            <p className="mt-8 max-w-xl font-serif text-lg font-light italic leading-relaxed text-white/90 md:text-xl lg:text-2xl">
                                {dict.practices.subtitle}
                            </p>
                        </FadeInHero>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section
                className="relative bg-white"
                style={{ clipPath: "inset(0)" }}
            >
                <div
                    className="fixed inset-0 pointer-events-none flex items-center justify-center z-0"
                    aria-hidden="true"
                >
                    <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] xl:w-[900px] xl:h-[900px] opacity-[0.05] md:opacity-[0.06]">
                        <Image
                            src={garudaImg}
                            alt=""
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="container relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    {/* Header Text */}
                    <FadeIn>
                        <div className="mb-16 md:mb-24">
                            <h2 className="font-serif text-3xl font-light leading-relaxed text-gray-900 md:text-4xl lg:text-5xl">
                                {dict.practices.headerText}
                            </h2>
                            <div className="mt-6 h-px w-32 bg-gray-900" />
                        </div>
                    </FadeIn>

                    {/* Two Column Layout */}
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                        {/* Litigation Column */}
                        <FadeIn delay={0.1} direction="up" distance={40}>
                            <div>
                                {/* Column Title */}
                                <div className="mb-10 border-b-2 border-gray-900 pb-4">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-900">
                                        {dict.practices.litigation.title}
                                    </h3>
                                </div>

                                {/* Practice Areas List */}
                                <div className="space-y-10">
                                    {dict.practices.litigation.areas.map(
                                        (area, index) => (
                                            <div key={index} className="group">
                                                <h4 className="mb-3 text-lg font-semibold text-gray-900 md:text-xl">
                                                    {area.name}
                                                </h4>
                                                <p className="text-base leading-relaxed text-gray-600 font-light">
                                                    {area.description}
                                                </p>
                                                {index <
                                                    dict.practices.litigation
                                                        .areas.length -
                                                        1 && (
                                                    <div className="mt-10 h-px w-full bg-gray-200" />
                                                )}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Corporate Column */}
                        <FadeIn delay={0.2} direction="up" distance={40}>
                            <div>
                                {/* Column Title */}
                                <div className="mb-10 border-b-2 border-gray-900 pb-4">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-gray-900">
                                        {dict.practices.corporate.title}
                                    </h3>
                                </div>

                                {/* Practice Areas List */}
                                <div className="space-y-10">
                                    {dict.practices.corporate.areas.map(
                                        (area, index) => (
                                            <div key={index} className="group">
                                                <h4 className="mb-3 text-lg font-semibold text-gray-900 md:text-xl">
                                                    {area.name}
                                                </h4>
                                                <p className="text-base leading-relaxed text-gray-600 font-light">
                                                    {area.description}
                                                </p>
                                                {index <
                                                    dict.practices.corporate
                                                        .areas.length -
                                                        1 && (
                                                    <div className="mt-10 h-px w-full bg-gray-200" />
                                                )}
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <BatikFooter />
        </div>
    );
}
