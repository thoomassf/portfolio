interface CardProps {
  title: string
  description: string
  duration: string
  period: string
}

export function Card({ title, description, duration, period }: CardProps) {
  return (
    <div className="mt-16 border border-blue-700 rounded-xl p-8 bg-dark">
      <h4 className="text-slate-100 text-lg">
        {title}
      </h4>
      <p className="text-base text-slate-500 mt-2 text-justify">
        {description}
      </p>

      <div className="mt-5 flex justify-between">
        <span className="text-blue-600">
          {duration}
        </span>
        <span className="text-blue-600">
          {period}
        </span>
      </div>
    </div>
  )
}