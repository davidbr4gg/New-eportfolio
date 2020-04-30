<template>
  <div id="contact">
    <h2 id="heading" data-aos="fade-up">Let's get in touch!</h2>
    <div class="container" data-aos="fade-up">
      <section>
        <div>
          <div>
            <img src="~/assets/img/me.jpeg" alt="avatar" class="avatar" />
          </div>
        </div>
        <div>
          <div class="my-name">David Bragg</div>
          <div class="my-title">Software Engineer</div>
          <div class="links">
            <div class="link-item">
              <font-awesome-icon icon="download" />
              <a href="/Resume.pdf" target="_blank">Download Resume</a>
            </div>
            <div class="link-item">
              <font-awesome-icon icon="envelope" />
              <a href="mailto:davidbr4gg@outlook.com" target="_blank">Email</a>
            </div>
            <div class="link-item">
              <font-awesome-icon :icon="['fab','linkedin']" />
              <a href="https://www.linkedin.com/in/david-bragg-5b23a1176/" target="_blank">LinkedIn</a>
            </div>
          </div>
          <!-- end links -->

          <p>A highly motivated software engineer prepared to utilise exceptional software, problem-solving and communication skills to further my programming passion as a website developer.</p>
        </div>
      </section>

      <section class="bot" data-aos="fade">
        <div class="section-title">Education</div>
        <div>
          <div class="job education">
            <div class="job-title-container">
              <div>
                <div class="job-company">University of Technology, Sydney</div>
                <div class="job-title course">
                  Bachelor of Engineering (Honours), Software Engineering Major
                  <br />Diploma in Professional Engineering Practice
                </div>
                <ul style="margin-top:25px;">
                  <li>• Dean's List 2020</li>
                  <li>• Distinction average</li>
                  <li>• 100% in Software Engineering Studio</li>
                </ul>
              </div>
              <div>2018 - 2021</div>
            </div>
          </div>
          <!-- end job -->
        </div>
      </section>

      <section class="bot">
        <div class="section-title" data-aos="fade">Experience</div>
        <div>
          <div class="job" data-aos="fade">
            <div class="job-title-container">
              <div>
                <div class="job-company">BOOStudio</div>
                <div class="job-title">Front-End Developer</div>
              </div>
              <div>Jan 2020 - Current</div>
            </div>
            <!-- end job-title container -->
            <ul>
              <li>• Designing and developing dynamic and responsive user interfaces for multiple Fortune 500 companies with large and complex systems</li>
              <li>• Connecting a VueJS front-end to a Laravel back-end, displaying real-time dynamic information acquired from data retrieved through HTTP requests</li>
              <li>• Working closely with UI and UX designers to develop high performant web applications that provide an extraordinary client-side experience</li>
            </ul>
          </div>

          <div class="job" data-aos="fade">
            <div class="job-title-container">
              <div>
                <div class="job-company">Wired and Wireless Solutions International</div>
                <div class="job-title">Front-End Developer Intern</div>
              </div>
              <div>Nov 2019 - Jan 2020</div>
            </div>
            <!-- end job-title container -->
            <ul>
              <li>• Independently designed and developed responsive and efficient web applications with VueJS and NuxtJS that are professional, yet stylish</li>
              <li>• Created universal, static and single page applications based off client needs, resulting in websites that provide a great user experience whilst maximising search engine optimisation</li>
              <li>• Communicated clearly with stakeholders to convert business requirements into high quality solutions</li>
            </ul>
          </div>
          <!-- end job -->

          <div class="job" data-aos="fade">
            <div class="job-title-container">
              <div>
                <div class="job-company">Code Camp</div>
                <div class="job-title">Programming Tutor</div>
              </div>
              <div>Jun 2019 - Jan 2020</div>
            </div>
            <!-- end job-title container -->
            <ul>
              <li>• Taught students basic programming principles in pseudocode and JavaScript</li>
              <li>• Worked with various age groups with differing programming abilities</li>
              <li>• Demonstrated strong communication, problem solving and debugging skills</li>
            </ul>
          </div>

          <!-- end job -->

          <div class="job" data-aos="fade">
            <div class="job-title-container">
              <div>
                <div class="job-company">Woolworths, Eastlakes</div>
                <div class="job-title">Customer Service Assistant</div>
              </div>
              <div>Sep 2017 - Jan 2020</div>
            </div>
            <!-- end job-title container -->
            <ul>
              <li>• Fostered a positive work environment by treating all customers and employees with respect and consideration</li>
              <li>• Determined customer needs through asking relevant questions and listening to responses</li>
              <li>• Resolved customer complaints in a professional manners whilst prioritising customer satisfaction</li>
            </ul>
          </div>

          <div class="job" data-aos="fade">
            <div class="job-title-container">
              <div>
                <div class="job-company">Private Tutor</div>
                <div class="job-title">Mathematics Tutor</div>
              </div>
              <div>Feb 2015 – Feb 2018</div>
            </div>
            <!-- end job-title container -->
            <ul>
              <li>• Tutored secondary students up to Stage 6 Extension Mathematics</li>
              <li>• Maintained a strong and professional relationship with students</li>
              <li>• Taught students challenging concepts with patience and persistence</li>
            </ul>
          </div>

          <div class="job lastbot" data-aos="fade">
            <div class="job-title-container">
              <div>
                <div class="job-company">Soccer Referee</div>
                <div class="job-title">Eastern Suburbs Football Association</div>
              </div>
              <div>Mar 2014 – Sep 2016</div>
            </div>
            <!-- end job-title container -->
            <ul>
              <li>• Displayed excellent leaderships skills through refereeing various age groups with differing abilities</li>
              <li>• Handled coaches, spectators and players in a professional manner</li>
              <li>• Portrayed confidence in dealing with controversial decisions in heated environments</li>
            </ul>
          </div>

          <!-- end job -->
        </div>
      </section>

      <section class="bot" data-aos="fade">
        <div class="section-title">Technical Skills</div>
        <div>
          <div class="skills-container">
            <ul style="list-style-type:none;">
              <li>• HTML5</li>
              <li>• CSS3</li>
              <li>• JavaScript ES6</li>
              <li>• VueJS + NuxtJS</li>
            </ul>

            <ul style="list-style-type:none;">
              <li>• ReactJS</li>
              <li>• NodeJS + Express</li>
              <li>• MongoDB</li>
              <li>• Git</li>
            </ul>
          </div>
          <!-- end skills-container -->
        </div>
      </section>

      <section class="bot" data-aos="fade">
        <div class="section-title">Transferrable Skills</div>
        <div>
          <div class="skills-container">
            <ul style="list-style-type:none;">
              <li>• Confident leadership skills</li>
              <li>• Exceptional communication skills</li>
              <li>• Outstanding work ethic</li>
              <li>• Effective teaching skills</li>
            </ul>

            <ul style="list-style-type:none;">
              <li>• Professional client relations</li>
              <li>• Quick learner</li>
              <li>• Creative problem solver</li>
              <li>• Extraordinary time management skills</li>
            </ul>
          </div>
          <!-- end skills-container -->
        </div>
      </section>

      <section class="bot aos-animate" data-aos="fade">
        <div class="section-title">References</div>

        <div class="reference">Available upon request.</div>
      </section>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
