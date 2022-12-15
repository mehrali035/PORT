// =============start toggler=========

var toggler_btn = document.querySelector(".toggler-btn");
var side_nav = document.querySelector(".side-nav");
 

toggler_btn.onclick = function () {
    side_nav.classList.toggle("active");

}

// >>>>>>>> add and remove active on click =>>>>>>>>>>>>
const list = document.querySelectorAll('li');

list.forEach(el => {
    el.addEventListener('click',function(){
        list.forEach(bl => bl.classList.remove('active'));
            this.classList.add('active')  
    })
});



// <==================start animation============ >

var title = document.querySelector(".title");
var array = ["HTML5", "CSS3", "JavaScript", "Sass", "React"]
var arrayindex = 0;
var charindex = 0;
function showtitle() {
    charindex++
    title.innerHTML = "Tech stack:         <span>" + array[arrayindex].slice(0, charindex) + "</span>";
    if (charindex == array[arrayindex].length) {
        arrayindex++;
        charindex = 0;
    }
    if (arrayindex == array.length) {
        arrayindex = 0;
    }
    setTimeout(showtitle, 400)
}
showtitle();
