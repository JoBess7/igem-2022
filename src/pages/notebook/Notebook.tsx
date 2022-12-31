import PageLayout from '../../common/components/PageLayout/PageLayout'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Title from '../../common/components/Title/Title'
import './Notebook.css'
import Images from '../../common/Images'

function Notebook () {
  return (
    <PageLayout id='notebook' title='Notebook'>
      <p style={{ paddingBottom: '60px' }}>
        This page summarizes the timeline of the <i>Pherosynth</i> project this year. As you can see
        below, we recruited new members and formed our team in January, discussed some project ideas
        in February, and chose our project idea in March. As soon as April, we contacted professors
        in our university to help us with the science aspect of our project, planned lab work and
        began to prepare our fundraising campaign. From there, we worked on the wet lab and
        communication aspects of our project, such as <i>Human Practices</i>. Since August, we
        focused on the deliverables for iGEM such as the wiki and the 20-minutes presentation.
      </p>
      <VerticalTimeline>
        <Title title='January 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          icon={<img srcSet={Images.IconTeam} />}
          date='January 25th, 2022'
        >
          <p>Recruitment meeting with potential new members</p>
        </VerticalTimelineElement>

        <Title title='February 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          icon={<img srcSet={Images.IconTeam} />}
          date='February 12th, 2022'
        >
          <p>Integration meeting with the several new members</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='February 24th, 2022'
        >
          <p>Beginning of the project ideas brainstorm</p>
        </VerticalTimelineElement>

        <Title title='March 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='March 3rd, 2022'
          icon={<img srcSet={Images.IconModelling} />}
        >
          <p>
            We went through all the ideas noted during the brainstorm session and elaborated on some
            of them
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='March 17th, 2022'
        >
          <p>
            Final selection of the project idea: Biosynthesis of <i>Dendroctonus ponderosa’s</i>{' '}
            (mountain pine beetle) pheromone using modified <i>S. Cerevisiae</i>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          icon={<img srcSet={Images.IconTeam} />}
          date='March 31th, 2022'
        >
          <p>
            <i>Forces AVENIR</i> contest writing session and registration of the team <br />
            Planification of the weekly <i>science</i> meeting
          </p>
        </VerticalTimelineElement>

        <Title title='April 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='April 7th, 2022'
        >
          <p>
            Registration of the team iGEM ULaval to iGEM 2022 / Beginning to work on crowdfunding
            using <i>GoFundMe</i> platform / Planning of the weekly communication meeting
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='April 8th, 2022'
          icon={<img srcSet={Images.IconModelling} />}
        >
          <p>
            Human practices, first step: contacting Christopher Keeling, Ph. D. He is a Canadian
            researcher working on <i>Dendroctonus ponderosa</i>. We aimed to have some of his
            advices on different possible approaches addressing this invasive species problem and
            how to present it to a larger public
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='April 11th, 2022'
          icon={<img srcSet={Images.IconModelling} />}
        >
          <p>
            We have read many articles to fully understand how to proceed with wet lab and analysis.
            / Planning and discussing modelization
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='April 19th, 2022'
        >
          <p>Work on the sponsorship campaign</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='April 21st, 2022'
          icon={<img srcSet={Images.IconTeam} />}
        >
          <p>
            Human practices : Meeting with Christopher Keeling, Ph. D. / Registration of the team
            members to iGEM 2022
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='April 28th, 2022'
        >
          <p>Design of the project’s logo and name: Pherosynth!</p>
        </VerticalTimelineElement>

        <Title title='May 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='May 9th, 2022'
          icon={<img srcSet={Images.IconModelling} />}
        >
          <p>We designed the primers for the plasmids necessary for the transformation</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='May 16th, 2022'
          icon={<img srcSet={Images.IconModelling} />}
        >
          <p>Design of the combination P450 cytochrome/anchor</p>
        </VerticalTimelineElement>

        <Title title='June 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='June 4th, 2022'
          icon={<img srcSet={Images.IconTeam} />}
        >
          <p>
            <i>Level-Up collab</i>: Meeting with iGEM teams Patras, Thessaloniki and Stockholm
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='June 6th, 2022'
          icon={<img srcSet={Images.IconModelling} />}
        >
          <p>
            Design of the integration sites in the DNA sequences of interest / Modelling processes
            are launched
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='June 9th, 2022'
        >
          <p>
            We decided to participate to iGEM Canadian Newletter, on invitation from the iGEM teams
            of Queens University and Calgary University
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='June 13th, 2022'
        >
          <p>gBlocks from IDT were ordered.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='June 22th, 2022'
          icon={<img srcSet={Images.IconTeam} />}
        >
          <p>
            Meeting with Pierre Audet, Ph. D., for the analysis of our results (proof of concept) :
            we are going to combine mass spectrometry (MS) and gas chromatography (GC)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='June 23th, 2022'
        >
          <p>The Safety Form is sent</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='June 27th, 2022'
        >
          <p>
            We gathered as many articles and information as we could in order to plan our proof of
            concept with GC-MS
          </p>
        </VerticalTimelineElement>

        <Title title='July 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='July 4th, 2022'
          icon={<img srcSet={Images.IconModelling} />}
        >
          <p>Wet lab planning / Ordering the oligonucleotides for the transformation</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='July 11th, 2022'
          icon={<img srcSet={Images.IconTeam} />}
        >
          <p>
            Summer camp activity : we organized an interactive activity, <i>Super-microbe</i>, for
            the children at a summer camp.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='July 14th, 2022'
        >
          <p>We chose the Conservation Track for the Grand Jamboree</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='July 15th, 2022'
          icon={<img srcSet={Images.IconTeam} />}
        >
          <p>
            Human practices : meeting with Christian Hébert, Ph. D., a Canadian Researcher who works
            on <i>Choristoneura fumiferana</i> (spruce budworm)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='July 21th, 2022'
          icon={<img srcSet={Images.IconImplement} />}
        >
          <p>Beginning of the wet lab: amplification of plasmids and cloning</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='July 25th, 2022'
          icon={<img srcSet={Images.IconImplement} />}
        >
          <p>Lab work: our cloning seems to work (validation on agarose gel)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='July 28th, 2022'
        >
          <p>Beginning the work on the wiki</p>
        </VerticalTimelineElement>

        <Title title='August 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='August 1st, 2022'
          icon={<img srcSet={Images.IconImplement} />}
        >
          <p>
            Creation of cassettes for <i>S. cerevisiae</i> tranformation
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='August 8th, 2022'
          icon={<img srcSet={Images.IconImplement} />}
        >
          <p>
            Transformation of <i>S. cerevisiae</i>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='August 20th, 2022'
          icon={<img srcSet={Images.IconTeam} />}
        >
          <p>
            The iGEM ULaval team was represented by two of its members at the Mini-Jamboree
            organized by iGEM Concordia
          </p>
        </VerticalTimelineElement>

        <Title title='September 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='September 8th, 2022'
          icon={<img srcSet={Images.IconImplement} />}
        >
          <p>End of lab work</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='September 16th, 2022'
        >
          <p>The final Safety Form is done and sent</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #013455' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#013455', color: '#fff' }}
          date='September 28th, 2022'
        >
          <p>
            Important working day (and also the deadline) for our team to work on pages of our wiki
          </p>
        </VerticalTimelineElement>

        <Title title='October 2022' />
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='October 1st, 2022'
        >
          <p>Preliminary judging session due / Project title and abstract due</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='October 12th, 2022'
        >
          <p>Wiki Freeze</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          position='right'
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#f2f7fa', color: 'black', borderTop: '4px solid #ff8b00' }}
          contentArrowStyle={{ borderRight: '7px solid  #f2f7fa' }}
          iconStyle={{ background: '#ff8b00', color: '#fff' }}
          date='October 26th, 2022'
          icon={<img srcSet={Images.IconTeam} />}
        >
          <p>
            Attending the <i>Grand Jamboree</i>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </PageLayout>
  )
}

export default Notebook
