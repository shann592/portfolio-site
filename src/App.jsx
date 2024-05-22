import Header from './components/Header'
import Footer from './components/Footer'
import LocationProvider from './components/LocationProvider'
import RoutesWithAnimation from './components/RoutesWithAnimation'

export default function App() {
  return (
    // <div className="h-screen grid grid-rows-[1000px,80px] md:grid-rows-[60px,600px,auto]">
    <div className="h-screen grid grid-rows-[auto,80px] md:grid-rows-[auto,80px]">
      <Header />
      <main className="bg-blue-50 dark:dark-main-bg-color dark:text-white">
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </main>
      <Footer />
    </div>
  )
}
