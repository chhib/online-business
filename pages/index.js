import Link from 'next/link'
import Layout from '../components/Layout.js'
import Hero from '../components/Hero.js'
import Information from '../components/Information.js'
import {loadDB} from './../lib/db.js'

export default class Index extends React.Component {
  static async getInitialProps () {
    let db = await loadDB();
    let result = await new Promise((resolve, reject) => {
      db.firestore()
        .collection('agencies')
        .limit(5)
        .onSnapshot(snapshot => {
          let newState = {
            agencies: []
          };
          snapshot.forEach(function(doc) {
            newState.agencies.push(Object.assign({
              id: doc.id
            }, doc.data()))
          });
          resolve(newState)
        }, error => {
          reject([])
        }
      )
    })
    return result
  }
  render () {
    const agencies = this.props.agencies
    return <Layout>
      <Hero/>
      <div>{agencies.length} agencies</div>
      <ul>
        {agencies.map(agency => <li key={agency.id}>{agency.name} ranked {agency.ranking}</li>)}
      </ul>
      <Information/> 
    </Layout>
  }
}