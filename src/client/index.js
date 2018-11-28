import "babel-polyfill";
import Fetchr from "fetchr";
import config from "../../configs";

const fetcher = new Fetchr({
  xhrPath: config.fetchr.clientConfig.xhrPath,
});

window.addEventListener("DOMContentLoaded", () => {
  // クライアントから API リクエストを行う
  document.querySelector("button").addEventListener("click",() => {
    // クライアントからは /proxy にアクセスされるのが確認できる
    fetcher.read('user', { name: "ユーザー" }, {}, (error, data) => {
      alert(`id: ${data.id},${data.name}さんこんにちは`);
    });
  }, false);
});