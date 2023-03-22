const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const downloadBtn = document.getElementById('download-btn')

const image = new Image()
image.src = 'certificate.png'
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	var ratio = image.naturalWidth / image.naturalHeight;
	var width = canvas.width;
	var height = width / ratio;
	ctx.drawImage(image, 0, 0, width, height);
	// ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.font = '80px Lobster'
	ctx.fillStyle = '#D5AC51'
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.direction = "inherit";
	var x = canvas.width / 2;
	var y = canvas.height / 2;
	ctx.fillText(nameInput.value, 620, 400)
}

nameInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download =  nameInput.value +' - Certificate' 
})