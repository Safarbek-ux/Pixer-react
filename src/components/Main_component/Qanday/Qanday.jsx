import Button from "../../Button/Button"
import img1 from "../../../assets/images/1illustration.png"
import img2 from "../../../assets/images/2illustration.png"
import img3 from "../../../assets/images/3illustration.png"
import img4 from "../../../assets/images/4illustration.png"
import img5 from "../../../assets/images/5illustration.png"
import "./Qanday.css"
function Qanday() {
  return (
    <section>
      <div className="container xizmatlar-container">
        <div className="title">
          <h2>Biz qanday ishlaymiz?</h2>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </p>
        </div>
        <ul className="qanday">
          <li>
            <img
              src={img1}
              alt="qanday ishlaymiz images"
              width="300"
              height="278"
            />
            <div>
              <h5>Talablarni aniqlab chiqamiz</h5>
              <p>
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
          <li>
            <img
              src={img2}
              alt="qanday ishlaymiz images"
              width="300"
              height="224"
            />
            <div>
              <h5>Bir necha yechimlarni taklif qilamiz</h5>
              <p>
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
          <li>
            <img
              src={img3}
              alt="qanday ishlaymiz images"
              width="300"
              height="258"
            />
            <div>
              <h5>Loyiha uchun vaqt belgilaymiz</h5>
              <p>
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
          <li>
            <img
              src={img4}
              alt="qanday ishlaymiz images"
              width="300"
              height="161"
            />
            <div>
              <h5>A’lo sifat bilan bajarib topshiramiz</h5>
              <p>
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
          <li>
            <img
              src={img5}
              alt="qanday ishlaymiz images"
              width="300"
              height="232"
            />
            <div>
              <h5>Qo’llab-quvvatlab boramiz</h5>
              <p>
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis
              </p>
            </div>
          </li>
        </ul>
        <Button text="Buyurtma berish" />
      </div>
    </section>
  );
}

export default Qanday