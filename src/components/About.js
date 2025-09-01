import Image from 'next/image';
export default function About() {
    return (

        <section className="about" id="about">
                
        <div className="about-header">
            <h1><span>.about-me()</span></h1>
        </div>

        <div className="about-info">
            <div className="about-content">
                <h3>Welcome, I&apos;m</h3>
                <h2>Aleja Jan Lois Velasco</h2>
                <p> I am a 22-year-old Computer Engineering graduate passionate about building efficient software solutions. I focus on continuously learning and improving my skills to create impactful applications. Known for being dedicated and goal-oriented, I thrive in collaborative environments and communicate effectively. 
                    <br /> <br /> With strong adaptability and a commitment to growth, my goal is to develop innovative systems that solve real-world problems and contribute positively to the community.</p>

                <div className="download-resume">
                    <a href="/assets/gen-files/Velasco_Resume.pdf" className="resume-btn" target="_blank">
                        <i className="bx bxs-download"></i>  Resume</a>
                </div>
            </div>

            <div className="about-img">
                <img src="/assets/gen-files/toga.png" alt="" />
            </div>

        </div>

        <div className="about-school">
            <div className="school">
                <h3>University of the Philippines Diliman</h3>
                <h2>Sep 2021 - Jul 2025</h2>
                <hr />
               
                    <ul>
                        <li>Bachelor of Science in Computer Engineering</li>
                        <li>Magna Cum Laude</li>
                        <li>DOST-SEI Merit Scholar</li>
                    </ul>
               
            </div>

            <div className="school">
                <h3>Pamantasan ng Lungsod ng Valenzuela</h3>
                <h2>Jun 2019 - Jul 2021</h2>
                <hr />
             
                    <ul>
                        <li>Science, Technology, Engineering, and Mathematics (STEM) Strand</li>
                        <li>With High Honors</li>
                    </ul>
               
            </div>

        </div>
    </section>

    );


}









