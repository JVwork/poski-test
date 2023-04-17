const logArticleCount = () => {
	const articles = document.querySelectorAll(".article-item");
	const articleCount = articles.length;

	console.log(`Počet příspěvků: ${articleCount}`);
};

const logAvgArticleHeight = () => {
	const articles = document.querySelectorAll(".article-item");

	let heightSum = 0;

	articles.forEach((item) => {
		heightSum += item.offsetHeight || 0;
	});

	const avgHeight = articles.length > 0 ? heightSum / articles.length : 0;

	console.log(`Průměrná výška příspěvků: ${avgHeight}px`);
};

const logArticleTitleLengthSum = () => {
	const articleTitles = document.querySelectorAll(".article-title");

	let lengthSum = 0;

	articleTitles.forEach((item) => {
		lengthSum += item.textContent.length || 0;
	});

	console.log(`Součet délek nadpisů příspěvků: ${lengthSum} znaků`);
};

const logArticleInfo = (el) => {
	const infoObj = {};

	const title = el.querySelector(".article-title");
	if (title) {
		infoObj["nazev"] = title.textContent || "";
	}

	const date = el.querySelector(".article-date");
	if (date) {
		infoObj["datum"] = date.textContent || "";
	}

	const length = el.querySelector(".article-length");
	if (length) {
		infoObj["delka"] = length.textContent || "";
	}

	console.log(infoObj);
};

const initArticleInfo = () => {
	const articles = document.querySelectorAll(".article-item");

	articles.forEach((item) => {
		item.addEventListener("click", () => {
			logArticleInfo(item);
		});
	});
};

const logSocialsListPos = () => {
	const socialsElem = document.querySelector(".socials-list");

	if (socialsElem) {
		window.addEventListener("scroll", () => {
			const rect = socialsElem.getBoundingClientRect();
			const scrollX = window.scrollX || window.pageXOffset;
			const scrollY = window.scrollY || window.pageYOffset;

			console.log(
				`Pozice ikon vůči \n viewportu: (${rect.left}, ${rect.top}) [left, top]px \n dokumentu: (${rect.left + scrollX}, ${
					rect.top + scrollY
				}) [left, top]px`
			);
		});
	} else {
		console.log("Sociální ikony nenalezeny.");
	}
};

const initSideNav = () => {
	const body = document.querySelector("body");
	const hamburger = body.querySelector(".hamburger");
	const closeBtn = document.querySelector(".sidenav-close-btn");

	if (hamburger) {
		hamburger.addEventListener("click", () => {
			body.classList.add("sidenav-open");
		});
	}

	body.addEventListener("click", (ev) => {
		if (ev.target.closest(".sidenav") || ev.target.closest(".hamburger")) return;

		if (body.classList.contains("sidenav-open")) {
			body.classList.remove("sidenav-open");
		}
	});

	if (closeBtn) {
		closeBtn.addEventListener("click", () => {
			body.classList.remove("sidenav-open");
		});
	}

	body.addEventListener("keyup", (ev) => {
		if (ev.key === "Escape") {
			body.classList.remove("sidenav-open");
		}
	});
};

(function () {
	window.addEventListener("load", (event) => {
		logArticleCount();
		logAvgArticleHeight();
		logArticleTitleLengthSum();
		initArticleInfo();
		logSocialsListPos();
		initSideNav();
	});
})();
