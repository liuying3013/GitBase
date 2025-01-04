// pages/index.js
import fs from 'fs'
import path from 'path'
import { getSortedPostsData } from '@/lib/posts'
import ResourceList from '@/components/ResourceList'
import ArticleList from '@/components/ArticleList'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'hDataAIPhonexi 凌智凤的博客',
  description: '凌智凤的个人技术博客 - 分享AI、数据科学与全栈开发的心得体会',
}

export default function Home() {
  const resourcesPath = path.join(process.cwd(), 'data', 'json', 'resources.json')
  const resources = JSON.parse(fs.readFileSync(resourcesPath, 'utf8'))
  const allPostsData = getSortedPostsData().slice(0, 6)

  return (
    <div className="container mx-auto py-12 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          GitBase
        </h1>
        <h2 className="text-2xl tracking-tighter sm:text-3xl md:text-3xl lg:text-3xl">Open Source Dynamic Website CMS Without Database</h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          欢迎来到我的个人技术博客！这里将分享关于人工智能、数据科学、全栈开发等领域的技术文章和经验总结。
        </p>
      </section>

      <ResourceList resources={resources} />
      <ArticleList articles={allPostsData} />
    </div>
  )
}