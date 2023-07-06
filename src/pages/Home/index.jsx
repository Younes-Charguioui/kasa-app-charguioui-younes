import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';

import './style.scss'

function Home() {
  return (
      <>
        <div id='home-container'>
          <Banner />
          <Gallery />
        </div>
      </>
    )
}

export default Home;
