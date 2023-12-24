import Website from "../../../assets/images/website-illustration.png";
import Bot from "../../../assets/images/bot-illustration.png";
import Smmfrom from "../../../assets/images/smm-illustration.png";
import Crm from "../../../assets/images/crm-illustration.png";
import Design from "../../../assets/images/design-illustration.png";
import "./Xizmatlar.css"
import Button from "../../Button/Button";

function Xizmatlar() {
  return (
        <section>
      <div className="container">
        <div className="xizmatlar-container">
            <div className="title">
              <h2>Xizmatlar</h2>
              <p>Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin
                massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
            </div>
            <ul className="xizmatlar">
              <li className="xizmat">
                <div className="before">
                  <img src={Website} width={202} height={130} alt="xizmatlar-images" />
                  <h5>Vebsayt tuzish</h5>
                  <p>lorem ipsum</p>
                </div>
                <div className="after">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor rem sint, deleniti quia asperiores!
                    Inventore placeat, unde ipsam sed nesciunt totam, dicta, aspernatur dolor ex nisi molestiae reiciendis
                    voluptatem.</p>
                </div>
              </li>
              <li className="xizmat">
                <div className="before">
                  <img src={Bot} width={202} height={130} alt="xizmatlar-images" />
                  <h5>Telegram bot</h5>
                  <p>lorem ipsum</p>
                </div>
                <div className="after">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor rem sint, deleniti quia asperiores!
                    Inventore placeat, unde ipsam sed nesciunt totam, dicta, aspernatur dolor ex nisi molestiae reiciendis
                    voluptatem.</p>
                </div>
              </li>
              <li className="xizmat">
                <div className="before">
                  <img src={Smmfrom} width={202} height={130} alt="xizmatlar-images" />
                  <h5>SMM</h5>
                  <p>lorem ipsum</p>
                </div>
                <div className="after">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor rem sint, deleniti quia asperiores!
                    Inventore placeat, unde ipsam sed nesciunt totam, dicta, aspernatur dolor ex nisi molestiae reiciendis
                    voluptatem.</p>
                </div>
              </li>
              <li className="xizmat">
                <div className="before">
                  <img src={Design} width={202} height={130} alt="xizmatlar-images" />
                  <h5>Grafik dizayn</h5>
                  <p>lorem ipsum</p>
                </div>
                <div className="after">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor rem sint, deleniti quia asperiores!
                    Inventore placeat, unde ipsam sed nesciunt totam, dicta, aspernatur dolor ex nisi molestiae reiciendis
                    voluptatem.</p>
                </div>
              </li>
              <li className="xizmat">
                <div className="before">
                  <img src={Crm} width={202} height={130} alt="xizmatlar-images" />
                  <h5>CRM tizimlar</h5>
                  <p>lorem ipsum</p>
                </div>
                <div className="after">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor rem sint, deleniti quia asperiores!
                    Inventore placeat, unde ipsam sed nesciunt totam, dicta, aspernatur dolor ex nisi molestiae reiciendis
                    voluptatem.</p>
                </div>
              </li>
            </ul>
            <div>
              <Button text="Buyurtma berish" />
              <a href="#">Xizmatlar sahifasiga o'tish</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Xizmatlar