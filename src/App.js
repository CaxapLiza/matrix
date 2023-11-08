import {Route, Routes} from "react-router";
import MainLayout from "./layouts/MainLayout";
import TextEditor from "./pages/textEditor/TextEditor";
import MatrixLayout from "./layouts/MatrixLayout";
import MatrixRank from "./pages/matrix/MatrixRank";
import MatrixSubtraction from "./pages/matrix/MatrixSubtraction";
import MatrixMean from "./pages/matrix/MatrixMean";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="texteditor" element={<TextEditor />}/>
          <Route path="matrix" element={<MatrixLayout />}>
            <Route path="mean" element={<MatrixMean />} />
            <Route path="rank" element={<MatrixRank />} />
            <Route path="subtraction" element={<MatrixSubtraction />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
