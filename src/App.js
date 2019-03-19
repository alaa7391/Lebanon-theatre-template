import React from "react";
import ReactDOM from "react-dom";
import "./calendar-eightysix-default.css";
import "./styles.css";
import "./calendar-eightysix-osx-dashboard.css";
import "./calendar-eightysix-vista.css";
import Icon from "./Clock";
import Theatre from "./Theatre";
import Event from "./card2";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header-top">
          <div className="wrap">
            <div className="logo">
              <a href="index.html">
                <img src={require("./images/logo.png")} alt="" />
              </a>
            </div>
            <div className="cssmenu">
              <nav id="nav" role="navigation">
                <a href="#nav" title="Show navigation">
                  Show navigation
                </a>
                <a href="#" title="Hide navigation">
                  Hide navigation
                </a>
                <ul className="clearfix">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="start.html">
                      <span>Get Started</span>
                    </a>
                  </li>
                  <li>
                    <a href="work.html">
                      <span>How it Works</span>
                    </a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="support.html">Support</a>
                  </li>
                  <div className="clear" />
                </ul>
              </nav>
            </div>
            <div className="buttons">
              <div className="login_btn">
                <a href="login.html">Login / Signup</a>
              </div>
              <div className="get_btn">
                <a href="start.html">Get Listed Today</a>
              </div>
              <div className="clear" />
            </div>
            <div className="clear" />
            <h2 className="head">
              Find the <span className="m_1">next event </span>You'll want{" "}
              <span className="m_1">to attend</span>
            </h2>
          </div>
        </div>
        <div className="map">
          <img src={require("./images/map.jpg")} alt="" />
        </div>
        <div className="content-box">
          <div className="wrap">
            <ul className="events">
              <li className="active">
                <a href="index.html">Hot Events</a>
              </li>
              <li>
                <a href="">Trending Events</a>
              </li>
            </ul>
            <div className="content-box-right">
              <div className="textbox">
                <form>
                  <input
                    type="text"
                    value="Act Big! Ultimate Music Festival"
                    onfocus="this.value = '';"
                    onblur="if (this.value == '') {this.value = 'Act Big! Ultimate Music Festival';}"
                  />
                </form>
              </div>
              <div className="search_box">
                <form>
                  <select
                    id="country"
                    name="country"
                    onchange="change_country(this.value)"
                    className="frm-field required"
                  >
                    <option value="null">Your Location</option>
                    <option value="AX">Åland Islands</option>
                  </select>
                </form>
              </div>
              <div className="reservation">
                <form>
                  <div className="form-text">
                    <input
                      id="exampleI"
                      name="dateI"
                      value="name"
                      type="text"
                      maxlength="10"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <div className="clear" />
                </form>
              </div>
            </div>
            <div className="clear" />
          </div>
        </div>

        <div className="main">
          <div className="wrap">
            <div className="section group">
              <div className="col_1_of_3 span_1_of_3">
                <div className="desc" style={{ padding: "0px 0px 0px 0px" }}>
                  <div>
                    <Event
                      style={{
                        float: "left",
                        margin: "10px 10px 10px 10px",
                        borde: "2px solid black"
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="clear" />
            </div>
          </div>{" "}
          *
        </div>

        <div className="footer">
          <div className="wrap">
            <div className="footer-menu">
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About eco</a>
                </li>
                <li>
                  <a href="work.html">How it works</a>
                </li>
                <li>
                  <a href="industries.html">Industries</a>
                </li>
                <li>
                  <a href="features.html">Features</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="faq.html">Faq's</a>
                </li>
                <li>
                  <a href="features.html">Privacy policy</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="work.html">Terms of service</a>
                </li>
                <div className="clear" />
              </ul>
            </div>
            <div className="footer-bottom">
              <div className="copy">
                <p>
                  © 2014 Template by{" "}
                  <a href="http://w3layouts.com" target="_blank">
                    {" "}
                    w3layouts
                  </a>
                </p>
              </div>
              <div className="social">
                <ul>
                  <li className="facebook">
                    <a href="#">
                      <span> </span>
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="#">
                      <span> </span>
                    </a>
                  </li>
                  <li className="linked">
                    <a href="#">
                      <span> </span>
                    </a>
                  </li>
                  <li className="arrow">
                    <a href="#">
                      <span> </span>
                    </a>
                  </li>
                  <li className="dot">
                    <a href="#">
                      <span> </span>
                    </a>
                  </li>
                  <li className="rss">
                    <a href="#">
                      <span> </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
