import Link from 'next/link'
import Layout from '../components/Layout.js'
import Hero from '../components/Hero.js'
import Agencies from '../components/Agencies.js'
import Information from '../components/Information.js'

const Index = () => 
  <Layout>
    <Hero/>
    <Agencies/>
    <Information/> 
  </Layout>

export default Index