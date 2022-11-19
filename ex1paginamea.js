function changeProfile() {

	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}
function NameToJob() {
	document.getElementById("NumePrenume").innerHTML = "System Solution Engineer for (e-)Mobility (Cloud) Solutions";
}
function educationToAchievements() {
	
	var r1 = document.getElementById("realizare_r1");
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "practica";
	p1.innerHTML = "01.06.2026-24.09.2026";
	l1.innerHTML = "https://apply.workable.com/garmin-cluj/?not_found=true";
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Internship";
	p2.innerHTML = "20.05.2025";
	l2.innerHTML = "https://jobs.smartrecruiters.com/BoschGroup/743999865989641-working-student-tef7-cljp?trid=5ca12582-477f-422c-9efb-2f752450cb38";
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Work & Travel";
	p3.innerHTML = "01.06.2023-24.09.2023";
	l3.innerHTML = "https://www.studenttravel.ro/";
}
function oldToNewImage() {
	var img = document.getElementById("pozadeprofil");
	img.src = "poza2.jpg";
	img.style.opacity= 0.95;
	img.style.borderWidth = '10px';
    img.style.borderStyle= 'solid';
    img.style.borderColor= '#78a6de';
	img.style.right='100px';
}
function changeBodyBackgroundColor() {
	var body = document.getElementById("body");
	body.style.backgroundColor= "#b07287";
	body.style.fontFamily="Verdana";
	
}