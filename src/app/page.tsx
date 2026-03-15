import Card from "@/components/card";

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
              title="acompanhe"
              description={["Diagnóstico ", "&", "Pesquisa"]}
              year="2026.03.16"
              where="br"
              link="/acompanhe"
            />

            <Card
              title="detalhamento"
              description={["termos,", "valores,", "prazo."]}
              year="2026.03.16"
              where="br"
              link="/termos"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
