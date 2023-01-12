import Tool from './Tool'

export default class Line extends Tool {
	mouseDown: boolean = false
	touchDown: boolean = false
	currentX: number = 0
	currentY: number = 0
	saved: string | undefined = ''

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
		this.currentX = e.offsetX
		this.currentY = e.offsetY
		this.ctx?.moveTo(this.currentX, this.currentY)
		this.saved = this.canvas?.toDataURL()
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
		this.currentX = e.touches[0].clientX
		this.currentY = e.touches[0].clientY
		this.ctx?.moveTo(this.currentX, this.currentY)
		this.saved = this.canvas?.toDataURL()
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
		const img = new Image()
		img.src = this.saved || ''
		img.onload = () => {
			if (this.canvas) {
				this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
				this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
				this.ctx?.beginPath()
				this.ctx?.moveTo(this.currentX, this.currentY)
				this.ctx?.lineTo(x, y)
				this.ctx?.stroke()
			}
		}
	}
}
