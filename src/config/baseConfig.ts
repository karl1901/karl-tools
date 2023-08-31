const config = {
    // 网页标签标题
    title: 'karl的工具库项目',
    // 网页标签图标 - 存放于publi根目录
    titleIcon: 'vite.svg'
};

// DOM加载完毕执行
document.addEventListener('DOMContentLoaded', function () {
    // 设置标签标题
    const titleDom = document.getElementById('title') as HTMLHeadingElement;
    titleDom.innerText = config.title;
    // 防止重复添加link标签
    const existingLink = document.querySelector('link[rel="icon"][type="image/svg+xml"]');
    if (existingLink) return;
    // 创建link标签并插入head
    const titleIconDom: HTMLLinkElement = document.createElement('link');
    titleIconDom.rel = 'icon';
    titleIconDom.href = config.titleIcon;
    document.head.appendChild(titleIconDom);
});
