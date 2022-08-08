import { useState } from 'react'
import { Question } from '../components/Question.component'
import { updateItemInArray } from '../utils/array.utils'

const Evaluate = () => {
  const [questions, setQuestions] = useState([
    {
      id: 'know_industry',
      label: 'Do you know a lot about the industry of your idea ?',
      rating: 5,
      description: '',
      category: ['ease_of_build']
    },
    {
      id: 'proto_in_month',
      label: 'Could you build a prototype in less than a month ?',
      rating: 5,
      description: '',
      category: ['ease_of_build']
    },
    {
      id: 'resolve_your_problem',
      label: 'Would your idea resolve a problem that you have in your life ?',
      rating: 5,
      description: '',
      category: ['usefulness']
    },
    {
      id: 'resolve_others_problem',
      label:
        'Would your idea resolve a problem that people you know have in their lives ?',
      rating: 5,
      description: '',
      category: ['usefulness']
    },
    {
      id: 'has_competition',
      label:
        'Is there similar products that have paying customers on the internet ?',
      rating: 5,
      description: '',
      category: ['usefulness', 'ease_of_build']
    },
    {
      id: 'has_difference_from_competition',
      label: 'Can you find at least 1 major difference from your competition ?',
      rating: 5,
      description: '',
      category: ['usefulness']
    }
  ])

  return (
    <div className="mt-32">
      <div className="mb-32">
        <h2 className="font-bold text-5xl mb-8 text-gray-800">
          Evaluating your idea
        </h2>
        <p className="text-gray-700 leading-relaxed text-xl">
          Answer these few questions to rank your idea in several categories.
          For optimal review, ask your surroundings, or even ideally potential
          customers, to rank your idea themselves.
        </p>
      </div>
      <ul className="flex flex-col gap-20">
        {questions.map((question, index) => (
          <li key={question.id}>
            <Question
              id={question.id}
              label={question.label}
              value={question.rating}
              onChange={answer =>
                setQuestions(prevState =>
                  updateItemInArray(prevState, index, {
                    ...prevState[index],
                    rating: answer
                  })
                )
              }
            />
          </li>
        ))}
        <button className="w-fit mx-auto py-4 px-8 bg-black text-white rounded shadow-md select-none mb-48">
          Check my results 📊
        </button>
      </ul>
    </div>
  )
}

export default Evaluate
