import Tool from './Tool'

export default class Circle extends Tool {
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
			let r = Math.sqrt(this.width ** 2 + this.height ** 2)
			this.draw(this.startX, this.startY, r)
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
			let r = Math.sqrt(this.width ** 2 + this.height ** 2)
			this.draw(this.startX, this.startY, r)
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

	draw(x: number, y: number, r: number): void {
		const img = new Image()
		img.src = this.saved || ''
		img.onload = () => {
			if (this.canvas) {
				this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
				this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
				this.ctx?.beginPath()
				this.ctx?.arc(x, y, r, 0, 2 * Math.PI)
				this.ctx?.stroke()
			}
		}
	}
}
