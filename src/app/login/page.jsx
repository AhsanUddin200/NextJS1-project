"use client"
import Link from "next/link"
import {useRouter} from 'next/navigation'  //lec 08
const login =() => {

    const router = useRouter()
    return(
        <>
        <div>
            <h6 className="flex justify-center mt-10">Login</h6>
            <Link href="/">Go to main page</Link>

            <br />
            <button className="bg-slate-300 rounded-lg hover:scale-95 hover:font-bold p-2" onClick={()=>router.push("/")}>Go to main page</button>

        </div>
        </>
    )
}

export default login