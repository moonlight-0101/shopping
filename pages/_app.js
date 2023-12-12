import Footer from '../components/homepage/components/Footer'
import Header from '../components/homepage/components/Header'
import Topbar from '../components/homepage/components/Topbar'
import { CartContext } from  '../context/CartContext'
import ProductCart from '../context/ProductCart'
import { UserNumber} from '../context/UserNumber'

import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return(
   <>
<div dir='rtl'>

<CartContext>
  <ProductCart>
<UserNumber>
  <Topbar/>
  <Header/>
<Component {...pageProps} />
<Footer/>
</UserNumber>
</ProductCart>
</CartContext>

</div>
</>
  )


}

export default MyApp
