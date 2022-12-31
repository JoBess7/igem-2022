import PageLayout from '../../common/components/PageLayout/PageLayout'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import Title from '../../common/components/Title/Title'
import Images from '../../common/Images'
import TeamMembers from '../../common/TeamMembers'
import './Team.css'

function Team () {
  return (
    <PageLayout title='Team'>
      <div className='team-all'>
        <img srcSet={Images.TeamAll} alt='' />
        <img className='team-all-weird' srcSet={Images.TeamAllWeird} alt='' />
      </div>
      <p>
        We are Team iGEM ULaval. Our team was founded at Université Laval in Quebec, Canada in 2018,
        and we’ve been part of the iGEM journey ever since. Our members are graduate and
        undergraduate students from many fields, including biochemistry, bioinformatics, biomedical
        sciences, communication, pharmaceutical sciences, and software engineering. This past year,
        we’ve been hard at work developing the PheroSynth project.
      </p>
      <p>
        Three outstanding mentors and one amazing teacher were also part of the team this year,
        acting as guides and giving us valuable advice. While various experts and former ULaval
        iGEMers helped us in many ways to make PheroSynth a reality, the members featured on this
        page are the official ULaval team!
      </p>
      <p>
        We are eager to show you what we have achieved with PheroSynth this year, but you’re welcome
        to stop by here and get to know the people behind the project first!{' '}
      </p>
      <TextSeparator />
      <Title id='team-title' title='Team members' />
      <div className='team-members'>
        {TeamMembers.map((teamMember, index) => (
          <div key={index} className='team-member'>
            <div className='team-member-img'>
              <img srcSet={teamMember.image} alt='' />
              <div className='team-member-info'>
                <div>
                  <span className='info-main'>Years in iGEM? </span>
                  <span className='info-info'>{teamMember.years}</span>
                </div>
                <div>
                  <span className='info-main'>Scientific Fun Fact: </span>
                  <span className='info-info'>{teamMember.funFact}</span>
                </div>
                <div>
                  <span className='info-main'>Favorite Plant: </span>
                  <span className='info-info'>
                    {teamMember.favPlant}
                    {teamMember.favPlantSc !== '' && <i> ({teamMember.favPlantSc})</i>}
                  </span>
                </div>
                <div>
                  <span className='info-main'>Favorite Activity in Nature: </span>
                  <span className='info-info'>{teamMember.favActivity}</span>
                </div>
              </div>
            </div>
            <div className='team-member-description'>
              <span className='team-member-name'>{teamMember.name}</span>
              <span className='team-member-program'>{teamMember.program}</span>
            </div>
          </div>
        ))}
      </div>
      <TextSeparator />
      <Title id='team-title' title='Mentors' />
      <div className='team-mentors'>
        <div className='team-mentor team-pad-right'>
          <img srcSet={Images.TeamHossein} alt='' />
          <span>Hossein Hassanzadeh</span>
        </div>
        <div className='team-mentor team-pad-right'>
          <img srcSet={Images.TeamManon} alt='' />
          <span>Manon Couture</span>
        </div>
        <div className='team-mentor team-pad-right'>
          <img srcSet={Images.TeamPascale} alt='' />
          <span>Pascale Lemieux</span>
        </div>
        <div className='team-mentor team-pad-right'>
          <img srcSet={Images.TeamFrancois} alt='' />
          <span>François Rouleau</span>
        </div>
      </div>
    </PageLayout>
  )
}

export default Team
