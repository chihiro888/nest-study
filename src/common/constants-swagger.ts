const SWAGGER = {
  // user
  USER: {
    TAG: "user",
    URL: "api/user",
    USER_LIST: {
      URL: "userList",
      SUMMARY: "ユーザーリスト API",
      DESC: "ユーザーリストを返却します。",
      RES_200: "成功するとユーザーリストを返却",
      MSG: {
        OK: "",
      },
    },
    CREATE_USER: {
      URL: "createUser",
      SUMMARY: "ユーザー登録 API",
      DESC: "ユーザー登録 APIです。",
      RES_200: "ユーザー登録成功すると",
      MSG: {
        OK: "",
      },
    },
  },
};

export default SWAGGER;
