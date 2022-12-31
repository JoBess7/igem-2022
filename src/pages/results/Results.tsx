import ImageWithCaption from '../../common/components/ImageWithCaption/ImageWithCaption'
import PageLayout from '../../common/components/PageLayout/PageLayout'
import PageLink from '../../common/components/PageLink/PageLink'
import References from '../../common/components/References/References'
import TextRef from '../../common/components/TextRef/TextRef'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import Title from '../../common/components/Title/Title'
import Images from '../../common/Images'
import './Results.css'

function Results () {
  return (
    <PageLayout title='Results'>
      <Title title='Overview' />
      <p>
        The main objective of our wet lab work was to use CRISPR-Cas9 in order to insert the Geranyl
        DIphosphate synthase - pinene synthase construction (GPPS-PS) and the Cytochrome P450 with
        its reductase directly in <i>Saccharomyces cerevisiae’s</i> genome. Note that for this last
        construction, two versions were tested, they both contained different transmembrane
        segments. To attain our goal, we first needed to construct our plasmids expressing Cas9 and
        the guide RNAs (gRNA) we needed to insert our genes into <i>S. cerevisiae</i>’s genome.
        Next, we needed to construct our cassettes: segments of DNA containing either gene with
        their promoter and terminator plus the homologous segments in 5’ and 3’ of the DNA for it to
        be inserted in the correct area of the genome. Once we have all of our constructions, we
        could transform <i>S. cerevisiae</i> with the GPPS-PS pCas plasmid with the GPPS-PS
        cassette. After confirming the integration of GPPS-PS in the correct region, we could repeat
        the transformation step for the Cytochrome P450 - reductase cassette with its pCas plasmid.
        Once we have confirmed the integration of all the required plasmids in <i>S. cerevisiae</i>,
        we could proceed to the next step. This step consists of detecting the presence of either
        (-)-α-pinene or (-)-trans-verbenol with GC-MS (Gas Chromatography- Mass Spectometry).
        Briefly, the monoterpene content would have been extracted from the growth medium with
        dodecane added to the medium after induction. The organic phase would have been analysed in
        collaboration with a professional in chromatography at Laval University, who had a
        ready-to-go protocol especially for (-)-α-pinene detection and quantification. Given that
        both of our genes are inducible (see our{' '}
        <PageLink src='https://2022.igem.wiki/ulaval/contribution'>Contribution page</PageLink> for
        more information), we would test the quantity of (-)-α-pinene or (-)-trans-verbenol secreted
        at different concentrations of the inducer.
      </p>

      <TextSeparator />

      <Title title="What we've accomplished" />
      <p>
        We ordered oligonucleotides from IDT that allowed us to perform a directed mutagenesis PCR
        on pCas plasmids (plasmids that are used for CRISPR-Cas9 genetic modification) from the
        <PageLink src='https://landrylab.ibis.ulaval.ca/'>Landry Lab</PageLink> in order to insert
        the guide RNAs (gRNA) we needed. These gRNAs targeted regions in the 12th chromosome of{' '}
        <i>S. cerevisiae</i>, where we would insert the sequences for the enzymes we wanted to
        express. The plasmids were then transformed in <i>E. coli</i> DH5ɑ competent cells. Clones
        were used to start cultures for plasmid purification and a confirmation PCR. One of each
        purified plasmid was sent to sequencing to confirm that the sequence on the plasmid was the
        exact sequence we ordered from IDT.
      </p>
      <p>
        Overall, we were able to create the pCas plasmid needed to insert the GPPS-PS gene in{' '}
        <i>S. cerevisiae</i> (Figure 1), so we decided to focus our efforts on this part of our
        project. Note that we can’t share the plasmid sequence as it is a custom plasmid made in the
        Landry Lab where we worked. The plasmid contains the gRNA sequence and the CRISPR-Cas9
        expression system.
      </p>

      <div className='results-img-1'>
        <ImageWithCaption
          captionPadding={12}
          imagePadding={5}
          hasBackground
          src={Images.Results_1}
          figure={1}
          caption='Agarose gel showing the pCas constructions with our desired gRNAs, the plasmids shown in lane 2-4 were sent to sequencing as the PCR product is of the desired size. The PCR products in lane 5-9 contained the PCR product to confirm the gRNA for the Cytochrome P450 and its reductase but we were unable to confirm that the plasmids indeed contained the desired gRNA.'
        />
      </div>

      <p>
        We then did fusion PCRs to construct the cassette that contained GPPS-PS, and their
        promoter/terminator combined with the homology regions that would allow homologous
        recombination in the 12th chromosome of <i>S. cerevisiae</i>. We were able to create our
        GPPS-PS constructions but unable to create the constructions for the Cytochrome P450 and its
        reductase (Figure 2).
      </p>

      <div className='results-img-1'>
        <ImageWithCaption
          captionPadding={12}
          imagePadding={5}
          hasBackground
          src={Images.Results_2}
          figure={2}
          caption='Agarose gel showing the fusion PCR products of the GPPS-PS and both Cytochrome P450-reductase constructions. Note that only the GPPS-PS construction worked.'
        />
      </div>

      <p>
        Because GPPS-PS is the first step in the metabolic pathway to produce (-)-trans-verbenol, we
        decided to focus our efforts on constructing the <i>S. cerevisiae</i> strain that would
        express GPPS-PS. To do so, we attempted to transform <i>S. cerevisiae</i> with the cassette
        and the pCas plasmid. Unfortunately, after many attempts and changes to our protocol, we
        were unable to complete this step of our project. Given that we were already approaching
        fall at this point, we decided to finish our wet lab here and focus on the other iGEM
        deliverables.
      </p>

      <TextSeparator />

      <Title title='What we would change' />

      <p>
        We have two hypotheses regarding why our <i>S. cerevisiae</i> transformation didn’t work.
        First, we think that there could have been problems regarding the cassette construction.
        Indeed, since the GPPS-PS gene is over 4’000 bp long, we needed to order it in two separate
        segments from IDT. During the fusion PCR, we attempted to fuse both segments of the GPPS-PS
        and the oligonucleotides containing the homology with <i>S. cerevisiae</i>’s 12th
        chromosome. This might have been an error because it is possible that the PCR appeared to
        have worked in Figure 2, without the homology regions being added. The difference between a
        PCR product with or without the homology regions is in the order of less than 80 bp so this
        difference would be difficult to notice on gel.
      </p>
      <p>
        Another factor that would have made the <i>S. cerevisiae</i> transformation fail would be
        the area we selected to integrate our genes of interest in. Indeed, we planned on inserting
        our genes in regions of the 12th chromosome, as described by{' '}
        <TextRef sup='1' content='Mikkelsen et al.' />. These regions were between essential genes
        and the authors hypothesised that this would increase the chances of there being sufficient
        expression of the inserted genes. This is because highly expressed regions would be more
        accessible to the machinery required to transcribe the genes of interest.
      </p>
      <p>
        Given that monoterpenes such as (-)-α-pinene can be toxic for the cell, it is possible that
        these highly expressed regions created a leakage for our GPPS-PS construction. This means
        that even if we used an inducible gene the leakage could result in some expression of
        GPPS-PS and eventually kill the cell through the toxicity of (-)-α-pinene. We also believe
        that the region where we inserted the GPPS-PS might not have been optimal for gene insertion
        because there could be a certain amount of perturbation to the cell in inserting DNA in a
        highly expressed region.
      </p>

      <TextSeparator />

      <Title title='Conclusion' />

      <p>
        If we were to restart the planification of the wet lab, we would have rethought our fusion
        PCR approach and constructed our cassettes in two steps. Next, we would have thought of
        different areas to insert our genes of interest. We would recommend teams looking for
        regions to insert genes as a part of a metabolic pathway to contact professors or experts
        that have done such things already.{' '}
      </p>
      <p>
        Although we were not able to express our genes of interest in <i>S. cerevisiae</i>, we do
        still believe it is possible to reach our goal. As mentionned in other wiki pages,{' '}
        <TextRef sup='2' content='Ignea et al' />, have shown that it is possible to express
        (+)-α-pinene in yeast. This study, with other studies expressing insect pheromones in{' '}
        <TextRef sup='3' content='yeast' />, are promissing to demonstrate that our project is
        realistic.
      </p>

      <References
        references={[
          'Mikkelsen MD, Buron LD, Salomonsen B, Olsen CE, Hansen BG, Mortensen UH, Halkier BA. Microbial production of indolylglucosinolate through engineering of a multi-gene pathway in a versatile yeast expression platform. Metab Eng. 2012 Mar;14(2):104-11. doi: 10.1016/j.ymben.2012.01.006. Epub 2012 Feb 4. PMID: 22326477.',
          'Ignea C, Raadam MH, Motawia MS, Makris AM, Vickers CE, Kampranis SC. Orthogonal monoterpenoid biosynthesis in yeast constructed on an isomeric substrate. Nat Commun. 2019 Aug 23;10(1):3799. doi: 10.1038/s41467-019-11290-x. PMID: 31444322; PMCID: PMC6707142.',
          'Petkevicius K, Löfstedt C, Borodina I. Insect sex pheromone production in yeasts and plants. Curr Opin Biotechnol. 2020 Oct;65:259-267. doi: 10.1016/j.copbio.2020.07.011. Epub 2020 Aug 28. PMID: 32866709.'
        ]}
      />
    </PageLayout>
  )
}

export default Results