#contact {
  padding: 80px 5%;
}
ul {
  list-style: none;
  padding-left: 0px;
}
li {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 400;
}
*,
*:before,
*:after,
a {
  color: #242424 !important;
}
body {
  line-height: 1.5;
  background: #f2f2f2;
}
img {
  max-width: 100%;
}
.icon {
  fill: currentColor;
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
}
a {
  text-decoration: none;
  font-size: 14px;
}
a:hover {
  text-decoration: underline;
}
p {
  font-size: 16px;
}
.container {
  max-width: 960px;
  margin: 40px auto;
  padding: 32px;
  background: white;
  box-shadow: 0px 0px 20px 7px rgba(0, 0, 0, 0.015);
  border: 1px solid rgba(0, 0, 0, 0.04);
  position: relative;
  text-align: justify;
}
section {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
  padding: 24px 0;
}
.bot {
  padding-bottom: 0px;
  border-top: 1px solid lightgrey;
}
.job.lastbot {
  padding-bottom: 10px;
}
section:last-child {
  border-bottom: none;
}
.section-title {
  font-weight: bold;
  font-size: 18px;
}
/***********************************
* =Main Info
***********************************/
img.avatar {
  width: 130px;
  border-radius: 50%;
  margin-top: 9%;
  margin-left: 10%;
}
.my-name {
  font-size: 48px;
  line-height: 1;
}
.my-title {
  font-size: 23px;
  font-weight: 300;
  // color: #6f6f6f;
  margin-top: 4px;
  /* color: #236fb2; */
}
.links {
  display: flex;
  margin: 15px 0 15px 0;
}
.link-item {
  display: flex;
  align-items: center;
  flex: 1;
  a {
  }
}
.link-item svg {
  margin-right: 6px;
}
/***********************************
* =Experience
***********************************/
.job {
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid lightgrey;
}
.job.education {
  padding-bottom: 0px;
  margin-bottom: 0px;
}
.job.bot {
  padding-bottom: 0px;
  margin-bottom: 12px;
}
.job:last-child {
  border-bottom: none;
}
.job-title-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 18px;
}
.job-title.course {
  font-size: 16px;
  padding-top: 7px;
}
.job-company {
  font-weight: bold;
  line-height: 1.2;
}
/***********************************
* =Skills
***********************************/
.skills-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 24px;
}
/***********************************
* =Interests
***********************************/
.interests-container {
  display: flex;
  justify-content: space-between;
}
.interests-container img {
  height: 35px;
  opacity: 0.75;
}
/***********************************
* =References
***********************************/
.reference {
  font-size: 16px;
  padding-top: 2px;
}
.reference-details {
  margin-bottom: 17px;
}
#heading,
.my-name,
h2 {
  color: #212529 !important;
  font-family: "Playfair Display", Times New Roman, Times, serif !important;
}
@media only screen and (max-width: 768px) {
  section {
    grid-template-columns: 1fr;
  }
  .links,
  .job-title-container {
    flex-direction: column;
  }
  .skills-container {
    grid-template-columns: 1fr 1fr;
  }
  .interests-container {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .interests-container img {
    margin-right: 32px;
    margin-bottom: 16px;
  }
  .container {
    max-width: 960px;
    margin: 40px auto;
    padding: 32px;
    background: white;
    box-shadow: 0px 0px 20px 7px rgba(0, 0, 0, 0.015);
    border: 1px solid rgba(0, 0, 0, 0.04);
    position: relative;
    text-align: left;
  }
}
</style>