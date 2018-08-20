import {loadDB} from './../lib/db.js'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {agencies: []}
  }
  async componentDidMount() {
    let db = await loadDB();
    const query = db.firestore()
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
        this.setState(newState)
    })
  } 
  render () {
    return (
      <div>
        <p>Have this amount of agencies: {this.state.agencies && this.state.agencies.length} ️</p>
        <p>Here they are:</p>
        {(this.state.agencies && 
          this.state.agencies.length > 0) ? this.state.agencies.map(agency => <div key={agency.id}>{agency.name} has rank: {agency.ranking}</div>) : <p>nothing to see</p>}
      </div>
    )
  }
}

// export default () =>
//   <div id="agencies">
//     <h2>Most trusted agencies in Stockholm</h2>
//     <p>We the brand asked for offers for our Sample Real Project and had an extra round of design fixes - that's our way of ranking these agencies.</p>
//     {list()}
//     <ul>
//       <li>
//         <h3>DevTips Agency</h3>
//         <p>Very high quality agency. Expensive, but you can certainly trust them. Proactive and supreme. <a>Read full review.</a></p>
//         <dl>
//           <dt>Hourly rate:</dt>
//           <dd>5,000 $</dd>
//           <dt>Response time:</dt>
//           <dd>Short</dd>
//           <dt>Reviews:</dt>
//           <dd>6 / 5</dd>
//           <dt>Quality:</dt>
//           <dd>High! Very!</dd>
//         </dl>
//       </li>
//       <li>
//         <h3>ShopetiShopEcomExperts</h3>
//         <p>When you need something truly quick - and especially dirty - go for these guys.  <a>Read full review.</a></p>
//         <dl>
//           <dt>Hourly rate:</dt>
//           <dd>50 $</dd>
//           <dt>Response time:</dt>
//           <dd>5 ms</dd>
//           <dt>Reviews:</dt>
//           <dd>2 / 5</dd>
//           <dt>Quality:</dt>
//           <dd>No.</dd>
//         </dl>
//       </li>
//     </ul>
//   </div>