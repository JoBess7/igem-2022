import PageLayout from '../../common/components/PageLayout/PageLayout'
import References from '../../common/components/References/References'
import TableOfContent, { Parent } from '../../common/components/TableOfContents/TableOfContent'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import Images from '../../common/Images'
import './HumanPractices.css'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import Title from '../../common/components/Title/Title'
import ImageWithCaption from '../../common/components/ImageWithCaption/ImageWithCaption'
import TextRef from '../../common/components/TextRef/TextRef'
import Accordion from '../../common/components/Accordion/Accordion'
import PageLink from '../../common/components/PageLink/PageLink'

function HumanPractices () {
  const TocContent: Parent[] = [
    {
      displayName: 'An Environmental Goal',
      id: 'our-goal',
      children: []
    },
    {
      displayName: 'Improving Already Responsible Strategies',
      id: 'improving-already',
      children: []
    },
    {
      displayName: 'Consulting Experts',
      id: 'consulting-experts',
      children: [
        {
          displayName: 'Gathering knowledge – The Species',
          id: 'knowledge-1'
        },
        {
          displayName: 'Gathering knowledge – Pheromone Synthesis',
          id: 'knowledge-2'
        },
        {
          displayName: 'Gathering Knowledge – Other Pest Applications ',
          id: 'knowledge-3'
        }
      ]
    },
    {
      displayName: 'In summary',
      id: 'in-summary',
      children: []
    }
  ]

  return (
    <PageLayout isMaxed title='Human Practices'>
      <div className='human-practices-top'>
        <div className='modelling-toc-container'>
          <div className='modelling-toc-flex'>
            <p>
              We have done the legwork to ensure our project is good for the world we are creating
              it for: PheroSynth was created through collaboration with industry experts, ensuring
              that it addressed issues with the existing methods to fight against the mountain pine
              beetle (MPB) epidemic. On top of that, after seeing the absence of scientific research
              into the biological synthesis of insect pheromones, we documented a workflow to make
              innovation easier for future research teams doing similar projects.{' '}
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
        <Title id='our-goal' title='An Environmental Goal' />
        <p>
          {' '}
          Environmental issues like insect epidemics affect us all, and it is our duty to find
          solutions to contribute in any way we can to protect the environment and its ecosystems.
          Canada is seen internationally for its high natural diversity and large green spaces,
          including large forests. As these vast forests are currently threatened by a large number
          of pest species, we decided to tackle a particularly prolific one. The MPB has done
          considerable damage to western forests in our team’s home country, having “devastated
          about 50 percent of commercial lodgepole pine in [the province of British Columbia] since
          1990” and gradually moving East into Alberta (
          <TextRef content='Government of Canada, 2021' sup='1' />
          ).
        </p>
        <TextSeparator />
        <Title id='improving-already' title='Improving Already Responsible Strategies' />
        <p>
          Right now, the strategies used to <b>neutralise</b> this pest are drastic: cutting down
          the tree infected by the pest, or setting a controlled and managed fire to kill the
          insects directly. This is why stakeholders will prefer <b>surveillance</b> and{' '}
          <b>population monitoring</b> strategies over the more destructive options above.
        </p>
        <p>
          These strategies are more protective and less devastating to the environment, and so{' '}
          <b>these are the types of strategies our team tried to optimize</b>.{' '}
        </p>
        <p>
          The most commonly used trap for monitoring these populations is the Lindgren trap, which
          consists of a funnel overlay trapping the insect at the bottom (Figure 1). To attract
          beetles, monitoring and management strategies currently use semiochemical traps or traps
          made directly from the pest species by grinding the insect to release pheromones.{' '}
        </p>
        <div className='human-practices-fig1'>
          <ImageWithCaption captionPadding={10} imagePadding={3} src={Images.HumanPFig1} figure={1}>
            An example of a Lindgren trap. Source:
            <TextRef content='Roberge, S. (2020, June 7)' sup='2' />
          </ImageWithCaption>
        </div>
        <p>
          Considering the rapidly increasing range of MPB populations, there is a definite need to
          find new solutions that protect the environment and associated ecosystems.{' '}
        </p>
        <p>
          <span>PheroSynth offers a number of advantages that current solutions do not :</span>
        </p>
        <Accordion title='Less damaging to the environment' lightTheme>
          <p>
            Current traps use chemicals that can only barely be degraded and recycled. Using
            synthetic biology to synthesize the pheromone would not create chemical waste that is as
            damaging to the environment as current methods.
          </p>
        </Accordion>
        <Accordion title='Less expensive in the long run' lightTheme>
          <ul>
            <li>
              After developing the pheromone’s production process, the use of laboratory reference
              yeasts would reduce pheromone costs in the long run.
            </li>
            <li>
              As this problem is steadily growing with climate change, it would therefore be of
              interest to develop it.{' '}
            </li>
          </ul>
        </Accordion>
        <Accordion title='Optimizes the production strategy' lightTheme>
          <p>
            By using a CCD to maximize pheromone yield (see{' '}
            <PageLink src='https://2022.igem.wiki/ulaval/implementation'>Implementation</PageLink>
            ), our team made our method efficient.
          </p>
        </Accordion>
        <Accordion title='Facilitates future research' lightTheme>
          <p>
            By creating a generic optimized workflow for future research teams, our team facilitates
            further research into this type of solution so that it may one day be applied to other
            pest species.
          </p>
        </Accordion>
        <p>
          In order to make sure our strategy was realistic and to make progress on the project, we
          enlisted the help of field experts who have contributed greatly to the scientific study of
          the MPB, insect epidemics and synthetic pathways.
        </p>
        <TextSeparator />
        <Title
          id='consulting-experts'
          title='Consulting Experts – How can we best make this project fit current needs?'
        />
        <div className='pad1'></div>
        <Title id='knowledge-1' isSub title='Gathering knowledge – The Species' />
        <p>
          First, it was necessary to know more about the species and the current strategies to
          control pests. <b> Christopher Keeling </b>, research scientist at the Canadian Forest
          Service&apos;s Laurentian Forestry Centre was the person of choice to help orient us in
          our project. His research and valuable advice and assistance regarding the MPB and how it
          affects trees helped our project evolve. He is also the person who directed us to our next
          expert (Björn Hamberger, one of his collaborators) to see how feasible it would be for us
          to synthesize the pheromone biologically.{' '}
        </p>
        <Accordion lightTheme title='How was this integrated into our project? '>
          <p>
            At the beginning of the project, our main goal was to propose a <b>control</b> strategy
            for MPB populations. Following our interview with Christopher Keeling, we decided to opt
            for aiding current surveillance strategies instead. He showed us that although control
            strategies can be applicable, monitoring strategies were a more realistic and helpful
            option for the continuation of our project. We also followed his advice on which expert
            to consult next and contacted Professor <b>Björn Hamberger </b> as our next step in our
            Human Practices.{' '}
          </p>
        </Accordion>
        <div className='pad1'></div>
        <Title id='knowledge-2' isSub title='Gathering knowledge – Pheromone Synthesis' />
        <p>
          After receiving Christopher Keeling’s valuable feedback, we looked into how to implement
          the project. We therefore contacted Professor <b>Björn Hamberger </b>, researcher at
          Michigan State University. He is an expert in metabolic pathways and plant synthesis,
          elements that touch the very nature of our synthesis project. He assured us that the
          metabolic pathways we would be targeting with PheroSynth were reliable and that they were
          the safest for us to target. At the end of his interview, Professor Hamberger also asked
          us if the strategies we had in mind would be interesting for other pest species as well.{' '}
        </p>
        <Accordion lightTheme title='How was this integrated into our project?'>
          <p>
            We took this last question to heart, and it sent us on our first step towards the final
            form of our project: searching for other professionals in the field working on{' '}
            <b>other</b> pest species.{' '}
          </p>
          <p>
            Not only did this interview affect our subsequent research, it also affected how we
            viewed and presented our results and impacted the way we communicated our project. After
            this point, we started to see that developing strategies and furthering research, rather
            than simply existing to produce specific experiment results, was still a valid
            application of our project.{' '}
          </p>
        </Accordion>
        <div className='pad1'></div>
        <Title id='knowledge-3' isSub title='Gathering Knowledge – Other Pest Applications' />
        <p>
          In order to see how possible it would be to apply our strategies on other pest species, we
          contacted two other professionals in the field: <b>Christian Hébert </b> and{' '}
          <b>Michel Cusson</b>.{' '}
        </p>
        <div className='pad1'></div>
        <span className='human-practices-sub'>Meeting with Christian Hébert</span>
        <p>
          <b>Christian Hébert</b> is a researcher in insect ecology and diversity at the Canadian
          Forest Service&apos;s Laurentian Forestry Centre. Speaking with him was another pivotal
          moment in our project. In orienting our interview with him towards learning more about
          monitoring strategies and whether or not our project could be applicable to other species,
          we learned that our project was a lot bigger than we had thought. Mr. Hébert brought up a
          few hurdles we would encounter in the course of our project:{' '}
        </p>
        <ul>
          <li style={{ listStyle: 'disc' }}>
            Gaps in knowledge concerning the detection and monitoring of pest species{' '}
          </li>
          <li style={{ listStyle: 'disc' }}>
            Quebec’s lack of necessary infrastructure for the development and implementation of
            pheromone traps for monitoring invasive insects (
            <TextRef sup='5' content='(Allison et al., 2021).' />
            ).
          </li>
          <li style={{ listStyle: 'disc' }}>
            Potential problems in setting up pheromone traps, like the sheer size of the area to be
            covered.
          </li>
        </ul>
        <p>
          Through our own research after the meeting, we looked into the regulatory infrastructure
          regarding forests in Quebec. We learned that Canada’s forest biosecurity policy and
          regulatory frameworks are quite complex, with several governing agencies involved from
          different governmental levels. International agreements, as well as both provincial and
          federal laws control what can be done in forests.{' '}
        </p>

        <p>
          We realized that we had underestimated the size of our project. Our team did not have the
          time nor resources to effectively complete a project with such gaps in knowledge and
          infrastructure before our deadline.
        </p>
        <Accordion title='How was this integrated into our project?' lightTheme>
          <p>
            This information and these observations are what cemented our new end goals for
            PheroSynth. Rather orienting our project towards being an A to Z synthesis success
            recipe, we decided we would develop our project as a <b>case study</b> of synthetic
            pheromone traps and insect monitoring. That way, our project would fill the most
            pressing need it could realistically address: the knowledge gap. By lowering one of the
            hurdles our own initial project faced, we aim to make it easier for future researchers
            to take <i>their</i> project a step further than ours.
          </p>

          <p>
            We made this decision while keeping with the values we held in mind at the beginning of
            the project: environmental protection, mutual aid and academic excellence. Also, while
            we may have modified the project’s end objective, along with a few other modifications
            for it to serve as a case study example, we have continued in our orientation towards
            helping make a <b>pest monitoring strategy</b>—and not a solution to a pest problem as a
            whole.{' '}
          </p>
        </Accordion>
        <p>
          In our meeting with him, the researcher mentioned two pests in particular which are in
          Quebec (the home province of our team): the emerald ash borer and the spruce budworm. He
          suggested these two as potential targets for other applications of our project’s method.{' '}
        </p>
        <Accordion lightTheme title='How was this integrated into our project?'>
          <p>
            We decided to look into how someone could use synbio to produce the spruce budworm’s
            pheromones—as a small test to see if our methods could actually be helpful to other
            researchers trying to synthesize other species’ pheromones for similar uses.{' '}
          </p>
          <p>
            As it turns out, one of the interesting pheromones of this insect (E)-11-tetradecenal{' '}
            <i>can</i> be synthesised by using two enzymes (
            <TextRef content='Morse and Meighen, 1984' sup='3' />;{' '}
            <TextRef content='Rhainds et al., 2016' sup='4' />
            ). In Figure 2, we can see that it is possible to produce the pheromone aggregation of
            spruce budworms by overexpressing two enzymes: Δ11 desaturase and a Carboxylic Acid
            Reductase. Thus, with little modification of our method/workflow, it should be possible
            to integrate it into research on other pest species.{' '}
          </p>
          <div className='human-practices-fig2'>
            <ImageWithCaption
              src={Images.HumanPFig2}
              captionPadding={10}
              imagePadding={3}
              figure={2}
              caption='Example of a spruce budworm pheromone synthesis in yeast.
'
            />
          </div>
        </Accordion>
        <div className='padp'></div>
        <span className='human-practices-sub'>Meeting with Michel Cusson</span>
        <p>
          Following our meeting with Mr. Hébert, and before we got our hopes up for the project’s
          new direction, we wanted to make sure that our strategy could truly be applied to other
          pest species. That is why we contacted <b>Michel Cusson</b>, a Research Scientist
          biochemist at the Canadian Forest Service&apos;s Laurentian Forestry Centre. Michel
          Cusson&apos;s research work focuses on the spruce budworm, another pest species. The
          spruce budworm’s sex pheromones are used to monitor insect pest populations and to cause
          sexual confusion.{' '}
        </p>
        <p>
          For population monitoring, the pheromones are chemically synthesised and placed in traps,
          the most commonly used being funnel traps with a disc containing the pheromones at the
          bottom.
        </p>
        <p>
          For sexual confusion, the pheromones are in the form of flakes and the environment is
          saturated with the pheromone. Because of this, the male cannot find the female and
          reproduction cannot take place. This phenomenon is what is called sexual confusion.{' '}
        </p>
        <p>
          From a synthetic point of view, Michel Cusson is working more on the metabolomic pathways
          of juvenile hormones of the spruce budworm. Juvenile hormones and analogues of these may
          be an evolution of the project and would optimise production and efficacy due to their
          persistence (less volatile). Compared with the Mountain Pine Beetle, we see that the
          production of the juvenile hormone uses the same metabolic pathways.
        </p>
        <p>
          Mr. Cusson informed us that sex pheromones are quite specific to a species and
          environment, and so they rarely interfere with other species. Nevertheless, between the
          two pheromone use methods, the use of the confusion sexual method could have a greater
          impact on the environment. However, the risks of impacting other species are similar to
          those with chemical synthesis.{' '}
        </p>
        <Accordion lightTheme title='How was this integrated into our project?'>
          <p>
            In light of the species and environmental specificity revealed through our meeting with
            Mr. Cusson, we deduced that the same exact synthesis process does <i>not</i> work on
            other species.
          </p>

          <p>
            While this may have been a problem had we continued towards a more experiment-focused
            goal, it is not much of an obstacle when looking at our project as a foundation for
            future project workflows. Establishing the key steps of our workflow would still be
            helpful to future projects, as these key steps can then be applied to the specificities
            of other species and their environments.{' '}
          </p>

          <p>
            This meeting therefore only confirmed to us that building a workflow was the best way
            for us to contribute to filling the research gap in the field. The new information
            provided on the different pheromone uses also confirmed to us that, in order to follow
            through with one of our project’s core values—protecting the environment—, we were right
            to name population monitoring as our proposed end use for pheromone aggregation through
            synthetic biology.{' '}
          </p>
        </Accordion>
      </div>
      <div className='description-bottom'>
        <div className='description-bottom-container'>
          <img srcSet={Images.ForestAll} alt='' />
          <div className='description-bottom-main'>
            <div className='human-practices-bottom-text'>
              <Title id='in-summary' revert title='In summary' />
              <p>
                Despite the growing need for research and management strategies for insect pest
                problems increasing with climate change,{' '}
                <b>
                  our project and our consultations revealed a knowledge and infrastructure gap in
                  the field
                </b>
                . With a limited number of publications and infrastructure for the development and
                implementation of pest monitoring strategies, we saw how much headway had to be made
                before population monitoring strategies can effectively be implemented.{' '}
              </p>

              <p>
                Thanks to the information we gathered from these experts,{' '}
                <b>
                  we were able to adapt the shape and goals of our project to better fit the needs
                  of the field and the reality of our project
                </b>
                . While we may not have achieved a way to synthesize the MPB’s pheromone like we
                originally intended, we were able to find a realistic way for us to help advance
                environmental protection methods with the time and resources we had.{' '}
              </p>
              <p>
                PheroSynth is no longer a trap design project for MPB control like we first aimed
                for it to be. Thanks to input from multiple experts, it is now:{' '}
              </p>
              <ul>
                <li style={{ listStyle: 'disc' }}>
                  a case study for the implementation of pest population monitoring strategies using
                  synthetic biology{' '}
                </li>
                <li style={{ listStyle: 'disc' }}>
                  a workflow that offers a foundation for future actual design projects
                </li>
              </ul>
              <div className='human-practices-bottom-box'>
                <p>
                  With the counsel and feedback of current field researchers, we determined that{' '}
                  <b>
                    establishing a foundation for future research to build upon is the best way our
                    project can benefit the collective good.
                  </b>
                </p>
              </div>
              <References
                references={[
                  'Government of Canada. Slowing the march of the mountain pine beetle. Natural Resources Canada Website. 2021 Jun 1. https://www.rncan.gc.ca/la-science-simplifiee/articles/ralentir-lavancee-du-dendroctone-du-pin-ponderosa/20626',
                  'Roberge, S. (2020, June 7). Une étude sur la flétrissure du chêne à Wotton. laTribune. https://www.latribune.ca/2020/06/07/une-etude-sur-la-fletrissure-du-chene-a-wotton-b815e71cdd1ba53483bfe8841a123271',
                  'Morse D, Meighen E. Detection of pheromone biosynthetic and degradative enzymes in vitro. J Biol Chem. 1984 Jan 10;259(1):475-80. PMID: 6368540.',
                  'Rhainds M, Therrien P, Morneau L. Pheromone-Based Monitoring of Spruce Budworm (Lepidoptera: Tortricidae) Larvae in Relation to Trap Position. J Econ Entomol. 2016 Apr;109(2):717-23. doi: 10.1093/jee/tov393. PMID: 26721289.',
                  'Allison, J.D., Marcotte, M., Noseworthy, M.K., & Ramsfield, T.D. (2021). Forest Biosecurity in Canada – An Integrated Multi-Agency Approach. Frontiers in Forests and Global Change.'
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default HumanPractices
