import { getDictionary } from "../../get-dictionary";
import Image from "next/image";
import batikBg from "../../assets/images/batik.jpg";
import batikBg2 from "../../assets/images/batik2.png";
import BatikFooter from "../../components/BatikFooter";

export default async function About({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang: rawLang } = await params;
    const lang = (rawLang === "id" ? "id" : "en") as "en" | "id";
    const dict = await getDictionary(lang);

    return (
        <div className="min-h-screen">
            {/* hero banner */}
            <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-black">
                    <Image
                        src={batikBg}
                        alt="Batik Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
                </div>
                <div className="relative z-10 px-6 pt-20 text-center text-white md:pt-24">
                    <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
                        {dict.about.title}
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-lg font-light text-white/80 drop-shadow-lg md:mt-6 md:text-xl">
                        {dict.about.subtitle}
                    </p>
                </div>
            </section>

            {/* content section */}
            <section className="relative bg-white">
                {/* decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                <div className="container mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-32">
                    <div className="grid gap-16 lg:grid-cols-12 lg:gap-20 items-center">
                        {/* text column */}
                        <div className="lg:col-span-7 space-y-12">
                            {/* section label */}
                            <div className="flex items-center gap-4">
                                <div className="h-px w-12 bg-gray-900" />
                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
                                    our story
                                </span>
                            </div>

                            {/* main content */}
                            <div className="space-y-8">
                                <div className="group">
                                    <div className="flex gap-3 mb-3">
                                        <span className="font-serif text-6xl font-light text-gray-200 select-none">
                                            01
                                        </span>
                                    </div>
                                    <p className="text-lg leading-[1.8] text-gray-800 md:text-xl font-light">
                                        {dict.about.description1}
                                    </p>
                                </div>

                                <div className="h-px w-24 bg-gray-200 my-10" />

                                <div className="group">
                                    <div className="flex gap-3 mb-3">
                                        <span className="font-serif text-6xl font-light text-gray-200 select-none">
                                            02
                                        </span>
                                    </div>
                                    <p className="text-lg leading-[1.8] text-gray-800 md:text-xl font-light">
                                        {dict.about.description2}
                                    </p>
                                </div>
                            </div>

                            {/* decorative element */}
                            <div className="pt-8">
                                <div className="inline-flex items-center gap-3 border-l-2 border-gray-900 pl-6">
                                    <div className="space-y-1">
                                        <p className="font-serif text-2xl font-semibold text-gray-900 italic">
                                            Excellence in every case.
                                        </p>
                                        <p className="text-sm text-gray-500 tracking-wide">
                                            Our commitment to you
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* image column */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-2xl lg:aspect-[4/5]">
                                <Image
                                    src={batikBg2}
                                    alt="Batik Pattern"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* overlay text */}
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="border-l-4 border-white pl-6">
                                        <p className="font-serif text-3xl font-bold leading-tight text-white drop-shadow-lg md:text-4xl">
                                            Unlocking potential,
                                            <br />
                                            <span className="text-white/90 font-light italic">
                                                safeguarding success.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* decorative accent */}
                            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-gray-900 rounded-full opacity-5 blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            <BatikFooter />
        </div>
    );
}
