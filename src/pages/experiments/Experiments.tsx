import PageLayout from '../../common/components/PageLayout/PageLayout'
import Title from '../../common/components/Title/Title'
import Expandable from './components/Expandable/Expandable'
import AllExperiments, { ExperimentSection } from './Data'
import './Experiments.css'

function Experiments () {
  const getExperimentSection = (experiment: ExperimentSection, index: number) => {
    if (index !== 1) {
      return (
        <div className='experiment'>
          <div className='experiment-title-main'>
            <Title title={experiment.title}></Title>
          </div>
          <div className='experiment-section'>
            {experiment.experiments.map((experiment) => (
              <Expandable link={experiment.link} key={experiment.title} title={experiment.title} />
            ))}
          </div>
        </div>
      )
    } else {
      return (
        <div className='experiment'>
          <div className='experiment-title-main'>
            <Title title='Antibiotics'></Title>
          </div>
          <table>
            <tr>
              <th>Name</th>
              <th>Short name</th>
              <th>Solvent</th>
              <th>Stock solution concentration (mg/mL)</th>
              <th>Stock solution concentration (X)</th>
              <th>Working final concentration (μg/mL)</th>
            </tr>
            <tr>
              <td>G418</td>
              <td>G418</td>
              <td>Water</td>
              <td>200</td>
              <td>1000X</td>
              <td>200</td>
            </tr>
            <tr>
              <td>Hygromycin B</td>
              <td>HygB</td>
              <td>Water</td>
              <td>100</td>
              <td>400</td>
              <td>250</td>
            </tr>
          </table>
        </div>
      )
    }
  }

  return (
    <PageLayout title='experiments'>
      <div className='experiments'>
        {AllExperiments.map((experiment: ExperimentSection, index: number) =>
          getExperimentSection(experiment, index)
        )}
      </div>
    </PageLayout>
  )
}

export default Experiments
