interface Props {
  children: React.ReactNode;
}

export default function ProblemLayout({ children }: Props) {
  return (
    <div className="px-3 pt-3">
      <div className="mb-3">Back</div>
      {children}
    </div>
  )
}