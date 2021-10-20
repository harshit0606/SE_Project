import React, { useEffect } from "react";
import "../Styles/Aboutus.css";
import { Row, Col } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Iconholder from "../Components/Iconholder";
import $ from "jquery";
import staff from "../Assets/employees.png";
import price from "../Assets/dollar.png";
import placeholder from "../Assets/placeholder.png";
import experience from "../Assets/experience.png";

import TeamSocials from "../Components/TeamSocials";

import t1 from "../Assets/Team/t1.jpeg";
import t2 from "../Assets/Team/t2.jpeg";
import t3 from "../Assets/Team/t3.jpeg";
import t4 from "../Assets/Team/t4.jpeg";
import t5 from "../Assets/Team/t5.jpeg";
import { Button } from "react-bootstrap";

const Aboutus = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

  return (
    <div>
      <Header />
      {/* <div class="main-heading">
        <h1>Heading</h1>
      </div> */}

      <div>
        {/* <div className="heading-about">
          <p>&nbsp;&nbsp;About Us&nbsp;&nbsp;</p>
        </div> */}
        <div className="heading-alt">
          <h2>About Us</h2>
          <h2>About Us</h2>
        </div>
        <div className="about-us-god">
          <p style={{ marginTop: "60px" }} className="about-journey">
            Pac Auli's adventure began with two intrepid explorers hoping to
            trek and conquer all of the world's most exciting locations. They
            realized that people who enjoy trekking and bag packing need proper
            guidance during their journey of exploring various destinations, so
            they decided to form PAC AULI(Pangarchulla Adventure Camps),which
            they named after a Himalayan Peak Mt Pangarchulla.As one of the
            founders have sheer memories with this peak. We vary because we
            think in different ways. The goal of PAC AULI is not to make money
            from the travellers; rather, it is to encourage them to live in the
            moment, learn from nature, explore conventional lifestyles, and
            assist us in the conservation of natural resources, among other
            things. We help people do the right thing when they travel by
            guiding, training, and motivating them. Previously, we only worked
            in Uttarakhand's Himalayan region, but now we help people explore
            Himanchal,Ladakh, Nepal, and Bhutan.
          </p>
          <div className="hheadd">
            <center>
              <h1>
                <span>MEET THE CRUSADERS!</span>
              </h1>
            </center>
          </div>
          {/* <Row>
              <div className="hheadd">
                <h1>
                  <span>NAMASKAAR!</span>
                </h1>
              </div>
            </Row> */}
          {/* 
            <Row>
              <div className="hheadd">
                <h1>
                  <span>ABOUT THE FOUNDER!</span>
                </h1>
              </div>
            </Row>
            <Row style={{ marginTop: "80px" }}>
              <Stars />
            </Row>
            <Row>
              <Col className="sec1">
                Anshuman’s curiosity to endeavor the Himalayas started at a very
                young age. His passion for trekking and delving into one of the
                most famous adventure sports, ‘skiing,’ started when he was 10
                years old. How did this happen? What made him so inquisitive to
                explore this mountain range? Like any other adrenaline junkie,
                he went on different treks with his cousins and their trekking
                groups from India and people from other continents. One day when
                he went for his first peak summit of Mt Pangarchulla at the age
                of 12. This was a game-changing moment for him, and then he
                never looked back. He realized that his love for the mountains
                could not be replaced; hence he started his own trekking company
                at 16. Anshuman was a different person altogether; wanted to do
                something different and break the barriers. A rank holder in
                studies from India's renowned boarding school, ’ Doon
                International School,’ he wanted to take the road less traveled
                and embark on the thrilling journey. He has brought a lot of
                accolades in skiing and competed at the highest level. He still
                participates in skiing competitions due to his immense love for
                this sport. Apart from being adventurous, Anshuman is a
                fun-loving and welcoming person as he believes in the philosophy
                of ‘Vasudhaiva Katumbakam’ that every living being is a part of
                our family.
              </Col>
            </Row>
            <TeamSocials
              facebook="https://www.facebook.com/khtrr.balak"
              instagram="https://www.instagram.com/bisht.anshuman/?igshid=3a6jlv57iaqq"
            />
            <Row>
              <div className="hheadd">
                <h1>
                  <span>OUR SHINING STARS!</span>
                </h1>
              </div>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Shiningstars />
            </Row> */}

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#222222"
              fill-opacity="1"
              d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="founder-div">
            <Row className="founder-div-check">
              <Col className="image-col-team" lg={6} md={12} sm={12}>
                <img src={t4} alt="Anshuman Bisht" className="founder-image" />
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className="about-founder-baap">
                  <div className="about-founder-div">
                    <h2 className="founder-name">ANSHUMAN BISHT</h2>
                    <h6>FOUNDER & MD</h6>
                    <div className="divider-div">
                      <hr className="founder-divider" />
                    </div>

                    <p className="about-founder">
                      <em>
                      Anshuman’s curiosity to endeavor the Himalayas started at a very young age. His passion for trekking and delving into one of the most famous adventure sports, ‘skiing,’ started when he was 10 years old. How did this happen? What made him so inquisitive to explore this mountain range? Like any other adrenaline junkie, he went on different treks with his cousins and their trekking groups from India and people from other continents. One day when he went for his first peak summit of Mt Pangarchulla at the age of 12. This was a game-changing moment for him, and then he never looked back. He realized that his love for the mountains could not be replaced; hence he started his own trekking company at 16. Anshuman was a different person altogether; wanted to do something different and break the barriers. A rank holder in academics but,’ he wanted to take the road less traveled and embark on the thrilling journey.  He has brought a lot of accolades in skiing and competed at the highest level. He still participates in skiing competitions due to his immense love for this sport. Apart from being adventurous, Anshuman is a fun-loving and welcoming person as he believes in the philosophy of ‘Vasudhaiva Katumbakam’ that every living being is a part of our family.
                      </em>
                    </p>
                  </div>

                  <div className="founder-achievements">
                    <h2>ACHIEVEMENTS</h2>
                    <hr className="achievements-divider" />
                    <ul className="achievements-list">
                      <li>
                        2013 First Position in Junior National Championship Auli
                      </li>
                      <li>
                        2014 Participation in National Skiing Championship Auli
                      </li>
                      <li>2018 First ever to cover the Winter Malari Trial</li>
                      <li>
                        2018 Youngest ever to board down from Pangarchulla base
                      </li>
                      <li>2019 Only skier to Ski down from Tungnath Temple.</li>
                      <li>
                        Founder of Cuddle the Himalaya Foundation (NGO that
                        works in field of Nature, Tradition, education and
                        health in the Himalayas)
                      </li>
                    </ul>

                    <TeamSocials
                      color="white"
                      facebook="https://www.facebook.com/khtrr.balak"
                      instagram="https://www.instagram.com/bisht.anshuman/?igshid=3a6jlv57iaqq"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="team-div-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#222222"
                fill-opacity="1"
                d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <Row>
              <Col
                lg={6}
                md={{ span: 12, order: 2 }}
                sm={{ span: 12, order: 2 }}
                xs={{ span: 12, order: 2 }}
              >
                <div className="team-1-div">
                  <div className="about-founder-div">
                    <h2 className="founder-name">VIVEK PANWAR</h2>
                    <h6>BOARD MEMBER</h6>
                    <div className="divider-div">
                      <hr className="founder-divider" />
                    </div>

                    <p className="about-founder">
                      <em>
                        Vivek Panwar discovered his passion when he was just a
                        child. Belonging to the Himalayas, he wanted to try out
                        adventure sports. At a very young age, the coaches
                        noticed his talent for skiing and snowboarding. So, he
                        started practicing this sport diligently until he
                        perfected the techniques. A naturally gifted athlete, he
                        became one of India's best skiers and snowboarders. He
                        excelled at the national level and bought laurels at the
                        international level, representing India. He has
                        officially retired from professional skiing and
                        snowboarding after years of dominance in the field.
                        Excellence at par skier and snowboarder, Panwar is
                        currently serving as a Coach of the Indian Snowboarding
                        Team.
                      </em>
                    </p>
                  </div>

                  <div className="founder-achievements">
                    <h2>ACHIEVEMENTS</h2>
                    <hr className="achievements-divider" />
                    <ul className="achievements-list">
                      <li>
                        <b>1996</b> Second Position in Auli National Winter
                        Games Open Skiing Championship
                      </li>
                      <li>
                        <b>1997</b> Third Position in National Winter Games
                      </li>
                      <li>
                        <b>1998</b> Third Position in National Open Skiing
                        Championship
                      </li>
                      <li>
                        <b>1999</b> First Position in Winter Sports Championship
                      </li>
                      <li>
                        <b>2000-2004</b> Participate in National Winter Games
                      </li>
                      <li>
                        <b>2008</b> First position (SL) in 5th National Winter
                        Games
                      </li>
                      <li>
                        <b>2008</b> First position (GS) in 5th National Winter
                        Games
                      </li>
                      <li>
                        <b>2008</b> International Snowboarding Competition -
                        IRIAN
                      </li>
                      <li>
                        <b>2010</b> Second Position in National Snowboarding
                        Championship
                      </li>
                      <li>
                        <b>2012</b> First Position (SL) in National Open Skiing
                        Championship
                      </li>
                      <li>
                        <b>2012</b> Represent INDIA in International Skiing
                        Federation (FIS) meet in - BULGARIA
                      </li>
                      <li>
                        <b>2012</b> First Position (GS) in National Open Skiing
                        Championship
                      </li>
                    </ul>

                    <TeamSocials
                      facebook="https://m.facebook.com/profile.php?id=1184490462&ref=content_filter"
                      instagram="https://instagram.com/traveller.monk?igshid=nc3bc0sx258f"
                    />
                  </div>
                </div>
              </Col>
              <Col
                className="image-col-team"
                lg={6}
                sm={{ span: 12, order: 1 }}
                md={12}
              >
                <img src={t1} alt="Anshuman Bisht" className="founder-image" />
              </Col>
            </Row>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#222222"
              fill-opacity="1"
              d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="team-div-2">
            <Row>
              <Col className="image-col-team" lg={6} md={12} sm={12}>
                <img src={t2} alt="Anshuman Bisht" className="founder-image" />
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className="team-2-div">
                  <div className="about-founder-div">
                    <h2 className="founder-name">PRAMOD PANWAR</h2>
                    <h6>CO FOUNDER</h6>
                    <div className="divider-div">
                      <hr className="founder-divider" />
                    </div>

                    <p className="about-founder">
                      <em>
                        Pramod Panwar is one of the best snowboarders in India
                        currently. Because of his exceptional athletic skills,
                        he has won many medals at a national level. It wasn't
                        easy for this young gun to be at the top level. Pramod
                        had to go through a lot of training and excel in his
                        techniques. His dedication to this sport is amicable.
                        Pramod's immense downhill technique and extreme speed
                        are extraordinary and known as Batho (Wind) in the
                        community.
                      </em>
                    </p>
                  </div>

                  <div className="founder-achievements">
                    <h2>ACHIEVEMENTS</h2>
                    <hr className="achievements-divider" />
                    <ul className="achievements-list">
                      <li>
                        <b>2010</b> Second Position in National Snowboard
                        Championship Auli
                      </li>
                      <li>
                        <b>2012</b> Third Position in National Snowboarding
                        Championship Gulmarg, J&K
                      </li>

                      <li>
                        <b>2013</b> First Person to board down from The Urgam
                        Valley
                      </li>
                      <li>
                        <b>2015</b> Third Position in Auli Snowboarding Open
                        Championship
                      </li>
                      <li>
                        2018 Won the Guide of the Year and Excellence in Tourism
                        Industry Award
                      </li>
                    </ul>

                    <TeamSocials
                      color="white"
                      facebook="https://www.facebook.com/parmod.panwar.90/?show_switched_toast=0"
                      instagram="https://instagram.com/parmod.panwar.90?igshid=11z48elw5c6ko"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="team-div-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#222222"
                fill-opacity="1"
                d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
            <Row>
              <Col
                lg={6}
                md={{ span: 12, order: 2 }}
                sm={{ span: 12, order: 2 }}
                xs={{ span: 12, order: 2 }}
              >
                <div className="team-3-div">
                  <div className="about-founder-div">
                    <h2 className="founder-name">VANDANA PANWAR</h2>
                    <h6>BOARD MEMBER</h6>
                    <div className="divider-div">
                      <hr className="founder-divider" />
                    </div>

                    <p className="about-founder">
                      <em>
                        Vandana is one of the finest athletes India has
                        produced. At a very young age, she got introduced to
                        sports. Since then, Vandana never looked back and honed
                        her athletic skills. As a woman, she faced a lot of
                        challenges as men dominated sports. She broke the
                        records and became an inspiration for young girls to
                        take up sports as a career. She is the first female
                        Indian athlete to win at the international level
                        representing India in South Asian Games. Vandana has won
                        numerous championships and awards and dominated this
                        league for a long time, making her one of the most
                        famous names in Winters sports in India. Known for her
                        charismatic turns and downhill techniques, she has
                        retired as a professional athlete three years back.
                      </em>
                    </p>
                  </div>

                  <div className="founder-achievements">
                    <h2>ACHIEVEMENTS</h2>
                    <hr className="achievements-divider" />
                    <ul className="achievements-list">
                      <li>
                        <b>1998</b> First Position National Skiing Championship
                        Junior Auli
                      </li>
                      <li>
                        <b>2000</b> First Position in Winter Sports Junior
                        Championship Slalom Auli
                      </li>
                      <li>
                        <b>2002</b> Second Position in National Sking
                        Championship
                      </li>
                      <li>
                        <b>2003</b> Second Position in National Winter Games
                        Auli
                      </li>
                      <li>
                        <b>2007</b> 3rd Position in National Senior Ski
                        Championship Auli(slalom)
                      </li>
                      <li>
                        <b>2007</b> 3rd Position in National Senior Ski
                        Championship Auli(GS)
                      </li>
                      <li>
                        <b>2008</b> First Position in 5th National Winter Games
                        Gulmarg(Kashmir)
                      </li>
                      <li>
                        <b>2010</b> Second Position in National Ski Championship
                        Manali(GS)
                      </li>
                      <li>
                        <b>2010</b> Third Position in WGAU Championship
                      </li>
                      <li>
                        <b>2010</b> Second Position in WGAU Championship
                      </li>
                      <li>
                        <b>2011</b> Second Position in Auli Skiing Open
                        Championship
                      </li>
                      <li>
                        <b>2011</b> Third Position in 1st South Asian Games
                        Auli, Uttarakhand
                      </li>
                      <li>
                        <b>2012</b> Third Position in 1st Alpine Premier League
                        Manali
                      </li>
                      <li>
                        <b>2012</b> Second Position in Open Skiing Championship
                        Auli
                      </li>

                      <li>
                        <b>2013</b> First Position in National Senior Alpine
                        Sking Championship(GS)
                      </li>
                      <li>
                        <b>2013</b> Third Position in National Senior Alpine
                        Skiing Championship (slalom)
                      </li>
                      <li>
                        <b>2014</b> Third Position in National Championship
                        Gulmarg(Slalom)
                      </li>
                    </ul>

                    <TeamSocials facebook="https://www.facebook.com/vandana.panwar.52/?show_switched_toast=0" />
                  </div>
                </div>
              </Col>
              <Col className="image-col-team" lg={6} md={12} sm={12}>
                <img src={t3} alt="Anshuman Bisht" className="founder-image" />
              </Col>
            </Row>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#222222"
              fill-opacity="1"
              d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="team-div-4">
            <Row>
              <Col className="image-col-team" lg={6} md={12} sm={12}>
                <img src={t5} alt="Anshuman Bisht" className="founder-image" />
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className="team-4-div">
                  <div className="about-founder-div">
                    <h2 className="founder-name">HRISHI SINGH</h2>
                    <h6>ROAD TRIP EXPERT</h6>
                    <div className="divider-div">
                      <hr className="founder-divider" />
                    </div>

                    <p className="about-founder">
                      <em>
                        Hrishi Singh is a digital marketer by profession, but an
                        explorer at heart. He began riding in 2013 and has
                        already been through Rajasthan, Maharashtra, Gujarat,
                        Karnataka, and Jammu, and Kashmir (including Ladakh).
                        Passionate about guiding people on difficult stretches
                        and helping new riders in knowing more about bike riding
                        on Indian routes. Presently improving his abilities and
                        learning more approximately mountaineering and trekking
                        within the Himalayan locale.
                      </em>
                    </p>

                    <TeamSocials
                      color="white"
                      facebook="https://www.facebook.com/ridefor.pride.5"
                      instagram="https://www.instagram.com/insta04hrishi/"
                    />
                  </div>{" "}
                </div>
              </Col>
            </Row>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#222222"
              fill-opacity="1"
              d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
          </svg>
          <div className="heyy">
            <Row>
              <div className="hheadd">
                <h1>
                  <span>WHY ARE WE SPECIAL?</span>
                </h1>
              </div>
            </Row>
            <div class="image-container">
              <div class="image-box">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                />
              </div>
              <div class="image-box">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
                />
              </div>
              <div class="image-box">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1497501849790-78f74380d9d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                />
              </div>
              <div class="image-box">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1484264883846-eb04404af310?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80"
                />
              </div>
            </div>
            <div class="image-container">
              <div class="image-box">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                />
              </div>
              <div class="image-box">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1524262947531-13165500f291?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                />
              </div>
              <div class="image-box">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1519719498756-2f0d81cdf13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1075&q=80"
                />
              </div>
              <div class="image-box">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1525885270172-2b7c27278d8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                />
              </div>
            </div>
            <Row>
              <Col className="sec1">
                The trekking scenario has changed over the years. It has
                affected the ethos of nature. The corporate and biggies have
                taken over, but we are still out here standing with this work's
                actual value and tradition. The rawness and ethereal beauty of
                trekking are lost. The original and traditional trekking culture
                is endangered now. We at Pac Auli can get you where you want to
                go and give our assurance and standard trips. Since its
                inception, trekking has been a family thing for us. Our company
                aims to discover uncharted routes , unmapped trails and harbor
                traditional trekking values. Our local knowledge ensures quality
                work and gives a touch of personal connection. Pac Auli is one
                of the oldest trekking companies aims to give a real Himalayan
                experience in terms of quality and services.
              </Col>
            </Row>
            <Row>
              <Col className="sec1">
                The Himalayas have an intriguing history dated back thousands of
                years ago. Each pass is unique and has some fascinating stories
                related to Indian Philosophy and Mahabharata. Our ancestors and
                descendants of Garhwali Shepherds have explored these Himalayan
                and Tibetan mountain passes.
              </Col>
            </Row>
            <Row>
              <Col className="sec1">
                Trained mountain staff, the technical and medical team holds a
                vital backbone of our company. Our team consists of
                well-experienced local Pahari guides who have done their basic
                and advanced mountaineering courses from India's best
                mountaineering institution, Skiers, snowboarders, kayakers,
                rafters, and paragliders, where you get to encounter the genuine
                Himalayan adventure better than anyone else. Our company is
                affiliated with the Uttrakhand Tourism and adventure association
                of Joshimath Garhwal.
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6} lg={3}>
                <Iconholder icon={staff} title="EXPERT LOCAL KNOWLEDGE" />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Iconholder icon={price} title="VALUE FOR MONEY" />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Iconholder icon={placeholder} title="PRIME LOCATIONS" />
              </Col>
              <Col xs={12} md={6} lg={3}>
                <Iconholder icon={experience} title="EXPERIENCED STAFF" />
              </Col>
            </Row>
          </div>
        </div>
        <div></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#222222"
            fill-opacity="1"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
    </div>
  );
};

export default Aboutus;
