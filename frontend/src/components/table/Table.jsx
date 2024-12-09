
import './Table.css' 

const ITAcademies = () => {
  return (
    <section className="it-academies">
      <table>
        <thead>
          <tr>
            <th>IT Академии</th>
            <th>Длительность курса</th>
            <th>Количество уроков</th>
            <th>Стоимость обучения</th>
            <th>Рассрочка на 12 месяцев</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="u-study-logo.png" alt="Ustudy" />
            </td>
            <td>5 месяцев</td>
            <td>-</td>
            <td>2 000 000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <img src="pdp-logo.png" alt="PDP" />
            </td>
            <td>8 месяцев</td>
            <td>72 урока</td>
            <td>1 500 000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <img src="mohirdev-logo.png" alt="Mohirdev" />
            </td>
            <td>3–9 месяцев</td>
            <td>-</td>
            <td>2 000 000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <img src="proweb-logo.png" alt="Proweb" />
            </td>
            <td>10 месяцев</td>
            <td>80 уроков</td>
            <td>1 600 000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <img src="tenqilikum-logo.png" alt="Tenqilikum" />
            </td>
            <td>4 месяца</td>
            <td>50 уроков</td>
            <td>985 000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>
              <img src="it-academy-logo.png" alt="IT Academy" />
            </td>
            <td>8 месяцев</td>
            <td>64 урока</td>
            <td>1 400 000</td>
            <td>762 222</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ITAcademies;