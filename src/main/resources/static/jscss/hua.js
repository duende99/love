$(function () {
    flowerDrop();
})

//花瓣飘落动画方法
function flowerDrop() {
    var width = $("#main").width();
    var height = $("#main").height() + 150;
    //存放6种花瓣图片位置百分比
    var flowersPos = ["0", "20%", "40%", "60%", "80", "100%"];
    // 获取花瓣容器
    var $flowerContainer = $("#flower_wrap");
    var flowerUrl = "img/flower.png";

    // 随机获取花瓣图片url
    function getFlowerPos() {
        return flowersPos[Math.floor(Math.random() * 6)];
    }

    //花瓣盒子宽高
    var flowerBoxWidth = width * 0.0285;
    var flowerBoxHeight = height * 0.0456;

    // 创建一个花瓣元素，添加旋转类
    function createFlowerBox() {
        var pos = getFlowerPos();
        return $('<div class="flowerBox"></div>').css({
            "width": flowerBoxWidth + "px",
            "height": flowerBoxHeight + "px",
            "position": "absolute",
            "zIndex": 1000,
            "top": -flowerBoxHeight + "px",
            "backgroundImage": "url(" + flowerUrl + ")",
            "backgroundRepeat": "no-repeat",
            "backgroundSize": "600% 100%",
            "backgroundPosition": pos + " 0"
        }).addClass("flowerRotate");
    }

    // 开始飘花
    setInterval(function () {
        // 运动轨迹随机
        var startPositionLeft = Math.random() * width - 100,
            startOpacity = 1,
            endPositionTop = height - 40,
            endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
            duration = height * 10 + Math.random() * 5000;

        // 随机透明度，不小于0.5
        var randomStart = Math.random();
        randomStart = randomStart < 0.5 ? startOpacity : randomStart;

        // 创建一个花瓣
        var $flower = createFlowerBox();
        // 设计起点位置
        $flower.css({
            left: startPositionLeft + "px",
            opacity: randomStart
        });
        // 加入到容器
        $flowerContainer.append($flower);
        // 开始执行动画
        $flower.animate({
            top: endPositionTop + "px",
            left: endPositionLeft + "px",
            opacity: 0.7
        }, duration, function () {
            $(this).animate({
                opacity: 0
            }, 1000, function () {
                $(this).remove(); //结束后删除
            });
        });

    }, 300);
}