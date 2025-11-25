export default function Impacts() {
    return (
        <section id="impacts" className="flex flex-col items-center justify-center px-3 lg:px-20 py-10 pt-28 lg:py-0 gap-8 pb-20 md:pb-20 lg:pb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
                Our <span className="bg-text-gradient bg-clip-text text-transparent">Impact Story</span>
            </h2>
            <p className="text-gray-500 font-normal text-lg max-w-4xl text-center">Transforming lives through technology, one child at a time.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-5 lg:px-20 py-10 text-center text-black font-bold text-2xl">
                <div className="bg-white p-6 flex flex-col items-center justify-center rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                    <h2 className="bg-text-gradient bg-clip-text text-transparent text-4xl">500+</h2>
                    <p className="text-gray-500 text-sm font-medium ">Kids empowered</p>
                </div>
                <div className="bg-white p-6 flex flex-col items-center justify-center rounde-sm shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                    <h2 className="bg-text-gradient bg-clip-text text-transparent text-4xl">50+</h2>
                    <p className="text-gray-500 text-sm font-medium">Community Outreaches</p>
                </div>
                <div className="bg-white p-6 flex flex-col items-center justify-center rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                    <h2 className="bg-text-gradient bg-clip-text text-transparent text-4xl">1000+</h2>
                    <p className="text-gray-500 text-sm font-medium">Tech skills learned</p>
                </div>
                <div className="bg-white p-6 flex flex-col items-center justify-center rounded-lg shadow-md text-center hover:shadow-xl transition-shadow duration-300">
                    <h2 className="bg-text-gradient bg-clip-text text-transparent text-4xl">25+</h2>
                    <p className="text-gray-500 text-sm font-medium">Schools partnered</p>
                </div>
            </div>
            <div className="max-w-4xl mx-auto text-black text-start bg-white p-10 rounded-lg shadow-md">
                <p className="text-xl leading-8 ">
                    Since our founding, we&apos;ve been on a mission to bring technology education to every child in our community. Through hands-on workshops, coding bootcamps, and robotics competitions, we&apos;ve witnessed incredible transformations.
                    From shy beginners to confident young innovators, our students don&apos;t just learn to code
                    —they learn to dream bigger, think creatively, and build solutions for tomorrow&apos;s challenges. Every outreach is a new opportunity to spark curiosity and ignite a passion for technology that will last a lifetime.
                </p>
            </div>
        </section>
    )
}