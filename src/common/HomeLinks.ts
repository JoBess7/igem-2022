import Images from './Images'

interface HomeLink {
  icon: Images
  description: string
  title: string
  link: string
}

const HomeLinks: HomeLink[] = [
  {
    icon: Images.IconImplement,
    description: 'How does it fit in the production process?',
    title: 'Implementing',
    link: 'https://2022.igem.wiki/ulaval/implementation'
  },
  {
    icon: Images.IconModelling,
    description: 'What is our team doing?',
    title: 'Modelling',
    link: 'https://2022.igem.wiki/ulaval/model'
  },
  {
    icon: Images.IconSafety,
    description: 'How is it safe in and outside of the lab?',
    title: 'Safety',
    link: 'https://2022.igem.wiki/ulaval/safety'
  },
  {
    icon: Images.IconTeam,
    description: 'Who is behind this project?',
    title: 'Team',
    link: 'https://2022.igem.wiki/ulaval/team'
  }
]

export default HomeLinks
