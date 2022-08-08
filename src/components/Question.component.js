import StarsRating from 'react-star-rate'

export const Question = ({ id, label, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <label className="mb-6 text-xl" htmlFor={id}>
          {label}
        </label>
        <div className="text-xl">{value}/10</div>
      </div>
      <div className="select-none">
        <StarsRating
          value={value}
          onChange={newValue => onChange(newValue)}
          count={10}
          allowHalf
        />
      </div>
    </div>
  )
}
