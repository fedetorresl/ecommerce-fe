import { Route, Routes, useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";

import { ROUTES } from "./routes";
import { Layout } from "../layout";

export const Router = () => {
  const location = useLocation();
  const { previousLocation } = (location.state ?? {}) as {
    previousLocation?: Location;
  };

  return (
    <div>
      <Routes location={previousLocation ?? location}>
        <Route element={<Layout />}>
          <Route element={<div>test</div>} path={ROUTES.base} />
        </Route>
      </Routes>
    </div>
  );
};
