var xhr = new XMLHttpRequest();
xhr.open("get", "a.txt", true);
xhr.send();
// xhr.open("post", "a.php", true);
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.send("username=tom&age=20");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      console.log(xhr.responseText);
      // JSON.stringify(); 对象->字符串
      // JSON.parse(); 字符串->对象
    } else {
      console.log("error");
    }
  }
};
