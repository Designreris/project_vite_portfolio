export default function About() {
  const studyTime = () => {
    const startDate = new Date("2022-01-01")
    const currentDate = new Date()
    const timeDifference = currentDate.getTime() - startDate.getTime()
    const yearDifference = Math.floor(timeDifference / (1000 * 3600 * 24 * 365))
    return <span>{`${yearDifference} years`}</span>
  }

  return (
    <main className="about_container">
      <h2>About Me</h2>
      <div className="about-para">
        <h3>Situation</h3>
        <p>
          I currently live in <span>Birmingham</span>, <span>UK</span>. I work
          as a part-time <span>Driver</span> & <span>Warehouse</span> Operative.
          Previous positions that I have worked in include but not limited to
          the following, a well known high-street bank as an{" "}
          <span>Administrative Assistant</span>, an engineering headquarters as
          an <span>Accounts Assistant</span>, a <span>HGV Driver</span>{" "}
          delivering frozen/chilled/ambient goods.
          <br />
          <br />
          At the moment I am self-studying to be a{" "}
          <span>Software-Developer</span> in my spare time. I have been
          self-studying web development for the past {studyTime()}, using{" "}
          <span>JavaScript</span>/<span>TypeScript</span> libraries &
          frameworks, completing <span>Front-end Mentor</span> challenges &
          personal projects.
          <br />
          <br />
          My short-term objective is to obtain a <span>Entry-Level</span>{" "}
          position within the tech industry, as a <span>Developer</span> or
          similar, in order to build working knowledge within{" "}
          <span>Web/App</span> environments & developing transferable
          skills/experience to progress within those fields. My long-term
          objective is to learn a high-level language such as{" "}
          <span>Python</span> in order progress into{" "}
          <span>Machine-Learning</span> & <span>Data-Engineering</span>.
        </p>
      </div>

      <div className="about-para">
        <h3>Knowledge</h3>
        <p>
          I'm highly competent in <span>HTML</span>, <span>CSS</span>,{" "}
          <span>JavaScript</span>/<span>TypeScript</span>. I like to use{" "}
          <span>Vite</span> to setup my <span>React</span> environment as it has
          front-end tooling with out-of-the-box support for{" "}
          <span>TypeScript</span>, <span>JSX</span>, <span>CSS</span>, etc...
          <br />
          <br />I have used <span>React Native</span> to create mobile apps,
          using <span>Expo</span> as the development environment. Using{" "}
          <span>Node.js</span> & <span>Express.js</span> I have built basic APIs
          with secure Endpoints & CRUD operations. I have created Full-stack
          apps using <span>Next.js</span>, implementing its Client/Server
          Components, to build <span>E-Commerce</span> applications.
          <br />
          <br />I have used <span>Firebase</span>, <span>Netlify</span>,{" "}
          <span>Vercel</span>, <span>Render</span> and <span>AWS</span> hosts to
          deploy my projects. For storage I have used <span>MongoDB</span>,{" "}
          <span>PostgreSQL</span>, <span>Google Cloud</span> &{" "}
          <span>Prisma's SQL lite</span>.
        </p>
      </div>
    </main>
  )
}
