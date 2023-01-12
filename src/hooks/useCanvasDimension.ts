export const useCanvasDimension = () => {
	let width = 0,
		height = 0

	if (typeof window !== 'undefined') {
		width = window.innerWidth + 500
		height = window.innerHeight + 500
	}

	return { width, height }
}
