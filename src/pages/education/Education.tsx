import PageLayout from '../../common/components/PageLayout/PageLayout'
import TextSeparator from '../../common/components/TextSeparator/TextSeparator'
import Title from '../../common/components/Title/Title'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import './Education.css'
import Images from '../../common/Images'

function Education () {
  const images = [
    Images.Education_1,
    Images.Education_2,
    Images.Education_3,
    Images.Education_4,
    Images.Education_5,
    Images.Education_6,
    Images.Education_7,
    Images.Education_8,
    Images.Education_9,
    Images.Education_10,
    Images.Education_11
  ]

  return (
    <PageLayout title='Education & Communication'>
      <p>
        Sharing is caring, and here at iGEM ULaval, we believe in sharing our knowledge through
        science communication. We understand the way communities interact with science has a huge
        impact on science itself. Therefore, we strive to have a positive impact on our communities
        by sharing with them the tools and knowledge to better grasp what scientists are doing and
        how science can help them.{' '}
      </p>

      <TextSeparator />

      <Title isSub title='Patro de Charlesbourg - Summer Camp Science Outreach Activity' />

      <p>
        On July 11 2022, we organised a science outreach activity for an audience of over two
        hundred children, aged between seven to eight years old, at the Patro de Charlesbourg Camp.
        The Patro de Charlesbourg is an organization offering fun and educational activities for
        young people up to 12 years old to entertain them during the summer or school holidays.{' '}
      </p>
      <p>
        The activity title was <i>Super Microbes Day</i>. Through this workshop, we introduced
        children to biotechnology and synthetic biology, as well as to their uses to solve important
        issues. The kids expressed their creativity by drawing and inventing microorganisms with
        specific &quot;powers&quot; to solve an issue that interested them, such as digesting food
        or moving quickly. They were also able to understand and have fun with biofilms and
        bioluminescence.
      </p>

      <p>
        This workshop gave us important lessons on scientific communication. Through this project,
        we were able to develop abilities such as choosing the right words to help young people
        understand, making the presentation interactive and stimulating children intellectually. The
        children gave us very encouraging and positive feedback, and we might have created new
        vocations and future scientists.{' '}
      </p>

      <div className='education-carousel'>
        <CarouselProvider
          interval={4000}
          isPlaying
          lockOnWindowScroll
          naturalSlideWidth={100}
          naturalSlideHeight={120}
          totalSlides={images.length}
        >
          <Slider>
            {images.map((image, index) => (
              <Slide index={index} key={image}>
                <img srcSet={image} key={image} />
              </Slide>
            ))}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </div>

      <TextSeparator />

      <Title isSub title='Level-Up Patras-Thessaloniki - Stockholm - ULaval' />

      <div className='education-up'>
        <p>
          Were you once asked what you were working on, and when you replied that you were part of a
          university team competing in the world&apos;s largest synthetic biology competition,
          received confused looks?
        </p>

        <p>
          To answer this question we collaborated with three other iGEM teams: iGEM Patras, iGEM
          Thessaloniki, iGEM Stockholm. Wishing to share science with everyone in a playful and
          simplified way, we produced 4 pamphlets explaining in a few words or pictures our
          conception of synthetic biology. Our publications were aimed at four audiences : children,
          teenagers, the general public, and STEM students, thus reaching a wide range of people.
          Each audience had a pamphlet designed and written according to their understanding of
          science.
        </p>

        <img className='education-image-up-right' srcSet={Images.ImageUp} />

        <p>
          The pamphlet addressed to children uses a comic strip format to visually show the reader
          what synthetic biology implies. In addition, it compares the inside of a microorganism to
          a factory and describes how bacterias can behave like “superheroes” when they help us
          solve problems.
        </p>
        <p>
          The pamphlet for teenagers defines synthetic biology and describes many applications of
          the science. Also, synthetic biology fun facts are integrated into the pamphlet to keep
          the tone light and interesting.
        </p>
        <p>
          The pamphlet aimed at educating the general public uses the analogy of a car to explain
          how a microorganism can be engineered to accomplish new functions. Furthermore, it
          explores the potential of this science in solving the challenges of tomorrow.
        </p>
        <p>
          The pamphlet addressed to STEM students defines synthetic biology and genome editing. It
          highlights the differences between the two and explains the role of recombinant plasmids
          in the creation of artificial DNA.
        </p>

        <p>
          Being in the digital age, we can imagine several improvements in the future of this
          project to make the collaboration accessible to all, both in comprehension and ability to
          access the information. These could take the form of short videos or audio files.
        </p>

        <div className='education-image-up-bottom'>
          <img srcSet={Images.ImageUp} />
        </div>
      </div>
    </PageLayout>
  )
}

export default Education
