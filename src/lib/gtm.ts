export function init(containerId: string) {
	const w = window;

	w.dataLayer = w.dataLayer || [];

	w.dataLayer.push({
		'gtm.start': new Date().getTime(),
		event: 'gtm.js'
	});

	w.dataLayer.push({
		originalLocation: window.location.href
	});

	let windowLoaded = false;

	if (typeof window !== 'undefined') {
		window.addEventListener('load', () => {
			windowLoaded = true;
		});
	}

	const inject = () => {
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.async = true;
		script.defer = true;
		// script.src = `https://gtm.krznbtni.com`;
		// script.src = `https://gtm.proxy-gtm.workers.dev`;
		script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;

		document.head.appendChild(script);
		window.removeEventListener('load', inject);
	};

	if (containerId) {
		if (windowLoaded) {
			inject();
		} else {
			window.addEventListener('load', inject);
		}
	}
}
