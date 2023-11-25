var width = window.innerWidth;
var height = window.innerHeight;
var overlay = document.querySelector(".overlay");
var items = document.querySelector("#clip");
var close = document.querySelector(".close");

var stage = new Konva.Stage({
  container: "container",
  width: width,
  height: height,
});

var layer = new Konva.Layer();
stage.add(layer);

close.addEventListener("click", () => {
  close.style.display = "none";
  overlay.style.display = "none";
  items.value = "";
});

items.onchange = (e) => {
  close.style.display = "block";
  overlay.style.display = "grid";

  if (items.value == "Environment") {
    console.log("Environment");
    overlay.classList.add("Environment");
    overlay.innerHTML = `
        <img id="img" src="assest/desert/desert 1/sd1.png" />
        <img id="img" src="assest/desert/desert 2/sd2.png"/>
        <img id="img" src="assest/desert/desert 3/sd3.png"/>
        <img id="img" src="assest/city/sc.png"/>
        <img id="img" src="assest/future/sf.png"/>
        <img id="img" src="assest/oil/so.png"/>`;
    setTimeout(() => {
      var Environment = document.querySelectorAll(".Environment #img");
      Environment.forEach((e) => {
        e.addEventListener("click", () => {
          var stageObj = new Image();
          stageObj.onload = addStage(stageObj);
          stageObj.src = e.src;
          items.value = "";
          overlay.style.display = "none";
          close.style.display = "none";
          overlay.classList.remove("Environment");
          overlay.innerHTML = ``;
        });
      });
    }, 100);
  } else if (items.value == "Elements") {
    console.log("Elements");
    overlay.classList.add("Elements");
    overlay.innerHTML = `
        <div><img id="img" src="assest/oil/o1.png" /></div>
        <div><img id="img" src="assest/oil/o3.png" /></div>
        <div><img id="img" src="assest/desert/desert 1/d1-1.png" /></div>
        <div><img id="img" src="assest/desert/desert 1/d1-2.png" /></div>
        <div><img id="img" src="assest/desert/desert 1/d1-3.png" /></div>
        <div><img id="img" src="assest/desert/desert 1/d1-4.png" /></div>
        <div><img id="img" src="assest/desert/desert 1/d1-5.png" /></div>
        <div><img id="img" src="assest/desert/desert 1/d1-6.png" /></div>
        <div><img id="img" src="assest/desert/desert 2/d2-1.png" /></div>
        <div><img id="img" src="assest/desert/desert 2/d2-2.png" /></div>
        <div><img id="img" src="assest/desert/desert 2/d2-3.png" /></div>
        <div><img id="img" src="assest/desert/desert 2/d2-4.png" /></div>
        <div><img id="img" src="assest/desert/desert 2/d2-5.png" /></div>
        <div><img id="img" src="assest/oil/o2.png" /></div>
        <div><img id="img" src="assest/oil/o4.png" /></div>
        <div><img id="img" src="assest/Elements/1.png" /></div>
        <div><img id="img" src="assest/Elements/2.png" /></div>
        <div><img id="img" src="assest/Elements/3.png" /></div>
        <div><img id="img" src="assest/Elements/4.png" /></div>
        <div><img id="img" src="assest/Elements/5.png" /></div>
        <div><img id="img" src="assest/Elements/6.png" /></div>
        `;
    setTimeout(() => {
      var Elements = document.querySelectorAll(".Elements #img");
      Elements.forEach((e) => {
        e.addEventListener("click", () => {
          var imageObj = new Image();
          imageObj.onload = addItem(imageObj);
          imageObj.src = e.src;
          items.value = "";
          overlay.style.display = "none";
          close.style.display = "none";
          overlay.classList.remove("Elements");
          overlay.innerHTML = ``;
        });
      });
    }, 100);
  } else if (items.value == "Characters") {
    console.log("Characters");
    overlay.classList.add("Characters");
    overlay.innerHTML = `
        <img id="img" src="assest/Characters/1.png" />
        <img id="img" src="assest/Characters/2.png" />
        <img id="img" src="assest/Characters/3.png" />
        <img id="img" src="assest/Characters/4.png" />
        <img id="img" src="assest/Characters/5.png" />
        <img id="img" src="assest/Characters/6.png" />
        <img id="img" src="assest/Characters/7.png" />
        <img id="img" src="assest/Characters/8.png" />
        <img id="img" src="assest/Characters/9.png" />

        `;
    setTimeout(() => {
      var Elements = document.querySelectorAll(".Characters #img");
      Elements.forEach((e) => {
        e.addEventListener("click", () => {
          var imageObj = new Image();
          imageObj.onload = addItem(imageObj);
          imageObj.src = e.src;
          items.value = "";
          overlay.style.display = "none";
          close.style.display = "none";
          overlay.classList.remove("Characters");
          overlay.innerHTML = ``;
        });
      });
    }, 100);
  }
};

function addStage(stageObj) {
  var stages = new Konva.Image({
    x: 0,
    y: 0,
    image: stageObj,
    width: stage.width(),
    height: stage.height(),
  });
  // add the shape to the layer
  layer.add(stages);
  stages.setZIndex(0);
  stages.on("dblclick dbltap", function () {
    this.destroy();
    layer.draw();
  });
}

function addItem(imageObj) {
  var item = new Konva.Image({
    x: 100,
    y: 300,
    image: imageObj,
    draggable: true,
  });

  // add the shape to the layer
  layer.add(item);
  // item.setZIndex(1);
  // change zindex
  item.on("dragstart", function () {
    this.moveToTop();
    layer.draw();
  });

  item.on("dblclick dbltap", function () {
    this.destroy();
    layer.draw();
  });
}

// alternative API:
//   Konva.Image.fromURL(
//     'https://konvajs.org//assets/darth-vader.jpg',
//     function (darthNode) {
//       darthNode.setAttrs({
//         x: 200,
//         y: 50,
//         scaleX: 0.5,
//         scaleY: 0.5,
//       });
//       layer.add(darthNode);
//     }
//   );

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}

document.getElementById("save").addEventListener(
  "click",
  function () {
    var dataURL = stage.toDataURL({
      pixelRatio: 3,
    });
    downloadURI(dataURL, "stage.png");
  },
  false
);
