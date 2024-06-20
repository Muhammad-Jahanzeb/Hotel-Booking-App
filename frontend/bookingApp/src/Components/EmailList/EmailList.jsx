import './EmailList.css'

const EmailList = () => {
  return (
    <div className="mailContainer">
        <div className="mailHeading">
            <h3>Save time, save money</h3>
            <span>Subscribe to us and we'll send the best deals to you</span>
        </div>
        <div className="mailInput">
            <input placeholder="Enter your email ..."></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default EmailList