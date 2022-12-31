interface Experiment {
  title: string
  link: string
}

export interface ExperimentSection {
  title: string
  experiments: Experiment[]
}

const AllExperiments: ExperimentSection[] = [
  {
    title: 'Medium and reagents',
    experiments: [
      {
        title: '2YT + glucose',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/2yt-glucose.pdf'
      },
      {
        title: 'Solutions for agarose gels',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/solution-for-agarose-gel.pdf'
      },
      {
        title: 'YPD',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/ypd.pdf'
      }
    ]
  },
  {
    title: 'Antibiotics',
    experiments: []
  },
  {
    title: 'Gene and plasmid construction and verification',
    experiments: [
      {
        title: 'Directed mutagenesis PCR',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/directed-mutagenesis-pcr.pdf'
      },
      {
        title: 'Colony PCR (for bacteria)',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/colony-pcr-for-bacteria.pdf'
      },
      {
        title: 'Quick DNA extraction (yeast)',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/quick-dna-extraction-yeast.pdf'
      },
      {
        title: 'Colony PCR (yeast)',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/colony-pcr-for-yeast-1.pdf'
      }
    ]
  },
  {
    title: 'Cloning in E. coli',
    experiments: [
      {
        title: 'Competent bacteria cells preparation',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/competent-bacteria-cells-preparation.pdf'
      },
      {
        title: 'Competent bacteria cells transformation',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/transformation-of-bacteria-by-heat-shock-method.pdf'
      },
      {
        title: 'Bioshop TAQ PCR',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/bioshop-taq-pcr.pdf'
      },
      {
        title: 'Competent yeast cells preparation',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/competent-yeast-cells-preparation-for-crispr.pdf'
      },
      {
        title: 'Competent yeast cells CRISPR-Cas9 transformation',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/competent-yeast-cells-transformation-for-crispr.pdf'
      }
    ]
  },
  {
    title: 'Monoterpene extraction',
    experiments: [
      {
        title: 'Culturing and extraction',
        link: 'https://static.igem.wiki/teams/4346/wiki/experiments/monoterpenes-extraction.pdf'
      }
    ]
  }
]

export default AllExperiments
