import './Home.css'

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Sticky,
  Fade,
  Move,
  MoveIn,
  MoveOut,
  FadeOut
} from 'react-scroll-motion'
import Images from '../../common/Images'
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
import HomeLinks from '../../common/HomeLinks'
import ToTopButton from '../../common/components/ToTopButton/ToTopButton'

function Home () {
  return (
    <div className='home'>
      <ToTopButton />
      <ScrollContainer>
        {/* Chapter 1 */}
        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <div className='ch-container'>
              <div className='ch1-trees'>
                <img srcSet={Images.PineTreeComboGreen} />
              </div>
              <Animator animation={batch(Fade(0, 1), Move(0, 0, 0, -300))}>
                <span className='ch1-text animated-text'>
                  <span className='text-normal one-line'>
                    In 2022 alone, the forest sector contributed more than
                  </span>
                  <br />
                  <br />
                  <span className='home-text text-orange text-big one-line'>
                    25 billion canadian dollars
                  </span>
                  <span className='text-small one-line'>(19B USD)</span>
                  <br />
                  <span className='text-normal one-line'>to the Canadian GDP</span>
                </span>
              </Animator>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1))}>
              <ScrollIndicator index={0}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {/* Chapter 2 */}
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(0, 1), Move(0, 0, 0, -600))}>
            <div className='ch-container'>
              <div className='ch1-trees'>
                <img srcSet={Images.PineTreeComboGreen} />
              </div>
              <div className='ch2-text align-center'>
                <Animator animation={batch(Fade(0, 1), MoveIn(0, 300))}>
                  <span className='text-normal align-center'>
                    <b>Pine trees are an important part of this industry</b>, as they are used to
                    make many types of products like furniture, lumber and paper, among others.
                  </span>
                </Animator>
              </div>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1))}>
              <ScrollIndicator index={1}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {/* Chapter 3 */}
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(0, 1), MoveIn(0, 200))}>
            <div className='ch-container'>
              <div className='ch3-map'>
                <img srcSet={Images.MapGreen} />
              </div>
              <Animator animation={batch(Fade(0, 1), MoveOut(0, -200))}>
                <div className='ch3-text align-center'>
                  <span className='text-normal'>
                    Not only are pine trees important to our economy,{' '}
                    <b>they are also an essential part of our environment</b>: they play an
                    important role in Canada&apos;s ecosystem and increase its natural beauty.
                  </span>
                </div>
              </Animator>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1))}>
              <ScrollIndicator index={2}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {/* Chapter 4 */}
        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <div className='ch-container'>
              <div className='ch3-map'>
                <img srcSet={Images.MapGreen} />
              </div>
              <Animator animation={batch(Fade(0, 1), MoveIn(0, 300), MoveOut(0, -200))}>
                <div className='ch3-text align-center'>
                  <span className='text-normal'>
                    But something is wreaking havoc on canadian pine forests.
                  </span>
                </div>
              </Animator>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1))}>
              <ScrollIndicator index={3}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {/* Chapter 5 */}
        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <div className='ch-container'>
              <div className='ch3-map'>
                <img srcSet={Images.MapGreen} />
              </div>
              <Animator animation={batch(Fade(0, 1), MoveIn(0, 300), MoveOut(0, -200))}>
                <div className='ch5-text align-center'>
                  <span className='text-big uppercase iis one-line'>Invasive insect species</span>
                  <br /> <br />
                  <div className='text-normal'>like the</div>
                  <br />
                  <span className='text-orange text-big one-line'>mountain pine beetle</span>
                  <br />
                  <span className='text-normal'>(MPB)</span>
                  <br /> <br /> <br />
                  {/* <div className='ch5-beetle'>
                    <img srcSet={Images.Beetle} alt='' /></div>
                    */}
                </div>
              </Animator>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1))}>
              <ScrollIndicator index={4}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {/* Chapter 6 */}
        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <div className='ch-container'>
              <div className='ch6-beetle'>
                <Animator animation={batch(MoveIn(0, 300))}>
                  <img srcSet={Images.Beetle} alt='' />
                </Animator>
              </div>
              <div className='ch3-map'>
                <Animator animation={Fade(0, 1)}>
                  <img srcSet={Images.MapOrange} />
                </Animator>
              </div>
              <Animator animation={batch(Fade(0, 1), MoveIn(0, 300), MoveOut(0, -200))}>
                <div className='ch6-text align-center'>
                  <span className='text-normal'>
                    In British Columbia, the westernmost canadian province,{' '}
                    <b>50% of the total volume of commercial lodgepole pine</b>* has been attacked
                    by these beetle since the early 1990s.
                  </span>
                </div>
              </Animator>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1))}>
              <ScrollIndicator index={5}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {/* Chapter 7 */}
        <ScrollPage>
          <Animator animation={batch(Sticky())}>
            <div className='ch-container'>
              <div className='ch6-beetle'>
                <Animator animation={batch(MoveOut(0, 200), FadeOut(1, 0))}>
                  <img srcSet={Images.Beetle} alt='' />
                </Animator>
              </div>
              <div className='ch3-map'>
                <img srcSet={Images.MapOrange} />
              </div>
              <Animator animation={batch(Fade(0, 1), MoveIn(0, 300), MoveOut(0, -200))}>
                <div className='ch6-text align-center'>
                  <span className='text-normal'>
                    Since then, it has affected more than
                    <b>
                      {' '}
                      180 000 km<sup>2</sup>{' '}
                    </b>
                    of forest.
                  </span>
                </div>
              </Animator>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1))}>
              <ScrollIndicator index={6}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {/* Chapter 8 */}
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveOut(0, -400), FadeOut(1, 0))}>
            <div className='ch-container'>
              <div className='ch3-map'>
                <img srcSet={Images.MapOrange} />
                <div className='ch8-beetle'>
                  <Animator animation={batch(Fade(0, 1), MoveIn(-120, 0))}>
                    <img srcSet={Images.Beetle} alt='' />
                  </Animator>
                </div>
                <div className='ch8-beetle'>
                  <Animator animation={batch(Fade(0, 1), MoveIn(-450, 0))}>
                    <img srcSet={Images.Beetle} alt='' />
                  </Animator>
                </div>
                <div className='ch8-beetle'>
                  <Animator animation={batch(Fade(0, 1), MoveIn(-550, 0))}>
                    <img srcSet={Images.Beetle} alt='' />
                  </Animator>
                </div>
              </div>
              <Animator animation={batch(Fade(0, 1), MoveIn(0, 300), MoveOut(0, -200))}>
                <div className='ch7-text align-center'>
                  <span className='text-normal'>
                    And the MPB is <b className='orange'>still on the move</b>. It is gradually
                    making its way <b>north</b> and <b>eastward</b>.
                  </span>
                </div>
              </Animator>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1))}>
              <ScrollIndicator index={7}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {/* Chapter 9 */}
        <ScrollPage>
          <Animator animation={batch(Sticky(), Fade(0, 1), MoveIn(0, 400))}>
            <div className='ch-container'>
              <div className='ch9-tree'>
                <img srcSet={Images.PineTreeWithBeetle} />
              </div>
              <div className='ch9-text align-center'>
                <Animator animation={batch(Fade(0, 1), MoveIn(0, 500), MoveOut(0, -400))}>
                  <span className='text-normal align-center'>
                    One way that researchers have been tracking the spread of insect epidemics like
                    this one is through <b>pheromone traps</b>.
                  </span>
                </Animator>
              </div>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1))}>
              <ScrollIndicator index={8}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {}
        {/* Chapter 10 */}
        <ScrollPage>
          <Animator animation={batch(Sticky(), MoveOut(0, -700), FadeOut(1, 0))}>
            <div className='ch-container'>
              <div className='ch9-tree'>
                <img srcSet={Images.PineTreeWithBeetle} />
              </div>
              <div className='ch9-text align-center'>
                <Animator animation={batch(Fade(0, 1), MoveIn(0, 500))}>
                  <span className='text-normal align-center'>
                    They allow scientists to see how far the spread has gone, along with the
                    concentration of insects in one area.
                  </span>
                </Animator>
              </div>
            </div>
          </Animator>
          <div className='home-scroll-indicator'>
            <Animator animation={batch(Sticky(), Fade(0, 1), MoveOut(0, -700), FadeOut(1, 0))}>
              <ScrollIndicator index={9}></ScrollIndicator>
            </Animator>
          </div>
        </ScrollPage>
      </ScrollContainer>

      <div className='forest-top'>
        <span className='forest-top-text text-normal'>
          <b>
            Currently, pheromones for insects like the MPB are synthesized using chemical means.
          </b>
          <br />
          <b>
            These methods are <span className='text-orange'>more polluting</span> and{' '}
            <span className='text-orange'>less efficient</span> than what can be done with synthetic
            biology.
          </b>
        </span>
        <img srcSet={Images.ForestAll} alt='' />
      </div>

      <div className='forest-bottom'>
        <div className='forest-bottom-secondary'>
          <span className='text-normal'>That&apos;s why we created this project.</span>
          <div className='forest-bottom-logo'>
            <img srcSet={Images.LogoFull} alt='' />
          </div>
          <span className='text-normal'>
            To find a way to better synthesize insect <br /> pheromones with synthetic biology.
          </span>
        </div>
      </div>

      <div className='learn-more text-big'>
        <span>Learn more about our project</span>
      </div>

      <div className='blocks-container'>
        <div className='blocks'>
          {HomeLinks.map((homeLink, idx) => (
            <a href={homeLink.link} className='home-link' key={idx}>
              <div className='home-link-icon'>
                <img srcSet={homeLink.icon} alt='' />
              </div>
              <div className='home-link-description'>
                <span>{homeLink.title}</span>
                <span>{homeLink.description}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
