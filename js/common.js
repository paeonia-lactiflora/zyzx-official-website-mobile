// 当页面加载完成
window.addEventListener('load', function () {
	// 隐藏 loading 动画，因为背景图已经加载完成
	console.log('页面加载完成')
	setTimeout(() => {
		console.log('延迟隐藏 loading 动画')
		document.querySelector('.loader-container').style.display = 'none'
	}, 1000)
})