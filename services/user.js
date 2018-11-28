import axios from "axios";

export default {
  // サービスを呼び出す時に使うので必須
  name: 'user',
  
  /**
  * @param req      express の req
  * @param resource データサービス名
  * @param params   リクエストを行うときに渡すパラメータ
  * @param config   呼び出す時に渡す
  * @param callback コールバック
  */
  read (req, resource, params, config, callback) {
    // APIリクエスト
    axios
    .get("http://localhost:3010/user", {
      params
    })
    .then( (response) => {
      callback(null, response.data);
    })
    .catch( (error) => {
      callback(error, null);
    });
  }
  
  // CRUDが定義できる
  // create: function(req, resource, params, body, config, callback) {},
  // update: function(req, resource, params, body, config, callback) {},
  // delete: function(req, resource, params, config, callback) {}
}