import "./App.css"
import ClassCounter from "./component/ClassCounter"
import CustomHook from "./component/CustomHook"
import HooksCounter from "./component/HooksCounter"
import MainComponent from "./component/MainComponent"
import UseCallbackHook from "./component/UseCallbackHook"
import UseEffectHook from "./component/UseEffectHook"
import UseEffectHook2 from "./component/UseEffectHook2"
import UseLayoutEffectHook from "./component/UseLayoutEffectHook"
import UseMemoHook from "./component/UseMemoHook"
import UseReducerHook from "./component/UseReducerHook"
import UseRefHook from "./component/UseRefHook"
import UseRefHook2 from "./component/UseRefHook2"
import UseStateHook from "./component/UseStateHook"
import LoginContextProvider from "./context/LoginContextProvider"

//1st: Create Context

function App() {
  return (
    <div className="App">
      <h1>
        <u> UseState Hook</u>
      </h1>
      <ClassCounter />
      <HooksCounter />
      <UseStateHook />
      <hr></hr>

      <h1>
        <u> UseEffect Hook</u>
      </h1>
      <UseEffectHook />
      <UseEffectHook2 />
      <hr></hr>

      <h1>
        <u> UseContext Hook</u>
      </h1>
      {/* 2nd: Provide Context */}
      <LoginContextProvider>
        <MainComponent />
      </LoginContextProvider>
      <hr></hr>

      <h1>
        <u> UseRef Hook</u>
      </h1>
      <UseRefHook />
      <UseRefHook2 />
      <hr></hr>

      <h1>
        <u> UseReducer Hook</u>
      </h1>
      <UseReducerHook />
      <hr></hr>

      <h1>
        <u> UseLayoutEffect Hook</u>
      </h1>
      <UseLayoutEffectHook />

      <h1>
        <u> UseMemo Hook</u>
      </h1>
      <UseMemoHook />
      <hr></hr>

      <h1>
        <u> UseCallback Hook</u>
      </h1>
      <UseCallbackHook />
      <hr></hr>

      <h1>
        <u> Custom Hook</u>
      </h1>
      <CustomHook />
    </div>
  )
}

export default App
