import Accordion from '../../common/components/Accordion/Accordion'
import ImageWithCaption from '../../common/components/ImageWithCaption/ImageWithCaption'
import PageLayout from '../../common/components/PageLayout/PageLayout'
import PageLink from '../../common/components/PageLink/PageLink'
import PineTreeCombo from '../../common/components/PineTreeCombo/PineTreeCombo'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import Title from '../../common/components/Title/Title'
import Images from '../../common/Images'
import './Implementation.css'

function Implementation () {
  return (
    <PageLayout title='Implementation'>
      <p>
        At the start of our project, PheroSynth was supposed to be about synthesizing the mountain
        pine beetle (MPB) aggregation pheromone biologically. We thought we would only have to make
        sure we could produce the pheromone with a modified yeast strain. If that were the case, our
        project’s implementation would have been based on the current chemical synthesis practices.{' '}
      </p>
      <p>
        However, the further we dove into this project, the more we felt like it would be a useful
        blueprint for similar future projects. We realised this thanks to the feedback we got from
        our <PageLink src='https://2022.igem.wiki/ulaval/human-practices'>Human Practices</PageLink>
        , which we recommend you to go read about before this page for a bit more context.
      </p>
      <p>
        On this page, we describe how the MPB pheromone is currently being implemented in the wild
        and how our project could go beyond that by helping with other invasive species.
      </p>
      <PineTreeCombo />
      <TextSeparator />
      <Title title='Current Implementation Methods' />
      <Title isSub title='Trapping the Mountain Pine Beetle' />
      <p>
        The main way the MPB pheromone is currently implemented in the real world is by using traps.
        These traps are strategically placed in the forest to attract the targeted insects to
        certain spots. This method is currently used by companies making pheromones via chemical
        synthesis.
      </p>
      <p>
        Our project is unique because synthetic biology has never been used for pheromone synthesis
        before. However, even if the production methods are vastly different between chemical and
        biological synthesis, the end product—the pheromone—acts in the same way. Therefore, we did
        not need to reimagine the entire implementation process.
      </p>
      <p>
        All experts we talked to as part of our{' '}
        <PageLink src='https://2022.igem.wiki/ulaval/human-practices'>Human Practices</PageLink>{' '}
        recommended the Lindgren funnel traps, which is the most common trap used for MPB
        monitoring. We would only need to replace the chemically produced pheromone at the bottom of
        the trap with our biologically produced pheromone.
      </p>
      <Title isSub title='Challenges With the Traps' />
      <p>However, there are some challenges with the use of these traps:</p>
      <ol className='implementation-ol'>
        <li>
          <b>Unknown coverage area:</b>
          <ul>
            <li>
              The coverage area of our pheromone is unknown, so we do not know how many traps would
              be needed in the affected forest zones. It might not cover the same area as the
              chemically produced pheromone.
            </li>
            <li>This leads to another challenge.</li>
          </ul>
        </li>
        <li>
          <b>Lack of infrastructure</b>
          <ul>
            <li>
              There is insufficient infrastructure in place in the province of Quebec, our Team’s
              home province of Canada, for the development and implementation of such traps.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        We could argue that the second challenge is not a problem for now, because MPB has not made
        its way to Quebec yet. While affected provinces (British-Columbia, Alberta, and
        Saskatchewan) have the infrastructure for those traps, if we want to tackle other invasive
        species (see Workflow below), we will have to take this into consideration.
      </p>
      <p>
        As for our project’s repercussions on the environment, we described in{' '}
        <PageLink src='https://2022.igem.wiki/ulaval/safety'>Safety</PageLink> that our pheromone
        would be specific to the MPB and would not disturb other species. The modified yeast strain
        would also not be released in the wild as we would only use the pheromone it produces inside
        traps.
      </p>
      <TextSeparator />
      <Title title='Optimizing our project for large-scale pheromone production' />
      <Title isSub title='Using Central Composite Design (CCD)' />
      <Accordion title='Theoretical background: What is CCD?'>
        <p>
          Optimizing represents enhancing the overall performance of a process, a product, or a
          system with the intention to acquire the maximum benefit from it (Araujo & Brereton,
          1996). The optimization term has been widely utilized in different topics as a means of
          finding conditions at which to apply a procedure that obtains the most useful response.{' '}
        </p>

        <p>
          In the traditional optimization method, the effect of one parameter is monitored at a time
          on an experimental output (i.e., response). In this method, the other parameters are kept
          constant while just one is changed. This optimization method is known as &quot;one factor
          optimization&quot;.
        </p>

        <p>The one-factor optimization has two main disadvantages:</p>
        <ol>
          <li>It does not take into account the interaction effects between parameters studied.</li>
          <li>It increases the number of experimental tests. </li>
        </ol>

        <p>
          Therefore, these disadvantages lead to a lack of fully investigating the effects of
          parameters on the response and increase the time/costs of the experiments (Bezerra et al.,
          2008; Kergaravat et al., 2012).
        </p>

        <p>
          In order to solve these problems, optimization using multivariate statistical techniques
          is proposed. One of the most popular multivariate techniques is the{' '}
          <b>response surface methodology (RSM)</b>. RSM is a collection of statistical and
          mathematical techniques based on the fit of a polynomial equation to the experimental data
          (Said & Amin, 2015). It can be well applied when a response or a set of responses of
          interest are affected by various parameters. Therefore, the objective of this technique is
          to simultaneously optimize the levels of these parameters to achieve the best efficiency
          (Khuri & Siuli, 2010). RSM employs an experimental design approach (e.g., central
          composite, three-level factorial, Box–Behnken, and Doehlert designs) to fit a model.
          Afterward, the proposed model is revealed utilizing the diagnostic checking tests provided
          by analysis of variance (ANOVA). The response surface plots can be used to investigate the
          surfaces and position the optimum.
        </p>
        <p>
          The central composite design (CCD) is the most commonly used fractional factorial design
          employed in RSM. In CCD, the center points are augmented with a group of axial points
          named star points. With this design, quickly first-order and second-order terms can be
          estimated (Rezaei et al., 2022).{' '}
        </p>

        <p>The most significant advantages of this type of optimization model are:</p>
        <ol>
          <li>It is more accurate.</li>
          <li>
            There is no need for a three-level factorial experiment for building a second-order
            quadratic model (Bhattacharya, 2021).
          </li>
        </ol>
        <p>
          The different steps involved in CCD are illustrated in the following figure (Figure 1):
        </p>
        <div className='implementation-fig1'>
          <ImageWithCaption
            figure={1}
            caption='Central composite design flow diagram by Bhattacharya, 2021'
            captionPadding={10}
            imagePadding={0}
            src={Images.Implementation1}
          />
        </div>
      </Accordion>
      <p>
        We decided to use a CCD to obtain a response surface of our pheromone’s yield according to
        different experimental conditions (shown in <b>Figure 3</b>). This would allow us to define
        the optimal conditions for our experiments.{' '}
      </p>

      <p style={{ marginBottom: '0' }}>
        We identified the following experiment conditions* based on common practices in a{' '}
        <i>S. cerevisiae</i> growth setting or in literature (when mentioned):
      </p>
      <ul className='implementation-ul-2' style={{ marginTop: '0' }}>
        <li>Growth temperature: [4-(28-35)-50] °C</li>
        <li>Growth pH: [4-(6.5)] (Narendranath et al., 2005; Yalcin & Yesim Ozbas, 2008)</li>
        <li>Oxygen content: [ 10 - 20 mg/L ] %</li>
        <li>Incubation time: [24-36-48-(72)] hours</li>
        <li>Medium composition: dextrose [1-(2)-10] % (m/v) (Olivares-Marin et al., 2018)</li>
      </ul>
      <div className='implementation-colored'>
        <p>
          * The range for each condition is indicated between [ and ], with optimal values noted
          between ( and ). For example, [1-(5)-10] would mean a range from 1 to 10 with an optimal
          value of 5.{' '}
        </p>
      </div>
      <p>
        Unfortunately, during our project we were not able to reach that step of production
        optimization as we stopped our wet-lab work before being able to obtain the monoterpene
        producing <i>S. cerevisiae</i> strains. This obviously kept us from doing the CCD, since it
        relies on experimental data.
      </p>
      <TextSeparator />
      <Title title='Giving Future Projects a More Solid Foundation' />
      <Title isSub title='Making the Calculations' />
      <p>
        However, we still wanted to show the underlying principle for other teams to consider using
        this statistical analysis to optimize and better implement their projects whether they are
        on the subject of pheromone, biomolecules, proteins and what else they could think of. So
        here we show what could be obtained when considering two factors (here it’s temperature and
        pH). To make it clear,{' '}
        <b>the following results are extrapolation of yields shown in literature</b> (Narendranath
        et al., 2005; Yalcin & Yesim Ozbas, 2008; Chen et al., 2013),{' '}
        <b>and they do not represent reality. They are made up results used as an example.</b>
      </p>

      <p>
        We employed a full-factorial design with two factors (Temperature and pH), 5 levels (-α, -1,
        0, 1, α) and 1 replicate all of which were organised in 1 block. For simplicity, here the α
        and 1 level as well -α and -1 are the same. So technically, only 3 levels are used among the
        5 specified. But, usually, α would equal 1.41421. The level values -α, -1, 0, 1, α
        correspond respectively to 10, 10, 30, 50 and 50 for the temperature and 3, 3, 5, 7 and 7
        for the pH. In the end, we obtained 13 runs of experimental conditions leading to possibly
        different monoterpene yields, the dependent variable of the experiment. After entering the
        hypothetical yields (interpolation from literature) for all the 13 runs and analysing the
        set of data in function of the experimental conditions, we obtained the following results:
      </p>
      <p>
        <b>
          Again, the following are not real experimental results, but extrapolation of yields shown
          in literature. This only serves the purpose of being an example.
        </b>
      </p>
      <div className='implementation-fig2'>
        <ImageWithCaption
          isTable
          captionPadding={5}
          imagePadding={10}
          caption='Predicted product yield in function of both temperature and pH.'
          src={Images.ImplementationTable}
        />
      </div>
      <div className='implementation-fig3'>
        <ImageWithCaption
          figure={2}
          captionPadding={5}
          imagePadding={10}
          caption='Statistical analysis of variance and equation of the response surface curve.'
          src={Images.Implementation2}
        />
      </div>
      <div className='implementation-fig2'>
        <ImageWithCaption
          figure={3}
          captionPadding={5}
          imagePadding={10}
          caption='Response surface curve of the predicted CCD analysis of values from Table 1.'
          src={Images.Implementation3}
        />
      </div>
      <p>
        Here we can observe that the yield would be at its highest at 30 °C, pH 5 based on the
        predicted results presented above.
      </p>

      <p>
        In the end, this provides an overview of what could have been done if we were able to reach
        that step of optimisation. This clearly shows the power of such an analysis: it decreases
        the number of experiments compared to what would be required without this statistical
        method.
      </p>
      <TextSeparator />
      <Title isSub title='Proposing a Workflow for Future Projects' />
      <ImageWithCaption
        captionPadding={0}
        imagePadding={0}
        caption=''
        hasBackground
        src={Images.ImplementationWorkflow}
      />
    </PageLayout>
  )
}

export default Implementation
