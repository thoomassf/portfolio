interface SubtitleProps {
  text: string;
}

export function Subtitle({ text }: SubtitleProps) {
  return (
    <span className='font-medium text-xl text-blue-600 bg-dark bg-opacity-70 rounded-lg px-4 py-2 shadow-sm'>
      {text}
    </span>
  )
}