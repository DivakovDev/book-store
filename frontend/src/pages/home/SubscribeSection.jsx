import library from "../../assets/library.svg"

export const SubscribeSection = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center md:hidden mb-[-48px]'>
        <h3 className="mb-4 text-xl text-second">Сreate an account and get a 15% discount</h3>
        <p className='mb-4 text-xs text-gray-500'>Create an account with our online bookstore today and start enjoying amazing discounts on all your book purchases! By signing up, you will receive a 15% discount on all your payments, making it more affordable than ever to get your hands on your favorite books.</p>
        <button className='px-12 py-2 text-base font-bold text-white transition-all duration-200 rounded-md cursor-pointer bg-primary font-secondary hover:bg-second'>
            Get Now!
        </button>
        <img src={library} alt="" />
    </div>
  )
}
