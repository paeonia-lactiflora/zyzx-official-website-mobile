// 检测屏幕宽度并进行跳转
function redirectToMobileOrDesktop() {
	// 获取屏幕宽度
	const screenWidth = window.innerWidth || document.documentElement.clientWidth

	// 设置阈值来判断移动设备与桌面设备的界限，这里假设小于等于 768px 为移动设备
	const threshold = 768

	// 如果屏幕宽度小于等于阈值，跳转至移动端网站
	if (screenWidth >= threshold) {
		window.location.href = 'https://zyzx.netlify.app'
	}
}

// 在页面加载完成后调用函数
window.onload = redirectToMobileOrDesktop