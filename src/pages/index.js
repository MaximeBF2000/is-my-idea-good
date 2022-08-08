import Link from 'next/link'

const Index = () => {
  return (
    <div className="mt-40 w-2/3 mx-auto text-center">
      <h1
        id="copy-title"
        className="text-4xl font-bold text-gray-800 leading-relaxed mb-12"
      >
        <span className="rotate-180 inline-block">❓</span> The questions you
        should ask yourself when you want to build a business ❓
      </h1>
      <p
        id="copy-description"
        className="text-xl text-gray-700 leading-relaxed mb-20"
      >
        Answer a bunch of questions about your business idea, and get a report
        and scores on the idea (you can see how the rating is done{' '}
        <span className="text-blue-500 cursor-pointer">
          <Link href="/how-it-works">here</Link>
        </span>
        )
      </p>
      <Link href="/evaluate">
        <button className="py-4 px-8 bg-black text-white rounded shadow-md select-none">
          Evaluate my idea ⚙
        </button>
      </Link>
      <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500">
        Built by{' '}
        <Link href="https://twitter.com/maximebf_" passHref>
          <a className="text-blue-500 cursor-pointer" target="_blank">
            @maximebf_
          </a>
        </Link>
      </p>
    </div>
  )
}

export default Index
