import "@/styles/global.css"

import { Slot } from "expo-router"

import { 
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold 
} from "@expo-google-fonts/roboto"

import { Loading } from "@/components/loading"
import { StatusBar } from "react-native"

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_400Regular,
  })

  return (
    <>
      <StatusBar barStyle="light-content" />
      { fontsLoaded ? <Slot /> : <Loading /> }
    </>
  )
}