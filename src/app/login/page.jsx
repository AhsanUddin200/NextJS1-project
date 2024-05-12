"use client"
import Link from "next/link"
import {useRouter} from 'next/navigation'  //lec 08
const login =() => {

    const router = useRouter();
    return(
        <>
        <div>
            <h6 className="flex justify-center mt-10">Login</h6>
            <Link href="/">Go to main page</Link>

            <br />
            <button className="bg-slate-300 rounded-lg hover:scale-95 hover:font-bold p-2" onClick={()=>router.push("/")}>Go to main page</button>

            <div className="flex flex-row justify-center gap-4 bg-slate-300 rounded-2xl mt-4">
    <button className="hover:scale-105" onClick={()=>router.push("/login/loginstd")}>Go to student login page</button>
    <button className="hover:scale-90" onClick={()=>router.push("/login/logintech")}>Go to teacher login page</button>
</div>
        </div>
        </>
    )
}

export default login