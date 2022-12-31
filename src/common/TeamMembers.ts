import Images from './Images'

interface Member {
  name: string
  program: string
  years: string
  funFact: string
  favPlant: string
  favPlantSc: string
  favActivity: string
  image: Images
}

const TeamMembers: Member[] = [
  {
    name: 'Benjamin Ouellet',
    program: 'M. Sc. Biochemistry',
    years: 'Third!',
    funFact:
      'In contrast with dogs, humans would need to eat, in one take, more than 10 kg of dark chocolate to suffer from theobromine intoxication.',
    favPlant: 'Coffee plant',
    favPlantSc: 'Coffea arabica',
    favActivity: 'Hiking in natural parks.',
    image: Images.TeamBenjamin
  },
  {
    name: 'Olivier Lavoie',
    program: 'M. Sc. Pharmaceutical sciences',
    years: 'Third!',
    funFact:
      'Honey produced from rhododendron flowers, called mad-honey, can have the same effect on you as LSD.',
    favPlant: 'Mango plant',
    favPlantSc: 'Mangifera indica',
    favActivity: 'Swimming and snorkeling in the sea.',
    image: Images.TeamOlivier
  },
  {
    name: 'Alexandre Paquet',
    program: 'M. Sc. Clinical and Biomedical sciences',
    years: 'First!',
    funFact:
      'Tardigrades are microscopic animals that are basically invincible and can survive extreme conditions.',
    favPlant: 'Sugar maple',
    favPlantSc: 'Acer saccharum',
    favActivity: 'Just sitting beside a river and climbing into trees.',
    image: Images.TeamAlexandre
  },
  {
    name: 'Jonathan Bessette',
    program: 'B. ENG. Software Engineering',
    years: 'Second!',
    funFact: 'A red blood cell can make a complete circuit of your body in 20 seconds.',
    favPlant: 'Tropical pitcher plant',
    favPlantSc: 'Nepenthes',
    favActivity: 'Paddle boarding, camping and playing spikeball',
    image: Images.TeamJonathan
  },
  {
    name: 'Éléonore Lemieux',
    program: 'B. Sc. Bioinformatics',
    years: 'First!',
    funFact: 'Sharks have been here longer than trees.',
    favPlant: 'Ginkgo biloba',
    favPlantSc: '',
    favActivity: 'Sea kayaking at sunset',
    image: Images.TeamEleonore
  },
  {
    name: 'Mathieu Giguère',
    program: 'B. Sc. Bioinformatics ',
    years: 'First!',
    funFact: 'Saturn would float in water because it is mostly made of gas.',
    favPlant: 'Sunflower',
    favPlantSc: 'Helianthus annuus',
    favActivity: 'Paddle boarding on a lake while contemplating the immensity of nature.',
    image: Images.TeamMathieu
  },
  {
    name: 'Louis-Jacques Ruel',
    program: 'M. Sc. Molecular medicine',
    years: 'Third!',
    funFact:
      'Black holes can have the density of air, but are going to be 1000x bigger than black holes with the density of water.',
    favPlant: 'Weeping Willow',
    favPlantSc: 'Salix babylonica',
    favActivity:
      'Going down a river with whatever water transportation available (except a makeshift raft). Also have to include volleyball.',
    image: Images.TeamLuigi
  },
  {
    name: 'Emilie Alexander',
    program: 'M. Sc. Biochemistry',
    years: 'Third!',
    funFact: 'Our mitochondria are a lot warmer than the rest of our cells, reaching up to 50°C.',
    favPlant: 'White birch tree',
    favPlantSc: '(Betula papyrifera)',
    favActivity: 'Hiking, camping and finding cool living things and rocks.',
    image: Images.TeamEmilie
  },
  {
    name: 'Vivian Robin',
    program: 'PhD. Molecular Biosciences',
    years: 'First!',
    funFact: 'Social network algorithms are commonly used for Big Data science.',
    favPlant: 'Cyclamen',
    favPlantSc: 'Cyclamen persicum f. roseum a',
    favActivity: 'Hiking and playing molkky, ready for a game.',
    image: Images.TeamVivian
  },
  {
    name: 'Éloïse Lagüe',
    program: 'M. Sc. Pharmaceutical Sciences',
    years: 'Second!',
    funFact: 'Black bears are not always black in color',
    favPlant: 'Lowbush Blueberry',
    favPlantSc: 'Vaccinium angustifolium',
    favActivity: 'Camping and getting lost in the forest.',
    image: Images.TeamEloise
  },
  {
    name: 'Florence Côté',
    program: 'B.A. Public Communication',
    years: 'Second!',
    funFact:
      'All of your nerves are actually really long neurons! The longest one we have is the sciatic nerve.',
    favPlant: 'Chives',
    favPlantSc: 'Allium schoenoprasum',
    favActivity: 'Wild mushroom hunting.',
    image: Images.TeamFlorence
  },
  {
    name: 'Élise Thiboutot',
    program: 'B. Sc. Microbiology',
    years: 'First!',
    funFact:
      'There are more different sequences of the HIV-1 genome than the number of protons in the universe.',
    favPlant: 'Basil',
    favPlantSc: 'Ocimum basilicum',
    favActivity: 'Camping, hiking and swimming in lakes.',
    image: Images.TeamElise
  }
]

export default TeamMembers
