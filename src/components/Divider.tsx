interface DividerProps { light?: boolean }

export default function Divider({ light }: DividerProps) {
  const line  = light ? 'bg-gold-muted' : 'bg-gold'
  const gem   = light ? 'bg-gold-muted' : 'bg-gold'
  return (
    <div className="flex items-center gap-2 w-3/5 mx-auto my-5">
      <div className={`flex-1 h-px ${line} opacity-60`} />
      <div className={`w-2 h-2 ${gem} rotate-45`} />
      <div className={`w-2 h-2 ${gem} rotate-45`} />
      <div className={`w-2 h-2 ${gem} rotate-45`} />
      <div className={`flex-1 h-px ${line} opacity-60`} />
    </div>
  )
}
