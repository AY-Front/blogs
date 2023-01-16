module.exports = {
    title: 'XXX的博客',
    description: 'YYY',
    base: '/blogs/',
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            {
                text: "阿油的博客",
                items: [
                    { text: "掘金", link: "https://juejin.cn/user/3378154518617880" },
                    { text: "Github", link: "https://github.com/AY-Front" }
                ]
            }
        ],
        sidebar: [{
                title: "欢迎学习",
                path: "/",
                collapsable: false, // 是否折叠
                children: [{ title: "博客简介", path: "/" }],
            },
            {
                title: "基础篇",
                path: "/blogs/1",
                collapsable: false,
                children: [
                    { title: "第一篇", path: "/blogs/1" },
                    { title: "第二篇", path: "/blogs/2" },
                ]
            }
        ]
    }
}