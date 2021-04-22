function footer() {
	let html = "";
	html += "<footer class='footer'>";
	html += "	<nav class='footer-nav'>";
	html += "		<ul class='footer-nav__list'>";
	html += "			<li class='footer-nav__item'>";
	html += "				<a class='footer-nav__link' href='.'>HOME</a>";
	html += "			</li>";
	html += "			<li class='footer-nav__item'>";
	html += "				<a class='footer-nav__link' href='news.html'>news</a>";
	html += "			</li>";
	html += "			<li class='footer-nav__item'>";
	html += "				<a class='footer-nav__link' href='service.html'>service</a>";
	html += "			</li>";
	html += "			<li class='footer-nav__item'>";
	html += "				<a class='footer-nav__link' href='works.html'>works</a>";
	html += "			</li>";
	html += "			<li class='footer-nav__item'>";
	html += "				<a class='footer-nav__link' href='company.html'>company</a>";
	html += "			</li>";
	html += "			<li class='footer-nav__item'>";
	html += "				<a class='footer-nav__link' href='recruit.html'>recruit</a>";
	html += "			</li>";
	html += "			<li class='footer-nav__item'>";
	html += "				<a class='footer-nav__link' href='contact.html'>contact</a>";
	html += "			</li>";
	html += "		</ul>";
	html += "	</nav>";
	html += "	<div class='copyright'>";
	html += "		<a href='.' class='copyright__link'>&copy;PON DESIGN</a>";
	html += "	</div>";
	html += "</footer>";
	html += "<div class='page-top'>";
	html += "	<a href='header' class='page-top__link'>";
	html += "        <i class='fas fa-arrow-up' aria-hidden='true'></i>";
	html += "    </a>";
	html += "</div>";
	document.write(html);
}