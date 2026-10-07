const Hello = () => {
  return (
    <h2 className='text-2xl font-bold text-center text-blue-400 bg-amber-200 rounded-2xl mx-1'>
      Welcome to React19
    </h2>
  )
}

const Book = () => {
  return (
    <div className='bg-black-300 p-4'>
      <h3>Name: The Alchemist</h3>
      <p>Price : 299</p>
      <p>Rating : 4.7</p>
    </div>
  )
}

export default function App () {
  return (
    <>
      <h1 className='text-4xl font-medium text-500 text-center bg-pink-300 rounded-2xl p-4 m-2'>
        Akshat Kumar
      </h1>
      <Hello />
      <Book />
    </>
  )
}
