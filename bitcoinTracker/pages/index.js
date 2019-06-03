import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/lux/bootstrap.min.css"/>
        <h1>BITCOIN (BTC)</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={props.bpi}/>
    </div>
    </Layout>
    );

    Index.getInitialProps = async function() {
        const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await res.json();

        return {
            bpi: data.bpi
        };
    }


export default Index;