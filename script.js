document.addEventListener('DOMContentLoaded', function() {
    // 定制我的模组按钮 - 滚动到联系我们界面
    const customModBtn = document.getElementById('custom-mod');
    
    if (customModBtn) {
        customModBtn.addEventListener('click', function() {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                window.scrollTo({
                    top: contactSection.offsetTop - 70, // 减去头部导航的高度
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // 减去头部导航的高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 创建页面滚动动画
    function revealOnScroll() {
        const elements = document.querySelectorAll('.service-card, .mod-item, .pricing-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', revealOnScroll);
    
    // 初始调用，显示已经在视口内的元素
    revealOnScroll();
}); 