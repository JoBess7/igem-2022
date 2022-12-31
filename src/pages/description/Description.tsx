import PageLayout from '../../common/components/PageLayout/PageLayout'
import TableOfContent, { Parent } from '../../common/components/TableOfContents/TableOfContent'
import Title from '../../common/components/Title/Title'
import Images from '../../common/Images'
import './Description.css'

function Description () {
  const TocContent: Parent[] = [
    {
      displayName: 'Why?',
      id: 'why',
      children: [
        {
          displayName: 'Climate change & invasive species',
          id: 'climate-change'
        },
        {
          displayName: 'Big losses in Canada',
          id: 'big-losses'
        }
      ]
    },
    {
      displayName: 'Our Priorities Going Into the Project',
      id: 'our-priorities',
      children: []
    },
    {
      displayName: 'Our Project',
      id: 'the-specifics',
      children: [
        {
          displayName: 'Beetle Reproduction',
          id: 'the-specifics-sub'
        },
        {
          displayName: 'Synthesizing (-)-trans-verbenol',
          id: 'synth'
        }
      ]
    }
  ]

  return (
    <PageLayout isMaxed title='Project Description'>
      <div className='description-top'>
        <div className='description-map'>
          <img alt='' srcSet={Images.MapOrange} />
        </div>
        <div className='description-toc'>
          <TableOfContent content={TocContent} />
        </div>
        <p>
          For our project, we aimed to bioengineer (-)-trans-verbenol, a pheromone that is essential
          for the mountain pine beetle’s life cycle. More specifically, we aimed to genetically
          engineer a strain that would allow us to produce, extract and purify the pheromone to be
          used for monitoring and prevention around this invasive species.
        </p>
        <br /> <br /> <br />
        <Title id='why' title='Why?' />
        <Title isSub id='climate-change' title='Climate change & invasive species' />
        <p>
          Climate change is a huge burden for society and can have drastic effects on multiple
          environments. One of those effects is the unusual proliferation of ravaging insect species
          that can disturb the intricate balance of natural ecosystems.
        </p>
        <p>
          This is especially true in Canada. Here, climate change leads to warmer summers and milder
          winters, making excellent conditions for the multiplication of some ravaging species.
          While small amounts of those insects can sometimes be an integral part of a healthy
          ecosystem, unusually high populations represent direct threats to our forests.
        </p>
        <p>
          While the mountain pine beetle is native to North American forests, it has become invasive
          since the 1990s. This insect can infect various species of pine trees. Once settled on its
          target, the mountain pine beetle digs nesting galleries in the bark which ultimately lead
          to the death of the tree. In small amounts, this beetle is beneficial for the healthy
          renewal of a forest. For instance, it can contribute to the removal of old trees, thus
          promoting the growth of younger trees.
        </p>
        <p>
          Recently, however, hot summers and less harsh winters in Canada greatly favored the
          survival and spread of this beetle. This led to an unprecedented increase of the mountain
          pine beetle population, destroying millions of acres of forest.
        </p>
        <br />
        <Title isSub id='big-losses' title='Big losses in Canada' />
        <p>
          In Canada, British Columbia’s forests are by far the most affected by the mountain pine
          beetle. In a recent outbreak, it is estimated that 40 million acres of British Columbia’s
          forests were ravaged.
        </p>
        <p>
          This has led to huge economic impacts on the Canadian forest industry. For example, in
          2017, it was estimated that 58% of commercially valuable pine trees were lost due to the
          mountain pine beetle. With climate change, this scourge is currently progressing towards
          the east. In recent years, it has been found in Alberta’s forests and even more recently
          in Saskachewan’s forests.
        </p>
        <p>
          By following this trend, this ravaging beetle of North American forests could spread
          throughout the boreal forest, found all across Canada, thus leading to a{' '}
          <b>country-wide epidemic</b>.
        </p>
        <p>
          This represents a major impact on the health of many pine and mixed forests all across
          Canada, which is also a major problem for both ecological and wildlife biodiversity.
          Moreover, the destruction of these large forests severely impairs our ability to cope with
          climate change.
        </p>
        <div className='description-bottom-text-b4'>
          <p>
            As of today, solutions against this ravaging beetle are fairly limited and often involve
            the industrial synthesis of chemical compounds that can attract and kill mountain pine
            beetles.
          </p>
          <br />
          <p>
            This process can however be harmful for the environment, ineffective and inaccurate, as
            it will often lead to the production of multiple chemical isomers.
          </p>
        </div>
      </div>
      <div className='description-bottom'>
        <div className='description-bottom-container'>
          <img srcSet={Images.ForestAll} alt='' />
          <div className='description-bottom-main'>
            <div className='description-bottom-text'>
              <Title id='our-priorities' title='Our Priorities Going Into the Project' />
              <p>
                Our team greatly values the environment, both as a group and as individual members.
                While we care about Canadian forests, we also wanted a more eco-friendly way to
                address the mountain pine beetle problem. We thought that synthetic biology would be
                the answer we were looking for: a more sustainable solution that would allow us to
                synthesize very specific isomers – also providing a more cost efficient alternative.{' '}
              </p>
              <p>
                As of today, solutions against this ravaging beetle are fairly limited and often
                involve the industrial synthesis of chemical compounds that can attract and kill
                mountain pine beetles. This process can however be harmful for the environment,
                ineffective and inaccurate, as it will often lead to the production of multiple
                chemical isomers. We thought that synthetic biology could be a more sustainable
                solution, and could allow the synthesis of very specific isomers, thus providing a
                more efficient alternative.{' '}
              </p>
              <p>
                Reflecting our environmental values and our love for the vast canadian forests, we
                designed PheroSynth, a project that would allow us to give better and more
                environmentally-friendly tools to fight against the mountain pine beetle epidemic
                and protect our beautiful green landscapes.
              </p>
            </div>
            <div className='description-bottom-text'>
              <Title id='the-specifics' title='Our Project' />
              <Title id='the-specifics-sub' revert isSub title='Beetle Reproduction' />
              <p>
                The pheromone (-)-trans-verbenol is essential for the mountain pine beetle’s life
                cycle–namely for reproduction. Female beetles produce it and they use it to mark the
                tree they have settled on. This then attracts male beetles to the trees where they
                will reproduce with females. In the bark of these chosen trees, female beetles will
                build massive nesting galleries in order to safely lay their eggs.
              </p>

              <Title isSub id='synth' revert title='Synthesizing (-)-trans-verbenol' />
              <p>
                Recognizing the great potential of (-)-trans-verbenol to disrupt the mountain pine
                beetle life cycle, conservancy and forest protection organizations have already
                started using this chemical in traps in order to detect early mountain pine beetle
                infestations and quickly react. This pheromone is already produced through
                industrial chemical synthesis, but synthetic biology can provide a more sustainable
                and cost-efficient alternative.
              </p>
              <p>
                {' '}
                Our project aims to bioengineer (-)-trans-verbenol. We used Saccharomyces cerevisiae
                as a biosynthetic chassis for the production of the pheromone. More specifically, we
                aimed to genetically engineer a strain that would allow us to produce, extract and
                purify the pheromone to be used for monitoring and prevention. Using inducible
                promoters, we aimed to induce the expression of 4 enzymes in our biological chassis,
                essential for the synthesis of (-)-trans-verbenol. Our ultimate goal is to build a
                system that would allow an exclusively acellular delivery system of the pheromone in
                the environment, making our solution safe and respectful towards bioethical
                standards.
              </p>

              <p>
                After talking with different experts in order to perfect our project, we realized
                that our work could become a chassis for the synthesis of multiple different
                pheromones, specific for different species of ravaging insects. Indeed, while the
                mountain pine beetle is an alarming threat, several other species of ravaging
                insects also benefit from the hotter canadian summers and milder winters caused by
                global warming. For instance, the eastern spruce budworm or the emerald ash borer
                are also spreading quickly and causing damage to our ecosystems. Importantly, those
                species also produce very specific pheromones that are crucial for their life cycle
                and propagation. Our biosynthetic system for the production of mountain pine
                beetle’s (-)-trans-verbenol could therefore also be used for the synthesis of
                various insect pheromones. This could represent a huge step forward in the fight
                against ravaging species.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Description
