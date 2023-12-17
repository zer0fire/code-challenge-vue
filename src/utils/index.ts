export function initDB() {
  let db;
  const request = window.indexedDB.open("MyTestDatabase", 3);
  request.onerror = (event: any) => {
    console.error("为什么不允许我的 web 应用使用 IndexedDB！");
  };
  request.onsuccess = (event: any) => {
    db = event.target.result;

    db.onerror = (event: any) => {
      // 针对此数据库请求的所有错误的通用错误处理器！
      console.error(`数据库错误：${event.target.errorCode}`);
    };

    const transaction = db.transaction(["customers"], "readwrite");
  };
}
