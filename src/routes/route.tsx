import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../containers/enhance/dashboard";
import Header from "../components/header";
import Detail from "../containers/enhance/detail";
import { PageContext } from "../context/context";
import { ResultEntity } from "../redux/reducers/movie/list";
import ScrollArrow from "../components/scroll-to-top/scroll-to-top";

const Routes = () => {
  const [pageContext, setPageContext] = useState<any>(1);
  const [item, setItem] = useState<ResultEntity[]>([]);
  const [oldPage, setOldPage] = useState<any>(1);

  const setPageCurrent = (data: string) => {
    setPageContext(data);
  };

  const setOldPageCurrent = (data: string) => {
    setOldPage(data);
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
        oldPage,
        setOldPage: setOldPageCurrent,
      }}
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={Dashboard} />
          <Route />
        </Switch>
      </Router>
      <ScrollArrow />
    </PageContext.Provider>
  );
};

export default Routes;
