import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FormulaResultList } from "./formulaResult/FormulaResultList";
import { FormulaResultCreate } from "./formulaResult/FormulaResultCreate";
import { FormulaResultEdit } from "./formulaResult/FormulaResultEdit";
import { FormulaResultShow } from "./formulaResult/FormulaResultShow";
import { ExcelFileList } from "./excelFile/ExcelFileList";
import { ExcelFileCreate } from "./excelFile/ExcelFileCreate";
import { ExcelFileEdit } from "./excelFile/ExcelFileEdit";
import { ExcelFileShow } from "./excelFile/ExcelFileShow";
import { CellList } from "./cell/CellList";
import { CellCreate } from "./cell/CellCreate";
import { CellEdit } from "./cell/CellEdit";
import { CellShow } from "./cell/CellShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ExcelToHTMLForm"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="FormulaResult"
          list={FormulaResultList}
          edit={FormulaResultEdit}
          create={FormulaResultCreate}
          show={FormulaResultShow}
        />
        <Resource
          name="ExcelFile"
          list={ExcelFileList}
          edit={ExcelFileEdit}
          create={ExcelFileCreate}
          show={ExcelFileShow}
        />
        <Resource
          name="Cell"
          list={CellList}
          edit={CellEdit}
          create={CellCreate}
          show={CellShow}
        />
      </Admin>
    </div>
  );
};

export default App;
