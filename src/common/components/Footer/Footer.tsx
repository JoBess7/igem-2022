import Images from '../../Images'
import './Footer.css'

function Footer () {
  return (
    <footer>
      <div className='footer-left'>
        <img alt='' srcSet={Images.FooterLogo} />
        <div className='footer-socials-sep'></div>
        <div className='footer-socials'>
          <a href='https://www.facebook.com/equipeiGEMULaval/'>
            <img srcSet={Images.LogoFB} alt='' />
          </a>
          <a href='https://www.instagram.com/igem_ulaval/'>
            <img srcSet={Images.LogoInsta} alt='' />
          </a>
        </div>
      </div>
      <div className='footer-right'>
        <img srcSet={Images.Commandites} alt='' />
      </div>
      <div className='footer-bottom'>
        <span>
          Repository:{' '}
          <a href='https://gitlab.igem.org/2022/ulaval'>https://gitlab.igem.org/2022/ulaval</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
