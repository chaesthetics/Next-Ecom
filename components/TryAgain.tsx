'use client'

import { useRouter } from "next/navigation";

const TryAgain = () => {
    const router = useRouter()
    return(
        <div className="flex flex-col items-center w-full justify-center space-y-4">
            <img src="https://static.vecteezy.com/system/resources/previews/023/904/064/original/red-warning-icon-illustration-isolated-on-a-white-background-hazard-warning-circle-sign-with-exclamation-mark-attention-sign-vector.jpg" alt="failed"
                className="md:h-48 md:w-48 h-32 w-32"
            />
            <span className="text-2xl md:text-4xl font-semibold">Payment Failed</span>
            <span>Please check your security card, card details, and connection and try again.</span>
            <button onClick={() => router.back()} className="px-8 py-4 rounded-md text-white bg-red-700 hover:bg-red-600">Try again</button>
        </div>
    )
}

export default TryAgain;