'use client';
import Image from "next/image";

const ExploreBtn = () => {
    return (
        <button className="mt-5 mx-auto" type="button" id="explore-btn" onClick={()=>{}}>
            <a href="#events">
                Explore Events 
                <Image src="/icons/arrow-down.svg" alt="arrow" width={20} height={20} />
            </a>
        </button>
    )
}

export default ExploreBtn