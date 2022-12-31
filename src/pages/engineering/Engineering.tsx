import PageLayout from '../../common/components/PageLayout/PageLayout'
import PageLink from '../../common/components/PageLink/PageLink'
import PineTreeCombo from '../../common/components/PineTreeCombo/PineTreeCombo'
import References from '../../common/components/References/References'
import TextRef from '../../common/components/TextRef/TextRef'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import Title from '../../common/components/Title/Title'
import './Engineering.css'

function Engineering () {
  return (
    <PageLayout title='engineering'>
      <Title title='Design' />
      <p>
        In order to produce the Mountain Pine Beetle (MPB)’s aggregation pheromone,
        (-)-trans-verbenol, in baker yeast, we had to think of the enzymes for both its precursors
        and its synthesis. It is known that (-)-trans-verbenol is effectively converted from
        (-)-a-pinene by the MPB (<TextRef sup='6' content='Chiu et al. 2019' />
        ). On the other hand, (-)-a-pinene is not produced by the MPB itself, but by the tree it
        latches on (
        <TextRef sup='1' content='Clark et al.' />;
        <TextRef
          sup='2'
          content=' Hall
        et al., 2013'
        />
        ;
        <TextRef sup='6' content=' Chiu et al. 2019' />) . That means that to biologically
        synthesize (-)-trans-verbenol, we had to at least insert two genes: one for (-)-a-pinene and
        one for (-)-trans-verbenol. Practically, (-)-a-pinene could be produced from geranyl
        diphosphate in <i>Saccharomyces cerevisiae</i> (
        <TextRef sup='3' content='Ignea et al., 2019' />) similarly to what was done previously in{' '}
        <i>Escherichia coli</i> (
        <TextRef
          sup='4'
          content='Niu
        et al., 2018; Sarria et al. 2014'
        />
        ). Fortunately, the mevalonate pathway that needed to be inserted in <i>E. coli</i> to
        produce geranyl diphosphate is already in <i>S. cerevisiae</i>
        . The baker yeast doesn’t have a specific geranyl diphosphate producing enzyme. Instead, it
        has a bifunctional farnesyl diphosphate and geranyl diphosphate producing enzyme (
        <TextRef
          sup='3'
          content='Ignea et
        al., 2019'
        />
        ). To optimize the yield of (-)-trans-verbenol, it would be relevant to increase the amount
        of intracellular geranyl diphosphate. That brings up an additional enzyme, a geranyl
        diphosphate synthase.{' '}
      </p>

      <Title isSub={true} title='Enzyme selection' />
      <p>
        In response to this issue, we selected a (Geranyl diphosphate synthase - Pinene synthase)
        GPPS-PS fusion from <i>A. grandis</i> designed previously by{' '}
        <TextRef sup='5' content='Sarria et al. 2014' />, as well as the CP450 and CPR from MPB. The
        GPPS-PS fusion was done in the yeast and proved to be efficient for metabolic canalisation
        and synthesis of a-pinene at titers of 16 mg. In order to produce the aggregation pheromone
        of the MPB efficiently, we selected directly the CP450 known to convert (-)-a-pinene to
        (-)-trans-verbenol (GenBank ID: JQ855668) (<TextRef sup='6' content='Chiu et al. 2019' />
        ). Since any CP450 needs a cognate CPR, and that the CPR might not be efficient for the
        reduction of the CP450 for its turnover, we also selected the MPB’s CPR (Genbank ID:
        JQ855639) associated with its respective CP450 (
        <TextRef sup='7' content='Keeling et al., 2013' />
        ).
      </p>

      <Title isSub={true} title='Enzyme Design' />
      <p>
        In order to implement those exogenous enzymes in the baker yeast, we had to make some
        changes for them to be expressed efficiently and to be located appropriately, as detailed in
        <PageLink src='https://2022.igem.wiki/ulaval/model'>Project Modelling</PageLink>.
      </p>
      <p>
        First, we removed the transmembrane N terminal end of the CPR. Usually, CPR are bound to
        membranes, so that they are located near their cognate CP450. However, we have found that
        the reduction activity of the CPR towards CP450 is not significantly different when bound to
        the membrane or free in the cytosol (
        <TextRef sup='8' content='Miyamoto et al., 2015' />;
        <TextRef sup='9' content=' Lamb et al., 2001' />
        ). We decided to have the CPR in a free form to reduce the complexity of the enzyme
        insertions into S. cerevisiae’s genome.
      </p>

      <p>
        Secondly, we swapped the N terminus transmembrane segment of the CP450 for native
        transmembrane segments of a CP450 from the yeast (see also the page{' '}
        <PageLink src='https://2022.igem.wiki/ulaval/model'>Project Modelling</PageLink> for
        details). Briefly, we designed the insect enzyme cytochrome P450 so it locates to the
        endoplasmic reticulum. We produced two versions of that same enzyme with transmembrane
        segments of differing length.
      </p>

      <p>
        Finally, for the design of the fusion GPPS-PS, we reconstructed the fusion made by{' '}
        <TextRef
          sup='5'
          content='Sarria et
        al. 2014'
        />{' '}
        with both the GPPS and PS of <i>A. grandis</i> linked with a GSGGSG sequence
        (GPPS-(GSGGSG)-PS). When looking at the equivalent gene in S. cerevisiae, we found that
        ERG20 doesn’t harbor a transmembrane segment, but rather what seemed like an amphipathic
        a-helix. After verification, we found that the GPPS has a similar amphipathic segment.
        Ultimately, we kept it as such.
      </p>

      <PineTreeCombo />

      <Title title='Build' />
      <p>
        With all these steps completed, we constructed our monoterpene producing strain of{' '}
        <i>S. cerevisiae</i>. We used CRISPR-Cas9 genome editing tools to drive the insertion of our
        different heterologous genes inside <i>S. cerevisiae</i>’s genome. First, we designed the
        cassettes. The first cassette contains the GPPS-(GSGGSG)-PS fusion enzyme flanked with a
        GAL1 promoter inducible with estradiol (
        <TextRef sup='10' content='Aranda-Díaz et al., 2017' />) and CYC1 terminator. We designed
        homology arms of 30-40 bp to favor insertion by recombination into region 2 of the
        chromosome XII (Chr 12: 808 805..809 939), a highly expressive intergenic region (
        <TextRef
          sup='11'
          content='Mikkelsen
        et al., 2012'
        />
        ). That cassette was built on the basis of overlap extension PCR using four fragments: an
        upstream homology arm primer, two gBlocks and a downstream homology arm primer. The second
        cassette contains the cytochrome P450 CYP6DE1 followed by a cleavage peptide 2A and the
        cognate cytochrome P450 reductase. The same GAL1 promoter, a ADH1 terminator and homology
        arms targeting the region 5 on the chromosome XII (Chr 12: 839 226..840 357) decorate the
        genes. Similarly, this chromosomal region is a highly expressive intergenic region (
        <TextRef sup='11' content='Mikkelsen et al., 2012' />
        ). This second cassette was built as stated previously.
      </p>

      <p>
        Secondly, we built the CRISPR plasmids used in combination with their respective cassette
        with a megaprimer cloning protocol to change the specific sgRNA. The sgRNA were designed
        with the web application CHOPCHOP (<TextRef sup='12' content='Labun et al., 2019' />) where
        we conserved the optimal sgRNA located closer to the center of the respective intergenic
        regions. Plasmids were subsequently cloned into <i>Escherichia coli</i> DH5α competent
        cells. <i>S. cerevisiae</i> were then cotransformed with the cognate pCRISPR and cassette
        using a conventional lithium acetate transformation protocol.
      </p>

      <TextSeparator />

      <Title title='Test' />
      <p>Unfortunately, we weren’t able to reach this step, but we had planned experiments.</p>

      <Title isSub={true} title='Monoterpene extraction' />
      <p>
        Once we would have had our monoterpene producing strain, we would have started with the
        extraction (see experiments). Fortunately for us, monoterpene production as limonene and
        a-pinene was done in previous research (<TextRef sup='13' content='Wei et al., 2021' />
        ). We end up with a simple biphasic extraction with the growth medium.
      </p>

      <Title isSub={true} title='GC' />
      <p>
        To analyse the monoterpene content of our extract, especially (-)-a-pinene and
        (-)-trans-verbenol, we planned on using gas chromatography coupled to a mass spectrometer
        (GC-MS). We contacted a specialist in MS analysis at Université Laval, Pierre Audet. Since
        he had already worked on monoterpene samples, including a-pinene, he had a ready-to-go
        protocol for its identification and quantification. We also had on hand the pure standard of
        both (-)-a-pinene and (-)-trans-verbenol to obtain the sensitivity of the equipment towards
        those compounds. Additionally, it would have been used to build the standard curve for
        quantification.
      </p>

      <TextSeparator />

      <Title title='Learn' />
      <p>
        Even though we weren’t able to build the strains and subsequently detect the monoterpenes
        (-)-a-pinene and (-)-trans-verbenol, there could have been a lot to improve. First, we could
        use a host with a better (-)-trans-verbenol yield. For example, the non-conventional
        oleaginous yeast <i>Yarrowia lipolytica</i> has a high flux of acetyl-CoA. This is very
        useful because acetyl-CoA is the entering compound for the subsequent synthesis of geranyl
        diphosphate. It is noteworthy that a-pinene was produced at the highest titers measured in{' '}
        <i>Y. lipolytica</i> (<TextRef sup='13' content='Wei et al., 2021' />
        ).
      </p>

      <p>
        Furthermore, we could improve the flux of (-)-trans-verbenol synthesis with competitive
        pathway gene knock-out, overexpression of genes, induction optimisation or selection of
        better expressed and more stable loci.{' '}
      </p>

      <References
        references={[
          'Clark, E. L., Carroll, A. L., & Huber, D. P. W. Differences in the constitutive terpene profile of lodgepole pine across a geographical range in British Columbia, and correlation with historical attack by mountain pine beetle. The Canadian Entomologist, 2010 Dec 142(6), 557‑573.',
          'Hall DE, Yuen MM, Jancsik S, Quesada AL, Dullat HK, Li M, Henderson H, Arango-Velez A, Liao NY, Docking RT, Chan SK, Cooke JE, Breuil C, Jones SJ, Keeling CI, Bohlmann J. Transcriptome resources and functional characterization of monoterpene synthases for two host species of the mountain pine beetle, lodgepole pine (Pinus contorta) and jack pine (Pinus banksiana). BMC Plant Biol. 2013 May 16;13:80. doi: 10.1186/1471-2229-13-80. PMID: 23679205; PMCID: PMC3668260.',
          'Ignea C, Raadam MH, Motawia MS, Makris AM, Vickers CE, Kampranis SC. Orthogonal monoterpenoid biosynthesis in yeast constructed on an isomeric substrate. Nat Commun. 2019 Aug 23;10(1):3799. doi: 10.1038/s41467-019-11290-x. PMID: 31444322; PMCID: PMC6707142.',
          'Niu FX, He X, Wu YQ, Liu JZ. Enhancing Production of Pinene in Escherichia coli by Using a Combination of Tolerance, Evolution, and Modular Co-culture Engineering. Front Microbiol. 2018 Jul 31;9:1623. doi: 10.3389/fmicb.2018.01623. PMID: 30108554; PMCID: PMC6079208.',
          'Sarria S, Wong B, García Martín H, Keasling JD, Peralta-Yahya P. Microbial synthesis of pinene. ACS Synth Biol. 2014 Jul 18;3(7):466-75. doi: 10.1021/sb4001382. Epub 2014 Feb 27. PMID: 24679043.',
          'Chiu CC, Keeling CI, Bohlmann J. The cytochrome P450 CYP6DE1 catalyzes the conversion of α-pinene into the mountain pine beetle aggregation pheromone trans-verbenol. Sci Rep. 2019 Feb 6;9(1):1477. doi: 10.1038/s41598-018-38047-8. PMID: 30728428; PMCID: PMC6365528.',
          'Keeling CI, Henderson H, Li M, Dullat HK, Ohnishi T, Bohlmann J. CYP345E2, an antenna-specific cytochrome P450 from the mountain pine beetle, Dendroctonus ponderosae Hopkins, catalyses the oxidation of pine host monoterpene volatiles. Insect Biochem Mol Biol. 2013 Dec;43(12):1142-51. doi: 10.1016/j.ibmb.2013.10.001. Epub 2013 Oct 16. PMID: 24139909.',
          'Miyamoto M, Yamashita T, Yasuhara Y, Hayasaki A, Hosokawa Y, Tsujino H, Uno T. Membrane anchor of cytochrome P450 reductase suppresses the uncoupling of cytochrome P450. Chem Pharm Bull (Tokyo). 2015;63(4):286-94. doi: 10.1248/cpb.c15-00034. PMID: 25832023.',
          'Lamb DC, Warrilow AG, Venkateswarlu K, Kelly DE, Kelly SL. Activities and kinetic mechanisms of native and soluble NADPH-cytochrome P450 reductase. Biochem Biophys Res Commun. 2001 Aug 10;286(1):48-54. doi: 10.1006/bbrc.2001.5338. PMID: 11485306.',
          'Aranda-Díaz A, Mace K, Zuleta I, Harrigan P, El-Samad H. Robust Synthetic Circuits for Two-Dimensional Control of Gene Expression in Yeast. ACS Synth Biol. 2017 Mar 17;6(3):545-554. doi: 10.1021/acssynbio.6b00251. Epub 2016 Dec 27. PMID: 27930885; PMCID: PMC5507677.',
          'Mikkelsen MD, Buron LD, Salomonsen B, Olsen CE, Hansen BG, Mortensen UH, Halkier BA. Microbial production of indolylglucosinolate through engineering of a multi-gene pathway in a versatile yeast expression platform. Metab Eng. 2012 Mar;14(2):104-11. doi: 10.1016/j.ymben.2012.01.006. Epub 2012 Feb 4. PMID: 22326477.',
          'Labun K, Montague TG, Krause M, Torres Cleuren YN, Tjeldnes H, Valen E. CHOPCHOP v3: expanding the CRISPR web toolbox beyond genome editing. Nucleic Acids Res. 2019 Jul 2;47(W1):W171-W174. doi: 10.1093/nar/gkz365. PMID: 31106371; PMCID: PMC6602426.',
          'Wei LJ, Zhong YT, Nie MY, Liu SC, Hua Q. Biosynthesis of α-Pinene by Genetically Engineered Yarrowia lipolytica from Low-Cost Renewable Feedstocks. J Agric Food Chem. 2021 Jan 13;69(1):275-285. doi: 10.1021/acs.jafc.0c06504. Epub 2020 Dec 24. PMID: 33356235.'
        ]}
      />
    </PageLayout>
  )
}

export default Engineering
