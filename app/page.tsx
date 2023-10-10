import Image from 'next/image'

export default function Home() {

  return (
    <main className="m-auto flex min-h-screen flex-col items-center justify-between p-12 gradient-conic max-w-7xl">
      <header className={"flex min-w-full h-12 justify-between items-center font-thin"}>
        <div className={"flex justify-start gap-8"}>
          <a href={"#"} className={"font-extralight text-m gradient-text tracking-widest"}>
            Prjwl
          </a>
          <nav className={"flex gap-12 items-center"}>
            <a href={"#projects"}>Projects</a>
            <a href={"#blogs"}>Blogs</a>
          </nav>
        </div>
        <div className={"flex icons"}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <a className={"h-8 flex justify-center items-center p-6 hover:box-border hover:border hover:rounded-xl"} href={"#contact"}>Let's talk</a>
        </div>
      </header>
    </main>
  )
}
