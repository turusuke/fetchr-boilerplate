import express from "express";
import bodyParser from "body-parser";
import Fetchr from "fetchr";
import userService from '../../services/user';
import config from "../../configs";

// 作ったデータサービスを Fetchr に登録
Fetchr.registerFetcher(userService);

const app = express();
const port = "3000";
app.use(bodyParser.json());

// `/proxy`以下にmiddlewareを設定
app.use(config.fetchr.clientConfig.xhrPath, Fetchr.middleware());
app.use(express.static("build"));

// routing
app.get("/", (req, res) => {
  //サーバーサイドで API リクエストをおこなう例
  const fetcher = new Fetchr({
    xhrPath: config.fetchr.clientConfig.xhrPath,
    req,
  });

  fetcher.read('user', { name: "ユーザー" }, {}, (error, data) => {
    res.set("Content-Type", "text/html");
    if(error) {
      res.send(error);
      return;
    }

    res.send(`
      <!doctype html>
      <html>
        <body>
          <div><small>${data.name}</small>さん こんにちは！</div>
          <button>クライアント側で実行する例</button>
          <script src="/client/index.js"></script>
        </body>
      </html>
    `);
  });
});

app.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`);
  console.log(`-------------------------------------`);
})
