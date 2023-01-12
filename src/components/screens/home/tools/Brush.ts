import Tool from './Tool'

export default class Brush extends Tool {
	mouseDown: boolean = false
	touchDown: boolean = false

	constructor(canvas: HTMLCanvasElement | null) {
		super(canvas)
		this.listen()
	}

	mouseUpHandler(): void {
		this.mouseDown = false
	}

	mouseDownHandler(e: MouseEvent): void {
		this.mouseDown = true
		this.ctx!.beginPath()
		this.ctx?.moveTo(e.offsetX, e.offsetY)
	}

	mouseMoveHandler(e: MouseEvent): void {
		if (this.mouseDown) {
			this.draw(e.offsetX, e.offsetY)
		}
	}

	touchUpHandler(): void {
		this.touchDown = false
	}

	touchDownHandler(e: TouchEvent): void {
		e.preventDefault()
		this.touchDown = true
		this.ctx!.beginPath()
		this.ctx?.moveTo(e.touches[0].clientX, e.touches[0].clientY)
	}

	touchMoveHandler(e: TouchEvent): void {
		e.preventDefault()
		if (this.touchDown) {
			this.draw(e.touches[0].clientX, e.touches[0].clientY)
		}
	}

	listen(): void {
		if (this.canvas) {
			this.canvas.onmouseup = this.mouseUpHandler.bind(this)
			this.canvas.onmousedown = this.mouseDownHandler.bind(this)
			this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
			this.canvas.ontouchend = this.touchUpHandler.bind(this)
			this.canvas.ontouchstart = this.touchDownHandler.bind(this)
			this.canvas.ontouchmove = this.touchMoveHandler.bind(this)
		}
	}

	draw(x: number, y: number): void {
		this.ctx!.lineTo(x, y)
		this.ctx!.stroke()
	}
}
