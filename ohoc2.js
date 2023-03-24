// Expand / collapse text boxes
const expand = document.querySelectorAll('.expand');
const collapse = document.querySelectorAll('.collapse');

function expandBox(box) {
  let targetBox = box.originalTarget.parentNode.parentNode;
  let targetText = targetBox.querySelector('.expandableText');
  targetText.style.maxHeight = 'none';
  targetText.style.display = 'block';
  targetBox.style.position = 'absolute';
  targetBox.style.height = '100%';
  targetBox.style.top = '30%';
  targetBox.style.backgroundcolor = 'rgba(0,138,0,80%)';
  box.originalTarget.style.display = 'none';  // hide expand button
  let collapseButton = targetBox.querySelector('.collapse');
  collapseButton.style.display = 'inline-block'; // show collapse button
}
function collapseBox(box) {
  let targetBox = box.originalTarget.parentNode.parentNode;
  let targetText = targetBox.querySelector('.expandableText');
  targetText.style.maxHeight = '1px';
  targetText.style.display = 'none';
  targetBox.style.position = 'relative';
  targetBox.style.height = 'auto';
  targetBox.style.top = '0px';
  targetBox.style.backgroundcolor = 'rgba(0,138,0,100%)';
  box.originalTarget.style.display = 'none';  // hide collapse button
  let expandButton = targetBox.querySelector('.expand');
  expandButton.style.display = 'inline-block'; // show expand button
}
expand.forEach((item) => {
  item.addEventListener('click', expandBox);
})
collapse.forEach((item) => {
  item.addEventListener('click', collapseBox);
})

  //background-color: rgba(0,138,0,80%);
  //position: absolute;
  //top: 210px;
