// befor use this hook, you should install react-device-detect
// >> npm install react-device-detect
import {isMobile } from 'react-device-detect';
import { useEffect, useState } from "react";


export const usePrompt = () => {

    
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  const handleBeforeInstallPrompt = (event: any) => {
    event.preventDefault();
    setDeferredPrompt(event);
  };

  const handleInstallApp = () => {
    if (isMobile && isIOS()) {
      alert("iOS 기기에서는 지원하지 않습니다. iOS 기기에서는 '사파리 브라우저 > 옵션 > 홈 화면 추가' 버튼을 통해 설치해주세요.");
    }

    if (deferredPrompt) {
      deferredPrompt.prompt();
  
      deferredPrompt.userChoice.then((choiceResult: { outcome: string; }) => {
        if (choiceResult.outcome === "accepted") {
          console.log("사용자가 앱 설치를 동의했습니다.");
        } else {
          console.log("사용자가 앱 설치를 동의하지 않았습니다.");
        }
  
        setDeferredPrompt(null);
      });
    }
  }

  const isIOS = () => {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      console.log("This is an iOS device.");
      return true;
    } else {
        console.log("This is NOT an iOS device!");
        return false;
    }
  }


  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
  
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return {deferredPrompt, handleInstallApp};
}
