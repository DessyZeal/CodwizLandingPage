import { Mail } from "lucide-react"

export default function GetStarted() {
    return (
        <section id="join-now" className="max-w-4xl flex flex-col mx-3 md:mx-3 lg:mx-auto rounded-2xl items-center justify-center bg-gradient-purple-blue px-10 py-16 mb-16">
            <h2 className="text-5xl md:text-6xl text-white text-center font-bold mb-4">Ready to Start The Journey?</h2>
            <p className="text-white font-normal p-4 mb-4 text-center text-lg">Join hundreds of kids already learning, creating, and innovating. Sign up today and get your first class free!</p>
            <form action="" className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
                <div className="relative w-full max-w-md md:w-auto">
                    <Mail 
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" 
                        size={20} 
                    />
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>
                <button type="button" className="bg-white w-full md:w-auto text-purple-700 rounded-xl font-semibold px-6 py-3 cursor-pointer shadow-md">Get Started</button>
            </form>
            <p className="text-white text-center text-sm">No credit card required • Cancel anytime • 100% satisfaction guaranteed</p>
        </section>
    )
}