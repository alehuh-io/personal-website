"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import Image from 'next/image';
import { Navigation, Pagination, Grid } from "swiper/modules";


const projectsData = [
    {
      id: 1,
      title: "Jeep it Up!",
      description:
        "A desktop productivity app that blends a Pomodoro timer and a to-do list in a fun, jeepney-themed interface.",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Electron"],
      github: "",
      image: "/assets/projs/jeep-it-up.png",
      features: ["Lorem ipsum", "todo-list"],
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "My Own Portfolio",
      tech: ["HTML", "CSS", "JavaScript", "Next.js", "Vercel"],
      github: "https://github.com/alehuh-io/personal-website.git",
      image: "/assets/projs/jeep-it-up.png",
      features: ["Lorem ipsum", "todo-list"],
    },
  ];
  
  const certsData = [
    {
      id: 1,
      title: "JavaScript Essentials 1",
      issuer: "Cisco",
      issued: "Aug 2025",
      image: "/assets/certs/cisco.png",
      url: "https://www.credly.com/badges/10d8cb17-d919-44b0-9ce4-170ea161b739/public_url",
    },
    {
      id: 2,
      title: "Learning SQL",
      issuer: "LinkedIn Learning",
      issued: "Aug 2025",
      image: "/assets/certs/linkedin.png",
      url: "https://www.linkedin.com/learning/certificates/ac23f1785e88fffbcb0a4def3d65d38923f7a3b9efa4e52a82bafa7846b21ebc",
    },
  ];
  
  const techStackData = [
    { title: "HTML", image: "/assets/tech-stack/html.png" },
    { title: "CSS", image: "/assets/tech-stack/css.png" },
    { title: "JavaScript", image: "/assets/tech-stack/javascript.png" },
    { title: "Python", image: "/assets/tech-stack/python.png" },
    { title: "C/C++", image: "/assets/tech-stack/c.png" },
    { title: "React.js", image: "/assets/tech-stack/react.png" },
    { title: "Node.js", image: "/assets/tech-stack/nodejs.png" },
    { title: "MSSQL", image: "/assets/tech-stack/sql.png" },
    { title: "MS Word", image: "/assets/tech-stack/word.png" },
    { title: "MS Excel", image: "/assets/tech-stack/excel.png" },
  ];

export default function Portfolio() {
    const [tab, setTab] = useState("projects");
    const [modalData, setModalData] = useState(null);



    return (
        <section className="portfolio" id="portfolio">
        <div className="portfolio-header">
            <h1>.portfolio()</h1>
        </div>
        
        <div className="port-btns">
            
            <button className={`btn1 projetcs ${tab==="projects"?"active":""}`} onClick={()=>setTab("projects")}> Projects</button>
            <button className={`btn1 certs ${tab==="certs"?"active":""}`} onClick={()=>setTab("certs")}> Certificates</button>
            <button className={`btn1 tech-stack ${tab==="tech"?"active":""}`} onClick={()=>setTab("tech")}> Tech</button>
            
        </div>

        {/* Projects Tab */}
        {tab === "projects" && (
        <div className="port-tab projects-tab port-wrapper">
            <Swiper
            modules={[Navigation, Pagination]}
            loop={false}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            >
            {projectsData.map((proj) => (
                <SwiperSlide key={proj.id}>
                <div className="projects">
                    <Image className="proj-img" src={proj.image} alt={proj.title} />
                    <div className="proj-content">
                        <h3 className="proj-title">{proj.title}</h3>
                        <p className="proj-descrip">{proj.description}</p>
                        <div className="footer">
                        <a className="view-more" onClick={() => setModalData(proj)}><i class="bx bx-link-external"></i></a>
                        </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>

            {/* Modal */}
            {modalData && (
                <div className="modal" onClick={() => setModalData(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span
                            className="modal-close"
                            onClick={() => setModalData(null)}
                        >
                            &times;
                        </span>
    
                        <div className="left">
                            <h2 id="modal-title">{modalData.title}</h2>
                            <p id="modal-description">{modalData.description}</p>
    
                            <div className="github">
                                {modalData.github && (
                                <a
                                    href={modalData.github}
                                    target="_blank"
                                    className="github-btn"
                                ><i class="bx bxl-github"></i> GitHub
                                </a>
                                )}
                            </div>
                            
                            <div className="tech">
                                <h2 id="tech">
                                    <i className="bx bx-code-alt"></i> Technologies Used
                                </h2>
                                <div id="modal-tech-used">
                                    {modalData.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
    
                        </div>
    
                        <div className="right">
                            <Image id="modal-image" src={modalData.image} alt={modalData.title} />
                            <div class="key-features">
                                <h2 id="key"><i class="bx bx-code-alt"></i> Key Features</h2>
                                <ul>
                                {modalData.features.map((f, i) => (
                                    <li key={i}>{f}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
            )}


    {/* Certifications Tab */}
      {tab === "certs" && (
        <div className="port-tab certs-tab certs-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Grid]}
            loop={false}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: { slidesPerView: 1, grid: { rows: 2, fill: "row" } },
              768: { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
              1024: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
            }}
          >
            {certsData.map((cert) => (
              <SwiperSlide key={cert.id}>
                <div className="certs">
                    <div class="certs-info">
                        <div class="certs-img">
                            <Image className='certs-img' src={cert.image} alt={cert.title} />
                        </div>

                        <div class="certs-content">
                            <h3 className="certs-title">{cert.title}</h3>
                            <h4 className="certs-where">{cert.issuer}</h4>
                            <h5 className="certs-when">{cert.issued}</h5>
                            <a className='btn certs-btn' href={cert.url} target="_blank" rel="noopener noreferrer">
                                View Credential
                            </a>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Tech Stack Tab */}
      {tab === "tech" && (
        <div className="port-tab tech-stack-tab tech-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Grid]}
            loop={false}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: { slidesPerView: 2, grid: { rows: 2, fill: "row" } },
              768: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
              1024: { slidesPerView: 6, grid: { rows: 2, fill: "row" } },
            }}
          >
          {techStackData.map((tech, i) => (
            <SwiperSlide key={i}>
              <div className="tech">
                <div className="tech-info">
                    <div className="tech-img">
                          <Image src={tech.image} alt={tech.title} />
                      </div>
                    
                      <h3 className="tech-title">{tech.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      )}
    </section>
    );
};