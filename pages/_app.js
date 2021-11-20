import '../styles/globals.css'
import {Provider} from 'next-auth/client'
import {RecoilRoot, atom} from 'recoil'


function MyApp({ Component, pageProps }) {  
  return (
  <Provider session={pageProps.session}>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </Provider>
  )
}

export const navbarState = atom({
  key: 'navbarState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export default MyApp
