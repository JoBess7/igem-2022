import Accordion from '../../common/components/Accordion/Accordion'
import PageLayout from '../../common/components/PageLayout/PageLayout'
import Title from '../../common/components/Title/Title'
import PartTitle from './components/PartTitle/PartTitle'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Parts.css'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import TextRef from '../../common/components/TextRef/TextRef'
import PageLink from '../../common/components/PageLink/PageLink'
import References from '../../common/components/References/References'

function Parts () {
  const copyToClipboard = (id: string) => {
    try {
      const text = document.getElementById(id)?.textContent?.toString()
      if (text) {
        navigator.clipboard.writeText(text)
        toast.success('Copied sequence to clipboard!', {
          position: 'top-right',
          autoClose: 5000,
          pauseOnHover: true,
          theme: 'colored'
        })
      }
    } catch {
      toast.success('Oups, an error occured.', {
        position: 'top-right',
        autoClose: 5000,
        pauseOnHover: true,
        theme: 'colored'
      })
    }
  }

  return (
    <PageLayout title='Parts'>
      <ToastContainer toastClassName={'toasts'} />
      <PartTitle
        part='BBA_K4346000'
        name='Abies grandis Geranyl Pyrophosphate Synthase fused with Pinene Synthase (GPPS-PS)'
      />
      <Title title='Description' isSub />
      <p>
        This part is a gene fusion of the <i>Abies grandis</i> Geranyl Pyrophosphate Synthase (GPPS)
        fused with Pinene Synthase (PS) (<TextRef content='Sarria et al., 2014' sup='1' />) and
        codon optimized for <i>Saccharomyces cerevisiae</i>. In this gene fusion, GPPS converts
        isopentyl diphosphate and dimethylallyl diphosphate into geranyl diphosphate (GPP) through a
        condensation reaction. Next, the second enzyme in this fusion, PS, converts the GPP to
        (-)-α-pinene. Both GPPS and the PS used in this fusion come from the giant fir,{' '}
        <i>Abies grandis</i>.
      </p>
      <p>
        In this sequence, the two enzyme DNA sequences are linked with a glycine serine linker of
        the following sequence : GSGGSG, which was shown in the paper we used as a reference as the
        linker that performed best among all the linkers tested (
        <TextRef content='Sarria et al., 2014' sup='1' />
        ).
      </p>
      <Accordion lightTheme title='Annotated protein sequence of our GPPS-PS:'>
        <div className='parts-accordion-name'>
          <span>1-297 (GPPS) 303-893 (PS)</span>
          <button onClick={() => copyToClipboard('part1')} className='copy-button'>
            Copy sequence
          </button>
        </div>
        <span id='part1' className='parts-accordion-part'>
          MEFDFNKYMDSKAMTVNEALNKAIPLRYPQKIYESMRYSLLAGGKRVRPVLCIAACELVGGTEELAIPTACAIEMIHTMSLMHDDLPCIDNDDLRRGKPTNHKIFGEDTAVTAGNALHSYAFEHIAVSTSKTVGADRILRMVSELGRATGSEGVMGGQMVDIASEGDPSIDLQTLEWIHIHKTAMLLECSVVCGAIIGGASEIVIERARRYARCVGLLFQVVDDILDVTKSSDELGKTAGKDLISDKATYPKLMGLEKAKEFSDELLNRAKGELSCFDPVKAAPLLGLADYVAFRQNGSGGSGMRRGKSITPSISMSSTTVVTDDGVRRRMGDFHSNLWDDDVIQSLPTAYEEKSYLERAEKLIGEVKNMFNSMSLEDGELMSPLNDLIQRLWIVDSLERLGIHRHFKDEIKSALDYVYSYWGENGIGCGRESVVTDLNSTALGLRTLRLHGYPVSSDVFKAFKGQNGQFSCSENIQTDEEIRGVLNLFRASLIAFPGEKIMDEAEIFSTKYLKEALQKIPVSSLSREIGDVLEYGWHTYLPRLEARNYIQVFGQDTENTKSYVKSKKLLELAKLEFNIFQSLQKRELESLVRWWKESGFPEMTFCRHRHVEYYTLASCIAFEPQHSGFRLGFAKTCHLITVLDDMYDTFGTVDELELFTATMKRWDPSSIDCLPEYMKGVYIAVYDTVNEMAREAEEAQGRDTLTYAREAWEAYIDSYMQEARWIATGYLPSFDEYYENGKVSCGHRISALQPILTMDIPFPDHILKEVDFPSKLNDLACAILRLRGDTRCYKADRARGEEASSISCYMKDNPGVSEEDALDHINAMISDVIKGLNWELLKPDINVPISAKKHAFDIARAFHYGYKYRDGYSVANVETKSLVTRTLLESVPL*
        </span>
      </Accordion>
      <div className='pad1'></div>
      <Title isSub title='Characterisation' />
      <p>
        Although our team was not able to confirm the activity of this construction in vivo, we were
        able to do some interesting modelling in silico. The main objective here was to ensure that
        this GPPS-PS fusion is able to remain stable and functional. Indeed, we need to confirm that
        it is able to link to <i>S. cerevisiae</i>’s endoplasmic reticulum (ER) membrane in order to
        be in the same region as the other enzymes mevalonate pathway. This pathway produces the
        precursors for this GPPS-PS fusion. In this construction, it is the GPPS that is linked to
        the membrane of the ER. Thus, we first predicted its three-dimensional structure using
        Alphafold (<TextRef content='Jumper et al., 2021' sup='2' />;{' '}
        <TextRef content='Mirdita et al., 2022' sup='3' />;{' '}
        <TextRef content='Varadi et al., 2022' sup='4' />
        ). Once we obtained its 3D structure, we then used the OPM PPM3 program (
        <TextRef content='Lomize et al., 2022' sup='5' />) to confirm the ability of GPPS to be able
        to integrate into the ER membrane. We observed that GPPS links to the ER membrane with an
        amphipathic α-helix. To confirm that this behaviour is normal, we wanted to compare the
        behaviour of another enzyme that has a similar reaction and that is natively found in S.
        cerevisiae. Thus, we used the erg20p as a comparison. This enzyme uses the same procursors
        as the GPPS and uses a GPP intermediate product to produce farnesyl. We also used OPM PPM3
        to visualize its docking on the ER membrane. We also observed that it linked to the ER
        membrane via an amphipathic α-helix. These promising results allowed us to continue to the
        next steps in our project, which were the wet lab planification.
      </p>
      <TextSeparator />
      <PartTitle
        part='BBA_K4346001'
        name='CYP6DE1_anchorCYP52A3 (Long)Dendroctonus ponderosae Cytochrome P450 (CYP6DE1) with CYP52A3 Anchor'
      />
      <div className='padp'></div>
      <PartTitle
        part='BBA_K4346002'
        name='CYP6DE1_anchorP21595 (Short)
       Dendroctonus ponderosae Cytochrome P450 (CYP6DE1) with P21595 Anchor'
      />
      <Title isSub title='Description' />
      <p>
        Those parts are slightly modified versions of the native Cytochrome P450 of{' '}
        <i>Dendroctonus ponderosae</i>, CYP6DE1. This specific cytochrome P450 catalyses the
        conversion of α-pinene in trans-verbenol and is naturally bound to the microsomal membrane
        of the insect (<TextRef content='Chiu et al., 2019' sup='6' />
        ). As the cytochrome P450 of the yeast is located to the endoplasmic reticulum, we decided
        to relocate the enzyme of the insect by swapping the membrane-bound segment with a
        transmembrane helix of endoplasmic reticulum located proteins from yeasts. To do so, we
        confirmed that the insect’s cytochrome P450 had a transmembrane helix, and we defined the
        region of this helix using both Alphafold and the OPM PPM3 server. Then we identified
        potential transmembrane segment from Blast hits and subsequent <i>in silico</i> prediction
        (see <PageLink src='https://2022.igem.wiki/ulaval/model'>Modelling</PageLink>). Ultimately,
        we selected two cytochrome P450, both from <i>S. cerevisiae</i> (CYP52A3 from GenBank ID:
        AGZ83172.1 and P21595 from <TextRef content='Briza et al., 1990' sup='7' />
        ). After defining similarly the regions of those transmembrane helix, we swapped the segment
        of the insect cytochrome P450 with ones from <i>S. cerevisiae</i>. This lead respectively to
        the parts BBA_K4346001 and BBA_K4346002. The sequences were codon optimised for the yeast.
      </p>
      <Accordion lightTheme title='Amino acid sequence of the BBA_K4346001'>
        <div className='parts-accordion-name'>
          <span>1-42 (anchor), 43-514 (CYP6DE1)</span>
          <button onClick={() => copyToClipboard('part2')} className='copy-button'>
            Copy sequence
          </button>
        </div>
        <span id='part2' className='parts-accordion-part'>
          MSADLAFEYLTKWYSIVFGAALIYGIARYIKIQLVGRKHGCELNPRLFFGDTLPLVRGQALKDFHLGLYQKFKSTGAKCVGIYNAHMPELVPIDIILLKDIMVKDYSYFSSHGVFYHEKNVLTSHLFNIEGQSWKERRTKLTPVFTSAKMKQMFDTVASKSPGLVRLVGLSADANKPADIKEILSRFTTDVISGAAFGLECKSLYEPDNMFRAIGKEAFEPNALKLYIEYLFPRQLLGSIGYQTFSSRIVSYFSKVVNETIQYREKNNVQRNDFMQLMLQLKQHGSLVKEDGSVDVKKTETQITDREILSESFLMFLAGHETSSSTSTFALFALSQNQDIQEKVRNEINEVLERHNGKLGYDALMEMEYLDKVIRETLRKYPTVPVIPRRCTKDYQIKNTNTVIDKGTRLYIPVIGVHLDPEYYPDPERFDPERFSPENKAKRPDIAWMPFGEGPRQCLGMRFGLLQSKVALASLLPTFRFTINKAMKPPYIADAGTLVYMFKQDVLLDATRIN
        </span>
      </Accordion>
      <Accordion lightTheme title='Amino acid sequence of the BBA_K4346002'>
        <div className='parts-accordion-name'>
          <span>1-27 (anchor), 28-499 (CYP6DE1)</span>
          <button onClick={() => copyToClipboard('part3')} className='copy-button'>
            Copy sequence
          </button>
        </div>
        <span id='part3' className='parts-accordion-part'>
          MELLKLLCLILFLTLSYVAFAIIVPPLLNPRLFFGDTLPLVRGQALKDFHLGLYQKFKSTGAKCVGIYNAHMPELVPIDIILLKDIMVKDYSYFSSHGVFYHEKNVLTSHLFNIEGQSWKERRTKLTPVFTSAKMKQMFDTVASKSPGLVRLVGLSADANKPADIKEILSRFTTDVISGAAFGLECKSLYEPDNMFRAIGKEAFEPNALKLYIEYLFPRQLLGSIGYQTFSSRIVSYFSKVVNETIQYREKNNVQRNDFMQLMLQLKQHGSLVKEDGSVDVKKTETQITDREILSESFLMFLAGHETSSSTSTFALFALSQNQDIQEKVRNEINEVLERHNGKLGYDALMEMEYLDKVIRETLRKYPTVPVIPRRCTKDYQIKNTNTVIDKGTRLYIPVIGVHLDPEYYPDPERFDPERFSPENKAKRPDIAWMPFGEGPRQCLGMRFGLLQSKVALASLLPTFRFTINKAMKPPYIADAGTLVYMFKQDVLLDATRIN
        </span>
      </Accordion>
      <div className='pad1'></div>
      <Title isSub title='Characterisation' />
      <p>
        As stated previously, our team was not able to confirm the activity of this construction in
        vivo. However, we did similar in silico prediction as with the GPPS-PS fusion to confirm
        that the enzymes bind to the endoplasmic reticulum. We first predicted again the 3D
        structure of the two cytochrome P450 versions using Alphafold. We then proceeded with the
        membrane docking prediction using OPM PPM3 to reconfirm the localisation and binding to the
        endoplasmic reticulum. All the prediction results showed that the overall 3D structure was
        retained and the orientation and docking in the membrane was similar to the native insect
        cytochrome P450 in the microsome membrane.
      </p>
      <TextSeparator />
      <PartTitle
        part='BBA_K4346003'
        name='Specific Dendroctonus ponderosae Cytochrome P450 Reductase for CYP6DE1'
      />
      <Title isSub title='Description' />
      <p>
        This part is a free cytosolic form of the cognate cytochrome P450 reductase of the insect
        cytochrome P450 CYP6DE1 (<TextRef content='Keeling et al., 2013' sup='8' />
        ). This reductase is necessary for the efficient turnover of the cytochrome P450 as we were
        informed that the cytochrome P450 of the yeast are not adequate for the efficient reduction
        of the oxydised cytochrome. We designed this enzyme in its free form as it simplifies the
        construct, and it is not required for the oxydoreductase activity (
        <TextRef content='Miyamoto et al., 2015' sup='9' />;{' '}
        <TextRef content='Lamb et al., 2001' sup='10' />
        ). To produce the free form of the reductase, we predicted its 3D structure using Alphafold,
        we defined the transmembrane region, and we removed it completely. The sequence was also
        codon optimised for the yeast.
      </p>
      <Accordion lightTheme title='Amino acid sequence of the BBA_K4346003'>
        <div className='parts-accordion-name'>
          <button onClick={() => copyToClipboard('part4')} className='copy-button'>
            Copy sequence
          </button>
        </div>
        <span id='part4' className='parts-accordion-part'>
          SPTDNSFVKKLQSSGRSLVVFYGSQTGTGEEFAGRLAKEGVRYRLKGMVADPEECDMEELVNLKNIPNSLAVFCMATYGEGDPTDNAMEFYEWLQNGDADLTGLNYAIFGLGNKTYEHYNEVAIYLDKRLEELGATRVYELGLGDDDANIEDDFITWKDKFWPVVCDFFGIESTGEDISMRQYRVEEYEDAPDRVFSGEMARLHSLKNQRPPYDAKNPYLSKILINRELFKGGERHCMHLEFDIEDSKMRYESGDHLAVYPINNTELVEKIGKLCEKSLDTIFSLINTDEESSKKHPFPCPCSYRTALTHYLDITQNPRTHVLKELAEYCSDPAEKEKLKLMASTSPEGKALYQKWINEDNRNIVHILEDLPSCKPALDHLCELLPRLQPRYYSISSSPKEHPNTVHVTAVLVEYQTPTGRVNKGVATTWLREKIPSPDSATPLTVPIFIRKSQFRLPTKPQVPIIMVGPGTGVAPFRGFIQERNFTKVEGKQVGQTVLYFGCRKKDEDFLYQEEFLKYQENGLLTLNVAFSREQAQKVYVTHLVEKDADTIWNIFENGGHLYICGDAKSMAVDVRNIILKIIQEKGSLTEEQAQVYYKKMETQKRISMDVWS
        </span>
      </Accordion>
      <div className='pad1'></div>
      <Title isSub title='Characterisation' />
      <p>
        Again, we were not able to confirm the activity of this construction in vivo. Additionally,
        the enzyme didn’t need further <i>in silico</i> prediction.
      </p>
      <References
        references={[
          'Sarria S, Wong B, García Martín H, Keasling JD, Peralta-Yahya P. Microbial synthesis of pinene. ACS Synth Biol. 2014 Jul 18;3(7):466-75. doi: 10.1021/sb4001382. Epub 2014 Feb 27. PMID: 24679043.',
          'Jumper J, Evans R, Pritzel A, Green T, Figurnov M, Ronneberger O, Tunyasuvunakool K, Bates R, Žídek A, Potapenko A, Bridgland A, Meyer C, Kohl SAA, Ballard AJ, Cowie A, Romera-Paredes B, Nikolov S, Jain R, Adler J, Back T, Petersen S, Reiman D, Clancy E, Zielinski M, Steinegger M, Pacholska M, Berghammer T, Bodenstein S, Silver D, Vinyals O, Senior AW, Kavukcuoglu K, Kohli P, Hassabis D. Highly accurate protein structure prediction with AlphaFold. Nature. 2021 Aug;596(7873):583-589. doi: 10.1038/s41586-021-03819-2. Epub 2021 Jul 15. PMID: 34265844; PMCID: PMC8371605.',
          'Mirdita M, Schütze K, Moriwaki Y, Heo L, Ovchinnikov S, Steinegger M. ColabFold: making protein folding accessible to all. Nat Methods. 2022 Jun;19(6):679-682. doi: 10.1038/s41592-022-01488-1. Epub 2022 May 30. PMID: 35637307; PMCID: PMC9184281.',
          'Varadi M, Anyango S, Deshpande M, Nair S, Natassia C, Yordanova G, Yuan D, Stroe O, Wood G, Laydon A, Žídek A, Green T, Tunyasuvunakool K, Petersen S, Jumper J, Clancy E, Green R, Vora A, Lutfi M, Figurnov M, Cowie A, Hobbs N, Kohli P, Kleywegt G, Birney E, Hassabis D, Velankar S. AlphaFold Protein Structure Database: massively expanding the structural coverage of protein-sequence space with high-accuracy models. Nucleic Acids Res. 2022 Jan 7;50(D1):D439-D444. doi: 10.1093/nar/gkab1061. PMID: 34791371; PMCID: PMC8728224.',
          'Lomize AL, Todd SC, Pogozheva ID. Spatial arrangement of proteins in planar and curved membranes by PPM 3.0. Protein Sci. 2022 Jan;31(1):209-220. doi: 10.1002/pro.4219. Epub 2021 Nov 8. PMID: 34716622; PMCID: PMC8740824.',
          'Chiu CC, Keeling CI, Bohlmann J. The cytochrome P450 CYP6DE1 catalyzes the conversion of α-pinene into the mountain pine beetle aggregation pheromone trans-verbenol. Sci Rep. 2019 Feb 6;9(1):1477. doi: 10.1038/s41598-018-38047-8. PMID: 30728428; PMCID: PMC6365528.',
          'Briza P, Breitenbach M, Ellinger A, Segall J. Isolation of two developmentally regulated genes involved in spore wall maturation in Saccharomyces cerevisiae. Genes Dev. 1990 Oct;4(10):1775-89. doi: 10.1101/gad.4.10.1775. PMID: 2249774.',
          'Keeling CI, Henderson H, Li M, Dullat HK, Ohnishi T, Bohlmann J. CYP345E2, an antenna-specific cytochrome P450 from the mountain pine beetle, Dendroctonus ponderosae Hopkins, catalyses the oxidation of pine host monoterpene volatiles. Insect Biochem Mol Biol. 2013 Dec;43(12):1142-51. doi: 10.1016/j.ibmb.2013.10.001. Epub 2013 Oct 16. PMID: 24139909.',
          'Miyamoto M, Yamashita T, Yasuhara Y, Hayasaki A, Hosokawa Y, Tsujino H, Uno T. Membrane anchor of cytochrome P450 reductase suppresses the uncoupling of cytochrome P450. Chem Pharm Bull (Tokyo). 2015;63(4):286-94. doi: 10.1248/cpb.c15-00034. PMID: 25832023.',
          'Lamb DC, Warrilow AG, Venkateswarlu K, Kelly DE, Kelly SL. Activities and kinetic mechanisms of native and soluble NADPH-cytochrome P450 reductase. Biochem Biophys Res Commun. 2001 Aug 10;286(1):48-54. doi: 10.1006/bbrc.2001.5338. PMID: 11485306.'
        ]}
      />
    </PageLayout>
  )
}

export default Parts
