import Button from '../../Button/Button';
import '../Buyurtma/Buyurtma.css'
function Buyurtma() {
  return (
    <>
      <section className='buyurtma'>
        <div className="container">
          <div className="xizmatlar-container">
            <div className="title">
              <h2>Buyurtma berish</h2>
              <p>
                Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
                Nam facilisis lacinia ex, eget sollicitudin massa pellentesque
                in. Vivamus mattis eros at sem pulvinar
              </p>
            </div>
            <form
              className="forma"
              action="https://echo.htmlacademy.ru"
              method="get"
            >
              <input
                type="text"
                name="username"
                placeholder="Ismingiz"
                required
              />
              <input
                type="tel"
                name="number"
                placeholder="Telefon raqamingiz"
                required
              />
              <select name="Xizmat_turi" defaultValue="Xizmat turi">
                <option value="Vebsayt">Vebsayt tuzish</option>
                <option value="Bot">Telegram bot</option>
                <option value="SMM">SMM</option>
                <option value="Grafik">Grafik dizayn</option>
                <option value="Crm">Crm tizimlar</option>
              </select>
              <Button text="Buyurtma berish" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Buyurtma