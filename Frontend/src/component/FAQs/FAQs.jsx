import Accordion from 'react-bootstrap/Accordion';
import Question from './Question';
import './faqs.css';

function FAQs() {

  return (

    <div className='container-faqs'>

       <div>
        <h5>FAQs</h5>
       </div>

      <Accordion defaultActiveKey="0">
        {
          [
            {
              key: 0,
              header: "What is the future of electric vehicles in India?",
              body: `The future of Electric Vehicles in India looks promising, with increased government support, growing awareness of environmental issues, and advancements in battery technology driving their adoption.`
            },
            {
              key: 1,
              header: "How long does it take to charge an electric vehicle?",
              body: `Charging times vary based on the charger's power and the vehicle's battery capacity. Regular charging at home can take several hours, while fast chargers can charge a vehicle significantly faster.`
            },
            {
              key: 2,
              header: "What is the range of electric vehicles on a single charge?",
              body: `The range of Electric Vehicles varies widely depending on the model and battery capacity. It can range from around 100 kilometers to over 400 kilometers on a single charge.`
            },
            {
              key: 3,
              header: "How eco-friendly are electric vehicles compared to traditional vehicles?",
              body: `Electric vehicles produce zero tailpipe emissions, making them significantly more eco-friendly than traditional vehicles that rely on fossil fuels.`
            },
            {
              key: 4,
              header: "What are the benefits of using electric vehicles in India?",
              body: `Using Electric Vehicles in India offers benefits such as reduced air pollution, lower operating costs due to cheaper electricity compared to fuel, and government incentives like subsidies and tax breaks.`
            },
          ].map((elem, index) => {

            return <Question key={index} eventKey={elem.key} header={elem.header} body={elem.body} />
          })
        }

      </Accordion>
    </div>

  );
}


export default FAQs;