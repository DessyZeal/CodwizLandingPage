import { Mail } from "lucide-react"

export default function GetStarted() {
    return (
        <section className="max-w-4xl flex flex-col mx-3 md:mx-auto lg:mx-auto rounded-2xl items-center justify-center bg-gradient-purple-blue p-10">
            <h2 className="text-4xl text-white text-center font-bold mb-4">Ready to Start The Journey?</h2>
            <p className="text-white font-normal p-4 mb-4 text-center text-lg">Join hundreds of kids already learning, creating, and innovating. Sign up today and get your first class free!</p>
            <form action="submit" className="flex flex-col space-y-4 mb-4">
                <div className="relative w-full max-w-md">
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
                <button className="px-4 py-4 bg-white text-purple-700 font-bold rounded-xl">Get Started</button>
            </form>
            <p className="text-white text-center text-sm">No credit card required • Cancel anytime • 100% satisfaction guaranteed</p>
        </section>
    )
}