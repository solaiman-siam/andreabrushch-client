import { RouterProvider } from "react-router";
import { routes } from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ConfigProvider } from "antd";
import { antdConfig } from "./styles/antd";


function App() {
  return (
    <>
      <ConfigProvider theme={antdConfig}  >
        <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
      </ConfigProvider>
    </>
  );
}

export default App;
