import { 
  useRef,
  useEffect, 
  useState, 
  useCallback 
} from 'react'


export function useFullScreen() {
  // 1 useRef
  const ref = useRef()

  // 2. useCallback
  const isFullScreen = useCallback(() => {
    if(ref.current) {
      return Boolean(
        document.fullscreenElement === ref.current ||
        document.mozFullScreenElement === ref.current ||
        document.webkitFullscreenElement === ref.current ||
        document.msFullscreenElement === ref.current
      )
    }
  
    return Boolean(
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement ||
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.fullScreenMode
    )
  }, [])

  // 3. useState
  const [fullScreen, setFullScreen] = useState(isFullScreen())

  // 4. open and close
  function open() {
    const el = ref.current || document.documentElement

    if (el.requestFullscreen) return el.requestFullscreen()
    if (el.mozRequestFullScreen) return el.mozRequestFullScreen()
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen()
    if (el.msRequestFullscreen) return el.msRequestFullscreen()
  }

  function close() {
    if (document.exitFullscreen) return document.exitFullscreen()
    if (document.mozCancelFullScreen) return document.mozCancelFullScreen()
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen()
    if (document.msExitFullscreen) return document.msExitFullscreen()
  }

  // 5. effect, note the change if reference changes
  useEffect(() => {
    function handleChange() {
      setFullScreen(isFullScreen())
    }
  
    document.addEventListener('webkitfullscreenchange', handleChange, false)
    document.addEventListener('mozfullscreenchange', handleChange, false)
    document.addEventListener('msfullscreenchange', handleChange, false)
    document.addEventListener('MSFullscreenChange', handleChange, false) // IE11
    document.addEventListener('fullscreenchange', handleChange, false)

    // 6. clean up
    return () => {
      document.removeEventListener('webkitfullscreenchange', handleChange)
      document.removeEventListener('mozfullscreenchange', handleChange)
      document.removeEventListener('msfullscreenchange', handleChange)
      document.removeEventListener('MSFullscreenChange', handleChange)
      document.removeEventListener('fullscreenchange', handleChange)
    }
  }, [isFullScreen]) // re-run

  // 6. cool
  return {
    ref,
    fullScreen,
    open,
    close,
    toggle: fullScreen ? close : open
  }
}