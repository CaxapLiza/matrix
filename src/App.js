import {Route, Routes} from "react-router";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="texteditor" element={<TextEditor />}/>
          <Route path="matrix" element={<MatrixLayout />}>
            <Route path="average" component={<Average />} />
            <Route path="rang" component={<Rang />} />
            <Route path="subtraction" component={<Subtraction />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
