import { Carousel } from 'react-responsive-carousel'
import PageLayout from '../../common/components/PageLayout/PageLayout'
import PageLink from '../../common/components/PageLink/PageLink'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import Title from '../../common/components/Title/Title'
import Images from '../../common/Images'
import './Collaborations.css'

function Collaborations () {
  return (
    <PageLayout title='Collaboration'>
      <Title title='What we organized' />
      <Title isSub title='Collaboration Level-Up  Patras - Thessaloniki - Stockholm - ULaval' />
      <p>
        We collaborated with iGEM Patras, iGEM Thessaloniki and iGEM Stockholm to create leaflets to
        explain synthetic biology at 4 different levels : children, teenagers, the general public
        and STEM students.
      </p>

      <p>
        At the beginning of the year, we reached out to the iGEM Patras and iGEM Thessaloniki teams
        to collaborate with them for a second year. iGEM Patras and iGEM Thessaloniki were already
        collaborating with iGEM Stockholm, but they didn’t have a specific project in mind. At the
        first meeting, we presented the idea of creating a tool that can explain synthetic biology
        to the general public. Together with the other teams, we then came up with the idea of
        Level-Up and its leaflets.
      </p>

      <p>
        Through this collaboration, we asked other iGEM teams to use our leaflet templates and
        translate them into their local language. We then invited them to distribute the leaflets at
        different activities they would organise and on their campus at the beginning of the
        semester. Since one section of the leaflets is dedicated to iGEM, we hope that distributing
        them will also help the teams to recruit new students. To get more detail about the
        education and communication part of this collaboration, see the page{' '}
        <PageLink src='https://2022.igem.wiki/ulaval/education'>
          Education and communication
        </PageLink>
        .
      </p>

      <img className='collab-lvl-up' srcSet={Images.CollabLevelUp} alt='' />

      <TextSeparator />
      <Title title='What we participated in' />
      <Title
        isSub
        title='In vitro : Eastern Canadian Mini-Jamboree 2022 - iGEM Concordia and iGEM McGill'
      />

      <p>
        This year, we participated in the first edition of the Eastern Canadian Mini-Jamboree
        organised by iGEM Concordia and iGEM McGill. At this event, we had the chance to present our
        project in the form of a 15 minutes presentation, plus 5 minutes of questions, in front of
        other iGEM teams and judges. Former iGEM students and professors from McGill University and
        Concordia University were acting as the judges for this event. As a result, we had feedback
        from the judges, allowing us to identify the strengths, but also the weaknesses of our
        project. We were then able to improve our project using the comments that all teams
        attending received from the judges.
      </p>

      <p>
        This event also allowed us to meet the other Eastern Canadian teams. We discovered that even
        if the project of each team has different end goals, we are still able to help each other
        with our knowledge and experience in synthetic biology. For this purpose, with the workshop
        “Let’s talk About..”, every team wrote a question on a topic to which they wanted feedback
        from the other teams. It allowed the participants to open the conversation between the
        teams, which is more difficult outside of these types of events.
      </p>

      <div className='collab-carousel'>
        <Carousel>
          {[Images.Collab1, Images.Collab2].map((image) => (
            <div key={image}>
              <img srcSet={image} />
            </div>
          ))}
        </Carousel>
      </div>

      <Title
        isSub
        title='Canada-wide iGEM newsletter - Queen’s University and University of Calgary iGEM’s teams'
      />
      <p>
        This year, the iGEM teams from Queen’s University and University of Calgary took the
        initiative to create a Canada-wide iGEM newsletter where, each month, all the canadian iGEM
        teams were asked to fill out a questionnaire. The questions could be related to our
        projects, the events we were organizing, whether or not we would be present at the jamboree,
        etc. We participated in the June, July and August edition of the newsletter, which helped us
        to discover the other team’s project and to follow their progress throughout the summer.
      </p>

      <Title isSub title='DNA Day - iGEM Patras (Patras Med)' />

      <p>
        Solidarity and mutual aid are values that are dear to our team. In this context, we have
        been asked by iGEM Patras to form long human DNA strands for DNA day. This day of
        celebration takes place on April 26th. Each person had to take their picture with one of the
        4 nitrogenous bases. Louis-Jacques responded to this call to promote both DNA structure and
        diversity. We are all united by DNA but each person is different.
      </p>
    </PageLayout>
  )
}

export default Collaborations
