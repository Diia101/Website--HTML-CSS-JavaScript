window.onload = () => {
  const video = document.getElementById("vid");
  video.play();
};

const openHeader = () => {
  const header = document.getElementById("expandHeader");
  header.classList.toggle("active");

  const headerContent = document.getElementById("expandHeaderContent");
  headerContent.classList.toggle("active");
};

const displayContent = (id) => {
  const ids = [
    "arianaDetails",
    "coldplayDetails",
    "donDiabloDetails",
    "martinGarrixDetails",
  ];

  for (let i = 0; i < ids.length; i++) {
    const element = document.getElementById(ids[i]);
    if (ids[i] === id) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
};
