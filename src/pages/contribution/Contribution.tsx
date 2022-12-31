import PageLayout from '../../common/components/PageLayout/PageLayout'
import PageLink from '../../common/components/PageLink/PageLink'
import PineTreeCombo from '../../common/components/PineTreeCombo/PineTreeCombo'
import References from '../../common/components/References/References'
import TextRef from '../../common/components/TextRef/TextRef'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import Title from '../../common/components/Title/Title'
import './Contribution.css'

function Contribution () {
  return (
    <PageLayout title='Contribution'>
      <p>
        For our contribution, we chose to do three things : create four new parts, create our
        workflow for projects in insect pheromone production and implement from a previous project.
      </p>

      <TextSeparator />

      <Title title='New parts' />

      <p>
        For this first contribution, we were able to create four new parts (see our{' '}
        <PageLink src='https://2022.igem.wiki/ulaval/parts'>Parts page</PageLink>). Together, these
        parts are able, in theory, to produce our pheromone of interest: (-)-trans-verbenol.
      </p>

      <p>
        The first one,{' '}
        <PageLink src='http://parts.igem.org/Part:BBa_K4346000'>BBa_K4346000</PageLink>, codes for a
        fusion protein of Geranyl pyrophosphate synthase and pinene synthase (GPPS-PS). This enzyme
        synthesizes (-)-α-pinene from isopentenyl diphosphate, using geranyl diphosphate as an
        intermediate between the two enzymes in the fusion. We confirmed through <i>in silico</i>{' '}
        experiments that our GPPS-PS construction would be able to bind to the endoplasmic reticulum
        membrane to be in vicinity with the other enzymes of the same metabolic pathway. To be able
        to express this part <i>in vivo</i>, we used existing iGEM parts in a new way. Together, the
        GAL1 promoter (<PageLink src='http://parts.igem.org/Part:BBa_J63006'>BBa_J63006</PageLink>)
        and the CYC1 terminator (
        <PageLink src='http://parts.igem.org/Part:BBa_K2407003'>BBa_K2407003</PageLink>) were used
        to be able to express our GPPS-PS construction{' '}
      </p>

      <p>
        The second (<PageLink src='http://parts.igem.org/Part:BBa_K4346001'>BBA_K4346001</PageLink>)
        and the third part (
        <PageLink src='http://parts.igem.org/Part:BBa_K4346002'>BBA_K4346002</PageLink>) are
        variations of the same enzyme, the cytochrome P450 of <i>Dendroctonus ponderosae</i>,
        CYP6DE1. Both parts serve the same purpose, converting intracellular (-)-α-pinene content to
        (-)-trans-verbenol. The only difference is that the transmembrane segment for anchoring both
        enzymes into the endoplasmic reticulum comes comes from different{' '}
        <i>Saccharomyces cerevisiae</i> cytochrome P450.
      </p>

      <p>
        The last part (
        <PageLink src='https://parts.igem.org/Part:BBa_K4346003'>BBA_K4346003</PageLink>) is the
        cognate cytochrome P450 reductase from <i>Dendroctonus ponderosae</i>. This part serves the
        purpose of efficiently reducing the oxidised cytochrome P450 of parts BBA_K4346001 and
        BBA_K4346002 for a better turn over.
      </p>

      <p>
        In order to be able to express each cytochrome P450 variation with its cytochrome P450
        reductase in <i>S. cerevisiae</i>, we needed to add some components in our gene
        construction. First, we wanted to express both of these genes at the same time, using the
        same promoter and terminator. Thus, in our construction, the cytochrome P450 and its
        reductase were separated by a 2A <TextRef sup='1' content='peptide' />. This peptide has a
        self-cleaving activity which allows both proteins to be dissociated during protein
        translation. Moreover, by expressing these parts <i>in vivo</i>, we used two existing iGEM
        parts in a new way. The GAL1 promoter, described above, was also used in this construction.
        The terminator used here was the ADH1 yeast terminator (
        <PageLink src='http://parts.igem.org/Part:BBa_J63002'>BBa_J63002</PageLink>){' '}
      </p>

      <p>
        All the previous parts had their sequences codon optimised for the efficient translation
        into the yeast. Furthermore, we used the GAL1 promoter in all of our construction because of
        the way we wanted to express our proteins. Given that the expression of monoterpenes such as
        α-pinene is toxic to yeast, we wanted to create an inducible expression system. With advice
        from the Landry Lab, we decided to use an estradiol induced transcription regulator called
        <TextRef sup='2' content=' GEM' />. In this system, we can use estradiol to activate the GEM
        system which, in turn, activates the expression of genes containing the GAL1 promoter.{' '}
      </p>

      <p>
        Unfortunately, our work in the lab did not permit us to create a <i>S. cerevisiae</i> strain
        capable of producing (-)-α-pinene or (-)-trans-verbenol. We believe that this is because of
        lack of time in the lab and not because it&apos;s impossible to create a{' '}
        <i>S. cerevisiae</i> strain expressing our molecules of interest. Indeed, one lab was able
        to produce (+)-α-pinene in this yeast (<TextRef sup='3' content='Ignea et al., 2019' />
        ), showing the potential and realism of our project. Note that (+)-α-pinene could not be
        used in our project, as we specifically needed its stereoisomer (-)-α-pinene to produce
        (-)-trans-verbenol in order to have the desired biological activity in the insect.
      </p>

      <PineTreeCombo />

      <Title title='Addition of monoterpene producing parts' />

      <p>
        When reviewing the past iGEM team’s project, we found out that the UBC iGEM team also worked
        on monoterpene production in the baker yeast. Their goal was to produce a variety of
        monoterpenes, like pinene and limonene, in order to affect the viability of the symbiotic
        fungus of the mountain pine beetle. In a different manner, we sought also to produce
        monoterpenes to directly affect the insect. So here, we add our parts used and/or produced
        by UBC iGEM <PageLink src='http://parts.igem.org/Part:BBa_K118025'>BBa_K118025</PageLink>{' '}
        (from Edinburgh team),{' '}
        <PageLink src='http://parts.igem.org/Part:BBa_K517002'>BBa_K517002</PageLink>,{' '}
        <PageLink src='http://parts.igem.org/Part:BBa_K517003'>BBa_K517003</PageLink> and
        <PageLink src='http://parts.igem.org/Part:BBa_K517004'>BBa_K517004</PageLink> to produce
        monoterpenes as a way to control or monitor the mountain beetle.
      </p>

      <TextSeparator />

      <Title title='Insect pheromone production workflow' />

      <p>
        The second contribution our project brings to the next iGEM teams is the design of a
        workflow for other teams that would wish to work on a project that consists in producing
        insect pheromones using synthetic biology. For more information on how to create your own
        project on insect pheromone production using synthetic biology, please refer to our
        <PageLink src='https://2022.igem.wiki/ulaval/implementation'>Implementation page</PageLink>.
      </p>

      <References
        references={[
          'Kim JH, Lee SR, Li LH, Park HJ, Park JH, Lee KY, Kim MK, Shin BA, Choi SY. High cleavage efficiency of a 2A peptide derived from porcine teschovirus-1 in human cell lines, zebrafish and mice. PLoS One. 2011;6(4):e18556. doi: 10.1371/journal.pone.0018556. Epub 2011 Apr 29. PMID: 21602908; PMCID: PMC3084703.',
          'Aranda-Díaz A, Mace K, Zuleta I, Harrigan P, El-Samad H. Robust Synthetic Circuits for Two-Dimensional Control of Gene Expression in Yeast. ACS Synth Biol. 2017 Mar 17;6(3):545-554. doi: 10.1021/acssynbio.6b00251. Epub 2016 Dec 27. PMID: 27930885; PMCID: PMC5507677.',
          'Ignea C, Raadam MH, Motawia MS, Makris AM, Vickers CE, Kampranis SC. Orthogonal monoterpenoid biosynthesis in yeast constructed on an isomeric substrate. Nat Commun. 2019 Aug 23;10(1):3799. doi: 10.1038/s41467-019-11290-x. PMID: 31444322; PMCID: PMC6707142.'
        ]}
      />
    </PageLayout>
  )
}

export default Contribution
