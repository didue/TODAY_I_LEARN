## 활성 탭에 스크립트 삽입
### 확장프로그램 초기화
확장프로그램은 서비스워커를 사용하여 백그라운드에서 브라우저 이벤트를 모니터링 할 수 있다. 서비스워커는 이벤트를 처리하고 필요하지 않을 때 종료되는 특수 자바 스크립트 환경이다. 

먼저 `manifest.json` 파일에 서비스워커를 등록한다. 
```json
{
    ...
    "background" : {
        "service_worker" : "background.js"
    }
}

```

`background.js` 라는 파일을 만들고 다음의 코드를 추가한다.
```javascript
chrome.runtime.onInstalled.addListener(() => {
    ....
})
```

`서비스워커`가 수신 대기할 첫번째 이벤트는 `runtime.onInstalled()`이다. 
이 메서드를 사용하면 프로그램이 초기 상태를 설정하거나, 설치시 일부 태스크를 완료할 수 있다. 


### 현재 탭의 상태 추적

