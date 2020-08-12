import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../containers/enhance/dashboard";
import Header from "../components/header";
import Detail from "../containers/enhance/detail";
import { PageContext } from "../context/context";
import { ResultEntity } from "../redux/reducers/movie/list";

const Routes = () => {
  const [pageContext, setPageContext] = useState<any>(1);
  const [item, setItem] = useState<ResultEntity[]>([]);

  const setPageCurrent = (data: string) => {
    setPageContext(data);
  };

  const setItemCurrent = (data: ResultEntity[]) => {
    setItem(data);
  };
  return (
    <PageContext.Provider
      value={{
        pageContext,
        setPageContext: setPageCurrent,
        item,
        setItem: setItemCurrent,
      }}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/detail" component={Detail} />
          <Route />
        </Switch>
      </Router>
    </PageContext.Provider>
  );
};

export default Routes;
