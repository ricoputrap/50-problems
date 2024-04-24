import ButtonBack from "@/components/ButtonBack";

interface Props {
  children: React.ReactNode;
}

export default function ProblemLayout({ children }: Props) {
  return (
    <div className="px-3 pt-3">
      <div className="mb-3">
        <ButtonBack />
      </div>
      {children}
    </div>
  )
}