import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
  {/* Basic */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  {/* Mobile Metas */}
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Site Metas */}
  <meta
    name="keywords"
    content="WebInOrbit, freelancing, website design, website builder, create a website, responsive web design, web development, web page, cheap, discount, bonus, budget, deals, college students, talent showcase, dynamic platform, virtual gateway, affordable design packages, personalized consultations, global accessibility, student profiles, project showcases, secure communication, privacy measures, tier 1 colleges, tier 2 colleges, tier 3 colleges, talent acquisition, streamlining process, digital innovators, revolutionize design landscape, transparent payments, personalized dashboards, ranking system, cost-effective solutions, continuous improvement, feedback loops, targeted campaigns"
  />
  <meta
    name="description"
    content="WebInOrbit revolutionizes the connection between college students and companies by offering a dynamic platform. For students, it's a virtual gateway to showcase skills, eliminating the need for physical visits. companies benefit from affordable design packages, personalized consultations, high standards, and global accessibility. The platform empowers students to create profiles, showcase projects, and connect directly with companies, transcending geographical constraints. Robust communication tools and privacy measures ensure a secure environment. Our commitment extends to tier 1, 2, and 3 colleges, providing a global stage for students to shine and access diverse opportunities beyond traditional recruitment limitations. Join us in transforming the future of web and app design."
  />
  <meta name="author" content="Manav Rai" />
  <title>WebInOrbit</title>
  <link rel="icon" type="image/x-icon" href="images/logo88.webp" />
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
  <link
    href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
    rel="stylesheet"
  />
  {/* slider stylesheet */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
  />
  <link
    href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,700"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    integrity="sha512-UPVT4srFRvJNDYQbLpG0dP7V4WPIr7Eo/OQBZ/6vSf7lKtr8S7F76IzRKXOTuSxgGyPlxR3Nn40G0etIh52L0A=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  {/* Font Awesome */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha384-GLhlTQ8i1Ib53L8H+7zFTtXBnVGjpaVo5QkaF0F5eI1ELcyoD8T6BPKj5Uwe5kM"
    crossOrigin="anonymous"
  />
  {/* Google Font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
    rel="stylesheet"
  />
  {/* Stylesheet */}
  {/* bootstrap core css */}
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  {/* fonts style */}
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;800&display=swap"
    rel="stylesheet"
  />
  {/* Custom styles for this template */}
  {/* responsive style */}
  <link href="css/responsive.css" rel="stylesheet" />
  <div
    className="hero_area"
    style={{
      backgroundImage: 'url("images/12.webp")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}
  >
    {/* header section strats */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <div className="d-flex align-items-center">
            <a className="navbar-brand mr-auto" href="home.html">
              <img
                src="images/Sidewise logowhite.webp"
                width={250}
                height={250}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onclick="toggleHeaderSize()"
            >
              <span className="s-1" />
              <span className="s-2" />
              <span className="s-3" />
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex flex-column flex-lg-row align-items-center ml-lg-auto">
              <ul className="navbar-nav text-center mb-0" id="navLinks">
                <li className="nav-item">
                  <a className="nav-link active" href="home.html">
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li
                  className="nav-item mx-auto"
                  id="serviceLink"
                  style={{ display: "none" }}
                >
                  <a className="nav-link" href="services.html">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contactus.html">
                    Contact
                  </a>
                </li>
                <li
                  className="nav-item mx-auto"
                  id="projectsLink"
                  style={{ display: "none" }}
                >
                  <a className="nav-link" href="Projects.html">
                    Projects
                  </a>
                </li>
                {/* Profile and Logout links */}
                <li
                  className="nav-item mx-auto"
                  id="profileLink"
                  style={{ display: "none" }}
                >
                  <a className="nav-link" href="userprofile.html">
                    <span className="rocket-icon" />
                    Profile
                  </a>
                </li>
                <li
                  className="nav-item mx-auto"
                  id="logoutLink"
                  style={{ display: "none" }}
                >
                  <a className="nav-link space-themed-login" href="#">
                    <span className="rocket-icon" />
                    Logout
                  </a>
                </li>
                {/* Login link */}
                <li className="nav-item mx-auto" id="loginLink">
                  <a className="nav-link space-themed-login" href="login.html">
                    <span className="rocket-icon" />
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <noscript>&amp;#32;</noscript>
    {/* end header section */}
    {/* slider section */}
    <section className="slider_section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="detail_box">
                    <h1>Welcome To WebInOrbit</h1>
                    {/* You can add additional text or details here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more carousel items as needed */}
        </div>
      </div>
    </section>
  </div>
  <section
    className="about_section video-section"
    style={{
      backgroundImage: 'url("images/12.webp")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      marginBottom: "-20px"
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="video-container">
            {/* YouTube video iframe */}
            <iframe
              width="100%"
              height={315}
              src="https://www.youtube.com/embed/C6g7FXpkksY?si=Er8ITzW2I9a7NVxA?rel=0&autoplay=1&mute=1"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <div className="heading_container">
              <h2 className="section-title glow-text">Our Vision</h2>
            </div>
            <p>
              <span style={{ color: "rgb(255, 254, 254)", userSelect: "none" }}>
                "WebInOrbit: Bridging the gap for college students and
                companies. Showcase skills virtually, eliminate physical visits.
                Affordable design packages, high standards, global
                accessibility. Students create profiles, connect with companies,
                expanding job opportunities globally. Secure platform with
                robust communication tools. Empowering tier 1, 2, and 3 college
                students with a global stage for diverse opportunities."
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about section */}
  {/*-----teamsection*/}
  <section
    className="team_section layout_padding2-bottom video-section"
    style={{
      backgroundImage: 'url("images/12.webp")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      marginTop: 0
    }}
  >
    <div className="containers">
      <h2 className="section-title glow-text">Our Founders</h2>
      <div className="team-cards">
        {/* Founder 1 */}
        <div className="team-card">
          <div className="img-container">
            <img src="images/user3 (2).webp" alt="Manav Rai" />
          </div>
          <h6>Manav Rai</h6>
          <span className="director"> Director</span>
          <p>
            {" "}
            <span className="founder">CoFounder and CMO</span>
          </p>
          <p />
          <div className="icons">
            <a href="https://www.linkedin.com/in/manavrai/">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://instagram.com/webinorbit?igshid=MTk0NTkyODZkYg==">
              <i className="fab fa-instagram" />
            </a>
            <a href="mailto:teamorbit@webinorbit.com">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
        {/* Founder 2 */}
        <div className="team-card">
          <div className="img-container">
            <img src="images/user2.1.webp" alt="Vishwas Kisaniya" />
          </div>
          <h6>Vishwas Kisaniya</h6>
          <span className="director"> Director</span>
          <p>
            {" "}
            <span className="founder">CoFounder and COO</span>
          </p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/vishwas-kisaniya-a44863227">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://instagram.com/webinorbit?igshid=MTk0NTkyODZkYg==">
              <i className="fab fa-instagram" />
            </a>
            <a href="mailto:teamorbit@webinorbit.com">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
        {/* Founder 3 */}
        <div className="team-card">
          <div className="img-container">
            <img src="images/user1.webp" alt="Anubhav Pandey" />
          </div>
          <h6>Anubhav Pandey</h6>
          <span className="director"> Director</span>
          <p>
            {" "}
            <span className="founder">CoFounder and CEO</span>
          </p>
          <p />
          <div className="icons">
            <a href="https://www.linkedin.com/in/anubhav-pandey-192bbb25b">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://instagram.com/webinorbit?igshid=MTk0NTkyODZkYg==">
              <i className="fab fa-instagram" />
            </a>
            <a href="mailto:teamorbit@webinorbit.com">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*-Endteamsection*/}
  <section
    className="feedback_section layout_padding2-bottom video-section"
    style={{
      backgroundImage: 'url("images/12.webp")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      marginTop: 0
    }}
  >
    <div className="containers">
      <h2 className="section-title glow-text">Feedback Form</h2>
      <form action="" name="Contacts-form">
        <div className="form-group">
          <label htmlFor="feedback" className="feedback-label">
            Your feedback is important to us. Please provide your honest
            feedback.
          </label>
        </div>
        <div className="input-box message-box">
          <textarea
            name="feedback"
            rows={7}
            placeholder="feedback"
            required=""
            defaultValue={""}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </section>
  <footer className="space-footer">
    {/* Video Background */}
    <video autoPlay="" muted="" loop="" id="footer-video">
      <source src="images/video22.webm" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* End Video Background */}
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="footer-logo">
            <img
              src="images/Sidewise logowhite.webp"
              alt="Space Explorer Logo"
            />
          </div>
          <p className="footer-info">
            Email:{" "}
            <a
              href="mailto:teamorbit@webinorbit.com"
              style={{ color: "#fff", userSelect: "none" }}
            >
              teamorbit@webinorbit.com
            </a>
          </p>
          <p className="footer-info">
            Phone:{" "}
            <a
              href="tel:8054776034"
              style={{ color: "#fff", userSelect: "none" }}
            >
              +91 8054776034
            </a>
          </p>
          <p className="footer-info">
            Address: 3547 Sector-23d Chandigarh, India
          </p>
        </div>
        <div className="col-md-4">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="home.html" style={{ color: "#fff", userSelect: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="contactus.html"
                style={{ color: "#fff", userSelect: "none" }}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="terms.html"
                style={{ color: "#fff", userSelect: "none" }}
              >
                Terms and Conditions
              </a>
            </li>
            <li>
              <a
                href="policies.html"
                style={{ color: "#fff", userSelect: "none" }}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h3 className="footer-heading">Connect With Us</h3>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.linkedin.com/company/webinorbit/"
                className="social-icon"
                style={{ backgroundColor: "#2867B2" }}
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/webinorbit?igshid=MTk0NTkyODZkYg=="
                className="social-icon"
                style={{ backgroundColor: "#C13584" }}
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@WEBINORBIT23"
                className="social-icon"
                style={{ backgroundColor: "#FF0000" }}
              >
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
          <img
            src="images/finalqr.webp"
            alt="QR Code"
            style={{ display: "block", marginTop: 10, width: 150, height: 150 }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer-bottom">
            <p className="footer-copy">
              {" "}
              <span style={{ fontSize: "larger" }}>©</span>{" "}
              <span id="displayYear" /> Stubic Solutions Private Limited. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*--For responsiveness-*/}
  {/* footer section */}
  {/*-Scripts-*/}
</>

  );
}

