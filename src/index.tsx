// Why Did you render
import "./wdyr";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 性能监控
import reportWebVitals from "./reportWebVitals";
import { DevTools, loadServer } from "jira-dev-tool";
// 务必在jira-dev-tool后面引入
import "antd/dist/antd.less";
import { AppProviders } from "context";

loadServer(() =>
  ReactDOM.render(
    // 严格模式
    <React.StrictMode>
      {/* context 环境 */}
      <AppProviders>
        {/* 调试工具 */}
        <DevTools />
        {/* 项目主体 */}
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
