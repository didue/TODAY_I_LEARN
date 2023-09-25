

## React의 `State(상태)` 관리

### `useState`

`React.useState(default value)` 문법을 통해 state 설정
function은 `[key, setKey]` 형태의 2개의 array를 리턴

```
ex)
const [value, setValue] = React.useState(0);
```


### `useContext`

`Redux`는 애플리케이션의 상태를 관리하기 위한 견고하고 안정적인 솔루션을 제공.
여기저기 흩어져있는 상태를 체계화하여 애플리케이션을 관리하도록 도움

![엘리멘터리 도움 구조](https://yamoo9.github.io/react-master/images/why-using-redux.jpg)

`hierarchy`에 발생하는 방법을 `props`로 할 경우 하위 node에서 값을 이용해야할 경우 버블링 단계 많음

`redux`는 외부에 `store`라는 상태 저장소를 두고 하부의 node가 값을 변경시에도 바로 `store`에 접근해서 필요한 node로 접근하여 상태값 사용했어야만 함

`useContext`는 context가 제공하는 상태와 상태관리자를 전체 맥락에 있는 node가 사용할 수 있게 하는 것


How to use `useContext`
```

const AppContext = React.createContext();   //1)Context생성

...

class App () {
    return (
        //2)AppContext로 이용범위 구성
        <AppContext.Provider>
            <Component1/>
            <Component2/>
        </AppContext.Provider>
    );
}

class Component1() {
    const [a,b,c,d] = React.useContext(AppContext); //3)Context이용 
    ...
}
...
```
