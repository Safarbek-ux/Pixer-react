import bannerImg from "../../../assets/images/banner.png";
import Button from "../../Button/Button";
import "./Banner.css";
function section_Banner() {
  return (
    <section>
      <div className="container">
        <div className="section-container">
          <div className="titles">
            <h1>Biznesingizni keyingi bosqichga olib chiqing</h1>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar
            </p>
            <Button text="Xizmatlar bilan tanishish " />
          </div>
          <img width={458} height={258} src={bannerImg} alt="image" />
        </div>
      </div>
    </section>
  );
}

export default section_Banner;
