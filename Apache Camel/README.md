# Apache Kafka

- 개요
소스/타겟 애플리케이션 증가로 데이터 전송라인 복잡 및 파편화 이슈 발생
이에 따른 유지보수 어려움과 복잡함을 해결하기위해 나옴

![Alt text](image-1.png)

`kafka`의 queue와 같은 역할을 하는 `topic`에 데이터를 넣는 역할은 `producer`, 가져가는 역할은 `consumer`가 한다. 
`producer`와 `consumer`는 라이브러리 형태로 제공

카프카는 낮은 지연과 높은 처리량을 지원하기때문에 빅(Big) 데이터 처리에는 kafka를 도입하는게 유리
<br/><br/>
## Kafka Topic
카프카에는 다양한 데이터가 들어갈 수 있는데, 그 공간을 `topic`이라고 함
AMQP와는 동작 방식이 상이함

`kafka`에서는 topic을 여러개 생성할 수 있는데, table과 파일시스템의 폴더와 유사한 성질을 가짐
`topic`은 `producer`가 넣고 `consumer`가 가져가는 형태로 이용됨. 
목적에 따라 이름이 부여되는데 클릭로그, send_sms, location_log 등 이용하는 곳을 정확히 명시하는게 좋음

![Alt text](image.png)

하나의 `topic`은 여러개의 `partition`으로 구성될 수 있으며, 파티션의 번호는 0번부터 시작하여 queue와 같이 데이터가 partition 끝에서부터 저장됨.

`consumer`는 파티션의 데이터가 오래된 순서부터 가져가게 되는데, 이때 `consumer`가 `record`를 가져가도 데이터가 삭제되지 않음.

![Alt text](image-2.png)

`partition`이 늘어나면 추가 데이터를 저장하는 방식은 `producer`가 데이터를 보낼때 지정하는 key로 구분된다.

- key가 `null`이고, 기본 파티셔너 사용할 경우 <br/>
-> `라운드로빈(Round robin)`으로 할당
- key가 있고, 기본 파티셔너 사용할 경우 <br/>
-> 키의 `Hash` 값을 구하고 특정 파티션에 할당

<br/>

이때 `partition`은 늘릴 수 있지만 줄일 수 없다. 단 `partition`의 `record`는 옵션에 따라 일정 기간 혹은 용량동안 저장된 뒤 데이터가 삭제될 수 있도록 설정할 수 있다.

<br/><br/>