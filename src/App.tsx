import React from "react";
import "./App.css";

// 鉴权
import { useAuth } from "context/auth-context";
// 容错
import { ErrorBoundary } from "components/error-boundary";
// 降级
import { FullPageErrorFallback, FullPageLoading } from "components/lib";

// 懒加载
const AuthenticatedApp = React.lazy(() => import("authenticated-app"));
const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"));

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <React.Suspense fallback={<FullPageLoading />}>
          {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
