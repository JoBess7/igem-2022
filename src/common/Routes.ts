import Attributions from '../pages/attributions'
import Collaborations from '../pages/collaborations'
import Contribution from '../pages/contribution'
import Description from '../pages/description'
import Education from '../pages/education'
import Engineering from '../pages/engineering'
import Entrepreneurship from '../pages/entrepreneurship'
import Experiments from '../pages/experiments'
import Hardware from '../pages/hardware'
import Home from '../pages/home'
import HumanPractices from '../pages/human-practices'
import Implementation from '../pages/implementation'
import Improve from '../pages/improve'
import Inclusivity from '../pages/inclusivity'
import Measurement from '../pages/measurement'
import Model from '../pages/model'
import Notebook from '../pages/notebook'
import PartCollection from '../pages/part-collection'
import Partnership from '../pages/partnership'
import Parts from '../pages/parts'
import Results from '../pages/results'
import Safety from '../pages/safety'
import Software from '../pages/software'
import Sustainable from '../pages/sustainable'
import Team from '../pages/team'

enum Routes {
  Attributions = 'attributions',
  Collaborations = 'collaborations',
  Contribution = 'contribution',
  Description = 'description',
  Education = 'communication',
  Engineering = 'engineering',
  Entrepreneurship = 'entrepreneurship',
  Experiments = 'experiments',
  Hardware = 'hardware',
  Home = '',
  HumanPractices = 'human-practices',
  Implementation = 'implementation',
  Improve = 'improve',
  Inclusivity = 'inclusivity',
  Measurement = 'measurement',
  Model = 'model',
  Notebook = 'notebook',
  PartCollection = 'part-collection',
  Partnership = 'partnership',
  Parts = 'parts',
  Plant = 'plant',
  Results = 'results',
  Safety = 'safety',
  Software = 'software',
  Sustainable = 'sustainable',
  Team = 'team'
}

interface RoutesComponents {
  route: Routes
  component: Function
}

interface TreeNode {
  name: string
  link: Routes
}

interface Tree {
  name: string
  children: TreeNode[]
}

const RoutesComponentsMapper: RoutesComponents[] = [
  {
    route: Routes.Attributions,
    component: Attributions
  },
  {
    route: Routes.Collaborations,
    component: Collaborations
  },
  {
    route: Routes.Contribution,
    component: Contribution
  },
  {
    route: Routes.Description,
    component: Description
  },
  {
    route: Routes.Education,
    component: Education
  },
  {
    route: Routes.Engineering,
    component: Engineering
  },
  {
    route: Routes.Entrepreneurship,
    component: Entrepreneurship
  },
  {
    route: Routes.Experiments,
    component: Experiments
  },
  {
    route: Routes.Hardware,
    component: Hardware
  },
  {
    route: Routes.Home,
    component: Home
  },
  {
    route: Routes.HumanPractices,
    component: HumanPractices
  },
  {
    route: Routes.Implementation,
    component: Implementation
  },
  {
    route: Routes.Improve,
    component: Improve
  },
  {
    route: Routes.Inclusivity,
    component: Inclusivity
  },
  {
    route: Routes.Measurement,
    component: Measurement
  },
  {
    route: Routes.Model,
    component: Model
  },
  {
    route: Routes.Notebook,
    component: Notebook
  },
  {
    route: Routes.PartCollection,
    component: PartCollection
  },
  {
    route: Routes.Partnership,
    component: Partnership
  },
  {
    route: Routes.Parts,
    component: Parts
  },
  {
    route: Routes.Results,
    component: Results
  },
  {
    route: Routes.Safety,
    component: Safety
  },
  {
    route: Routes.Software,
    component: Software
  },
  {
    route: Routes.Sustainable,
    component: Sustainable
  },
  {
    route: Routes.Team,
    component: Team
  }
]

const ProjectTree: Tree = {
  name: 'Project',
  children: [
    {
      name: 'Engineering Success',
      link: Routes.Engineering
    },
    {
      name: 'Project Modelling',
      link: Routes.Model
    },
    {
      name: 'Safety',
      link: Routes.Safety
    },
    {
      name: 'Results',
      link: Routes.Results
    },
    {
      name: 'Parts',
      link: Routes.Parts
    },
    {
      name: 'Experiments',
      link: Routes.Experiments
    },
    {
      name: 'Project Description',
      link: Routes.Description
    }
  ]
}

const HumanPracticesTree: Tree = {
  name: 'Human Practices',
  children: [
    {
      name: 'Implementation',
      link: Routes.Implementation
    },
    {
      name: 'Human Practices',
      link: Routes.HumanPractices
    }
  ]
}

const CommAndCollabsTree: Tree = {
  name: 'Communications & Collaborations',
  children: [
    {
      name: 'Contribution',
      link: Routes.Contribution
    },
    {
      name: 'Collaborations',
      link: Routes.Collaborations
    },
    {
      name: 'Education & Communication',
      link: Routes.Education
    }
  ]
}

const TeamTree: Tree = {
  name: 'Team',
  children: [
    {
      name: 'Notebook',
      link: Routes.Notebook
    },
    {
      name: 'Attributions',
      link: Routes.Attributions
    },
    {
      name: 'Team',
      link: Routes.Team
    }
  ]
}

const Trees: Tree[] = [ProjectTree, HumanPracticesTree, TeamTree, CommAndCollabsTree]

export { Routes, RoutesComponentsMapper, Trees }
