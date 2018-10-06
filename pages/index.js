import Link from 'next/link'
import Layout from '../components/Layout.js'
import Hero from '../components/Hero.js'
import Information from '../components/Information.js'
import {loadFirebase} from '../lib/db.js'

export default class Index extends React.Component {
  static getInitialProps = async () => {
    const snapshot = await loadFirebase().firestore().collection('agencies')
      .limit(10)
      .get()
    let data = []
    snapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return { agencies: data }
  }
  render() {
    const agencies = this.props.agencies
    return <Layout>
      <Hero/>
      <div id="agencies">
        <h2>Most trusted agencies in Stockholm</h2>
        <p>We the brand asked for offers for our
          Sample Real Project and had an extra round of
          design fixes - that's our way of ranking these
          agencies.</p>
        {(agencies && agencies.length > 0)
          ? <ul>
            {agencies.map(agency =>
              <li key="{agency.id}">
                <h3>{agency.name} has a ranking of
            <em>{agency.ranking}!</em></h3></li>)}
          </ul>
          : <p><strong>Have nothing!!</strong></p>}
        <hr/>
      </div>
      <Information/>
    </Layout>
  }
}