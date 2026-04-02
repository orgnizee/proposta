import Card from "@/components/card";
import ArrowRight from "@/icons/ArrowRight";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 mt-8 items-center justify-between">
        <p className="ml-1 text-5xl sm:text-6xl text-start">center truck</p>
      </div>

      <div className="overflow-hidden">
        <div className="overflow-auto flex">
          <div className="overflow-x-auto scrollbar-hidden flex px-1 pt-1 pb-5 gap-4 font-bold">
            <Card
              title="DIGNÓSTICO & PESQUISA"
              description={["iniciado -", "10 a 20", "dias"]}
              year="acomanhe o andamento"
              where=""
              link="/acompanhe"
            />

            <Card
              title="parcelas & pagamentos"
              description={["R$"]}
              year="acompanhe suas parcelas"
              where=""
              link="/parcelas"
            />

            <Card
              title="detalhamento"
              description={["termos,", "valores,", "prazo."]}
              year="atualizado em 14•03•26"
              where="sp"
              link="/termos"
            />
          </div>
        </div>
      </div>

      <div className="relative h-10 w-full block sm:hidden">
        <ArrowRight
          className="absolute right-0 h-full text-secondary"
          strokeWidth={0.5}
        />
      </div>
    </main>
  );
}
