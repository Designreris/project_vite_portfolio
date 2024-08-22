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
          Previously I have also previously worked in a well known high-street
          bank, dealing with customer accounts.
          <br />
          <br />
          I'm self-studying to be a <span>Software-Developer</span> in my spare
          time. I have been self-studying web development for the past{" "}
          {studyTime()}, using <span>JavaScript</span>/<span>TypeScript</span>{" "}
          libraries and frameworks.
          <br />
          <br />
          My short-term objective is to obtain a position within the tech
          industry, as a <span>Developer</span> or similar, in order to build
          working knowledge within web/app environments and developing
          transferable skills/experience within those fields.
          <br />
          <br />
          In the long-term I wish to learn a high-level language such as{" "}
          <span>C++</span>/ <span>C# </span>
          and/or <span>Python</span> in order to gain an introduction into the
          use of machine-learning and artificial intelligences.
        </p>
      </div>

      <div className="about-para">
        <h3>Knowledge</h3>
        <p>
          I'm highly competent in <span>HTML</span>, <span>CSS</span>,{" "}
          <span>JavaScript</span>/<span>TypeScript</span>. I use{" "}
          <span>React</span>, setup with <span>Vite</span> for quick front-end{" "}
          <span>TypeScript</span> projects. I use <span>Vite</span> to setup my{" "}
          <span>React</span> environment as it has front-end tooling with
          out-of-the-box support for <span>TypeScript</span>, <span>JSX</span>,{" "}
          <span>CSS</span>, etc...
          <br />
          <br />
          For REST APIs I use <span>Node.js</span> with the{" "}
          <span>Express.js</span> framework. I prefer <span>Express.js</span> as
          it is a fast, unopinionated and minimalist framework that I use to
          create APIs quickly and efficiently.
          <br />
          <br />
          For E-Commerce and other Full-Stack apps I prefer to use{" "}
          <span>Next.js</span> with <span>Stripe</span>. I enjoy using{" "}
          <span>Next.js</span> as it feels similar to <span>React.js</span>,
          also using its server and client components streamlines the process of
          building full-stack web-apps.
          <br />
          <br />I use <span>Tailwind</span> & <span>ShadCn</span> component
          library for styling my small projects and <span>SASS</span> for larger
          projects that require more advanced <span>CSS</span> setup.
          <br />
          <br />
          In regards to state management, for small projects I use{" "}
          <span>React</span> reducer to pass data to a context file in which
          data is then passed to and from components through the use of a
          context provider. For larger projects I use <span>Redux</span> tool
          kit, as it provides a simple and efficient way to implement handling
          of more complex state changes.
          <br />
          <br />
          For authentication I like to use <span>Auth0</span>, with its
          easy-to-use APIs and MFAs. <span>Bcrypt</span> & <span>JWT</span> with{" "}
          <span>Express.js</span> is my preferred choice for server-side
          authorization.
          <br />
          <br />
        </p>
      </div>
    </main>
  )
}
