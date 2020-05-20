const sidersBigWeb = require('./siders/bigWeb')
const siderComputerBase = require('./siders/computerBase')
const siderInterview = require('./siders/interview')
const siderTechnology = require('./siders/technology')
function mergeSider(...siders) {
    let sider = {}
    siders.forEach((cuur) => {
        Object.assign(sider, cuur)
    })
    return sider
}
module.exports = {
    title: '粥里有勺糖',
    description: '粥里有勺糖的个人博客,个人随笔与学习笔记的记录',
    head: [
        // ['link', { ref: 'icon', href: '/test.jpg' }]
    ],
    base: "/",
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        lastUpdated: 'Last Updated',
        repo: 'ATQQ/sugar-blog',
        repoLabel: 'Github',
        editLinks: true,
        docsDir: 'docs',
        docsBranch: 'master',
        nav: [
            {
                text: '技术文章',
                items: [
                    { text: '教程', link: '/technology/learn/' }
                ]
            },
            {
                text: '计算机基础',
                items: [
                    // { text: '算法与数据结构', link: '/computerBase/algorithm/' },
                    { text: '操作系统', link: '/computerBase/os/' },
                    { text: '计算机网络', link: '/computerBase/Internet/' },
                    { text: '设计模式', link: '/computerBase/design/' },
                    { text: '剑指offer', link: '/computerBase/offer/' },
                    // { text: '力扣', link: '/computerBase/leetcode/' }
                ]
            },
            {
                text: '大前端',
                items: [
                    { text: 'javascript', link: '/bigWeb/js/' },
                    { text: 'vue', link: '/bigWeb/vue/' },
                    { text: 'html', link: '/bigWeb/html/' },
                    { text: 'css', link: '/bigWeb/css/' },
                    { text: '浏览器', link: '/bigWeb/browser/' },
                    { text: 'Web性能优化', link: '/bigWeb/performance/' },
                    { text: 'regexp', 'link': '/bigWeb/regexp/' },
                    { text: 'node', link: '/bigWeb/node/' }]
            },
            {
                text: '面试',
                items: [
                    { text: '问解', link: '/interview/problem/' },
                    { text: 'javascript', link: '/interview/js/' },
                    { text: 'css', link: '/interview/css/' },
                    { text: '手撕代码', link: '/interview/code/' },
                    { text: '性能优化', link: '/interview/performance/' },
                    { text: '网络', link: '/interview/internet/' },
                    // { text: '操作系统', link: '/interview/os/' },
                    // { text: '设计模式', link: '/interview/design/' },
                    { text: '综合问题', link: '/interview/other/' },
                    { text: '小程序', link: '/interview/mini/' },
                    { text: '面经', link: '/interview/experience/' }
                ]
            }
        ],
        sidebar: mergeSider(sidersBigWeb, siderComputerBase, siderInterview, siderTechnology),
        displayAllHeaders: false,
        sidebarDepth: 2,
    }
}