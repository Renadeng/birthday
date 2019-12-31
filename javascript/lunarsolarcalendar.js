    // Get Canada local solar time
    var todayCASolarTime = new Date().toLocaleString("en-US", {timeZone: "America/Toronto"});
    document.getElementById("todayCASolarTime").innerHTML = todayCASolarTime.toLocaleString();

    // Get China local solar time
    var todayCNSolarTime = new Date().toLocaleString("zh-CN", {timeZone: "Asia/Chongqing"});
    document.getElementById("todayCNSolarTime").innerHTML = todayCNSolarTime.toLocaleString();

    //Get New Zealand local solar Time
    var todayNZSolarTime = new Date().toLocaleString("en-NZ", {timeZone: "Pacific/Auckland"});
    document.getElementById("todayNZSolarTime").innerHTML = todayNZSolarTime.toLocaleString();


