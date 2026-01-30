function initMarquee() {
	const marquees = document.querySelectorAll<HTMLElement>(".marquee");

	marquees.forEach((marquee) => {
		const track = marquee.querySelector<HTMLElement>(".marquee-track");
		const content = marquee.querySelector<HTMLElement>(".marquee-content");

		if (!track || !content) return;

		// Clone content for seamless infinite scroll
		const clone = content.cloneNode(true) as HTMLElement;
		clone.setAttribute("aria-hidden", "true");
		track.appendChild(clone);

		// Get configuration from data attributes
		const speed = parseFloat(marquee.dataset.speed || "30");
		const direction = marquee.dataset.direction || "left";

		// Calculate animation
		const contentWidth = content.offsetWidth;
		const duration = (contentWidth / 100) * (speed / 10); // Adjust speed based on content width

		// Set CSS custom properties for animation
		track.style.setProperty("--marquee-duration", `${duration}s`);
		track.style.setProperty("--marquee-direction", direction === "left" ? "normal" : "reverse");

		// Add animation class
		track.classList.add("marquee-animate");
	});
}

document.addEventListener("DOMContentLoaded", initMarquee);
document.addEventListener("astro:page-load", initMarquee);
