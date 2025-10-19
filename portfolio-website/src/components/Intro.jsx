function Intro(){
    return (
        <>
        <Banner/>
        <IntroMessage/>
        </>
    )

}

function Banner(){
    return(
        <div className="banner">
            <h1>Welcome to My Portfolio</h1>
        </div>
    )
}

function IntroMessage(){
    return(
        <div className="intro-message">
            <p>Hello, I’m David — a Software Engineer with a background in Cloud, Data Science, and FinOps. I’m passionate about building solutions that solve real-world problems</p>
        </div>
    )
}

export default Intro;