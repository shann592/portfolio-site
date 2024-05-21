import Header from './components/Header'
import Footer from './components/Footer'
import LocationProvider from './components/LocationProvider'
import RoutesWithAnimation from './components/RoutesWithAnimation'

export default function App() {
  return (
    <div className="h-screen grid grid-rows-[1000px,80px] md:grid-rows-[60px,600px,auto]">
      <Header />
      <main className="bg-blue-50">
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </main>
      <Footer />
    </div>
  )
}
