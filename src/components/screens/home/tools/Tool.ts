export default class Tool {
	canvas: HTMLCanvasElement | null
	ctx: CanvasRenderingContext2D | undefined | null

	constructor(canvas: HTMLCanvasElement | null) {
		this.canvas = canvas
		this.ctx = canvas?.getContext('2d')
		this.destroyElements()
	}

	set fillColor(color: string) {
		this.ctx!.fillStyle = color
	}

	set strokeColor(color: string) {
		this.ctx!.strokeStyle = color
	}

	set lineWidth(width: number) {
		this.ctx!.lineWidth = width
	}

	destroyElements(): void {
		if (this.canvas) {
			this.canvas.onmouseup = null
			this.canvas.onmousedown = null
			this.canvas.onmousemove = null
			this.canvas.ontouchend = null
			this.canvas.ontouchstart = null
			this.canvas.ontouchmove = null
		}
	}
}
