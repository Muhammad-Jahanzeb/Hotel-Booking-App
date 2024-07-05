import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import './Hotel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhotoFilm } from '@fortawesome/free-solid-svg-icons'

const hotel = () => {
  const photos =[{
    src : "https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4="
  },
  {
    src: "https://blog.kitchenandbathclassics.com/hubfs/hotel%20bathroom%20mayfair%20king%20suite.jpg"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/565551468.jpg?k=90afc3e77a64e0b822af1b90e546744517c1d6e2dd7ecec67b3f5aacf076cbb2&o=&hp=1"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/565553153.jpg?k=58d0ebba9d636501ec9f6982da310acf2f32135557ee15bfeddf9ea70ee2d6de&o=&hp=1"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/565435457.jpg?k=63f17e55223a7f5a690acdd2319edf623d9aaf5b94ab5b36ce775328f26468db&o=&hp=1"
  },
  {
    src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/416962611.jpg?k=9cedc55457d1213fa66d49fd0d4c4e1f638edbf2fee42c6f7ad53072266f68cb&o=&hp=1"
  }]

  return (
    <>
    <Navbar/>
    <Header type ="list"/>
    <div className="hoterlContainter">
      <div className="hotelWrapper">
        <div className="titleLine">
          <h1 className="hotelTitle">Grand Hotel</h1>
          <button className="hotelBookBtn">Book or Reserve</button>
        </div>
        <div className="hotelAddress">
          <FontAwesomeIcon icon = {faLocation}/>
          <span>Elton St 125 New York</span>
        </div>
        <span className="hotelDistance">Excellent location - 500m from center</span>
        <span className="hotelPrice">Book a stay over $114 at this property and get a free airport taxi</span>
        <div className="hotelImages">
          {photos.map(photo=>(
            <div className="hotelImageContainer">
              <img src = {photo.src} className="hotelImage"/>
            </div>
          ))}
        </div>

        <div className="hotelDetialsContainer">
          <div className="detailsText">
            <h1 className="detailsTitle">Stay in the heart of Krakow</h1>
            <p className="detailsDesc">safsaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>

          <div className="detailsPrice">
            <h1>Perfect for a 9-night stay!</h1>
            <span>
              Located in the real heart of Krakow, this property has an excellent location score of 9.8.
            </span>
            <h2>
              <b>$945</b> (9 nights)
            </h2>
            <button>Reserve or Book Now!</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default hotel