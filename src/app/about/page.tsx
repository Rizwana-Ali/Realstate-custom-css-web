import Image from "next/image";

const About =  () =>{
    return (
        <div>
        
            <div className="about">
                <h1>About Us</h1>
                 <Image src={"/home5.jpg"} width={500} height={500} alt="About home"  />

                <p>we’re passionate about helping you find the perfect place to call home. With years of experience</p>
                <p>and a deep understanding of the market, we specialize in connecting clients to properties</p>
                <p> that match their vision and lifestyle. From personalized service to expert guidance</p>
                <p> we’re committed to making your real estate journey seamless and rewarding.







</p>
            </div>
        
        </div>
    );
};

export default About;