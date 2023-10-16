export default function Home() {
  return (
  
  <main className="bg-roxo h-screen flex items-center justify-center font-roboto">
    <div className="bg-branco h-[425px] w-[306px] rounded-lg px-[30px] pt-[72px] pb-[60px] flex flex-col gap-8">
      <h1 className="text-3xl font-bold">
        Login
      </h1>

      <form className="flex flex-col gap-1">
        <div className="flex flex-col gap-1 ">
          <label className="">SEU E-MAIL</label>
          <input type="email" placeholder="johndoe@gmail.com"  className=" h-10 pl-[15px] border border-cinza rounded-md "/>
        </div>

        <div className="flex flex-col gap-1 ">
          <label htmlFor="">SUA SENHA</label>
          <input type="password" placeholder="●●●●●●●●●"  className=" h-10 pl-[15px] border border-cinza rounded-md"/>
        </div>

        <button className="h-11  text-white font-mediumdelay-100  mt-5 rounded-md bg-roxo hover:bg-roxo-100">
          Entrar no Sistema
        </button>
      </form>
    </div>
  </main>
   
  )
}
