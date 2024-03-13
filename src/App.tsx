import { createBrowserRouter, createRoutesFromElements, Route , RouterProvider, useRouteError} from "react-router-dom"
import HomePage from "./HomePage";
import AppLayout from "./AppLayout";

function ErrorBoundary() {
const error = useRouteError();
console.error(error);
  return (
    <div>Hata Oluştu!, Konsolu Kontrol Et!</div>
  )
}

function App() {
  const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<AppLayout/>} errorElement={<ErrorBoundary/>}>
        <Route index element={<HomePage/>}/>
        <Route path="*" element={<HomePage/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  )
}

export default App
