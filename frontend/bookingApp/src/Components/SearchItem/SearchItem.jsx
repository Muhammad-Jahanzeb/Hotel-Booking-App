import './SearchItem.css'

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg" className="itemImage"/>

    <div className="itemDescription">
        <h3 className="itemTitle">Tower Street Apartment</h3>
        <span className="fontSize">500m from center</span>
        <span className="itemTaxiOp fontSize">Free airport taxi</span>
        <span className="itemSubtitle fontSize">Studio Apartment with Air Conditioning</span>
        <span className="fontSize">Entire Studio . 1 bathroom . 21m&sup2 1 full bed</span>
        <span className="cancelOp fontSize">Free cancellation</span>
        <span className="cancelOpSubtitle fontSize">You can cancel later, so lock in this great price today!</span>
    </div>
    <div className="itemDetails">
        <div className="itemRating">
          <span>Excellent</span>
          <button className="itemRate">8.9</button>
        </div>

        <div className="itemInfo">
          <span className="itemPrice">$123</span>
          <span className="itemTaxes fontSize">Includes taxes and fees</span>
          <button className="itemAvl">See availability</button>
        </div>
    </div>
    </div>
  )
}

export default SearchItem
