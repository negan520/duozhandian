var websock = null,globalCallback = null;

// 初始化weosocket
function initWebSocket () {
  // ws地址 -->这里是你的请求路径
  let localhref = window.location.href
  let winHref = localhref.substring(localhref.indexOf("//")+2,localhref.lastIndexOf("hhcpm"));
  var ws='';
  if(localhref.indexOf("localhost") !== -1 || localhref.indexOf("127.0.0.1") !== -1){
    ws= 'ws://f.worth2018.com/webLotterySocket';
  }else{
    if(localhref.indexOf("https") === 0){
      ws= 'wss://'+ winHref +'webLotterySocket';
    }else{
      ws= 'ws://'+ winHref +'webLotterySocket';
    }
  }
  websock = new WebSocket(ws);
  websock.onmessage = function (e) {
    websocketonmessage(e)
  };
  websock.onclose = function (e) {
    websocketclose(e)
  };
  websock.onopen = function () {
    websocketOpen()
  };

  // 连接发生错误的回调方法
  websock.onerror = function () {
    console.log('WebSocket连接发生错误')
  }
}

// 实际调用的方法
function sendSock (agentData, callback) {
  globalCallback = callback;
  if (websock.readyState === websock.OPEN) {
    // 若是ws开启状态
    websocketsend(agentData)
  } else if (websock.readyState === websock.CONNECTING) {
    // 若是 正在开启状态，则等待1s后重新调用
    setTimeout(function () {
      sendSock(agentData, callback)
    }, 1000)
  } else {
    // 若未开启 ，则等待1s后重新调用
    setTimeout(function () {
      sendSock(agentData, callback)
    }, 1000)
  }
}

// 数据接收
function websocketonmessage (e) {
  typeof globalCallback==='function'?globalCallback(JSON.parse(e.data)):null
}
// 数据发送
function websocketsend (agentData) {
  websock.send(JSON.stringify(agentData))
}

// 关闭
function websocketclose (e) {
  console.log('connection closed (' + e.code + ')')
}

// 创建 websocket 连接
function websocketOpen (e) {
  console.log('连接成功')
}

initWebSocket();

// 将方法暴露出去
export {
  sendSock
}
