import Tool from './Tool'

export default class Rect extends Tool {
	mouseDown: boolean = false
	touchDown: boolean = false
	startX: number = 0
	startY: number = 0
	width: number = 0
	height: number = 0
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
		this.startX = e.offsetX
		this.startY = e.offsetY
		this.saved = this.canvas?.toDataURL()
	}

	mouseMoveHandler(e: MouseEvent): void {
		if (this.mouseDown) {
			let currentX = e.offsetX,
				currentY = e.offsetY
			this.width = currentX - this.startX
			this.height = currentY - this.startY
			this.draw(this.startX, this.startY, this.width, this.height)
		}
	}

	touchUpHandler(): void {
		this.touchDown = false
	}

	touchDownHandler(e: TouchEvent): void {
		e.preventDefault()
		this.touchDown = true
		this.ctx!.beginPath()
		this.startX = e.touches[0].clientX
		this.startY = e.touches[0].clientY
		this.saved = this.canvas?.toDataURL()
	}

	touchMoveHandler(e: TouchEvent): void {
		e.preventDefault()
		if (this.touchDown) {
			let currentX = e.touches[0].clientX,
				currentY = e.touches[0].clientY
			this.width = currentX - this.startX
			this.height = currentY - this.startY
			this.draw(this.startX, this.startY, this.width, this.height)
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

	draw(x: number, y: number, width: number, height: number): void {
		const img = new Image()
		img.src = this.saved || ''
		img.onload = () => {
			if (this.canvas) {
				this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
				this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
				this.ctx?.beginPath()
				this.ctx?.rect(x, y, width, height)
				this.ctx?.stroke()
			}
		}
	}
}
