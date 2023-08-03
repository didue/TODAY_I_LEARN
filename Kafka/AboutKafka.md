# Apache Kafka

## Apache Kafka란?
- 분산 스트리밍 플랫폼
- 데이터 파이프 라인 구성시, 주로 사용되는 오픈소스 솔루션
- 대용량의실시간 로그처리에 특화되어 있는 솔루션
- 데이터의 유실없이 안전하게 전달하는 것이 주목적인 메세지 시스템
- 클러스트링이 가능하므로 Fault-Tolerant한 안정적인 아키텍처와 빠른 퍼포먼스로 데이터를 처리
- 수평적으로 서버의 Scale-Out이 가능함

* Falut-Tolerant : 시스템 내 장애가 발생하도라도 시스템에 지장을 주지않도록 설계된 시스템 
* Scale-Out : 서버의 대수를 늘려서 성능을 향상하는 방법


## 카프카의 탄생 배경
- 실시간 트랜잭션 처리(OLTP)와 비동기 처리가 동시에 이루어지는 시스템에서 통합된 전송영역 부재로 인한 시스템 복잡도 증대 
- 시스템 복잡도 증대로 인한 운영업무 작업시 많은 작업 소요
- OLTP 데이터베이스, 아파치 하둡, 모니터링 시스템, key-value 저장소 등 다양한 데이터 시스템들이 통합되지 않은 서로 다른 파이프라인을 가지고있어 데이터 통합분석을 위한 데이터 파이프라인 연결시 데이터 포맷 및 처리방식 등이 달라 파이프라인 확장 및 조정이 어려우며 시스템간 데이터가 불일치하는 문제 발생


## 카프카 특징 
1) 고가용성(High Availavility)
2) 확장성(Scalability)
3) 디스크 순차저장 및 처리(Sequential Store and Process in Disk) 
4) 분산처리(Distributed Processing)

## 카프카 사용이유
1) 병렬처리엥 의한 데이터 처리율 향상

아래의 카프카 아키텍처에 따라 데이터를 병렬로 처리하므로 데이터를 빠르고 효과적으로 처리가 가능. 디스크에 메시지가 순차적으로 적재하기 때문에 임의적인 접근(`random access`) 방식보다 훨씬 더 빠르게 데이터를 처리

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99C4604A5C04D88805)

2) 데이터 유실방지 

디스크에 적재되기 때문에 만약 불의의 사고로 서버가 장애가 발생됬을 때도 데이터가 유실되는 일 없이 재시작하여 기존 데이터를 안정적으로 처리 가능

3) 클러스터링에 의한 고가용성 서비스

Scale-Out이 가능하여 시스템 확장이 용이하며, 어떤 하나 혹은 몇개의 서버가 다운이 되도 서비스 중단 없이 운용 가능


## 아파치 카프카 용어

- Consumer Group : Consumer의 집합. 카프카에서는 컨슈머 그룹으로서 데이터를 처리하며, 그룹안의 컨슈머 숫자만큼 파티션의데이터를 분산처리하게됨. (Consumer x N)
- Producer(프로듀서,publisher) : 데이터를 발생시키고 Kafka Cluster에 적재하는 주체
- Kafka Cluster = 카프카 서버로 이루어진 클러스터(Kafka Broker + Zookeeper) x N
- Broker(브로커) : Kafka 애플리케이션이 설치되어 있는  서버
- Zookeeper(주키퍼) : 분산 코디네이션 시스템(Kafka 서버 구성에 있어, 필수). 카프카 브로커를 하나의 클러스터로 코디네이팅 하는 역할.
- Consumer(subscriber) : Kafka Cluster로 부터 데이터를 읽어오는 주체
- Topic(토픽) : Kafka Broker에서 사용하는 데이터(메세지)의 카테고리이며, Partition의 집합, Partition x N
- Partition(파티션) : 각 토픽당 데이터를 분산처리하는 단위. 메세지의 집합, Topic으로 묶여서 관리됨. Message x N
- Offset = Partition마다 관리되는 메세지의 인덱스
- Leader = 메세지를 읽고 쓰는 것이 가능한 partition
- Follower = Leader의 복제이며, 잠재적 leader