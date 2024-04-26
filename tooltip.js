function tooltipActived(){
  let tooltipEle = document.querySelectorAll(`[data-tooltip]`);
  tooltipEle.forEach((element => {
    if (typeof tooltip === "undefined") {
      element.style.setProperty("--tooltipColor", "#000");
      element.style.setProperty("--tooltipBackgroound", "#e8e8e8");
      element.style.setProperty("--tooltipBorderRadius", "5px");
      element.style.setProperty("--tooltipBoxShadow", "0px 0px 5px #002b");
    } else {
      element.style.setProperty("--tooltipColor", tooltip.textColor || "#000");
      element.style.setProperty("--tooltipBackgroound", tooltip.backgroundColor || "#e8e8e8");
      element.style.setProperty("--tooltipBorderRadius", tooltip.borderRadius || "5px");
      element.style.setProperty("--tooltipBoxShadow", tooltip.boxShadow || "0px 0px 5px #002b");
    }
  }))
}
export{tooltipActived}
