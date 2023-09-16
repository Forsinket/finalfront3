import "../Styles/footerStyles.css"


const Footer = () => {
  return (
    <footer>
      <div className='footer-logo-and-icons'>
        <img className='footer-logo' src="/images/DH.png" alt="" width={200}/>
        <div>
          <a href="https://www.whatsapp.com" target="_blank"><img className='footer-icons' src="/images/ico-whatsapp.png" alt="" /></a>
          <a href="https://www.instagram.com" target="_blank"><img className='footer-icons' src="/images/ico-instagram.png" alt="" /></a>
          <a href="https://www.facebook.com" target="_blank"><img className='footer-icons' src="/images/ico-facebook.png" alt="" /></a>
          <a href="https://www.tiktok.com" target="_blank"><img className='footer-icons' src="/images/ico-tiktok.png" alt="" /></a>
        </div>
    </div>
</footer>
  )
}

export default Footer