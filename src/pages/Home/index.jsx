import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';

import image01 from '../../assets/image01.png'
import './style.scss'

function Home() {
  return (
      <>
        <div id='home-container'>
          <Banner image={image01} text="Chez vous, partout et ailleurs"/>
          <Gallery />
        </div>
      </>
    )
}

export default Home;
