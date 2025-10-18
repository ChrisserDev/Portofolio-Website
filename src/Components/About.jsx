
import htmlLogo from '../assets/skills_logos/html_logo.png';
import cssLogo from '../assets/skills_logos/css_logo.png';
import sassLogo from '../assets/skills_logos/sass_logo.png';
import jsLogo from '../assets/skills_logos/javascript_logo.png';
import tsLogo from '../assets/skills_logos/typescript_logo.png';
import jqueryLogo from '../assets/skills_logos/jquery_logo.png';
import reactLogo from '../assets/skills_logos/react_logo.png';
import nodeLogo from '../assets/skills_logos/nodejs_logo.png';
import expressLogo from '../assets/skills_logos/expressjs_logo.png';
import nextLogo from '../assets/skills_logos/nextjs_logo.png';
import handlebarsLogo from '../assets/skills_logos/handlebars_logo.png';
import mongoLogo from '../assets/skills_logos/mongodb_logo.png';
import graphqlLogo from '../assets/skills_logos/graphql_logo.png';
import sqlLogo from '../assets/skills_logos/sql_logo.png';
import gcpLogo from '../assets/skills_logos/gcp_logo.png';
import postmanLogo from '../assets/skills_logos/postman_logo.png';
import playwrightLogo from '../assets/skills_logos/playwright.png';
import jestLogo from '../assets/skills_logos/jest_logo.png';
import figmaLogo from '../assets/skills_logos/figma_logo.png';
import adobeXdLogo from '../assets/skills_logos/adobe_xd.png';
import gitLogo from '../assets/skills_logos/git_logo.png';
import githubLogo from '../assets/skills_logos/github_logo.png';
import viteLogo from '../assets/skills_logos/vite_logo.png';
import webpackLogo from '../assets/skills_logos/webpack_logo.png';

export default function About() {

  return (
    <div className='skills'>
      <h1>TECH STACK</h1>
        <ul className="skills-content">
          <li>
            <img src={htmlLogo} alt='HTML Logo' width={70} height={70} title='HTML — markup language for web pages' />
            <p>HTML</p>
          </li>
          <li>
            <img src={cssLogo} alt='CSS Logo' width={70} height={70} title='CSS — styles and layout for the web' />
            <p>CSS</p>
          </li>
          <li>
            <img src={sassLogo} alt='Sass Logo' width={90} height={70} title='Sass — CSS preprocessor with variables & mixins' />
            <p>Sass</p>
          </li>
          <li>
            <img src={jsLogo} alt='JavaScript Logo' width={90} height={70} title='JavaScript — programming language of the web' />
            <p>JavaScript</p>
          </li>
          <li>
            <img src={tsLogo} alt='TypeScript Logo' width={120} height={70} title='TypeScript — typed superset of JavaScript' />
            <p>TypeScript</p>
          </li>
          <li>
            <img src={jqueryLogo} alt='jQuery Logo' width={70} height={70} title='jQuery — DOM manipulation utility library' />
            <p>jQuery</p>
          </li>
          <li>
            <img src={reactLogo} alt='React Logo' width={70} height={70} title='React — UI library for building components' />
            <p>React</p>
          </li>
          <li>
            <img src={nodeLogo} alt='Node.js Logo' width={110} height={70} title='Node.js — JavaScript runtime on the server' />
            <p>Node.js</p>
          </li>
          <li>
            <img src={expressLogo} alt='Express Logo' width={70} height={70} title='Express.js — minimalist Node.js web framework' />
            <p>Express.js</p>
          </li>
          <li>
            <img src={nextLogo} alt='Next.js Logo' width={70} height={70} title='Next.js — React framework for apps & sites' />
            <p>Next.js</p>
          </li>
          <li>
            <img src={handlebarsLogo} alt='Handlebars Logo' width={70} height={70} title='Handlebars — templating engine for HTML' />
            <p>Handlebars</p>
          </li>
          <li>
            <img src={mongoLogo} alt='MongoDB Logo' width={60} height={70} title='MongoDB — NoSQL document database' />
            <p>MongoDB</p>
          </li>
          <li>
            <img src={graphqlLogo} alt='GraphQL Logo' width={55} height={70} title='GraphQL — API query language & runtime' />
            <p>GraphQL</p>
          </li>
          <li>
            <img src={sqlLogo} alt='SQL Logo' width={70} height={70} title='SQL — relational database query language' />
            <p>SQL</p>
          </li>
          <li>
            <img src={gcpLogo} alt='GCP Logo' width={100} height={70} title='Google Cloud — cloud services platform' />
            <p>Google Cloud Platform</p>
          </li>
          <li>
            <img src={postmanLogo} alt='Postman Logo' width={80} height={70} title='Postman — API client for testing and docs' />
            <p>Postman</p>
          </li>
          <li>
            <img src={playwrightLogo} alt='Playwright Logo' width={80} height={80} title='Playwright — end‑to‑end testing framework' />
            <p>Playwright</p>
          </li>
          <li>
            <img src={jestLogo} alt='Jest Logo' width={80} height={70} title='Jest — JavaScript testing framework' />
            <p>Jest</p>
          </li>
          <li>
            <img src={figmaLogo} alt='Figma Logo' width={80} height={70} title='Figma — collaborative UI design tool' />
            <p>Figma</p>
          </li>
          <li>
            <img src={adobeXdLogo} alt='Adobe XD Logo' width={70} height={70} title='Adobe XD — UI/UX design and prototyping' />
            <p>Adobe XD</p>
          </li>
          <li>
            <img src={gitLogo} alt='Git Logo' width={70} height={70} title='Git — distributed version control system' />
            <p>Git</p>
          </li>
          <li>
            <img src={githubLogo} alt='GitHub Logo' width={65} height={70} title='GitHub — Git hosting and collaboration' />
            <p>GitHub</p>
          </li>
          <li>
            <img src={viteLogo} alt='Vite Logo' width={110} height={70} title='Vite — fast frontend build tool/dev server' />
            <p>Vite</p>
          </li>
          <li>
            <img src={webpackLogo} alt='Webpack Logo' width={70} height={70} title='Webpack — module bundler' />
            <p>Webpack</p>
          </li>
      </ul>
    </div>
  )
}
