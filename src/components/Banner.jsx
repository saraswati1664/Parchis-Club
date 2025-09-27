
function Banner({title,subtitle,discription,primaryBtn,secondaryBtn}){
    return(
        <>
        <section className="header-sec">
        
        <div className='header-content '>
        <h2 className='banner-head'>{title}</h2>
        <h2 className='font-diff banner-head'>{subtitle}</h2>
        <p className='stylePara'>{discription}</p>
        <div className='butons'>
        <button className='styleBtn colorBtn'>{primaryBtn}</button>
        <button className='clasic-btn styleBtn'>{secondaryBtn}</button>
        </div>
        </div>
        </section>
        </>
    )
}

export default Banner;