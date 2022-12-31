import { Carousel } from 'react-responsive-carousel'
import PageLayout from '../../common/components/PageLayout/PageLayout'
import References from '../../common/components/References/References'
import TextRef from '../../common/components/TextRef/TextRef'
import Images from '../../common/Images'
import './Safety.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function Safety () {
  const images = [Images.Safety_1, Images.Safety_2, Images.Safety_3, Images.Safety_4]

  return (
    <PageLayout title='Safety'>
      <p>
        Our strategies have been designed to be respectful, clean and safe for users and the
        environment. The strategy that we developed uses mainly biological materials and recycled
        substances, such as ethanol and ethidium bromide, which will not end up in the environment.
        To ensure that our strategy is environmentally friendly, we have contacted experts in the
        field to ensure that the desired synthetic pheromone does not target other insects and
        inflict damage on ecosystems. Professionals have assured us that the creation of synthetic
        pheromones is species-specific and unlikely to have any adverse consequences. Also, we would
        not release the modified <i>Saccharomyces Cerevisaie</i> strain in the environment, we would
        only put the pheromone it produces inside traps.
      </p>
      <p>
        The goal of the project is to propose a strategy for monitoring pest species using
        biologically synthesised pheromones. For the development of this strategy we used the
        following micro-organisms : <i>Eschirichia. Coli DH5a </i> and{' '}
        <i> Saccharomyces Cerevisaie BY4741</i>. The strains used are both commonly found in global
        environments and are considered BSL-1 bacteria. In general, all of the potentially hazardous
        chemicals were carefully handled in the flow hood and general laboratory safety requirements
        were followed at all times.
      </p>

      <div className='safety-carousel'>
        <Carousel>
          {images.map((image) => (
            <div key={image}>
              <img srcSet={image} />
            </div>
          ))}
        </Carousel>
      </div>

      <p>
        All the experiments performed were standard: amplification of genetic material, DNA
        transfection. Among the protocols we applied, we used ethidium bromide. Ethidium bromide is
        a known carcinogenic and mutagenic chemical. Our members, therefore, received proper
        training before handling it to limit the risks of using this chemical.{' '}
      </p>
      <p>
        During the project, we had experts overseeing the safety of our work area, making sure it
        respected the safety norms of our country and university. All of the experiments done in a
        lab were done in the presence of a professional that worked in the lab. Furthermore, we had
        many risk management tools at our disposal. We had access to accident reports, personal
        protection equipment, a locked and secure place for our lab equipment, and a
        well-established waste management system.
      </p>
      <p>
        In view of the unstable health situation due to the previous Covid-19 crisis, the students
        and participants took into account all the measures in force and paid attention to
        themselves and to everyone else. In case of symptoms, no risks were taken, the manipulations
        were reprogrammed and everything was done in accordance with the rules issued by the
        Government of Canada (<TextRef sup='1' content='Government of Canada, 2022' />) and Laval
        University (<TextRef sup='2' content='Laval University, 2022' />
        ).
      </p>
      <p>
        All downloaded data, such as sequences and spatial representation, come from free databases
      </p>

      <References
        references={[
          'https://www.canada.ca/fr/sante-publique/services/maladies/maladie-coronavirus-covid-19.html',
          'https://www.ulaval.ca/en/covid-19'
        ]}
      />
    </PageLayout>
  )
}

export default Safety
