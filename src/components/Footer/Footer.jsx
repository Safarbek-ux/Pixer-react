import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className="footer_list">
          <li>
            <h4>Copyright 2020</h4>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar tincidunt.
            </p>
          </li>
          <li>
            <h4>Sayt sahifalari</h4>
            <ul>
              <li>
                <a href="#">Bosh sahifa</a>
              </li>
              <li>
                <a href="#">Xizmatlar</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Jamoa</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Kontaktlar</a>
              </li>
            </ul>
          </li>
          <li>
            <h4>Biz internetda</h4>
            <ul className="social">
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer