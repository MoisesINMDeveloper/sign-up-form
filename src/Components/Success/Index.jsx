import IconList from "/assets/icon-list.svg"

export default function Success() {
    return (
        <article className="w-screen h-[100vh] grid place-content-center bg-[#36384e]">
            <div className="inline-grid justify-items-end grid-cols-1 px-[1.2rem] py-4 md:py-0 md:mt-0 md:-mb-4 bg-[#ffffff] w-[100vw] md:w-[26rem] h-[100vh] md:h-[26rem] md:px-8 md:rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                <div className="flex flex-col justify-between md:mt-6">
                    <div className="mt-[6rem] md:mt-0">
                        <img className=" w-[3.7rem] h-[3.7rem] md:w-[3.7rem] md:h-[3.7rem] ml-1 mr-2 mt-3 md-mt-6 mb-10 md:mb-8" src={IconList} alt="" />
                        <h1 className="text-4xl font-bold font-roboto text-[#242742] mb-4 ml-1">Thanks for subscribing!</h1>
                        <p className="font-roboto mx-1 mb-6">A confirmation email has been sent to <b className="font-bold">ash@loremcompany.com</b>. Please open it and click the button inside to confirm your subscription.</p>
                    </div>
                    <button className="mb-8 mx-3 w-[82vw] md:w-[34vw] md:mx-0 md:mb-16 focus:from-[#242742] focus:to-[#242742] bg-gradient-to-r from-[#fd155bce] to-[#FF6155] focus:shadow-none shadow-[5px_15px_20px_-10px_#ff6257c9] h-[3.3rem] rounded-md "><p className="text-white font-roboto font-extrabold">Dismiss message</p></button>
                </div>
            </div>
        </article>
    )
}