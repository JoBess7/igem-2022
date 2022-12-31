import ImageWithCaption from '../../common/components/ImageWithCaption/ImageWithCaption'
import PageLayout from '../../common/components/PageLayout/PageLayout'
import PageLink from '../../common/components/PageLink/PageLink'
import References from '../../common/components/References/References'
import TableOfContent, { Parent } from '../../common/components/TableOfContents/TableOfContent'
import TextRef from '../../common/components/TextRef/TextRef'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import Title from '../../common/components/Title/Title'
import Images from '../../common/Images'
import './Model.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import { useState } from 'react'

function Model () {
  const [isFigure5Zoomed, setIsFigure5Zoomed] = useState(false)

  const TocContent: Parent[] = [
    {
      displayName: 'Our Goals for Modelling',
      id: 'our-goals',
      children: []
    },
    {
      displayName: 'Researching Enzymes',
      id: 'enzymes-research',
      children: []
    },
    {
      displayName: 'Adapting Enzymes',
      id: 'enzymes-adaptation',
      children: [
        {
          displayName: 'Mountain Pine Beetle Cytochrome P450',
          id: 'mountain-pine-1'
        },
        {
          displayName: 'Mountain Pine Beetle Cytochrome P450 Reductase',
          id: 'mountain-pine-2'
        },
        {
          displayName: 'GPPS-PS',
          id: 'gpps'
        }
      ]
    },
    {
      displayName: 'Molecular Dynamics',
      id: 'molecular-dynamics',
      children: [
        {
          displayName: 'Protein-membrane Interaction',
          id: 'protein-membrane'
        }
      ]
    },
    {
      displayName: 'Metabolic Network Modelling',
      id: 'metabolic-network',
      children: []
    }
  ]

  return (
    <PageLayout title='Project Modelling'>
      <div className='modelling-toc-container'>
        <div className='modelling-toc-flex'>
          <p>
            For PheroSynth, we wanted the dry-lab to help and prepare the wet-lab. The best way to
            achieve this was to combine multiple modelling methods to answer different questions.
            Furthermore, all the methods we present on this page are connected, as one method leads
            to another. We will guide you through the process.
          </p>
          <div className='modelling-arrow'>
            <img srcSet={Images.BlueArrowUp} alt='' />
          </div>
        </div>
        <div className='modelling-toc'>
          <TableOfContent content={TocContent} />
        </div>
      </div>
      <TextSeparator />
      <span className='one-line'>
        <Title id='our-goals' title='Our Goals for Modelling' />
      </span>
      <p>
        To help the wet-lab, our main goal was to ensure that some critical parts of the mountain
        pine beetle (MPB) pheromone production were actually feasible in an experimental setting
        with our design. The first step was to identify the enzymes needed to be produced and
        adapted to <i>Saccharomyces cerevisiae</i>. Then, we wanted to ensure that one of the
        critical enzymes we identified would work properly in its new biological environment with
        the help of molecular dynamics simulations. Finally, we used metabolic network modelling to
        study the interactions between (-)-trans-verbenol synthesis and medium composition.
      </p>
      <TextSeparator />
      <Title id='enzymes-research' title='Researching Enzymes' />
      <p>
        As described in{' '}
        <PageLink src='https://2022.igem.wiki/ulaval/engineering'>Engineering Success</PageLink>, we
        identified three enzymes needed for the production of the (-)-trans-verbenol pheromone in{' '}
        <i>S. cerevisiae</i>: GPPS-PS (geranyl diphosphate synthase - pinene synthase) fusion, CP450
        (cytochrome P450) and CPR (cytochrome P450 reductase). We found these enzymes through the
        literature and with the help of NCBI BLAST. <i>S. cerevisiae</i> natively expresses the CPR
        but <TextRef content='Chiu et al., 2019' sup='1' />, described a higher efficiency in using
        a CP450 and CPR pair originating from the same species, in this case the MPB.
      </p>
      <TextSeparator />
      <Title id='enzymes-adaptation' title='Adapting Enzymes' />
      <p>
        Out of the three enzymes identified, we modified the MPB native CP450 (UniProt CYP6DE1) and
        its CPR (GenBank: JQ855639.1). We used the GPPS-PS as reported by{' '}
        <TextRef content='Sarria et al., 2014' sup='2' /> without modifications.
      </p>
      <Title id='mountain-pine-1' isSub title='Mountain Pine Beetle Cytochrome P450' />
      <p>
        We needed the MPB CP450 (CP450<sub>MPB</sub>) to be located on the outer membrane of the
        endoplasmic reticulum (ER) of <i>S. cerevisiae</i> to ensure it would efficiently work. This
        is where the CP450 is natively located in <i>S. cerevisiae</i> (CP450<sub>S.cer</sub>) (
        <TextRef content='Bar-Nun et al., 1980' sup='3' />;{' '}
        <TextRef content='Sakaguchi et al., 1984' sup='4' />
        ). Like CP450<sub>S.cer</sub>, the CP450
        <sub>MPB</sub> has an anchor attached to the ER. However, we thought it best to increase our
        chances of proper localization by replacing the CP450<sub>MPB</sub> anchor with a CP450
        <sub>S.cer</sub> anchor.
      </p>
      <ul className='modelling-ul'>
        <li>
          We determined candidate anchors by searching through literature and by doing BLAST
          searches of known CP450<sub>S.cer</sub>. We selected three candidate CP450<sub>S.cer</sub>
          : Uniprot P10614, P21595 and GenBank AGZ83172.
        </li>
        <li>
          We used AlphaFold2 (<TextRef content='Mirdita et al., 2022' sup='5' />;{' '}
          <TextRef content='Jumper et al., 2021' sup='6' />) to predict the candidate CP450
          <sub>S.cer</sub> 3D structures, since they were not reported on the Protein Data Bank
          (PDB).
        </li>
        <li>
          We then predicted the insertion of the candidates in the ER outer membrane of{' '}
          <i>S. cerevisiae</i> with the OPM PPM3 server (
          <TextRef content='Lomize et al., 2022' sup='7' />) to verify the validity of the
          AlphaFold2 predictions.
        </li>
        <li>
          From the three CP450<sub>S.cer</sub> candidates, two anchor models stood out (
          <b>Figure 1</b>). The first anchor type was composed of one transmembrane segment and one
          inner membrane hook present in Uniprot P21595 prediction. The second anchor type was a
          simple transmembrane segment present in Uniprot P10614 and GenBank AGZ83172 predictions.
        </li>
        <div className='modelling-figure'>
          <ImageWithCaption
            figure={1}
            hasBackground
            captionPadding={10}
            imagePadding={10}
            src={Images.Modelling1}
          >
            Two <i>S. cerevisiae</i> native CP450 anchor models (shown in red) composed of <b>A.</b>{' '}
            a transmembrane segment combined with an inner membrane hook (Uniprot P21595) and{' '}
            <b>B.</b> a long transmembrane segment (Uniprot P10614). The 3D structures were obtained
            from AlphaFold2 prediction. The red and blue dots represent the outer and inner{' '}
            <i>S. cerevisiae</i> ER membrane leaflets predicted from the OPM PPM3 server,
            respectively.
          </ImageWithCaption>
        </div>
        <li>
          To test both CP450<sub>S.cer</sub> anchor types, we continued modeling steps with GenBank
          AGZ83172 and Uniprot P21595. We determined the two CP450<sub>S.cer</sub> anchor models’
          amino acid sequence by viewing them with PyMOL (
          <TextRef content='Schrödinger, 2015' sup='8' />
          ). We then replaced the CP450<sub>MPB</sub> anchor sequence (also acquired from PyMOL
          visualization) with each of the two CP450<sub>S.cer</sub> candidates’ anchors.
        </li>
        <li>
          We ran new AlphaFold2 and OPM PPM3 server predictions on the two hybrids to ensure the
          combinations of the CP450<sub>MPB</sub> body sequence and the CP450<sub>S.cer</sub>{' '}
          anchors sequence were not forming any undesired artifact interfering with the enzyme’s
          function. <b>Figure 2</b> shows the resulting CP450 hybrids of CP450<sub>S.cer</sub> (the
          anchor) and CP450<sub>MPB</sub> (body of the protein). After AlphaFold2 prediction, the
          longer anchor hybrid (<b>Figure 2A</b>) lost its hook conformation to make one long
          segment combining both segments found in the initial model (<b>Figure 1A</b>). The two
          hybrids will be referred to as “long anchor hybrid” (<b>Figure 2A</b>) and “short anchor
          hybrid” (<b>Figure 2B</b>) to differentiate them.
        </li>
        <div className='modelling-figure'>
          <ImageWithCaption
            figure={2}
            hasBackground
            captionPadding={10}
            imagePadding={10}
            src={Images.Modelling2}
          >
            CP450<sub>MPB</sub> body (CYP6DE1) with <b>A.</b> CP450<sub>S.cer</sub> GenBank AGZ83172
            anchor and <b>B.</b> CP450<sub>S.cer</sub> Uniprot P21595 anchor. The red and blue dots
            represent the outer and inner <i>S. cerevisiae</i> ER membrane leaflets predicted from
            the OPM PPM3 server, respectively.
          </ImageWithCaption>
        </div>
        <li>
          The modified amino acid sequences of both hybrids were then used to construct parts
          detailed in <PageLink src='https://2022.igem.wiki/ulaval/parts'>Parts</PageLink>. The
          CP450 hybrids were also further studied with molecular dynamics described below.
        </li>
      </ul>
      <br /> <br />
      <Title id='mountain-pine-2' title='Mountain Pine Beetle cytochrome P450 reductase' isSub />
      <p>
        The CPR is natively anchored to the ER outer membrane of <i>S. cerevisiae</i>, in order to
        be closely located to its partner enzyme CP450. However, previous studies demonstrated that
        the CPR could keep its efficiency without being anchored to the ER membrane (
        <TextRef content='Lamb et al., 2001' sup='9' />;{' '}
        <TextRef content='Miyamoto et al., 2015' sup='10' />
        ). For that similar efficiency and the simpler integration in <i>S. cerevisiae</i>, we
        decided to remove the MPB cytochrome reductase (CPR<sub>MPB</sub>) anchor. The resulting
        modified CPR<sub>MPB</sub> would be solubilized in <i>S. cerevisiae</i> cytosol.
      </p>
      <ul className='modelling-ul'>
        <li>
          Similarly to the CP450, we predicted the 3D structure of the CPR<sub>MPB</sub> with
          AlphaFold2. The resulting structure insertion into the membrane was then predicted with
          the OPM PPM3 server.
        </li>
        <li>
          We removed the amino acid sequence of the membrane anchor of the predicted CPR
          <sub>MPB</sub> by visualization in PyMOL as shown in <b>Figure 3</b>.
        </li>
        <div className='modelling-figure modelling-figure-small'>
          <ImageWithCaption
            figure={3}
            hasBackground
            captionPadding={10}
            imagePadding={10}
            src={Images.Modelling3}
          >
            CPR<sub>MPB</sub> anchor (red) and body (green). For its solubilization in{' '}
            <i>S. cerevisiae</i> cytosol, we simply removed the amino acids related to the anchor
            segment
          </ImageWithCaption>
        </div>
        <li>
          The modified amino acid sequence was then used to construct parts detailed in{' '}
          <PageLink src='https://2022.igem.wiki/ulaval/parts'>Parts</PageLink>.
        </li>
      </ul>
      <br /> <br />
      <Title id='gpps' isSub title='GPPS-PS' />
      <p>
        Finally, for the design of the fusion GPPS-PS, we reconstructed the fusion made by{' '}
        <TextRef content='Sarria et al. 2014' sup='2' /> with both the GPPS and PS of{' '}
        <i>Abies grandis</i> linked with a GSGGSG sequence. When looking at the equivalent gene in{' '}
        <i>S. cerevisiae</i>, we found that ERG20 doesn’t harbor a transmembrane segment but what
        was probably an amphipathic a-helix.
      </p>
      <ul className='modelling-ul'>
        <li>We modelled the 3D structure of the GPPS as previously.</li>
        <li>Indeed, we found that the GPPS has a similar amphipathic segment.</li>
      </ul>
      <p>
        Therefore, we didn’t need to make any new modifications to the GPPS-PS we needed to express
        in <i>S. cerevisiae</i>.
      </p>
      <TextSeparator />
      <Title id='molecular-dynamics' title='Molecular Dynamics' />
      <p>
        A bilayer membrane and protein system for each CP450 hybrid described in{' '}
        <b>Adapting Enzymes: Mountain Pine Beetle Cytochrome P450</b> was constructed with
        Charmm-Gui (<TextRef content='Jo et al., 2008' sup='11' />
        ). Using the NAMD molecular dynamics program (
        <TextRef
          content='Phillips et al.,
        2020'
          sup='12'
        />
        ), we ran molecular dynamics simulations of 100 ns for both CP450 hybrid systems. System
        parameters were:
      </p>
      <ul className='modelling-ul style-circle'>
        <li>
          100 lipids for each of the inner and outer membrane leaflets. The ER outer membrane lipid
          composition of <i>S. cerevisiae</i> was previously reported in Table S5 of{' '}
          <TextRef content='Pogozheva et al., 2022' sup='13' />.
        </li>
        <li>A water layer of 30 Å on top and bottom of the membrane and CP450 system.</li>
        <li>A simulation temperature of 303.15 K.</li>
        <li>Concentration of 0.15 M of NaCL ions.</li>
        <li>
          The final equilibration stage and the production timestep were set to 4 fs/step, Langevin
          piston period to 300.0 fs and Langevin piston decay to 150.0 fs according to the Hydrogen
          Mass Repartitioning method as reported by <TextRef content='Gao et al., 2021' sup='14' />{' '}
          adapted to NAMD.
        </li>
        <li>The other default parameters were used.</li>
      </ul>{' '}
      <br />
      <Title id='protein-membrane' isSub title='Protein-membrane Interaction' />
      <p>
        The main purpose of the molecular dynamics simulations were to study the interaction between
        the hybrid CP450s and the <i>S. cerevisiae</i> ER membrane. As shown in <b>figure 4</b>, the
        average distance between the centers of mass of the protein and the membrane were 39.6 ± 0.9
        angstrom (Å) and 39.3 ± 1.2 Å for the long anchor hybrid and the short anchor hybrid,
        respectively.
      </p>
      <p>
        <b>Figure 5</b> shows the relative time of contact between the CP450 hybrids and the
        membrane. The CYP450 hybrids’ residues identified with high relative time of contact with
        the membrane match with the observation of the two hybrids’ residues in PyMOL.{' '}
      </p>
      <p>
        These results show a stable interaction with the membrane for both long and short anchor
        hybrids throughout the 100 ns simulations.{' '}
        <b>
          This suggests that the CP450 hybrids would be stable and efficiently work in a{' '}
          <i>S. cerevisiae</i> environment.
        </b>
      </p>
      <div className='modelling-figure'>
        <ImageWithCaption
          figure={4}
          hasBackground
          captionPadding={10}
          imagePadding={10}
          src={Images.Modelling4}
        >
          Distance between the centers of mass of the CP450 and the <i>S. cerevisiae</i> ER membrane
          for <b>A.</b> the long anchor hybrid and <b>B.</b> the short anchor hybrid. Equilibration
          and production simulation steps are shown, but only the production (starting at 20 ns for
          both simulations) is considered for the mean distance.
        </ImageWithCaption>
      </div>
      <div className='zoomable-figure'>
        {!isFigure5Zoomed && <span>Click figure to zoom</span>}
        <InnerImageZoom
          afterZoomIn={() => setIsFigure5Zoomed(true)}
          afterZoomOut={() => setIsFigure5Zoomed(false)}
          hasSpacer
          zoomScale={0.3}
          fadeDuration={0}
          fullscreenOnMobile
          zoomType='click'
          src={Images.Modelling5}
        />
        <div className='zoomable-figure-caption'>
          <b>Figure 5.</b> Relative time of contact between the <i>S. cerevisiae</i> ER membrane and{' '}
          <b>A.</b> the long anchor CYP450 hybrid residues or <b>B.</b> the short anchor CYP450
          hybrid residues. Bars on the upper sections represent contact with the membrane polar
          heads and bars on the lower sections represent contact with the membrane acyl chains. A
          time score of 1 indicates continuous contact while a time score of 0 indicates no contact.
          The contact cutoff between the residues and the membrane polar heads or acyl chains is set
          at 6 Å.
        </div>
      </div>
      <p>
        Finally, we can see the two CP450 hybrids having a stable interaction with their membrane in
        the simulation visualization shown in <b>Figure 6</b>.
      </p>
      <div className='modelling-vids'>
        <div className='vids'>
          <iframe
            title='ULaval: 100 ns MD simulation of the first CP450 hybrid (2022) [English]'
            width='560'
            height='315'
            src='https://video.igem.org/videos/embed/afeb3f5e-3672-4f7e-b62e-de209d2fb187'
            frameBorder={0}
            allowFullScreen
            sandbox='allow-same-origin allow-scripts allow-popups'
          ></iframe>
          <iframe
            title='ULaval: 100 ns MD simulation of the second CP450 hybrid (2022) [English]'
            width='560'
            height='315'
            src='https://video.igem.org/videos/embed/1e0fd713-c26d-40f4-8f9d-e80cdd5bbecc'
            frameBorder={0}
            allowFullScreen
            sandbox='allow-same-origin allow-scripts allow-popups'
          ></iframe>
        </div>
        <div className='vids-caption'>
          <b>Figure 6.</b> 100 ns simulations of long (orange) and short (green) anchor CP450
          hybrids. The <i>S. cerevisiae</i> ER membrane is shown in gray.
        </div>
      </div>
      <TextSeparator />
      <Title id='metabolic-network' title='Metabolic Network Modelling' />
      <p>
        As to predict optimal growth conditions favoring fluxes towards geranyl pyrophosphate
        synthesis and thus (-)-trans-verbenol, we performed some metabolic network modelling
        simulation. To do so, we integrated in the online interface KBase (
        <TextRef content='Arkin et al., 2018' sup='15' />) the already reconstructed and available
        genome-scale metabolic model (GEM) iMM904 (<TextRef content='Mo et al., 2009' sup='16' />)
        with the annotated sequenced genome.
      </p>
      <p>Sequentially, we:</p>
      <ul className='modelling-ul style-circle-full'>
        <li>
          Imported the model iMM904 with the app Import model SBML from web with the following
          input:
          <ul className='style-circle'>
            <li>
              SBML{' '}
              <PageLink src='https://raw.githubusercontent.com/opencobra/m_model_collection/master/sbml3/iMM904.xml'>
                URL
              </PageLink>
            </li>
            <li>Biomass: R_biomass_SC5_notrace</li>
            <li>Automatically integrate: yes</li>
            <li>Removes Boundary Metabolites: yes</li>
          </ul>
        </li>
        <li>
          Integrated the genome annotation into the GEM with the app I
          <i>Integrate Imported Model into KBase Namespace</i> with the following input:
          <ul className='style-circle'>
            <li>Input genome: GCF_000146045.2</li>
            <li>Translate Metabolite and Reaction identifiers: ModelSeed</li>
            <li>Removes Boundary Metabolites: yes</li>
            <li>Rewrite Metabolite Metadata: yes</li>

            <li>Template ID: Gram positive</li>
          </ul>
        </li>
      </ul>
      <p>
        The model was then submitted to a step of gapfilling to identify missing reactions required
        for growth on a specific medium. This step was done with the default parameters of the app{' '}
        <i>Gapfill Metabolic Model</i>. The media used was the publicly available formulated media
        Carbon-D-Glucose on KBase. No reactions were added to the model after gapfilling.
      </p>
      <p>
        Once we had the functional model, we performed flux balance analysis with the app{' '}
        <i>Run Flux Balance Analysis</i> in order to identify optimal flux for geranyl pyrophosphate
        based on medium composition. Here, we only modified the carbon and nitrogen content by
        varying concentrations of glucose and ammonium. The base medium for those modifications was
        again Carbon-D-Glucose. The different media formulations are the following:
      </p>
      <ul className='modelling-ul style-circle-full'>
        <li>Carbon-D-Glucose_0: 0 M glucose ; 0 M ammonium</li>{' '}
        <li>Carbon-D-Glucose_1: 0.001 M glucose ; 0.001 M ammonium</li>
        <li>Carbon-D-Glucose_2: 0.002 M glucose ; 0.002 M ammonium</li>
        <li>Carbon-D-Glucose_3: 0.002 M glucose ; 0.001 M ammonium</li>
        <li>Carbon-D-Glucose_4: 0.001 M glucose ; 0.002 M ammonium</li>
        <li>Carbon-D-Glucose_5: 0.025 M glucose ; 0.025 M ammonium</li>
      </ul>
      <p>
        The following input parameters were used with <i>Run Flux Balance Analysis</i>, the rest was
        kept as default:
      </p>
      <ul className='modelling-ul style-circle-full'>
        <li>Reaction to maximise: rxn01213_c0 (GPPSYN-RXN_c0)</li>
        <li>Flux Variability Analysis: yes</li>
        <li>Minimise Flux: yes</li>
        <li>Simulate All Single KO: no</li>
      </ul>
      <p>
        Finally, we obtained the relation of geranyl diphosphate synthesis in function of medium
        composition. There was a clear increase in flux with the increase of glucose, which is
        expected with more available carbon sources. On the other hand, the ammonium concentration
        didn’t show any significance in the geranyl diphosphate synthesis fluxes. The base model
        iMM904 might not respond well to ammonium content and thus not show any dependency to
        ammonium for the predicted growth. The model also saturated at 0.002 of glucose with a flux
        of 9.05409 since no further change was observed at 0.025 M. This problem arose from a too
        constrained boundary of one of the prior reactions before geranyl diphosphate synthesis that
        fixed the upper limit at 9.05409. Due to time constraints, no further troubleshooting was
        performed.
      </p>
      <References
        references={[
          'Chiu CC, Keeling CI, Bohlmann J. The cytochrome P450 CYP6DE1 catalyzes the conversion of α-pinene into the mountain pine beetle aggregation pheromone trans-verbenol. Sci Rep. 2019 Feb 6;9(1):1477. doi: 10.1038/s41598-018-38047-8. PMID: 30728428; PMCID: PMC6365528.',
          'Sarria S, Wong B, García Martín H, Keasling JD, Peralta-Yahya P. Microbial synthesis of pinene. ACS Synth Biol. 2014 Jul 18;3(7):466-75. doi: 10.1021/sb4001382. Epub 2014 Feb 27. PMID: 24679043.',
          'Bar-Nun S, Kreibich G, Adesnik M, Alterman L, Negishi M, Sabatini DD. Synthesis and insertion of cytochrome P-450 into endoplasmic reticulum membranes. Proc Natl Acad Sci U S A. 1980;77(2):965-969. doi:10.1073/pnas.77.2.965. PMID: 6767247.',
          'Sakaguchi M, Mihara K, Sato R. Signal recognition particle is required for co-translational insertion of cytochrome P-450 into microsomal membranes. Proc Natl Acad Sci U S A. 1984;81(11):3361-3364. doi:10.1073/pnas.81.11.3361. PMID: 6587354.',
          'Mirdita M, Schütze K, Moriwaki Y, Heo L, Ovchinnikov S, Steinegger M. ColabFold: making protein folding accessible to all. Nat Methods. 2022;19(6):679-682. doi:10.1038/s41592-022-01488-1. PMID: 35637307.',
          'Jumper J, Evans R, Pritzel A, et al. Highly accurate protein structure prediction with AlphaFold. Nature. 2021;596(7873):583-589. doi:10.1038/s41586-021-03819-2. PMID: 34265844.',
          'Lomize AL, Todd SC, Pogozheva ID. Spatial arrangement of proteins in planar and curved membranes by PPM 3.0. Protein Sci. 2022;31(1):209-220. doi:10.1002/pro.4219. PMID: 34716622.',
          'Schrödinger, LLC. The PyMOL Molecular Graphics System, Version 1.8. Published online Νοέμβριος 2015.',
          'Lamb DC, Warrilow AG, Venkateswarlu K, Kelly DE, Kelly SL. Activities and kinetic mechanisms of native and soluble NADPH-cytochrome P450 reductase. Biochem Biophys Res Commun. 2001;286(1):48-54. doi:10.1006/bbrc.2001.5338. PMID: 11485306',
          'Miyamoto M, Yamashita T, Yasuhara Y, et al. Membrane anchor of cytochrome P450 reductase suppresses the uncoupling of cytochrome P450. Chem Pharm Bull (Tokyo). 2015;63(4):286-294. doi:10.1248/cpb.c15-00034. PMID: 25832023.',
          'Jo S, Kim T, Iyer VG, Im W. CHARMM-GUI: a web-based graphical user interface for CHARMM. J Comput Chem. 2008;29(11):1859-1865. doi:10.1002/jcc.20945. PMID: 18351591.',
          'Phillips JC, Hardy DJ, Maia JDC, et al. Scalable molecular dynamics on CPU and GPU architectures with NAMD. J Chem Phys. 2020;153(4):044130. doi:10.1063/5.0014475. PMID: 32752662.',
          'Pogozheva ID, Armstrong GA, Kong L, et al. Comparative Molecular Dynamics Simulation Studies of Realistic Eukaryotic, Prokaryotic, and Archaeal Membranes. J Chem Inf Model. 2022;62(4):1036-1051. doi:10.1021/acs.jcim.1c01514. PMID: 35167752.',
          'Gao Y, Lee J, Smith IPS, et al. CHARMM-GUI Supports Hydrogen Mass Repartitioning and Different Protonation States of Phosphates in Lipopolysaccharides. J Chem Inf Model. 2021;61(2):831-839. doi:10.1021/acs.jcim.0c01360. PMID: 33442985.',
          'Arkin AP, Cottingham RW, Henry CS, Harris NL, Stevens RL, Maslov S, Dehal P, Ware D, Perez F, Canon S, Sneddon MW, Henderson ML, Riehl WJ, Murphy-Olson D, Chan SY, Kamimura RT, Kumari S, Drake MM, Brettin TS, Glass EM, Chivian D, Gunter D, Weston DJ, Allen BH, Baumohl J, Best AA, Bowen B, Brenner SE, Bun CC, Chandonia JM, Chia JM, Colasanti R, Conrad N, Davis JJ, Davison BH, DeJongh M, Devoid S, Dietrich E, Dubchak I, Edirisinghe JN, Fang G, Faria JP, Frybarger PM, Gerlach W, Gerstein M, Greiner A, Gurtowski J, Haun HL, He F, Jain R, Joachimiak MP, Keegan KP, Kondo S, Kumar V, Land ML, Meyer F, Mills M, Novichkov PS, Oh T, Olsen GJ, Olson R, Parrello B, Pasternak S, Pearson E, Poon SS, Price GA, Ramakrishnan S, Ranjan P, Ronald PC, Schatz MC, Seaver SMD, Shukla M, Sutormin RA, Syed MH, Thomason J, Tintle NL, Wang D, Xia F, Yoo H, Yoo S, Yu D. KBase: The United States Department of Energy Systems Biology Knowledgebase. Nat Biotechnol. 2018 Jul 6;36(7):566-569. doi: 10.1038/nbt.4163. PMID: 29979655; PMCID: PMC6870991.',
          'Mo ML, Palsson BO, Herrgård MJ. Connecting extracellular metabolomic measurements to intracellular flux states in yeast. BMC Syst Biol. 2009 Mar 25;3:37. doi: 10.1186/1752-0509-3-37. PMID: 19321003; PMCID: PMC2679711.'
        ]}
      />
    </PageLayout>
  )
}

export default Model
