import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, culpa doloribus. Quod, velit. Corrupti esse blanditiis ea dignissimos. Atque quibusdam quae, ut est ipsum consequuntur alias perferendis. Sequi, iure saepe."
      >
        <Link to="tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
  </Layout>
)
