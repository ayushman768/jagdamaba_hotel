function my_menu(){
	
	var navigation = document.querySelector('.navigation');
	if(navigation.style.display === "none"){
		navigation.style.display = "block";
	}
	else{
		navigation.style.display = "none";
	}
	
}

var y = document.getElementById('my_header');

var sticky = y.offsetTop;


function sti() {
    if (window.pageYOffset > sticky) {
        y.classList.add('sticky');
       

    } else {
        y.classList.remove('sticky');
       
    }

}