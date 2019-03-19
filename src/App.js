import React from "react";
import ReactDOM from "react-dom";
import "./calendar-eightysix-default.css";
import "./styles.css";
import "./calendar-eightysix-osx-dashboard.css";
import "./calendar-eightysix-vista.css";

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
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua And Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, Democractic Republic</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'Ivoire (Ivory Coast)</option>
                    <option value="HR">Croatia (Hrvatska)</option>
                    <option value="CU">Cuba</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="TP">East Timor</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">
                      Falkland Islands (Islas Malvinas)
                    </option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji Islands</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="FX">France, Metropolitan</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia, The</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard and McDonald Islands</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong S.A.R.</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KR">Korea</option>
                    <option value="KP">Korea, North</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macau S.A.R.</option>
                    <option value="MK">Macedonia</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua new Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn Island</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts And Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent And The Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
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
                <img src={require("./images/pic.jpg")} alt="" />
                <ul className="m_fb">
                  <li>
                    <span className="m_22">
                      <a href="#">
                        <img src={require("./images/fb.png")} alt="" />
                      </a>
                    </span>
                    <span className="middle">
                      Aug 17, 2013 02:00pm-08-00pm IST
                    </span>
                    <span className="m_23">
                      <a href="#">
                        <img src={require("./images/heart.png")} alt="" />
                      </a>
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
                <div className="desc">
                  <h3>
                    <a href="#">Lorem Ipsum is simply dummy</a>
                  </h3>
                  <h4 className="m_2">consectetur adipisicing elit, sed do</h4>
                  <h5 className="m_3">
                    sed do eiusmod tempor incididunt ut labore
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="section group example">
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/men.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">Metro Al Madina</span>
                          <br />
                          <span className="m_3">{/* Male */}</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/women.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">8:30pm </span>
                          <br />
                          <span className="m_3">{/* Fe male */}</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </div>
              </div>
              <div className="col_1_of_3 span_1_of_3">
                <img
                  src={
                    "https://www.antoineticketing.com/files/event_thumb_7489.jpg"
                  }
                  alt=""
                />
                <ul className="m_fb">
                  <li>
                    <span className="m_24">
                      <a href="#">
                        <img src={require("./images/fb.png")} alt="" />
                      </a>
                    </span>
                    <span className="middle">
                      Aug 17, 2013 02:00pm-08-00pm IST
                    </span>
                    <span className="m_23">
                      <a href="#">
                        <img src={require("./images/heart.png")} alt="" />
                      </a>
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
                <div className="desc">
                  <h3>
                    <a href="#">Lorem Ipsum is simply dummy</a>
                  </h3>
                  <h4 className="m_2">consectetur adipisicing elit, sed do</h4>
                  <h5 className="m_3">
                    sed do eiusmod tempor incididunt ut labore
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="section group example">
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/men.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">25%</span>
                          <br />
                          <span className="m_3">Male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/women.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">75%</span>
                          <br />
                          <span className="m_3">Fe male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </div>
              </div>
              <div className="col_1_of_3 span_1_of_3">
                <img src={require("./images/pic2.jpg")} alt="" />
                <ul className="m_fb">
                  <li>
                    <span className="m_22">
                      <a href="#">
                        <img src={require("./images/fb.png")} alt="" />
                      </a>
                    </span>
                    <span className="middle">
                      Aug 17, 2013 02:00pm-08-00pm IST
                    </span>
                    <span className="m_23">
                      <a href="#">
                        <img src={require("./images/heart.png")} alt="" />
                      </a>
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
                <div className="desc">
                  <h3>
                    <a href="#">Lorem Ipsum is simply dummy</a>
                  </h3>
                  <h4 className="m_2">consectetur adipisicing elit, sed do</h4>
                  <h5 className="m_3">
                    sed do eiusmod tempor incididunt ut labore
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="section group example">
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/men.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">62%</span>
                          <br />
                          <span className="m_3">Male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/women.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">38%</span>
                          <br />
                          <span className="m_3">Fe male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </div>
              </div>
              <div className="clear" />
            </div>
            <div className="section group">
              <div className="col_1_of_3 span_1_of_3">
                <img src={require("./images/pic3.jpg")} alt="" />
                <ul className="m_fb">
                  <li>
                    <span className="m_24">
                      <a href="#">
                        <img src={require("./images/fb.png")} alt="" />
                      </a>
                    </span>
                    <span className="middle">
                      Aug 17, 2013 02:00pm-08-00pm IST
                    </span>
                    <span className="m_23">
                      <a href="#">
                        <img src={require("./images/heart.png")} alt="" />
                      </a>
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
                <div className="desc">
                  <h3>
                    <a href="#">Lorem Ipsum is simply dummy</a>
                  </h3>
                  <h4 className="m_2">consectetur adipisicing elit, sed do</h4>
                  <h5 className="m_3">
                    sed do eiusmod tempor incididunt ut labore
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="section group example">
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/men.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">55%</span>
                          <br />
                          <span className="m_3">Male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/women.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">45%</span>
                          <br />
                          <span className="m_3">Fe male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </div>
              </div>
              <div className="col_1_of_3 span_1_of_3">
                <img src={require("./images/pic4.jpg")} alt="" />
                <ul className="m_fb">
                  <li>
                    <span className="m_22">
                      <a href="#">
                        <img src={require("./images/fb.png")} alt="" />
                      </a>
                    </span>
                    <span className="middle">
                      Aug 17, 2013 02:00pm-08-00pm IST
                    </span>
                    <span className="m_23">
                      <a href="#">
                        <img src={require("./images/heart.png")} alt="" />
                      </a>
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
                <div className="desc">
                  <h3>
                    <a href="#">Lorem Ipsum is simply dummy</a>
                  </h3>
                  <h4 className="m_2">consectetur adipisicing elit, sed do</h4>
                  <h5 className="m_3">
                    sed do eiusmod tempor incididunt ut labore
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="section group example">
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/men.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">31%</span>
                          <br />
                          <span className="m_3">Male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/women.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">69%</span>
                          <br />
                          <span className="m_3">Fe male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </div>
              </div>
              <div className="col_1_of_3 span_1_of_3">
                <img src={require("./images/pic5.jpg")} alt="" />
                <ul className="m_fb">
                  <li>
                    <span className="m_24">
                      <a href="#">
                        <img src={require("./images/fb.png")} alt="" />
                      </a>
                    </span>
                    <span className="middle">
                      Aug 17, 2013 02:00pm-08-00pm IST
                    </span>
                    <span className="m_23">
                      <a href="#">
                        <img src={require("./images/heart.png")} alt="" />
                      </a>
                    </span>
                    <div className="clear" />
                  </li>
                </ul>
                <div className="desc">
                  <h3>
                    <a href="#">Lorem Ipsum is simply dummy</a>
                  </h3>
                  <h4 className="m_2">consectetur adipisicing elit, sed do</h4>
                  <h5 className="m_3">
                    sed do eiusmod tempor incididunt ut labore
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="section group example">
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/men.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">57%</span>
                          <br />
                          <span className="m_3">Male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="col_1_of_2 span_1_of_2">
                    <ul>
                      <li>
                        <img src={require("./images/women.png")} alt="" />
                        <div className="m_desc">
                          <span className="m_2">43%</span>
                          <br />
                          <span className="m_3">Fe male</span>
                        </div>{" "}
                        <div className="clear" />
                      </li>
                    </ul>
                  </div>
                  <div className="clear" />
                </div>
              </div>
              <div className="clear" />
            </div>
          </div>
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
